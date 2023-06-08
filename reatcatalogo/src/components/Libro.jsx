import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Libro() {
    const [libro, setLibro] = useState(null);
let { id } = useParams();
    useEffect(()=>{
        fetch("http://127.0.0.1:3001/api/libro/" + id).then((respuesta) => {
			respuesta.json().then((resultado) => {
				setLibro(resultado)
			});
		});
    },[])
    console.log(libro)
	return (
		<>
       {}
	   {libro == null ? (
				<div>no hay libro</div>
			) :(
			<div className="div-detalle">
				<div className="section-title">Titulo: {libro.titulo}</div>
				<div className="section-title">Autor: {libro.autor}</div>
				<div className="section-title">Categorias: {libro.categoria}</div>
			</div>
			)}
		</>
	);
}

export default Libro;