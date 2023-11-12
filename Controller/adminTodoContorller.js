
const ex = require("express");

const Todos = require("../model/Todo");
const Todo = require("../model/Todo");
const app = ex();


exports.todoadmincontroller = async (req, res) => {
    if (!req.body.todo) return res.redict("/")
    else {

        try {
            await Todos.create({ text: req.body.todo });
            res.redirect("/");
        } catch (error) {
            console.error(error)

        }

    }
}
exports.deletetodo = async (req, res) => {


    try {
        await Todo.destroy({ where: { id: req.params.id } })
        res.redirect("/");
    } catch (error) {
        console.error(error)
    }
}

exports.compeleted = async (req, res) => {
    // Todo.findByPk(req.params.id).then((todo) => {
    //     todo.compeleted = true;
    //     todo.save()
    // }).then((result) => {
    //     res.redirect("/")
    // }).catch(err => {
    //     console.log(err)
    // })


     try {
        const todoforupdate= await Todo.findByPk(req.params.id)
        todoforupdate.compeleted=true;
         await todoforupdate.save();
         res.redirect("/")
     } catch (error) {
        console.error(error)
     }
}