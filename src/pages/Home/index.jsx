/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";

import slider01 from "../../assets/img/slides/slide01.jpg";
import slider01Small from "../../assets/img/slides/slide01small.jpg";
import produto01 from "../../assets/img/produtos/000001.jpg";
import gerarToken from "../../api/gerarToken";

function Home() {
  useEffect(() => {
    gerarToken();
  }, []);
  return (
    <>
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

      <main className="flex-fill">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite aqui o que procura"
                  />
                  <button className="btn btn-danger">Buscar</button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-7">
              <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                <form className="d-inline-block">
                  <select className="form-select form-select-sm">
                    <option>Ordenar pelo nome</option>
                    <option>Ordenar pelo menor preço</option>
                    <option>Ordenar pelo maior preço</option>
                  </select>
                </form>
                <nav className="d-inline-block me-3">
                  <ul className="pagination pagination-sm my-0">
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        2
                      </a>
                    </li>
                    <li className="page-item disabled">
                      <a className="page-link" href="/#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        6
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <hr className="mt-3" />

          <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card text-center bg-light">
                <a
                  href="/#"
                  className="position-absolute end-0 p-2 text-danger"
                >
                  <i
                    className="bi-suit-heart"
                    style={{ fontSize: "24px", lineHeight: "24px" }}
                  ></i>
                </a>
                <a href="/produto">
                  <img src={produto01} className="card-img-top" />
                </a>
                <div className="card-header">R$ 4,50</div>
                <div className="card-body">
                  <h5 className="card-title">Banana Prata</h5>
                  <p className="card-text truncar-3l">
                    Banana prata da melhor qualidade possível, direto do
                    produtor rural para a sua mesa.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="/carrinho" className="btn btn-danger mt-2 d-block">
                    Adicionar ao Carrinho
                  </a>
                  <small className="text-success">320,5kg em estoque</small>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card text-center bg-light">
                <a
                  href="/#"
                  className="position-absolute end-0 p-2 text-danger"
                >
                  <i
                    className="bi-suit-heart"
                    style={{ fontSize: "24px", lineHeight: "24px" }}
                  ></i>
                </a>
                <img src={produto01} className="card-img-top" />
                <div className="card-header">R$ 4,50</div>
                <div className="card-body">
                  <h5 className="card-title">Banana Prata</h5>
                  <p className="card-text truncar-3l">
                    Banana prata da melhor qualidade possível, direto do
                    produtor rural para a sua mesa.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="/#" className="btn btn-light disabled mt-2 d-block">
                    <small>Reabastecendo Estoque</small>
                  </a>
                  <small className="text-danger">
                    <b>Produto Esgotado</b>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-3" />

          <div className="row pb-3">
            <div className="col-12">
              <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                <form className="d-inline-block">
                  <select className="form-select form-select-sm">
                    <option>Ordenar pelo nome</option>
                    <option>Ordenar pelo menor preço</option>
                    <option>Ordenar pelo maior preço</option>
                  </select>
                </form>
                <nav className="d-inline-block me-3">
                  <ul className="pagination pagination-sm my-0">
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        2
                      </a>
                    </li>
                    <li className="page-item disabled">
                      <a className="page-link" href="/#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        6
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
