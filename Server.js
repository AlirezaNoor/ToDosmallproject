const express=require("express")
const app= express();

const statics=require("./utils/Static")
const route=require("./Routes/admintodoroutes")
//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS
statics.static(app);
app.use("/admin",route)
app.get("/",(req,res)=>{
    res.render("index",{ pageTitle: "کارهای روزمره" })
})

app.listen(3000,()=>{
    console.log("server is runnig")
})