const db = require("../models");

module.exports = {
    addArticle:(req,res)=>{
        db.Article.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}