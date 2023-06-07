import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <ul>
          <Link to={`/libros`} className="button">
            Libros
          </Link>
        </ul>
        <ul>
          <Link to={`/categorias`} className="button">
            Categorias
          </Link>
        </ul>
		<ul>
        <Link to={`/nuevoLibro`} className="button">
          Nuevo Libro
        </Link>
		</ul>
      </div>
    </>
  );
}

export default NavBar;
