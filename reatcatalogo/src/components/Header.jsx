import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate()
	const buscar = (event) => {
		event.preventDefault();
		navigate(`/busqueda/${event.target.busqueda.value}`);
	}
  return (
    <>
      <div className="div-header">
        <header className="App-header"></header>
		<form onSubmit={buscar} method="POST" className="form-buscar">
			<input id="busqueda" name="busqueda" type="text"></input>
			<button>Buscar</button>
		</form>
      </div>
    </>
  );
}

export default Header;
