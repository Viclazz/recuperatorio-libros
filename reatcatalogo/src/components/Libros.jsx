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
        {libros.length >0 && libros.map((libro, indice)=>{
            return <div key={"libro-" + indice
        }>{libro.titulo}</div>

        })}
			
            <div>Soy un libro</div>
		</>
	);
}

export default Libros;