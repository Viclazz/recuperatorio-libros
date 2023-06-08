import Header from "./components/Header";
import Libros from "./components/Libros";
import Libro from "./components/Libro";
import NavBar from "./components/NavBar";
import Categorias from "./components/Categorias";
import FiltroPorLibro from "./components/FiltroPorLibro";
import NuevoLibro from "./components/NuevoLibro";
import NuevoAutor from "./components/NuevoAutor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="cuerpo">
          <NavBar />
          <Routes>
            <Route path="libros" element={<Libros />} />
            <Route path="libro/:id" element={<Libro />} />
            <Route path="categoria" element={<Categorias />} />
            <Route path="nuevoLibro" element={<NuevoLibro />} />
            <Route path="busqueda/:titulo" element={<FiltroPorLibro />} />
            <Route path="nuevoAutor" element={<NuevoAutor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
