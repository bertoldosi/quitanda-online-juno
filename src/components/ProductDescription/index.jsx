import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { formartMoney } from "../../helpers";
import Loading from "../Loading";

const GET_PRODUTO_INFO = gql`
  query GetProdutoInfo($id: ID) {
    produto(where: { id: $id }) {
      nome
      preco
      id
      imagem {
        url
      }
      descricao
    }
  }
`;

function ProductDescription() {
  const { id } = useParams();

  const { data } = useQuery(GET_PRODUTO_INFO, {
    variables: {
      id,
    },
  });

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="d-flex justify-content-center flex-column flex-sm-column flex-md-row">
      <div className={`card mt-4 ${styles.ContentImage}`}>
        <img
          className="img-fluid"
          src={data?.produto.imagem.url}
          alt="Product img"
        />
      </div>

      <div className={`card border-0 ${styles.ProductInfo}`}>
        <div className="card-body px-0 px-md-4">
          <h5 className="card-title mb-0">{data?.produto.nome}</h5>
          <span className="card-subtitle text-muted my-0">
            SKU: {data?.produto.id}
          </span>
          <h3 className="card-subtitle text-muted my-3">
            {formartMoney(data?.produto.preco)}
          </h3>

          <div className="col-2 mb-3 input-group-sm">
            <label htmlFor="qtd">Quantidade</label>
            <input
              type="number"
              className="form-control text-center"
              id="qtd"
              name="qtd"
            />
          </div>

          <button
            type="button"
            className="btn btn-danger btn-lg btn-block w-100 mt-2"
          >
            Adicionar ao carrinho
          </button>

          <div className="card border-0 my-3">
            <div className="card-body px-0">
              <h5 className="card-title">Descrição</h5>
              <p className="card-text h6">{data?.produto.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
