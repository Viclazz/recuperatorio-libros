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
      where: {id: req.params.id}
    });
    Promise.all([libro])
      .then(([libro]) => {
        let resultado = {
            id: libro.id,
            titulo: libro.titulo,
            editorial: libro.editorial,
            descripcion: libro.descripcion,
            edicion: libro.fecha_edicion,
            autor: `${libro.Autor.nombre} ${libro.Autor.apellido}`,
            nacionalidad: libro.Autor.nacionalidad,
            fecha_nacimiento: libro.Autor.fecha_nacimiento,
            categoria: libro.Categorium.nombre
        }
        
        res.json(resultado);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};