const {Sequelize}=require("sequelize");
const sequlize=new Sequelize(
    "todo_db","root","55375447",{
        dialect:"mysql",
        host:"localhost",

    }
);
module.exports=sequlize;