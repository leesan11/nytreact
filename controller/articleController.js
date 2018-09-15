const db = require("../models");

module.exports = {
    addArticle:(req,res)=>{
        db.Article.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getArticles:(req,res)=>{
        db.Article.find({})
            .then(dbModel=>res.json(dbModel))
            .catch(err=>res.status(422).json(err));
    },
    removeArticle:(req,res)=>{
        db.Article.findOneAndDelete(req.body)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}