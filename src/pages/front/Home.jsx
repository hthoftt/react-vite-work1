import { Link } from "react-router-dom";

function Home() {
  const type = [
    {
      id: 2,
      img: "./paint2.jpg",
      text: "厚重色彩層疊筆觸，展現深邃情感世界。",
    },
    {
      id: 3,
      img: "./paint3.jpg",
      text: "透明暈染流動色彩，描繪柔和自然意境。",
    },
  ];
  const feedback = [
    {
      id: 1,
      img: "./woman1.jpg",
      name: "林雅婷",
      job: "藝術愛好者",
      text: "這次線上畫展讓我不用出門就能欣賞到許多精彩的作品，購買流程也非常順暢，收到畫作時的質感超乎預期！",
    },
    {
      id: 2,
      img: "./men.jpg",
      name: "陳志豪",
      job: "室內設計師",
      text: "作品包裝得很仔細，完全沒有損傷。能在家裡掛上自己喜歡的原創畫作，真的讓生活空間多了藝術氛圍。",
    },
    {
      id: 3,
      img: "./woman2.png",
      name: "王美玲",
      job: "收藏家",
      text: "客服回覆迅速，付款安全，配送也很快。這是我第一次在線上購買藝術品，體驗非常好，之後還會再回購。",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row flex-md-row-reverse flex-column">
          <div className="col-md-6">
            <img src="./paint1.jpg" className="img-fluid" alt="圖片" />
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
                    alt="圖片"
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
                      alt="圖片"
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
          {feedback.map((num) => {
            return (
              <div className="col-md-4" key={num.id}>
                <img
                  src={num.img}
                  alt="圖片"
                  style={{
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                  }}
                  className="rounded-circle"
                />
                <h4 className="mt-4">
                  {num.name} <span className="h6">{num.job}</span>
                </h4>
                <p className="text-muted">{num.text}</p>
              </div>
            );
          })}
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
