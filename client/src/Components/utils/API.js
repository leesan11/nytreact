
export default{

    getSearch:(query)=>
        
        fetch("/articles/"+query)
            .then(response => response.json()),

    addArticle:()=>
        fetch("/another")
            .then(response=>response.json())
            
    }

