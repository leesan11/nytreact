import React,{Component} from 'react';
import API from '../utils/API'

class Search extends Component{
    state = {
        query:"",
        results:"",
        renderResults:""
    }
    handleInput= (e)=>{
        var query = (e.target.value).replace(/ /g,"+")
        this.setState({query:query})
    }

    handleSearch = () =>{
        API.getSearch(this.state.query).then(data=>this.setState({results:data.articleTitles}))
            .then(()=>{
                this.renderResults();
            })
    }

    handleLinks = (link)=>{
        window.location = link;
    }

    handleAdd = (e)=>{
        API.addArticle({title:e.target.getAttribute("data")})
        
    }


    renderResults = () => {
        var results = [];
        for(var i =0; i<this.state.results.length;i++){
            results.push((<div><a>{this.state.results[i][1]}</a><br/><p>{this.state.results[i][2]}</p><button onClick={this.handleAdd} data={this.state.results[i][1]}>add</button></div>))
        }
        this.setState({renderResults:results})

    }

    render(){
        return(
            <div>
            <h3>Search for articles here:</h3>
            <input onChange = {this.handleInput}>
            </input>
            <button onClick = {this.handleSearch} >Search</button>
            <div>
                <h3>Search Results:</h3>
                <ul>
                {this.state.renderResults}
                </ul>
            </div>
            </div>
        )
    }
}
export default Search;