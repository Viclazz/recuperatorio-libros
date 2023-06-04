var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main-controller');

router.get('/buscarTodosLosLibros', mainController.libros);         
//router.get('/buscarLibro', mainController.mainRouter)    
router.get('/buscarLibro', mainController.filtroPorLibro) 
router.get('/librosPorCategoria', mainController.Categorias)  

router.get('/libro/:id', mainController.libro) 

module.exports = router;