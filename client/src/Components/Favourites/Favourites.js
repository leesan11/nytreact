import React,{Component} from 'react';

class Favourites extends Component{

    render(){
        return(
            
            <div>
                <hr></hr>
                <h3>Favourites:</h3>
                <ul>
                {this.props.favourites}
                </ul>
            </div>
        )
    }
}
export default Favourites;