import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar">
       
          <Link to={`/libros`} className="button">
            Libros
          </Link>
        
        
          <Link to={`/categoria`} className="button">
            Categorias
          </Link>
       
        
          <Link to={`/nuevoLibro`} className="button">
            Nuevo Libro
          </Link>
        
        
          <Link to={`/nuevoAutor`} className="button">
            Nuevo Autor
          </Link>
        
      </div>
    </>
  );
}

export default NavBar;
