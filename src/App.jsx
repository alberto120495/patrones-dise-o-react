/*
Presentational & Container - Contenedor y presentacion

CONTENEDOR: Poder dividir los componentes en componentes contenedores teniendo la logica 
PRESENTACIONAL: Vistas, mostrar la informacion

*/

import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <h1>Presentational & Container</h1>
      <TodoContainer />
    </div>
  );
}

export default App;
