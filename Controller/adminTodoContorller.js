
const ex = require("express");

const Todos = require("../model/Todo");
const Todo = require("../model/Todo");
const app = ex();


exports.todoadmincontroller = (req, res) => {
    if (!req.body.todo) return res.redict("/")
    else {
        Todos.create({ text: req.body.todo }).then(result => {
            res.redirect("/")
        }
        ).catch(error => {
            console.log(console);
        })

    }
}
exports.deletetodo = (req, res) => {
    Todo.destroy({ where: { id: req.params.id } }).then(result => {
        res.redirect("/");
    }).catch(err => {
        console.log(err)
    })
}

exports.compeleted = (req, res) => {
    Todo.findByPk(req.params.id).then((todo) => {
        todo.compeleted = true;
        todo.save()
    }).then((result) => {
        res.redirect("/")
    }).catch(err => {
        console.log(err)
    })
}