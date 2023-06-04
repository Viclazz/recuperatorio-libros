module.exports = (sequelize, dataTypes) => {
    let alias = 'Autor';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING(50),
        },
        apellido: {
            type: dataTypes.STRING(50),
        },
        nacionalidad: {
            type: dataTypes.STRING(50),
        },
        fecha_nacimiento: {
            type: dataTypes.DATEONLY,
        },
    };
    let config = {
        tableName : 'autores',
        timestamps : false,
    }

    const Autor = sequelize.define(alias, cols, config);

    Autor.associate = function(models) {
        Autor.hasMany(models.Libro, {
            foreignKey : 'id_autores',
            targetKey : 'id'
        });
    }

    return Autor
};