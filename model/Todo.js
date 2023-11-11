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

static FeachAll(Callback){
fs.readFile(pathroute,(err,filecontent)=>{
    if(err) return [];
    const todos=JSON.parse(filecontent);
    const truetodo=todos.filter(x=>x.compeleted==true).length
    const falsetodo=todos.filter(x=>x.compeleted==false).length
    Callback(todos,truetodo,falsetodo);
})
}

static Delete(id, Callback){
    fs.readFile(pathroute,(err,filecontent)=>{
        const todo=JSON.parse(filecontent);
        const filtertodoes=todo.filter(x=>x.id!=id);
        fs.writeFile(pathroute,JSON.stringify(filtertodoes),(err)=>{
            Callback(err);
        });
  

    });
}

static compeletedtodo(id ,Callback){

    fs.readFile(pathroute,(err,filecontent)=>{
        const todos=JSON.parse(filecontent);
        const todoindex=todos.findIndex(x=>x.id==id);
        const target=todos[todoindex];
        target.compeleted=true;
        todos[todoindex]=target;
        fs.writeFile(pathroute,JSON.stringify(todos), err=>{
            Callback(err);
        })
    })
}

}

module.exports = Todo