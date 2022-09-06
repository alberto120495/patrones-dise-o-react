import Product from "./Product";
import { filterItems } from "../utils";

function ProductList({ query, dataset }) {
  const items = filterItems(query, dataset);
  return (
    <div>
      {items.map((product) => (
        <Product key={product.id} title={product.title} id={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
