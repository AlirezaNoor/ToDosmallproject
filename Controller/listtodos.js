const model = require("../model/Todo")
module.exports.listcontroler = (req, res) => {
    model.FeachAll((todos) => {
        res.render("index",
            {
                pageTitle: "کارهای روزمره",
                todos: todos,
            }
        );
    });
}
