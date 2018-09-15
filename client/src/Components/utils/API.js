
export default{

    getSearch:(query)=>
        
        fetch("/articles/"+query)
            .then(response => response.json()),

    addArticle:(article)=>
        fetch("/api/addarticle",{
            method:"post",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(article)}),
    
    getArticles:()=>
        fetch("/api/articles")
            .then(response=>response.json()),

    removeArticle:(title)=>
        fetch("/api/removearticle",{
            method:"post",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({title:title})}),
                     
    }

