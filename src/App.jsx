import "./App.css";

// 2 - reaproveitamento de estrutura
// (onde colocar Outlet será onde o conteúdo do router será executado)
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Outlet />
    </div>
  );
}

export default App;
