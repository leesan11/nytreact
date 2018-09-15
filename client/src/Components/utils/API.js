
export default{

    getSearch:(query)=>
        
        fetch("/articles/"+query)
            .then(response => response.json()),

    addArticle:(article)=>
        fetch("/api/addarticle",{
            method:"post",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(article)})
                     
    }

