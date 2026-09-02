import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./stulesheets/all.scss";
import App from "./App.jsx";
import axios from "axios";
import { store } from "./store.jsx";
import { Provider } from "react-redux";
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL; //axios預設

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  // </StrictMode>,
);
