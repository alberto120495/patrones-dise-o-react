import Todo from "./Todo";

function TodoList({ items, onCompleted, itemsCompleted, totalItems }) {
  return (
    <div>
      <div>
        {itemsCompleted} of {totalItems} completed
      </div>
      {items.map((item) => (
        <Todo key={item.id} {...item} onCompleted={onCompleted} />
      ))}
    </div>
  );
}

export default TodoList;
