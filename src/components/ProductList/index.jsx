import Pagination from "../Pagination";
import Product from "../Product";

function ProductList({ produtos }) {
  return (
    <main className="flex-fill">
      <div className="container">
        <Pagination />

        <hr className="mt-3" />

        <div className="row g-3">
          {produtos?.map((produto) => (
            <Product produto={produto} key={produto.id} />
          ))}
        </div>

        <hr className="mt-3" />
      </div>
    </main>
  );
}

export default ProductList;
