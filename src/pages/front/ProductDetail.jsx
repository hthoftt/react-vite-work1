import { useEffect, useState } from "react";
import { useOutletContext, useParams,Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import { createAsyncMessage } from "../../slice/messageSlice";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { getCartData } = useOutletContext();
  const dispatch = useDispatch();

  const getProduct = async (id) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `/v2/api/${import.meta.env.VITE_APP_API_PATH}/product/${id}`,
      );
      console.log("單一商品:", res.data.product);
      setProduct(res.data.product);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async () => {
    const data = {
      data: {
        product_id: product.id,
        qty: cartQuantity,
      },
    };
    setIsLoading(true);
    try {
      const res = await axios.post(
        `/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart`,
        data,
      );
      console.log("加入購物車:", res);
      dispatch(createAsyncMessage(res.data));
      setIsLoading(false);
      getCartData();
    } catch (err) {
      console.error(err.response);
      setIsLoading(false);
      dispatch(createAsyncMessage(err.response.data));
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <div className="container">
      <Loading isLoading={isLoading} />
      <div
        style={{
          minHeight: "400px",
          backgroundImage: `url(${product.imageUrl})`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="row justify-content-between mt-4 mb-5">
        <div className="col-md-7">
          <h2 className="mb-0">{product.title}</h2>
          <p className="fw-bold">NT$ {product.price}</p>
          <p>{product.description}</p>
          <div className="my-4">
            <img src={product.imageUrl} alt="" className="img-fluid mt-4" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3 border mt-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-dark rounded-0 border-0 py-3"
                type="button"
                id="button-addon1"
              >
                <i
                  className="bi bi-plus"
                  onClick={() => setCartQuantity((pre) => pre + 1)}
                ></i>
              </button>
            </div>
            <input
              type="number"
              className="form-control border-0 text-center my-auto shadow-none"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              readOnly
              value={cartQuantity}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-dark rounded-0 border-0 py-3"
                type="button"
                id="button-addon2"
              >
                <i
                  className="bi bi-dash"
                  onClick={() =>
                    setCartQuantity((pre) => (pre === 1 ? pre : pre - 1))
                  }
                ></i>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-dark btn-block w-100 rounded-0 py-3"
            onClick={addToCart}
            disabled={isLoading}
          >
            加入購物車
          </button>
        </div>
      </div>
        <Link className="btn btn-dark mb-7 rounded-0" to="/products">
          前往商品頁
        </Link>
    </div>
  );
}

export default ProductDetail;
