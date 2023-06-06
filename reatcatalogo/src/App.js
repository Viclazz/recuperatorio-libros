import logo from './logo.svg';
import Header from './components/Header';
import Libros from './components/Libros';
import Libro from './components/Libro';
import NavBar from './components/NavBar';
import Categorias from './components/Categorias';
import FiltroPorLibros from './components/FiltroPorLibro';
import NuevoLibro from './components/NuevoLibro';
import {                                            
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className='cuerpo'>
        <NavBar />
      <Routes>
      <Route path="libros" element={<Libros />} />
      <Route path="libro/:id" element={<Libro />} />
      <Route path="categoria" element={<Categorias />} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
