const {DataTypes}=require("sequelize");
const mysql=require("../utils/database");
const Todo=mysql.define("Todo",{
id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
},
text:{
    type:DataTypes.STRING,
    allowNull:false
},
compeleted:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
}
})

module.exports=Todo; 