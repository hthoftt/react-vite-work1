import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

function Products() {
  const [products, setProducts] = useState([]); // 存所有資料
  const [pagination, setPagination] = useState({}); // 存分頁
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async (page = 1) => {
    setIsLoading(true);
    const res = await axios.get(
      `/v2/api/${import.meta.env.VITE_APP_API_PATH}/products?page=${page}`,
    );
    setProducts(res.data.products);
    setPagination(res.data.pagination);
    console.log("所有商品:", res);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container mt-md-5 mt-3 mb-7">
        <Loading isLoading={isLoading} />
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3" key={product.id}>
                <div className="card border-0 mb-4 position-relative position-relative">
                  {product.imageUrl === "" ? (
                    <div
                      style={{
                        backgroundColor: "gray",
                        height: "250px",
                      }}
                    />
                  ) : (
                    <img
                      src={product.imageUrl}
                      style={{
                        height: "250px",
                      }}
                      className="card-img-top rounded-0 obj-cover"
                      alt="商品圖片"
                    />
                  )}
                  <div className="card-body p-0">
                    <h4 className="mb-0 mt-3 ">
                      <Link
                        to={`/products/${product.id}`}
                        className="text-warning"
                      >
                        {product.title} {`(${product.category})`}
                      </Link>
                    </h4>
                    <p className="text-muted mt-3">NT$ {product.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination pagination={pagination} getProducts={getProducts} />
      </div>
    </>
  );
}

export default Products;
