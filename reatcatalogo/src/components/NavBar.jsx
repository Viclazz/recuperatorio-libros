import { Link } from "react-router-dom";

function NavBar() {
	return (
		<>
			<navbar className="">
				<Link to={"/libros"}>libro</Link>
                <h4>Libros</h4>
                <h4>Categoria</h4>
                <h4>Nuevo Libro</h4>
            </navbar>
		</>
	);
}

export default NavBar;