import { useEffect, useMemo, useState } from "react";
import TodoList from "./TodoList";

const data = [
  {
    id: 0,
    title: "Lavar la ropa",
    completed: false,
  },
  {
    id: 1,
    title: "Pasear a Kaiser 🐶",
    completed: true,
  },
  {
    id: 2,
    title: "Terminar tutorial",
    completed: false,
  },
];

function TodoContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  function handleComplete(id) {
    const index = items.findIndex((item) => item.id === id);
    items[index].completed = !items[index].completed;
    setItems([...items]);
  }

  const itemsCompleted = useMemo(() => {
    return items.filter((item) => item.completed).length;
  });

  return (
    <div>
      <TodoList
        items={items}
        onCompleted={handleComplete}
        itemsCompleted={itemsCompleted}
        totalItems={items.length}
      />
    </div>
  );
}

export default TodoContainer;
