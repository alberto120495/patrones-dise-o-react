/*HIGH ORDER COMPONENT

VENTAJAS:
No es necesario crear una nueva implementacion de un componente, solo se crea una nueva funcion que recibe un componente y retorna un nuevo componente.
*/

import withSearch from "./components/withSearch";
import ProductList from "./components/ProductList.jsx";
import TodoList from "./components/TodoList";

const products = [
  {
    id: 1,
    title: "carne",
  },
  {
    id: 2,
    title: "leche",
  },
  {
    id: 3,
    title: "verduras",
  },
];

const todos = [
  {
    id: 1,
    title: "hacer tarea",
    completed: false,
  },
  {
    id: 2,
    title: "crear video",
    completed: true,
  },
  {
    id: 3,
    title: "limpiar casa",
    completed: false,
  },
];

const ProductListWithSearch = withSearch(ProductList, products);
const TodoListWithSearch = withSearch(TodoList, todos);

function App() {
  return (
    <div className="App">
      <h2>High Order Component</h2>
      <ProductListWithSearch />
      <hr />
      <TodoListWithSearch />
    </div>
  );
}

export default App;
