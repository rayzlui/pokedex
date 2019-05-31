import React from 'react'

class PokeDisplay extends React.Component{

    constructor(props){
        super(props)
        this.searchRequest = this.searchRequest.bind(this)
        this.displayTypes = this.displayTypes.bind(this)
    }

    searchRequest(request){
        this.props.searchRequest(request)
    }  

    displayTypes(data, search){
        if (data){
            var types = (data.map(arr => {
                return <p onClick = {()=>this.searchRequest(arr[search].url)}>{arr[search].name}</p>
            }))
            return types
        }
    }

    displaySprites(data){
        var display = []
        for (let i in data.sprites){
            if (data.sprites[i]){
                display.push(<img className = {"pokemon-sprite" + i} src = {data.sprites[i]} alt ={data.name}/>)
            }
        }
        return display
    }

    render(){
        var data = this.props.data
        console.log(data)
        return (
            <div className = "pokemon-display">
                <div className = "pokemon-header" style={{display: "inline"}}>
                    <div className = "pokemon-name">{capitalize(data.name)}</div>
                    <div className = "pokemon-number">{data.id}</div>
                    <div className = "pokemon-type">{this.displayTypes(data.types, "type")}</div>
                </div>
                <div className = "pokemon-sprite">
                    {this.displaySprites.bind(this)(data,)}
                </div>
                <div className = "pokemon-abilities">
                    {this.displayTypes(data.moves, "move")}
                </div>
                <div className = "pokemon-moves">

                </div>
            </div>
        )
    }

}

class DisplayPokeList extends React.Component{

    constructor(props){
        super(props)
        this.searchRequest = this.searchRequest.bind(this)
    }

    searchRequest(request){
        this.props.searchRequest(request)
    }  

    processList(fulldata){
        //we want to click and have the api call for the pokemon and reset our data in the app so it displays the new info.
        var display = fulldata.map(data=>{
            return (
                <div className = {data.name} key = {data.name}>
                    <p onClick = {()=>this.searchRequest(data.url)}>{capitalize(data.name)}</p>             
                </div>
            )
        })
        
        return display
    }

    pageMoveButtons(){
        let previous = this.props.data.previous ? <button onClick = {()=>this.searchRequest(this.props.data.previous)}>Previous</button> : null
        let next = this.props.data.next ? <button onClick = {()=>this.searchRequest(this.props.data.next)}>Next</button> : null
        return (
            <div className = "page-change-button">
                {previous}
                {next}
            </div>
        )
    }

    render(){
        return(
            <div className = "pokelist-display">
                {processList(this.props.data.results, this.searchRequest)}
                {this.pageMoveButtons.bind(this)()}
            </div>
        )
    }
}



function capitalize(string){
    let word = string.split("")
    word[0] = word[0].toUpperCase()
    return word.join("")

}

function processList(fulldata, searchFunc){
    //we want to click and have the api call for the pokemon and reset our data in the app so it displays the new info.
    var display = fulldata.map(data=>{
        return (
            <div className = {data.name} key = {data.name}>
                <p onClick = {()=>searchFunc(data.url)}>{capitalize(data.name)}</p>             
            </div>
        )
    })
    
    return display
}

class MoveDisplay extends React.Component{
    searchRequest(request){
        this.props.searchRequest(request)
    }  
    render(){
        return(
            <div className = "moves-container">
                <div className = "moves-header">
                    <div className = "move-name">{"Move: " + capitalize(this.props.data.name)}</div>
                    <div className = "move-id">{this.props.data.id}</div>
                </div>
                <div className = "move-info">
                    <p>Accuracy: {this.props.data.accuracy}</p>
                    <p>Power: {this.props.data.power}</p>
                    <p>PP: {this.props.data.pp}</p>
                    <p onClick = {this.searchRequest.bind(this)(this.props.type.url)}>Type: {this.props.data.type.name}</p>
                </div>
            </div>
        )

    }
}

class ColorDisplay extends React.Component{

    displayTitle(){
        return(
            <div>
                <p>{"List of "capitalize(this.props.data.name) + " Colored Pokemon"}</p>
                <p>{"Color ID: " + this.props.data.id}</p>
            </div>
        )
    }

    searchRequest(request){
        this.props.searchRequest(request, "Pokemon")
    }  

    render(){
        return(
            <div className = "color-container">
                <div className = "color-title-info">
                    {this.displayTitle.bind(this)()}
                </div>
                <div className = "color-pokemon-list">
                    {processList(this.props.data.pokemon_species, this.searchRequest.bind(this))}
                </div>
            </div>
        )
    }
}

export {DisplayPokeList, PokeDisplay, ColorDisplay, MoveDisplay}