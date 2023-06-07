import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Libros() {
    const [libros, setLibros] = useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:3001/api/buscarTodosLosLibros").then((respuesta) => {
			respuesta.json().then((resultado) => {
				setLibros(resultado)
			});
		});
    },[])
	return (
		<>
       <div className="card-holder">
				{libros.length > 0 &&
					libros.map((libro, index) => {
						return (
							<Link
								to={`/libro/${libro.id}`}
								className="card"
								key={`lista-libro-${index}`}
							>
								<div>
									<div className="cardTitle">Libro:</div>
									<div className="cardVar">{libro.titulo}</div>
								</div>
								<div>
									<div className="cardTitle">Autor:</div>
									<div className="cardVar">{libro.autor}</div>
								</div>
								<div>
									<div className="cardTitle">Categoria:</div>
									<div className="cardVar">{libro.categoria}</div>
								</div>
							</Link>
						);
					})}
			</div>
		</>
	);
}

export default Libros;