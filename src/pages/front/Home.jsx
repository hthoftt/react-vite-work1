import { Link } from "react-router-dom";

function Home() {
  const type = [
    {
      id:1,
      img: "../../../public/hendrik-will-AP-29z0BTmA-unsplash.jpg",
      type: "油畫類",
      text: "厚重色彩層疊筆觸，展現深邃情感世界。",
    },
    {
      id:2,
      img: "../../../public/greg-rosenke-TMXIWZncTZU-unsplash.jpg",
      type: "水彩類",
      text: "透明暈染流動色彩，描繪柔和自然意境。",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row flex-md-row-reverse flex-column">
          <div className="col-md-6">
            <img
              src="../../../public/nina-neugebauer-x2KEtD9K8kA-unsplash.jpg"
              className="img-fluid"
              alt="素描類"
            />
            <div className="card-body p-0">
              <h4 className="mb-0 mt-4">素描類</h4>
              <div className="d-flex justify-content-between mt-3">
                <p className="card-text text-muted mb-0 w-75">
                  以線條與光影捕捉真實，展現純粹藝術美感。
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3">
            <h2 className="fw-bold">精選畫作 限量展售</h2>
            <h5 className="font-weight-normal text-muted mt-2">
              藝術，讓生活更有溫度。
            </h5>
          </div>
        </div>
        <div className="row mt-5">
          {type.map((item) => {
            return (
              <div className="col-md-6 mt-md-4" key={item.id}>
                <div className="card border-0 mb-4 position-relative position-relative">
                  <img
                    src={item.img}
                    className="card-img-top rounded-0"
                    alt={item.type}
                  />
                  <div className="card-body p-0">
                    <h4 className="mb-0 mt-4">{item.type}</h4>
                    <div className="d-flex justify-content-between mt-3">
                      <p className="card-text text-muted mb-0 w-75">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-light mt-7">
        <div className="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center py-7">
                  <div className="col-md-8 d-flex">
                    <img
                      src="https://images.unsplash.com/photo-1606228196200-1ed07169c7b1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="周芷柔照片"
                      className="rounded-circle me-5"
                      style={{
                        width: "160px",
                        height: "160px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="d-flex flex-column">
                      <p className="h5">
                        “從孤獨與浪漫中尋找靈感，以柔和筆觸描繪情感流動。相信每一幅作品都是心靈的映照，透過色彩傳遞溫暖，讓觀者在畫布中找到共鳴與慰藉。”
                      </p>
                      <p className="mt-auto text-muted">周芷柔</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-7">
        <div className="row">
          <div className="col-md-4">
            <img
              src="../../../public/2026-09-02 131128.jpg"
              alt="林雅婷照片"
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
              className="rounded-circle"
            />
            <h4 className="mt-4">
              林雅婷 <span className="h6">藝術愛好者</span>
            </h4>
            <p className="text-muted">
              這次線上畫展讓我不用出門就能欣賞到許多精彩的作品，購買流程也非常順暢，收到畫作時的質感超乎預期！
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="../../../public/2026-09-02 131152.jpg"
              alt="陳志豪照片"
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
              className="rounded-circle"
            />
            <h4 className="mt-4">
              陳志豪 <span className="h6">室內設計師</span>
            </h4>
            <p className="text-muted">
              作品包裝得很仔細，完全沒有損傷。能在家裡掛上自己喜歡的原創畫作，真的讓生活空間多了藝術氛圍。
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="../../../public/2026-09-02 131226.png"
              alt="王美玲照片"
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
              className="rounded-circle"
            />
            <h4 className="mt-4">
              王美玲 <span className="h6">收藏家</span>
            </h4>
            <p className="text-muted">
              客服回覆迅速，付款安全，配送也很快。這是我第一次在線上購買藝術品，體驗非常好，之後還會再回購。
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light py-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <h3>精選畫作 限量展售</h3>
              <p className="text-muted">藝術，讓生活更有溫度。</p>
              <Link className="btn btn-dark mt-4 rounded-0" to="/products">
                前往商品頁
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
