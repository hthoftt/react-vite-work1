import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useReducer } from "react";
import Message from "../../components/Message";
import axios from "axios";
import {
  MessageContext,
  messageReducer,
  initState,
} from "../../store/mseeageStore";

function Dashboard() {
  // 切換頁面
  const navigate = useNavigate();
  // reducer
  const reducer = useReducer(messageReducer, initState);

  // 登出,清空hexToken並跳回登入畫面
  const logout = () => {
    document.cookie = "hexToken=;";
    navigate("/");
  };

  // 取出 Token
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("hexToken"))
    ?.split("=")[1];
  axios.defaults.headers.common["Authorization"] = token;

  useEffect(() => {
    // 判斷是否有token,沒有就跳回登入畫面
    if (!token) {
      return navigate("/");
    }
    // 判斷token是否有效,無效就跳回登入畫面
    (async () => {
      try {
        await axios.post(
          "/v2/api/user/check",
          {},
          {
            headers: { Authorization: token },
          },
        );
      } catch (err) {
        if (err.response) {
          console.error("伺服器錯誤:", err.response?.data?.message);
          if (!err.response.data.success) {
            navigate("/");
          }
        } else {
          console.error("網路錯誤:", err.message);
          navigate("/");
        }
      }
    })();
  }, [navigate, token]);

  return (
    <MessageContext.Provider value={reducer}>
      <Message />
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <p className="text-white mb-0">HEX EATS 後台管理系統</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sm btn-light"
                  onClick={logout}
                >
                  登出
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex" style={{ minHeight: "calc(100vh - 56px)" }}>
        <div className="bg-light" style={{ width: "200px" }}>
          <ul className="list-group list-group-flush">
            <NavLink
              className="list-group-item list-group-item-action py-3"
              to="/admin/products"
            >
              <i className="bi bi-cup-fill me-2" />
              產品列表
            </NavLink>
            <NavLink
              className="list-group-item list-group-item-action py-3"
              to="/admin/coupons"
            >
              <i className="bi bi-ticket-perforated-fill me-2" />
              優惠卷列表
            </NavLink>
            <NavLink
              className="list-group-item list-group-item-action py-3"
              to="/admin/orders"
            >
              <i className="bi bi-receipt me-2" />
              訂單列表
            </NavLink>
          </ul>
        </div>
        <div className="w-100">{token && <Outlet />}</div>
      </div>
    </MessageContext.Provider>
  );
}

export default Dashboard;
