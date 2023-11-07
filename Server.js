const express=require("express")
const bodypares=require("body-parser")
const app= express();

const statics=require("./utils/Static")
const route=require("./Routes/admintodoroutes")
//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS

app.use(bodypares.urlencoded({extended:false}));
statics.static(app);
app.get("/",(req,res)=>{
    res.render("index",{ pageTitle: "کارهای روزمره" })
})
app.use("/admin",route)

app.listen(3000,()=>{
    console.log("server is runnig")
})