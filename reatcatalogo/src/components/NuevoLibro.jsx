import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NuevoLibro() {
  const [autores, setAutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  const crearLibro = (evento) => {
    evento.preventDefault();
    let cuerpo = {
      titulo: evento.target.title.value,
      id_autor: evento.target.author.value,
      id_categoria: evento.target.category.value,
    };
    console.log(cuerpo);
    fetch(`http://127.0.0.1:3001/api/Libros`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cuerpo),
    })
      .then((respuesta) => {
        respuesta.json().then((resultado) => {
          console.log(resultado);
          navigate("/libros");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/api/categorias`)
      .then((respuesta) => {
        respuesta.json().then((resultado) => {
          setCategorias(resultado);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    fetch(`http://127.0.0.1:3001/api/autores`)
      .then((respuesta) => {
        respuesta.json().then((resultado) => {
          setAutores(resultado);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <div>
          <form onSubmit={crearLibro} method="POST">
            <table>
              <tbody>
                <tr>
                  <td className="section-title">Titulo</td>
                  <td>
                    <input type="text" id="title" name="title"></input>
                  </td>
                </tr>
                <tr>
                  <td className="section-title">Autor</td>
                  <td>
                    <select name="author" id="author">
                      <option value="-1">Seleccione una opcion</option>
                      {autores.length > 0 &&
                        autores.map((autor) => {
                          return (
                            <option
                              value={autor.id}
                              key={`autor-list-${autor.id}`}
                            >
                              {autor.nombre}
                            </option>
                          );
                        })}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="section-title">Categoria</td>
                  <td>
                    <select name="category" id="category">
                      <option value="-1">Seleccione una opcion</option>
                      {autores.length > 0 &&
                        categorias.map((categoria) => {
                          return (
                            <option
                              value={categoria.id}
                              key={`categoria-list-${categoria.id}`}
                            >
                              {categoria.nombre}
                            </option>
                          );
                        })}
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <button>Guardar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NuevoLibro;