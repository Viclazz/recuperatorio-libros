var express = require("express");
var router = express.Router();
var mainController = require("../controllers/main-controller");

router.get("/buscarTodosLosLibros", mainController.libros);
router.post("/nuevoLibro", mainController.LibroNuevo);
router.post("/buscarLibro", mainController.filtroPorLibro);
router.get("/librosPorCategoria", mainController.Categorias);
router.get("/autor", mainController.Autores)
router.get("/libro/:id", mainController.libro);

module.exports = router;
