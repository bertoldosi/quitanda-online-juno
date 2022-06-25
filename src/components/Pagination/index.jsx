function Pagination() {
  return (
    <div className="row">
      {/* <div className="col-12 col-md-5">
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
      </div> */}
      <div className="col-12">
        <div className="d-flex justify-content-end">
          <nav className="d-inline-block mx-2">
            <ul className="pagination pagination-sm my-0">
              <li className="page-item disabled">
                <a className="page-link" href="/#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  3
                </a>
              </li>
            </ul>
          </nav>
          <form className="d-inline-block">
            <select className="form-select form-select-sm">
              <option>Ordenar pelo nome</option>
              <option>Ordenar pelo menor preço</option>
              <option>Ordenar pelo maior preço</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
