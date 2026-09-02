import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import axios from "axios";
import OrderModal from "../../components/OrderModal";
import DeleteModal from "../../components/DeleteModal";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

function AdminOrders() {
  const [orders, setOrders] = useState([]); //存所有產品資訊
  const [pagination, setPagination] = useState({}); //存分頁
  const [tempOrder, setTempOrder] = useState({}); //存目前點擊的產品
  const ordersModal = useRef(null); // 商品模板開關
  const deleteModal = useRef(null); // 刪除模板開關
  const [isLoading, setLoading] = useState(false);

  const getOrders = async (page = 1) => {
    setLoading(true);
    const res = await axios.get(
      `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/orders?page=${page}`,
    ); // 拿資訊
    console.log("order:", res);
    setOrders(res.data.orders); //存產品
    setPagination(res.data.pagination); //存分頁
    setLoading(false);
  };

  // 進入頁面就會取得資料
  useEffect(() => {
    ordersModal.current = new Modal("#orderModal", { backdrop: "static" });
    deleteModal.current = new Modal("#deleteModal", { backdrop: "static" });

    getOrders();
  }, []);

  // 打開商品模板
  const openOrderModal = (item) => {
    setTempOrder(item); //存目前點擊的產品
    ordersModal.current.show();
  };

  // 關閉商品模板
  const closeModal = () => {
    ordersModal.current.hide();
  };

  // 開啟刪除商品模板
  const openDeleteModal = (item) => {
    setTempOrder(item); //存目前點擊的產品
    deleteModal.current.show();
  };

  // 關閉刪除商品模板
  const closeDeleteModal = () => {
    deleteModal.current.hide();
  };

  const deleteOrder = async () => {
    try {
      const res = await axios.delete(
        `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/order/${tempOrder.id}`,
      );
      console.log(res);
      setLoading(false);
      getOrders();
      closeDeleteModal();
    } catch (err) {
      console.error(err.response);
      closeDeleteModal();
      setLoading(false);
    }
  };

  return (
    <div className="p-3">
      <Loading isLoading={isLoading} />
      <OrderModal
        closeModal={closeModal}
        getOrders={getOrders}
        tempOrder={tempOrder}
      />
      <DeleteModal
        closeDeleteModal={closeDeleteModal}
        deleteItem={deleteOrder}
        text={tempOrder.title}
        id={tempOrder.id}
      />
      <h3>訂單列表</h3>
      <hr />
      <div className="text-end"></div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">訂單 id</th>
            <th scope="col">購買用戶</th>
            <th scope="col">訂單金額</th>
            <th scope="col">付款狀態</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => {
            return (
              <tr key={i}>
                <td>{order.id}</td>
                <td>
                  {order.user?.name}
                  {order.user?.email}
                </td>
                <td>{order.total}</td>
                <td>
                  {order.is_paid ? (
                    <span className="text-success fw-bold">付款完成</span>
                  ) : (
                    "未付款"
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => openOrderModal(order)}
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm ms-2"
                    onClick={() => openDeleteModal(order)}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination pagination={pagination} getProducts={getOrders} />
    </div>
  );
}

export default AdminOrders;
