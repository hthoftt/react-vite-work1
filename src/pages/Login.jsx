import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getErrorData } from "../api";

function Login() {
  // 登入狀態
  const [loginState, setLoginState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // 切換登入成功後畫面
  const navigate = useNavigate();
  // 建立帳號密碼
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  // 讀取帳號密碼
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // 送出帳號密碼 (用 form submit,按 Enter 也會送出)
  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("/v2/admin/signin", data);
      const { token, expired } = res.data;
      // 儲存 Token,於指定時間後自動失效
      document.cookie = `hexToken=${token}; expires=${new Date(expired).toUTCString()};`;
      if (res.data.success) {
        navigate("/admin/products");
      }
    } catch (error) {
      setLoginState(getErrorData(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <form className="col-md-6" onSubmit={submit}>
          <h2>登入帳號</h2>
          <div
            className={`alert alert-danger ${loginState.message ? "d-block" : "d-none"}`}
            role="alert"
          >
            {loginState.message}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label w-100">
              Email
              <input
                id="email"
                className="form-control"
                name="username"
                value={data.username}
                type="email"
                autoComplete="username"
                placeholder="name@example.com"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label w-100">
              密碼
              <input
                type="password"
                className="form-control"
                name="password"
                value={data.password}
                id="password"
                autoComplete="current-password"
                placeholder="請輸入密碼"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            登入
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
