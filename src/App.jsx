import "./App.css";

// 2 - reaproveitamento de estrutura
// (onde colocar Outlet será onde o conteúdo do router será executado)
import { Outlet } from "react-router-dom";

// 4 - navegando entre páginas
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
    </div>
  );
}

export default App;
