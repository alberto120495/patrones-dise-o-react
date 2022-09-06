import Todo from "./Todo";
import { filterItems } from "../utils";

function ProductList({ query, dataset }) {
  const items = filterItems(query, dataset);
  return (
    <div>
      {items.map((product) => (
        <Todo
          key={product.id}
          title={product.title}
          completed={product.completed}
        />
      ))}
    </div>
  );
}

export default ProductList;
