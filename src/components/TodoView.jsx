import TodoList from "./TodoList";
import { useAppContext } from "../store/store";

function TodoView() {
  const { items } = useAppContext();
  return <TodoList items={items} />;
}

export default TodoView;
