module.exports = function(sequelize, DataTypes) {

    let alias = 'products'
    
    let cols = {
    id: {
    
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement : true
    
    },
   
   title: {

    type: DataTypes.STRING,
    notNull: true
},

    price: {

        type: DataTypes.DECIMAL,
        notNull: true
},

    image: {

        type: DataTypes.STRING,
        notNull: true
},

    description: {

        type: DataTypes.STRING(200),
        notNull: true
},

    promotion: {

        type: DataTypes.INTEGER,
        notNull: true
},

category_id: {

    type: DataTypes.INTEGER,
    primaryKey: true,
    notNull: true
}


    }
    
    let config = {
    
        tableName: 'products',
        timestamps: false
    }
    
    
    let products = sequelize.define(alias, cols, config)


    products.associate = function(models){
        products.belongsTo(models.category, {

     as: 'category',
     otherKey: 'id'
     
        });
    }

    
    return products;
    }
    
    
    