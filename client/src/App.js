import React, { Component } from 'react';
import Search from './Components/Search/Search';
import Favourites from './Components/Favourites/Favourites';
import API from './Components/utils/API';

class App extends Component {
  state={
    favourites:""
  }
componentDidMount(){
  this.renderArticles();
}

  handleDelete=(e)=>{
    API.removeArticle(e.target.getAttribute("data"));
    this.renderArticles();
    
}

handleAdd = (e)=>{
  API.addArticle({
      title:e.target.getAttribute("data-title"),
      info:e.target.getAttribute("data-info"),
      link:e.target.getAttribute("data-link"),
      
  });
  this.renderArticles();
}

renderArticles(){
  API.getArticles().then(data=>{
      var results=[];
      for(var i =0; i<data.length;i++){
          results.push((<div><li>{data[i].title}</li><p>{data[i].info}</p><button onClick={this.handleDelete} data={data[i].title}>delete</button></div>));
      }
      this.setState({favourites:results});
  });
}

 
  render() {
    return (
      <div>
      <Search
      handleAdd = {(e)=>this.handleAdd(e)}
      ></Search>
      <hr></hr>
      <Favourites
      favourites = {this.state.favourites}
      />
      </div>
    );
  }
}

export default App;
