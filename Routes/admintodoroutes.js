const exprees=require("express");
const controller=require("../Controller/adminTodoContorller")
const route=exprees.Router();

module.exports=route.post("/add-todo",controller.todoadmincontroller )