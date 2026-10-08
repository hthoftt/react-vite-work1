import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input } from "../../components/FormElement";
import { createAsyncMessage } from "../../slice/messageSlice";
import { api, getErrorData } from "../../api";

function CheckOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartData, getCartData } = useOutletContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const submit = async (data) => {
    const form = {
      data: {
        user: {
          name: data.name,
          email: data.email,
          tel: data.tel,
          address: data.address,
        },
        message: "",
      },
    };
    try {
      const res = await api.post("/order", form);
      getCartData(); // 下單後購物車已清空,更新右上角數量
      navigate(`/success/${res.data.orderId}`);
    } catch (err) {
      dispatch(createAsyncMessage(getErrorData(err)));
    }
  };

  return (
    <div className="bg-light pt-5 pb-7">
      <div className="container">
        <div className="row justify-content-center flex-md-row flex-column-reverse">
          <form className="col-md-6" onSubmit={handleSubmit(submit)}>
            <div className="bg-white p-4">
              <h4 className="fw-bold">外送資料</h4>
              <div className="mb-2">
                <Input
                  id="email"
                  type="email"
                  errors={errors}
                  labelText="使用者信箱"
                  register={register}
                  rules={{
                    required: "必填",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Email 格式不正確",
                    },
                  }}
                />
              </div>
              <div className="mb-2">
                <Input
                  id="name"
                  type="text"
                  errors={errors}
                  labelText="使用者名稱"
                  register={register}
                  rules={{
                    required: "必填",
                    maxLength: {
                      value: 10,
                      message: "使用者名稱長度不超過 10",
                    },
                  }}
                />
              </div>
              <div className="mb-2">
                <Input
                  id="tel"
                  type="tel"
                  errors={errors}
                  register={register}
                  labelText="連絡電話"
                  rules={{
                    required: "必填",
                    maxLength: {
                      value: 12,
                      message: "連絡電話長度不超過 12",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "連絡電話只能輸入數字",
                    },
                  }}
                />
              </div>
              <div className="mb-2">
                <Input
                  id="address"
                  type="address"
                  errors={errors}
                  register={register}
                  labelText="地址"
                  rules={{
                    required: "必填",
                    maxLength: {
                      value: 30,
                      message: "地址長度不超過 30",
                    },
                  }}
                />
              </div>
            </div>
            <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
              <Link className="text-dark mt-md-0 mt-3" to="/products">
                <i className="bi bi-chevron-left me-2"></i> 繼續選購
              </Link>
              <button
                type="submit"
                className="btn btn-dark py-3 px-7 rounded-0"
                disabled={isSubmitting || !cartData?.carts?.length}
              >
                {isSubmitting ? "送出中..." : "送出表單"}
              </button>
            </div>
          </form>
          <div className="col-md-4">
            <div className="border p-4 mb-4">
              <h4 className="mb-4">選購商品</h4>
              {cartData?.carts?.map((item) => {
                return (
                  <div className="d-flex" key={item.id}>
                    <img
                      src={item.product.imageUrl}
                      alt=""
                      className="me-2"
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="w-100">
                      <div className="d-flex justify-content-between fw-bold">
                        <p className="mb-0">{item.product.title}</p>
                        <p className="mb-0">x{item.qty}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted mb-0">
                          <small>NT$ {item.product.price}</small>
                        </p>
                        <p className="mb-0">NT$ {item.final_total}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="d-flex justify-content-between mt-4">
                <p className="mb-0 h4 fw-bold">Total</p>
                <p className="mb-0 h4 fw-bold">NT$ {cartData.final_total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
