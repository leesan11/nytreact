const cheerio = require("cheerio");
const request = require("request");
const articleController = require("../../controller/articleController");


module.exports = {

    getQueryArticles: function (app) {
        app.get("/articles/:query", function (req,res) {
            request("https://www.nytimes.com/search?query=" + req.params.query, function (error, response, html) {
                if (!error && response.statusCode == 200) {
                    var $ = cheerio.load(html);
                    var results = [];
                    $(".SearchResults-item--3k02W").each(function (i, ele) {
                        results.push([$(this).find("a").attr("href"),$(this).find("h4").text(),$(this).find(".Item-summary--3nKWX").text()]);
                    });
                    res.json({ articleTitles: results });
                }
            });
        });
    },
    addArticle: function(app){
        app.post("/api/addarticle",(req,res)=>articleController.addArticle(req,res))
    }
}