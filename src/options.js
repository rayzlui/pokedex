import React from 'react'

class Options extends React.Component{
    constructor(props){
        super(props)
        this.changeSearchBy = this.changeSearchBy.bind(this)
        this.makeOption = this.makeOption.bind(this)
    }
    changeSearchBy(e){
        this.props.changeSearchBy(e.target.value)
    }
    

    generateOptions(){
        var searchoptions = ["pokemon", "number", "type", "move", "berry", "region", "ability", "color"]
        var options = searchoptions.map(search => {
            return this.makeOption(search)
        })
        return options
    }

    makeOption(search){
        return <option className = {search+"option"} value = {search} key = {search}>{capitalize(search)}</option>
    }

    render(){
        return(
            <div className = "search-options-container">
                <select className = "dropdown-for-options" onChange = {this.changeSearchBy}>
                    {this.generateOptions.bind(this)()}
                </select>
            </div>
        )
    }
}

export default Options

function capitalize(string){
    let word = string.split("")
    word[0] = word[0].toUpperCase()
    return word.join("")

}

