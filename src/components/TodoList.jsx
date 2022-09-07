import Todo from "./Todo";

function TodoList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
}

export default TodoList;
