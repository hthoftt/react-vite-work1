import axios from "axios";
import { useState, useEffect, useContext } from "react";
import {
  MessageContext,
  handleErrorDispatch,
  handleSuccessDispatch,
} from "../store/mseeageStore";

function ProductModal({ closeProductModal, getProducts, type, tempProduct }) {
  const [isLoading, setIsLoading] = useState(false);
  // 取得token資訊
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("hexToken"))
    ?.split("=")[1];

  // 預設產品資訊為空值
  const [tempData, setTempData] = useState({
    title: "",
    category: "",
    origin_price: 100,
    price: 300,
    unit: "",
    description: "",
    content: "",
    is_enabled: 1,
    imageUrl: "",
  });

  // 用useContext傳遞MessageContext裡面的reducer值過來
  const [, dispatch] = useContext(MessageContext);

  // 判斷type是create還是edit並給予空值或當前值
  useEffect(() => {
    if (type === "create") {
      setTempData({
        title: "",
        category: "",
        origin_price: 100,
        price: 300,
        unit: "",
        description: "",
        content: "",
        is_enabled: 1,
        imageUrl: "",
      });
    } else if (type === "edit") {
      setTempData({ ...tempProduct });
    }
  }, [type, tempProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["price", "origin_price"].includes(name)) {
      setTempData({ ...tempData, [name]: Number(value) });
    } else if (name === "is_enabled") {
      setTempData({ ...tempData, [name]: +e.target.checked });
    } else {
      setTempData({ ...tempData, [name]: value });
    }
  };
  const submit = async () => {
    setIsLoading(true);
    try {
      let api = `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/product`;
      let method = "post";
      if (type === "edit") {
        api = `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/product/${tempProduct.id}`;
        method = "put";
      }
      const res = await axios[method](
        api,
        { data: tempData },
        {
          headers: { Authorization: token },
        },
      );
      handleSuccessDispatch(dispatch, type, res);
      closeProductModal(); // 關閉模組
      getProducts(); // 更新全部產品資訊
      setIsLoading(false);
    } catch (err) {
      handleErrorDispatch(dispatch, text);
      setIsLoading(false);
    }
  };

  const uploadFile = async (file) => {
    console.log(file);
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file-to-upload", file);

    try {
      const res = await axios.post(
        `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/upload`,
        formData,
        {
          headers: {
            authorization: token,
          },
        },
      );
      console.log(res);
      const { imageUrl } = res.data;
      setTempData({ ...tempData, imageUrl: imageUrl });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="productModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {type === "create" ? "建立新商品" : `編輯 ${tempData.title}`}
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeProductModal}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="image">
                    輸入圖片網址
                    <input
                      type="text"
                      name="imageUrl"
                      id="image"
                      placeholder="請輸入圖片連結"
                      className="form-control"
                      onChange={handleChange}
                      value={tempData.imageUrl}
                      disabled={isLoading}
                    />
                  </label>
                </div>
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="customFile">
                    或 上傳圖片
                    <input
                      type="file"
                      id="customFile"
                      className="form-control"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          uploadFile(file);
                        } else {
                          setTempData({ ...tempData, imageUrl: "" });
                        }
                      }}
                      disabled={isLoading}
                    />
                  </label>
                </div>
                {tempData.imageUrl && (
                  <img
                    src={tempData.imageUrl}
                    className="img-fluid"
                    style={{ width: "100%" }}
                    alt="商品圖片"
                  />
                )}
              </div>
              <div className="col-sm-8">
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="title">
                    標題
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="請輸入標題"
                      className="form-control"
                      onChange={handleChange}
                      value={tempData.title}
                      disabled={isLoading}
                    />
                  </label>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="category">
                      分類
                      <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="請輸入分類"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData.category}
                        disabled={isLoading}
                      />
                    </label>
                  </div>
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="unit">
                      單位
                      <input
                        type="unit"
                        id="unit"
                        name="unit"
                        placeholder="請輸入單位"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData.unit}
                        disabled={isLoading}
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="origin_price">
                      原價
                      <input
                        type="number"
                        id="origin_price"
                        name="origin_price"
                        placeholder="請輸入原價"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData.origin_price}
                        disabled={isLoading}
                      />
                    </label>
                  </div>
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="price">
                      售價
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="請輸入售價"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData.price}
                        disabled={isLoading}
                      />
                    </label>
                  </div>
                </div>
                <hr />
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="description">
                    產品描述
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      placeholder="請輸入產品描述"
                      className="form-control"
                      onChange={handleChange}
                      value={tempData.description}
                      disabled={isLoading}
                    />
                  </label>
                </div>
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="content">
                    說明內容
                    <textarea
                      type="text"
                      id="content"
                      name="content"
                      placeholder="請輸入產品說明內容"
                      className="form-control"
                      onChange={handleChange}
                      value={tempData.content}
                      disabled={isLoading}
                    />
                  </label>
                </div>
                <div className="form-group mb-2">
                  <div className="form-check">
                    <label
                      className="w-100 form-check-label"
                      htmlFor="is_enabled"
                    >
                      是否啟用
                      <input
                        type="checkbox"
                        id="is_enabled"
                        name="is_enabled"
                        placeholder="請輸入產品說明內容"
                        className="form-check-input"
                        onChange={handleChange}
                        checked={!!tempData.is_enabled}
                        disabled={isLoading}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeProductModal}
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

export default ProductModal;
