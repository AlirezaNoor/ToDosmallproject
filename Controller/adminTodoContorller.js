
const ex = require("express");

const Todos = require("../model/Todo");
const Todo = require("../model/Todo");
const app = ex();


exports.todoadmincontroller = (req, res) => {
    if (!req.body.todo) return res.redict("/")
    else {
        const mytodo = new Todos(Math.floor(Math.random() * 1000), req.body.todo)
        mytodo.save((err) => {
            if (err)  res.redirect("/");
             else console.log(err);
 
        });


    }
}
exports.deletetodo=(req,res)=>{
    Todos.Delete(req.params.id ,(err)=>{
        if(err)console.log(err);
        else  res.redirect("/") 
    })
}

exports.compeleted=(req,res)=>{
    Todo.compeletedtodo(req.params.id, err=>{
        if(!err) res.redirect("/")
        else console.log(err)
    })
}