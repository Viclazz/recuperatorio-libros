import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function FiltroPorLibro() {
    const [libros, setLibros] = useState([]);
	let { titulo } = useParams();
	useEffect(() => {
		fetch("http://127.0.0.1:3001/api/buscarLibro", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				titulo: titulo,
			}),
		}).then((respuesta) => {
			respuesta.json().then((resultado) => {
				setLibros(resultado);
			});
		});
	}, [titulo]);
	console.log("titulo")
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

export default FiltroPorLibro;