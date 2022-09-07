import { createContext, useContext, useEffect, useState } from "react";

//1.- Crear el contexto
const AppContext = createContext({
  items: [],
  onComplete: (id) => {},
});

//2.-Implementacion
function Store({ children }) {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Lavar la topa",
      completed: false,
    },
    {
      id: 1,
      title: "Pasear a Kaiser",
      completed: true,
    },
    {
      id: 2,
      title: "Terminar tutorial react",
      completed: false,
    },
  ]);

  function onComplete(id) {
    const index = items.findIndex((item) => item.id === id);
    items[index].completed = !items[index].completed;
    setItems([...items]);
  }

  return (
    <AppContext.Provider value={{ items, onComplete }}>
      {children}
    </AppContext.Provider>
  );
}

//Funcionn para acceder al contexto
export function useAppContext() {
  return useContext(AppContext);
}

export default Store;
