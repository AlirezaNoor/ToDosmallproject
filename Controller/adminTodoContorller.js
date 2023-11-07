
const ex = require("express");

const Todos = require("../model/Todo")
const app = ex();


exports.todoadmincontroller = (req, res) => {
    if (!req.body.todo) return res.redict("/")
    else {
        const mytodo = new Todos(Math.floor(Math.random() * 1000), req.body.todo)
        mytodo.save((err) => {
            if (err) {
                res.redict("/");
            } else {
                console.log(err);
            }
        });


    }
}