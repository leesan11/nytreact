const cheerio = require("cheerio");
const request = require("request");


module.exports = {

    getQueryArticles: function (app) {
        app.get("/articles/:query", function (req,res) {
            request("https://www.nytimes.com/search?query=" + req.params.query, function (error, response, html) {
                if (!error && response.statusCode == 200) {
                    var $ = cheerio.load(html);
                    var results = [];
                    $("h4").each(function (i, ele) {
                        results.push($(this).text());
                    });
                    res.json({ articleTitles: results });
                }
            });
        });
    }
}