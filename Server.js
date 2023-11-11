const express = require("express")
const bodypares = require("body-parser")
const app = express();
const sequlize = require("./utils/database")
const statics = require("./utils/Static")
const route = require("./Routes/admintodoroutes")
const listrouter = require("./Routes/todoListRoutes")
const fourofour = require("./Controller/404")
//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS

app.use(bodypares.urlencoded({ extended: false }))
statics.static(app);

app.use(listrouter);

app.use("/admin", route)
app.use(fourofour.handler)

sequlize.sync().then((res) => {
    console.log(res);
    app.listen(3000, () => {console.log("server is runnig")})
}

).catch((err) => {
    console.log(err)
})