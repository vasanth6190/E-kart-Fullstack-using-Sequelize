'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("items",{
      items_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
  },
  user_id:{
 type:Sequelize.INTEGER,
 allowNull:false,
 references: {
    model: 'users', // 'persons' refers to table name
    key: 'user_id', // 'id' refers to column name in persons table
 }
  },
  price:{
     type:Sequelize.STRING(200),
     allowNull:false
  },
  title:{
    type:Sequelize.STRING(200),
    allowNull:false,
    unique:true
 },
 img:{
    type:Sequelize.STRING(2000),
    allowNull:false
 },
 rating:{
    type:Sequelize.STRING(200),
    allowNull:false
 },
 favback:{
     type:Sequelize.BOOLEAN,
    defaultValue: false
 },
 cartback:{
    type:Sequelize.BOOLEAN,
    defaultValue: false
 }
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable("items")
  }
};
