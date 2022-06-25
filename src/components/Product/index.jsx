import { Link } from "react-router-dom";
import { formartMoney } from "../../helpers";

function Product({ produto }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="card bg-light">
        <a href="/#" className="position-absolute end-0 p-2 text-danger">
          <i className="bi-suit-heart h5"></i>
        </a>
        <Link to={`/descricao/${produto?.id}`}>
          <img
            src={produto?.imagem?.url}
            className="card-img-top"
            alt="imagem de produtos"
          />
        </Link>
      </div>

      <div className="card-body px-0 py-2">
        <h6 className="card-title mb-2">{produto?.nome}</h6>
        <h6 className="card-subtitle mb-2 text-muted">
          {formartMoney(produto?.preco)}
        </h6>
      </div>
    </div>
  );
}

export default Product;
