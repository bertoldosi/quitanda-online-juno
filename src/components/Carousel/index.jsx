import slider01 from "../../assets/img/slides/slide01.jpg";
import slider01Small from "../../assets/img/slides/slide01small.jpg";

function Carousel() {
  return (
    <div className="container">
      <div
        id="carouselMain"
        className="carousel slide carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselMain"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselMain"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselMain"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={slider01} className="d-none d-md-block w-100" alt="" />
            <img
              src={slider01Small}
              className="d-block d-md-none  w-100"
              alt=""
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={slider01} className="d-none d-md-block w-100" alt="" />
            <img
              src={slider01Small}
              className="d-block d-md-none  w-100"
              alt=""
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={slider01} className="d-none d-md-block w-100" alt="" />
            <img
              src={slider01Small}
              className="d-block d-md-none  w-100"
              alt=""
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMain"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselMain"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
      <hr className="mt-3" />
    </div>
  );
}

export default Carousel;
