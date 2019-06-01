import React from 'react'

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
            <div className = "search-bar">
                <label>Search by {this.searchType.bind(this)()}</label>
                <input type = "text" value = {this.props.value} onChange = {this.updateInput.bind(this)}></input>
                <input type = "submit" onClick = {this.searchRequest.bind(this)}></input>
            </div>
        )
    }
}

export default SearchBar

function capitalize(string){
    let word = string.split("")
    word[0] = word[0].toUpperCase()
    return word.join("")

}