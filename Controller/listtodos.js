const model = require("../model/Todo")
module.exports.listcontroler = (req, res) => {
    model.count({where:{compeleted:true}}).then(trues=>{
        model.count({where:{compeleted:false}}).then( falses=>{
            model.findAll().then(todos => {
                res.render("index",
                    {
                        pageTitle: "کارهای روزمره",
                        todos: todos,
                        truetodo: trues,
                        falsetodo:  falses
                    }
                );
        
            }).catch(err => { console.log(err) })
        }

        ).catch(err => { console.log(err) })
    }
   
    ).catch(err => { console.log(err) })

}
