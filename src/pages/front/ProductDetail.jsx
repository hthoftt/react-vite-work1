import { useEffect, useState } from "react";
import {
  useOutletContext,
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import { createAsyncMessage } from "../../slice/messageSlice";
import { api, getErrorData } from "../../api";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [cartQuantity, setCartQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { getCartData } = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = async () => {
    const data = {
      data: {
        product_id: product.id,
        qty: cartQuantity,
      },
    };
    setIsLoading(true);
    try {
      const res = await api.post("/cart", data);
      dispatch(createAsyncMessage(res.data));
      getCartData();
      // 加入成功後回到商品頁
      navigate("/products");
    } catch (err) {
      dispatch(createAsyncMessage(getErrorData(err)));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const res = await api.get(`/product/${id}`);
        setProduct(res.data.product);
      } catch (err) {
        dispatch(createAsyncMessage(getErrorData(err)));
      } finally {
        setIsLoading(false);
      }
    };
    getProduct();
  }, [id, dispatch]);

  return (
    <div className="container">
      <Loading isLoading={isLoading} />
      <div
        style={{
          minHeight: "400px",
          backgroundImage: product.imageUrl ? `url(${product.imageUrl})` : "",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="row justify-content-between mt-4 mb-5">
        <div className="col-md-7">
          <h2 className="mb-0">{product.title}</h2>
          <p className="fw-bold">NT$ {product.price}</p>
          <p>{product.description}</p>
          <div className="my-4">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="img-fluid mt-4"
              />
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3 border mt-3">
            <button
              className="btn btn-outline-dark rounded-0 border-0 py-3"
              type="button"
              aria-label="減少數量"
              onClick={() => setCartQuantity((pre) => Math.max(1, pre - 1))}
              disabled={cartQuantity === 1}
            >
              <i className="bi bi-dash"></i>
            </button>
            <input
              type="number"
              className="form-control border-0 text-center my-auto shadow-none"
              aria-label="數量"
              readOnly
              value={cartQuantity}
            />
            <button
              className="btn btn-outline-dark rounded-0 border-0 py-3"
              type="button"
              aria-label="增加數量"
              onClick={() => setCartQuantity((pre) => pre + 1)}
            >
              <i className="bi bi-plus"></i>
            </button>
          </div>
          <button
            type="button"
            className="btn btn-dark w-100 rounded-0 py-3"
            onClick={addToCart}
            disabled={isLoading || !product.id}
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
