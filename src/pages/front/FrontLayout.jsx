import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import MessageToast from "../../components/MessageToast";

function FrontLayout() {
  const [cartData, setCartData] = useState({});

  const getCartData = async () => {
    try {
      const res = await axios.get(
        `/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart`,
      );
      // console.log("購物車:", res.data.data);
      setCartData(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <>
      <Navbar cartData={cartData} />
      <MessageToast />
      <Outlet context={{ cartData, getCartData }}></Outlet>
      <div className="bg-dark">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between text-white py-4">
            <p className="mb-0">
              © 2026 hthoftt All Rights Reserved. |{" "}
              <Link href="/privacy">Privacy Policy</Link>
            </p>
            <ul className="d-flex list-unstyled mb-0 h4">
              <li>
                <Link
                  className="text-white mx-3"
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white mx-3"
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <i className="bi bi-instagram"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white ms-3"
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <i className="bi bi-line"></i>
                </Link>
              </li>
            </ul>
            <Link className="nav-link ps-0" to="/login">
              後台登入
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontLayout;
