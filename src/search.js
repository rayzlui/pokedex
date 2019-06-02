import React from 'react'
import {capitalize} from './display'

class SearchBar extends React.Component{
   

    updateInput(e){
       this.props.updateInput(e.target.value)
    }

    searchRequest(){
        this.props.searchRequest()
    }

    searchType(){
        if (this.props.search === "pokemon-color"){
            return "Color"
        }else{
            return capitalize(this.props.search)
        }
    }

    render(){
        return(
            <span className = "search-bar">
                <label>Search by {this.searchType.bind(this)()}</label>
                <input type = "text" value = {this.props.value} onChange = {this.updateInput.bind(this)}></input>
                <input type = "submit" onClick = {this.searchRequest.bind(this)}></input>
            </span>
        )
    }
}

export default SearchBar
