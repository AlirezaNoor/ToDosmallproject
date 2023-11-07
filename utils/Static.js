const ex=require("express")
const  path=require("path")
 
exports.static=(app)=>{
app.use(ex.static(path.join(__dirname,"..","Public")))
 app.use(ex.static(path.join(__dirname,"..","node_modules","bootstrap","dist")))
 app.use(ex.static(path.join(__dirname, "..", "node_modules", "font-awesome")))
}
