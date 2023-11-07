const fs = require("fs");
const path = require("path");
const pathroute = path.join(__dirname, "..", "data", "todos.json")
class Todo {
    constructor(id, text, compeleted = false) {

        this.id = id;
        this.text = text;
        this.compeleted = compeleted;
    }
    save(Callback) {
        fs.readFile(pathroute, (err, filecontent) => {
            const todos=JSON.parse(filecontent);
             todos.push(this);
            fs.writeFile(pathroute, JSON.stringify(todos), (err) => {
                if (err) Callback(err);
                else return Callback([]);
            });
        })
    }
}

module.exports = Todo