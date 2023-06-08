import { useEffect, useState } from "react";

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/api/librosPorCategoria`)
      .then((respuesta) => {
        respuesta.json().then((resultado) => {
          setCategorias(resultado);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

return (
  <>
    {categorias.length > 0 &&
      categorias.map((categoria, indice) => {
        return (
          <div className="card" key={`libros-categoria-${indice}`}>
            <div>
              <div className="section-title">Nombre: {categoria.nombre}</div>
              <div className="section-title">cantidad: {categoria.cantidadLibros}</div>
            </div>
          </div>
        );
      })}
  </>
);}

export default Categorias;
