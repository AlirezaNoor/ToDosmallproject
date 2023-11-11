const model = require("../model/Todo")
module.exports.listcontroler = (req, res) => {
    model.FeachAll((todos,truetodo,falsetodo) => {
        res.render("index",
            {
                pageTitle: "کارهای روزمره",
                todos: todos,
                truetodo:truetodo,
                falsetodo:falsetodo
            }
        );
    });
}
