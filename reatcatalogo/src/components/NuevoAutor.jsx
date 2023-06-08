import { useNavigate } from "react-router-dom";

function NuevoAutor() {
  const navigate = useNavigate();

  const crearAutor = (evento) => {
    evento.preventDefault();
    let cuerpo = {
      nombre: evento.target.nombre.value,
      apellido: evento.target.apellido.value,
      fecha_nacimiento: evento.target.fecha_nacimiento.value,
      nacionalidad: evento.target.nacionalidad.value,
    };
    //console.log(cuerpo);
    fetch(`http://127.0.0.1:3001/api/autorNuevo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cuerpo),
    })
      .then((respuesta) => {
        respuesta.json().then((resultado) => {
          console.log(resultado);
          navigate("/nuevoLibro");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="div-form">
        <div>
          <form onSubmit={crearAutor} method="POST">
            <table>
              <tbody>
                <tr>
                  <td className="section-title">Nombre</td>
                  <td>
                    <input type="text" id="nombre" name="nombre"></input>
                  </td>
                </tr>

                <tr>
                  <td className="section-title">Apellido</td>
                  <td>
                    <input type="text" id="apellido" name="apellido"></input>
                  </td>
                </tr>
                <tr>
                  <td className="section-title">Nacionalidad</td>
                  <td>
                    <input
                      type="text"
                      id="nacionalidad"
                      name="nacionalidad"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="section-title">Fecha de nacimiento</td>
                  <td>
                    <input
                      type="date"
                      id="fecha_nacimiento"
                      name="fecha_nacimiento"
                    ></input>
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

export default NuevoAutor;
