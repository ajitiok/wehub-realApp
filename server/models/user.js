'use strict';
const {
  Model
} = require('sequelize');
const { hassPass } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Photo, { foreignKey : 'UserId'})
    }
  };
  User.init({
    email: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Email is required'
        },
        notNull : {
          args : true,
          msg : 'Email is required'
        },
      }
    },
    password: {
      allowNull :false ,
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true, 
          msg : 'Password is required'
        },
        notNull : {
          args : true,
          msg : 'Password is required'
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue : 'customer'
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate : ( user , opt ) => {
        user.password = hassPass(user.password)
      }
    }
  });
  return User;
};

