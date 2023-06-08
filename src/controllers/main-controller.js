const db = require("../../database/models");
const { Op } = require("sequelize");

module.exports = {
  libros: (req, res) => {
    let listaLibros = db.Libro.findAll({
      include: [{ model: db.Autor }, { model: db.Categoria }],
    });
    Promise.all([listaLibros])
      .then(([listaLibros]) => {
        const resultadoBusqueda = listaLibros.map((libro) => {
          return {
            id: libro.id,
            titulo: libro.titulo,
            editorial: libro.editorial,
            autor: `${libro.Autor.nombre} ${libro.Autor.apellido}`,
          };
        });
        res.json(resultadoBusqueda);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  LibroNuevo: (req, res) =>{
    
    let nuevoLibro ={
      titulo:req.body.titulo,
      editorial:req.body.editorial,
      descripcion:req.body.descripcion,
      fecha_edicion:req.body.fecha_edicion,
      id_autores: parseInt(req.body.id_autores),
      id_categorias:parseInt(req.body.id_categorias)
    }
    db.Libro.create(nuevoLibro)
    console.log(nuevoLibro)
    res.json (req.body)

  },

  NuevoAutor: (req, res) =>{
    
    let autorNuevo ={
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      fecha_nacimiento:req.body.fecha_nacimiento,
      nacionalidad:req.body.nacionalidad,
    }
    db.Autor.create(autorNuevo)
    console.log(autorNuevo)
    res.json (req.body)

  },

  Autores: (req, res) => {
    let autor = db.Autor.findAll({
      attributes: ["id", "nombre", "apellido"],
    })
      .then((Autores) => {
        res.json(Autores);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          codigo: 500,
          mensaje: "Error",
          error: error.message,
        });
      });
  },

  Categorias: (req, res) => {
    let listaCategoria = db.Categoria.findAll({
      include: [{ model: db.Libro }],
    });
    Promise.all([listaCategoria])
      .then(([listaCategoria]) => {
        const resultadoBusqueda = listaCategoria.map((categoria) => {
          return {
            id: categoria.id,
            nombre: categoria.nombre,
            cantidadLibros: categoria.Libros.length,
          };
        });
        res.json(resultadoBusqueda);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  filtroPorLibro: (req, res) => {
    console.log(req.body);
    //console.log(req.params)
    let filtroLibro = db.Libro.findAll({
      include: [{ model: db.Autor }, { model: db.Categoria }],
      where: { titulo: { [Op.like]: `%${req.body.titulo}%` } },
    });
    Promise.all([filtroLibro])
      .then(([listaLibros]) => {
        const resultadoBusqueda = listaLibros.map((libro) => {
          return {
            id: libro.id,
            titulo: libro.titulo,
            editorial: libro.editorial,
            autor: `${libro.Autor.nombre} ${libro.Autor.apellido}`,
          };
        });
        res.json(resultadoBusqueda);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  libro: (req, res) => {
    let libro = db.Libro.findOne({
      include: [{ model: db.Autor }, { model: db.Categoria }],
      where: { id: parseInt(req.params.id) },
    });
    Promise.all([libro])
      .then(([libro]) => {
        if (libro) {
          let resultado = {
            id: libro.id,
            titulo: libro.titulo,
            editorial: libro.editorial,
            descripcion: libro.descripcion,
            edicion: libro.fecha_edicion,
            autor: `${libro.Autor.nombre} ${libro.Autor.apellido}`,
            nacionalidad: libro.Autor.nacionalidad,
            fecha_nacimiento: libro.Autor.fecha_nacimiento,
            categoria: libro.Categorium.nombre,
          };

          res.json(resultado);
        }
        else {
          res.status(400);
				res.json(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
