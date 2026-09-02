import axios from "axios";
import { useState, useEffect, useContext } from "react";
import {
  MessageContext,
  handleErrorDispatch,
  handleSuccessDispatch,
} from "../store/mseeageStore";

function CouponModal({ closeModal, getCoupons, type, tempCoupon }) {
  const [isLoading, setIsLoading] = useState(false);
  // 預設產品資訊為空值
  const [tempData, setTempData] = useState({
    title: "",
    is_enabled: 1,
    percent: 80,
    due_date: 1555459200,
    code: "testCode",
  });

  const [, dispatch] = useContext(MessageContext);

  // 取得token資訊
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("hexToken"))
    ?.split("=")[1];

  // 建立時間
  const [date, setDate] = useState(new Date());

  // 判斷type是create還是edit並給予空值或當前值
  useEffect(() => {
    if (type === "create") {
      setTempData({
        title: "",
        is_enabled: 1,
        percent: 80,
        due_date: 1555459200,
        code: "testCode",
      });
      setDate(new Date());
    } else if (type === "edit") {
      setTempData({ ...tempCoupon });
      setDate(new Date(tempCoupon.due_date));
    }
  }, [type, tempCoupon]);

  // 存取輸入的值,並依不同name給予不同型別
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["percent"].includes(name)) {
      setTempData({ ...tempData, [name]: Number(value) });
    } else if (name === "is_enabled") {
      setTempData({ ...tempData, [name]: +e.target.checked });
    } else {
      setTempData({ ...tempData, [name]: value });
    }
  };

  // 送出,送出資料給api
  const submit = async () => {
    setIsLoading(true);
    try {
      let api = `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/coupon`;
      let method = "post";
      if (type === "edit") {
        api = `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/coupon/${tempCoupon.id}`;
        method = "put";
      }
      const res = await axios[method](
        api,
        { data: { ...tempData, due_date: date.getTime() } },
        {
          headers: { Authorization: token },
        },
      );
      // console.log(res);
      closeModal(); // 關閉模組
      getCoupons(); // 更新全部產品資訊
      handleSuccessDispatch(dispatch, type, res);
      setIsLoading(false);
    } catch (err) {
      handleErrorDispatch(dispatch, text);
      setIsLoading(false);
    }
  };
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="couponModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {type === "create" ? "建立新優惠券" : `編輯 ${tempData.title}`}
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-2">
              <label className="w-100" htmlFor="title">
                標題
                <input
                  type="text"
                  id="title"
                  placeholder="請輸入標題"
                  name="title"
                  className="form-control mt-1"
                  value={tempData.title}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </label>
            </div>
            <div className="row">
              <div className="col-md-6 mb-2">
                <label className="w-100" htmlFor="percent">
                  折扣（%）
                  <input
                    type="text"
                    name="percent"
                    id="percent"
                    placeholder="請輸入折扣（%）"
                    className="form-control mt-1"
                    value={tempData.percent}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </label>
              </div>
              <div className="col-md-6 mb-2">
                <label className="w-100" htmlFor="due_date">
                  到期日
                  <input
                    type="date"
                    id="due_date"
                    name="due_date"
                    placeholder="請輸入到期日"
                    className="form-control mt-1"
                    value={date.toISOString().split("T")[0]}
                    onChange={(e) => setDate(new Date(e.target.value))}
                    disabled={isLoading}
                  />
                </label>
              </div>
              <div className="col-md-6 mb-2">
                <label className="w-100" htmlFor="code">
                  優惠碼
                  <input
                    type="text"
                    id="code"
                    name="code"
                    placeholder="請輸入優惠碼"
                    className="form-control mt-1"
                    value={tempData.code}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </label>
              </div>
            </div>
            <label className="form-check-label" htmlFor="is_enabled">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="is_enabled"
                name="is_enabled"
                checked={!!tempData.is_enabled}
                onChange={handleChange}
                disabled={isLoading}
              />
              是否啟用
            </label>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
              disabled={isLoading}
            >
              關閉
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={submit}
              disabled={isLoading}
            >
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouponModal;
