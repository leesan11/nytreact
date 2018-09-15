const express = require('express');
const app = express();
const path = require("path");
const cors = require("cors");
const api = require("./routes/api/articles")
var PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

api.getQueryArticles(app);


app.listen(PORT,function(){
    console.log(`listening to ${PORT}`);
})
