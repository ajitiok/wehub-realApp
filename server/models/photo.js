
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      Photo.belongsTo(models.User , { foreignKey : 'UserId'})
    }
  };
  Photo.init({
    title: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
        notNull : {
          args : true,
          msg : "Title is required" 
        }
      }
    },
    description: {
      type  : DataTypes.TEXT,
      validate : {
        notEmpty : {
          args : true,
          msg : "Description is required"
        }
      }
    },
    photographer: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true ,
          msg : "Photographer is required"
        }
      }
    },
    categories: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true ,
          msg : "Categories is required"
        }
      }
    },
    photoUrl: {
      type : DataTypes.TEXT,
      validate : {
        notEmpty : {
          args : true ,
          msg : "PhotoUrl is required"
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};