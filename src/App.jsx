import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import FrontLayout from "./pages/front/FrontLayout";
import Home from "./pages/front/Home";
import Products from "./pages/front/Products";
import ProductDetail from "./pages/front/ProductDetail";
import Cart from "./pages/front/Cart";
import CheckOut from "./pages/front/ChcekOut";
import Success from "./pages/front/Success";

// 後台頁面拆開載入,前台訪客不用下載後台程式碼
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminProducts = lazy(() => import("./pages/admin/AdminProducts"));
const AdminCoupons = lazy(() => import("./pages/admin/AdminCoupons"));
const AdminOrders = lazy(() => import("./pages/admin/AdminOrders"));

function App() {
  return (
    <Suspense fallback={<Loading isLoading />}>
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="success/:orderId" element={<Success />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="products" element={<AdminProducts />} />
          <Route path="coupons" element={<AdminCoupons />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
