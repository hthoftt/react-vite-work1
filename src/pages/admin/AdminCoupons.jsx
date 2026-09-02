import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import axios from "axios";
import CouponModal from "../../components/CouponModal";
import DeleteModal from "../../components/DeleteModal";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

function AdminCoupons() {
  const [coupons, setCoupons] = useState([]); //存所有產品資訊
  const [pagination, setPagination] = useState({}); //存分頁
  // type: 決定modal展開的用途
  const [type, setType] = useState("create"); //判斷create或edit
  const [tempProduct, setTempProduct] = useState({}); //存目前點擊的產品
  const couponModal = useRef(null); // 商品模板開關
  const deleteModal = useRef(null); // 刪除模板開關
  const [isLoading, setLoading] = useState(false);

  const getCoupons = async (page = 1) => {
    setLoading(true);
    const res = await axios.get(
      `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/coupons?page=${page}`,
    ); // 拿資訊
    console.log(res);
    setCoupons(res.data.coupons); //存產品
    setPagination(res.data.pagination); //存分頁
    setLoading(false);
  };

  // 進入頁面就會取得資料
  useEffect(() => {
    couponModal.current = new Modal("#couponModal", { backdrop: "static" });
    deleteModal.current = new Modal("#deleteModal", { backdrop: "static" });
    getCoupons();
  }, []);

  // 打開商品模板
  const openCouponModal = (type, item) => {
    setType(type); //存create或edit
    setTempProduct(item); //存目前點擊的產品
    couponModal.current.show();
  };

  // 關閉商品模板
  const closeModal = () => {
    couponModal.current.hide();
  };

  // 開啟刪除商品模板
  const openDeleteModal = (product) => {
    setTempProduct(product); //存目前點擊的產品
    deleteModal.current.show();
  };

  // 關閉刪除商品模板
  const closeDeleteModal = () => {
    deleteModal.current.hide();
  };

  // 取得token資訊
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("hexToken"))
    ?.split("=")[1];

  // 刪除產品
  const deleteCoupon = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/coupon/${id}`,
        {
          headers: { Authorization: token },
        },
      );
      if (res.data.success === true) {
        getCoupons();
        closeDeleteModal();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-3">
      <Loading isLoading={isLoading} />
      <CouponModal
        closeModal={closeModal}
        getCoupons={getCoupons}
        tempCoupon={tempProduct}
        type={type}
      />
      <DeleteModal
        closeDeleteModal={closeDeleteModal}
        text={tempProduct.title}
        deleteItem={deleteCoupon}
        id={tempProduct.id}
      />
      <h3>優惠卷列表</h3>
      <hr />
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => openCouponModal("create", {})}
        >
          建立新優惠券
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">標題</th>
            <th scope="col">折扣</th>
            <th scope="col">到期日</th>
            <th scope="col">優惠碼</th>
            <th scope="col">啟用狀態</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.percent}</td>
                <td>{new Date(product.due_date).toDateString()}</td>
                <td>{product.code}</td>
                <td>{product.is_enabled ? "啟用" : "未啟用"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => openCouponModal("edit", product)}
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm ms-2"
                    onClick={() => openDeleteModal(product)}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination pagination={pagination} getProducts={getCoupons} />
    </div>
  );
}

export default AdminCoupons;
