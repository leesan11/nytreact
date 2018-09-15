const express = require('express');
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require("./routes/api/articles");
const mongoose = require("mongoose");
const db = require("./models")
var PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

api.getQueryArticles(app);
api.addArticle(app);

// app.post("/api/addarticle",function(req,res){
//     console.log(req.body);
//     db.Article.create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// })

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/articles"
  );


app.listen(PORT,function(){
    console.log(`listening to ${PORT}`);
})
