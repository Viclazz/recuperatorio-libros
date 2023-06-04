module.exports = (sequelize, dataTypes) => {
    let alias = 'Libro';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: dataTypes.STRING(50),
        },
        editorial: {
            type: dataTypes.STRING(50),
        },
        descripcion: {
            type: dataTypes.STRING(200),
        },
        fecha_edicion: {
            type: dataTypes.DATEONLY,
        },
        id_autores: {
            type: dataTypes.INTEGER,
        },
        id_categorias: {
            type: dataTypes.INTEGER,
        },
        
        
    };
    let config = {
        tableName : 'libros',
        timestamps : false,
    }

    const Libro = sequelize.define(alias, cols, config);

    Libro.associate = function(models) {
        Libro.belongsTo(models.Autor,{ foreignKey : 'id_autores',});
        Libro.belongsTo(models.Categoria, { foreignKey : 'id_categorias',});
    }

    return Libro
};