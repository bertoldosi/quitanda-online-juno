import React from "react";

function Header() {
  return (
    <>
      <nav
        className="
          navbar navbar-expand-lg navbar-dark
          bg-danger
          border-bottom
          shadow-sm
          mb-3
        "
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <b>Quitanda Online</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Principal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/sobre">
                  Quem somos
                </a>
              </li>
            </ul>

            <div className="align-self-end mx-1">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span
                    className="
                      badge
                      rounded-pill
                      bg-light
                      text-danger
                      position-absolute
                      ms-4
                      mt-0
                    "
                    title="5 produto(s) na lista de desejo"
                  >
                    <small>5</small>
                  </span>
                  <a className="nav-link text-white" href="/desejo">
                    <i className="bi bi-suit-heart h5"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="align-self-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span
                    className="
                      badge
                      rounded-pill
                      bg-light
                      text-danger
                      position-absolute
                      ms-4
                      mt-0
                    "
                    title="5 produto(s) no carrinho"
                  >
                    <small>5</small>
                  </span>
                  <a className="nav-link text-white" href="/carrinho">
                    <i className="bi-cart h5"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
