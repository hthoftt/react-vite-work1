import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAsyncMessage } from "../../slice/messageSlice";
import axios from "axios";

function Cart() {
  const dispatch = useDispatch();

  const { cartData, getCartData } = useOutletContext();
  const [loadingItems, setLoadingItems] = useState(false);

  // 刪除單一品項
  const deleteCart = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart/${id}`,
      );
      console.log(res);
      getCartData();
    } catch (err) {
      console.error(err.response);
    }
  };
  // 清空購物車
  const clearCartData = async () => {
    try {
      const res = await axios.delete(
        `/v2/api/${import.meta.env.VITE_APP_API_PATH}/carts`,
      );
      console.log(res);
      getCartData();
    } catch (err) {
      console.error(err.response);
    }
  };
  // 更新商品數量
  const updateCart = async (item, qty) => {
    const data = {
      data: {
        product_id: item.product_id,
        qty: qty,
      },
    };
    setLoadingItems(true);
    try {
      const res = await axios.put(
        `/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart/${item.id}`,
        data,
      );
      setLoadingItems(false);
      console.log(res);
      getCartData();
      dispatch(createAsyncMessage(res.data));
    } catch (err) {
      console.error(err.response);
      dispatch(createAsyncMessage(err.response.data));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-md-6 bg-white py-5"
          style={{ minHeight: "calc(100vh - 56px - 76px)" }}
        >
          <div className="d-flex justify-content-between">
            <h2 className="mt-2">購物車</h2>
            <button type="button" className="btn" onClick={clearCartData}>
              清空購物車
            </button>
          </div>
          {cartData?.carts?.map((item) => {
            return (
              <div className="d-flex mt-4 bg-light" key={item.id}>
                <img
                  src={item.product.imageUrl}
                  alt=""
                  className="obj-cover"
                  style={{
                    width: "150px",
                  }}
                />
                <div className="w-100 p-3 position-relative">
                  <button
                    type="button"
                    className="position-absolute btn"
                    style={{ top: "0px", right: "0px" }}
                    onClick={() => deleteCart(item.id)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                  <Link
                    className="mb-0 fw-bold"
                    to={`/products/${item.product.id}`}
                  >
                    {item.product.title}
                  </Link>
                  <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>
                    {item.product.content}
                  </p>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="input-group w-50 align-items-center">
                      <select
                        name=""
                        id=""
                        className="form-select"
                        value={item.qty}
                        disabled={loadingItems}
                        onChange={(e) => {
                          updateCart(item, e.target.value * 1);
                        }}
                      >
                        {[...new Array(10)].map((i, num) => {
                          return (
                            <option value={num + 1} key={num}>
                              {num + 1}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <p className="mb-0 ms-auto">NT$ {item.final_total}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-content-between mt-4">
            <p className="mb-0 h4 fw-bold">總金額</p>
            <p className="mb-0 h4 fw-bold">NT$ {cartData.final_total}</p>
          </div>
          <Link
            type="button"
            className="btn btn-dark w-100 mt-4 rounded-0 py-3"
            to={`/checkout`}
          >
            確認購物車正確
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
