import "./App.css";
import TodoView from "./components/TodoView";
import Store from "./store/store";
/*
Provider
Resolver prop drilling
*/
function App() {
  return (
    <div className="App">
      <h1>Provider</h1>
      <Store>
        <TodoView />
      </Store>
    </div>
  );
}

export default App;
