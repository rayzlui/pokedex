import React from 'react'
import {capitalize} from './display'
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
            <span className = "search-options-container">
                <select className = "dropdown-for-options" onChange = {this.changeSearchBy}>
                    {this.generateOptions.bind(this)()}
                </select>
            </span>
        )
    }
}

export default Options



