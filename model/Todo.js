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
        fs.writeFile(pathroute, JSON.stringify(this), (err) => {
            if (err) Callback(err);
            else return Callback([]);
        });
    }
}

module.exports=Todo