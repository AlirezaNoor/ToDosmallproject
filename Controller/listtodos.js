const Todo = require("../model/Todo")
const model = require("../model/Todo")
module.exports.listcontroler = async (req, res) => {
    // model.count({where:{compeleted:true}}).then(trues=>{
    //     model.count({where:{compeleted:false}}).then( falses=>{
    //         model.findAll().then(todos => {
    //             res.render("index",
    //                 {
    //                     pageTitle: "کارهای روزمره",
    //                     todos: todos,
    //                     truetodo: trues,
    //                     falsetodo:  falses
    //                 }
    //             );

    //         }).catch(err => { console.log(err) })
    //     }

    //     ).catch(err => { console.log(err) })
    // }

    // ).catch(err => { console.log(err) })

    try {
        const All = await Todo.findAll();
        const truecounter = await Todo.count({ where: { compeleted: true } });
        const faslecounter = await Todo.count({ where: { compeleted: false } });
        res.render("index",
            {
                pageTitle: "کارهای روزمره",
                todos: All,
                truetodo: truecounter,
                falsetodo: faslecounter
            }
        );
    } catch (error) {
        console.error(error)
    }
}
