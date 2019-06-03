import React from 'react'


function capitalize(string){
    let word = string.split("")
    word[0] = word[0].toUpperCase()
    return word.join("")
}

function retreiveName(data){
    return data.map(location => <p className = {location.name}>{location.name}</p>)
}



function processList(fulldata, searchFunc){
    //we want to click and have the api call for the pokemon and reset our data in the app so it displays the new info.
    
    var section = []
    fulldata.forEach(data=>{
        
        section.push(<p className = "list-data" key = {data.name} onClick = {()=>searchFunc(data.url)}>{capitalize(data.name)}</p>)
       
            
        
    })
    
    return section
}

class PokeDisplay extends React.Component{

    constructor(props){
        super(props)
        this.searchRequest = this.searchRequest.bind(this)
        this.displayTypes = this.displayTypes.bind(this)
    }

    searchRequest(request, type){
        this.props.searchRequest(request, type)
    }  

    displayTypes(data, search){
        if (data){
            var types = (data.map(arr => {
                return <p className = "list-data"  onClick = {()=>this.searchRequest(arr[search].url , search)}>{arr[search].name}</p>
            }))
            return types
        }
    }
    
    processList(fulldata, searchFunc){
        //we want to click and have the api call for the pokemon and reset our data in the app so it displays the new info.
       
        var section = []
        for (var i = 0; i < fulldata.length; i++){
            var data = fulldata[i]
            
            section.push(<p className = "list-data"  key = {data.move.name} onClick = {()=>searchFunc(data.move.url, "move")}>{capitalize(data.move.name)}</p>)
           
            
        }
        
        return section
    }

    displaySprites(data){
        var display = []
        for (let i in data.sprites){
            if (data.sprites[i]){
                display.push(<img className = {"pokemon-sprite-" + i} src = {data.sprites[i]} alt ={data.name}/>)
            }
        }
        return display
    }

    render(){
        var data = this.props.data
        return (
            <div className = "pokemon-display">
                <div className = "title-info">
                    <h1 className = "pokemon-name">{capitalize(data.name)}</h1>
                    <p className = "pokemon-number">#{data.id}</p>
                    <div className = "type">{this.displayTypes(data.types, "type")}</div>
                </div> 
                
                <div className = "pokemon-sprite">
                    {this.displaySprites.bind(this)(data)}
                </div>
                <div className = "core-info">
                    <div className = "pokemon-abilities">
                        <h1>Abilities</h1>
                        {this.displayTypes(data.abilities, "ability")}
                    </div>
                    <div className = "pokemon-moves">
                        <h1>Moves</h1>
                        {this.processList.bind(this)(data.moves, this.searchRequest)} 
                    </div>
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

    searchRequest(request, type){
        this.props.searchRequest(request, type)
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


class MoveDisplay extends React.Component{
    constructor(props){
        super(props)
        this.searchRequest = this.searchRequest.bind(this)
    }
    searchRequest(request, search){
        this.props.searchRequest(request, search)
    }  
    render(){
        return(
            <div className = "moves-container">
                <div className = "title-info">
                    <h1 className = "move-name">{"Move: " + capitalize(this.props.data.name)}</h1>
                    <p className = "move-id">#{this.props.data.id}</p>
                    <div className = "type" onClick = {()=>this.searchRequest(this.props.data.type.url, "type")}> {this.props.data.type.name}</div>

                </div>
                <div className = "core-info">
                    <p>Accuracy: {this.props.data.accuracy}</p>
                    <p>Power: {this.props.data.power}</p>
                    <p>PP: {this.props.data.pp}</p>
                </div>
            </div>
        )

    }
}

class ColorDisplay extends React.Component{

    displayTitle(){
        return(
            <div>
                <p>{"List of " + capitalize(this.props.data.name) + " Colored Pokemon"}</p>
                <p>{"Color ID: " + this.props.data.id}</p>
            </div>
        )
    }

    searchRequest(request){
        this.props.searchRequest(request, "pokemon")
    }  

    cleanUpLink(data){
        //we want to link to pokemon not pokemon-species
        return data.map(obj =>{
            let url = obj.url.split("")
            url.splice(33,8)
            obj.url = url.join("")
            return obj
        })
    }

    render(){

        return(
            <div className = "color-container">
                <div className = "title-info">
                    {this.displayTitle.bind(this)()}
                </div>
                <div className = "core-info">
                    {processList(this.cleanUpLink.bind(this)(this.props.data.pokemon_species), this.searchRequest.bind(this))}
                </div>
            </div>
        )
    }
}

class AbilityDisplay extends React.Component{

    
    searchRequest(request){
        this.props.searchRequest(request, "pokemon")
    }  

    cleanUp(data){
        return data.map(element => element.pokemon)
    }
    render(){
        
        return(
            <div className = "ability-container">
                <div className = "title-info">
                    <div className = "ability-name">
                        <h1>{this.props.data.name}</h1>
                        <p id = "ability-description">{this.props.data.effect_entries[0].effect}</p>
                    </div>
                </div>
                <div className = "core-info">
                    {processList(this.cleanUp(this.props.data.pokemon), this.searchRequest.bind(this))}
                </div>
            </div>
        )
    }
}


class TypeDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            displayType: "pokemon"
        }

    }

    searchRequest(request){
        this.props.searchRequest(request, this.state.displayType)
    }  

    cleanUp(data){
        return data.map(obj => obj.pokemon)
      
    }

    displayInfo(){
        if (this.state.displayType === "pokemon"){
            return(
                <div className = "type-pokemon-list">
                    <h1>{capitalize(this.props.data.name)} Pokemon</h1>
                    {processList(this.cleanUp.bind(this)(this.props.data.pokemon), this.searchRequest.bind(this))}
                </div>
            )
        }else if (this.state.displayType === "move"){
            return (
                <div className = "type-moves-list">
                    <h1>{capitalize(this.props.data.name)} Moves</h1>
                    {processList(this.props.data.moves, this.searchRequest.bind(this))}
                </div>
            )
        }else{
            return(
                <div className = "type-info">
                    <div className = "effective-against">
                        <p>Double Damage to: {processList(this.props.data.damage_relations.double_damage_to, this.searchRequest.bind(this))}</p>
                        <p>Half Damage from: {processList(this.props.data.damage_relations.half_damage_from, this.searchRequest.bind(this))}</p>
                    </div>
                    <div className = "weak-against">
                        <p>Half Damage to: {processList(this.props.data.damage_relations.half_damage_to, this.searchRequest.bind(this))}</p>
                        <p>Double Damage From: {processList(this.props.data.damage_relations.double_damage_from, this.searchRequest.bind(this))}</p>
                    </div>
                </div>
                    
            )
        }
    }

    viewPokemon(){
        this.setState({displayType: "pokemon"})
    }

    viewMoves(){
        this.setState({displayType: "move"})
    }

    viewInfo(){
        this.setState({displayType: "type"})
    }


    render(){

        return(
            <div className = "type-container">
                <div className = "title-info">
                    <h1 className = "type-name">{capitalize(this.props.data.name)}</h1>
                    <p className = "type-id">#{this.props.data.id}</p>
                </div>
                <div className = "core-info">
                    <div onClick = {this.viewPokemon.bind(this)}>Pokemon</div>
                    <div onClick = {this.viewMoves.bind(this)}>Moves</div>
                    <div onClick = {this.viewInfo.bind(this)}>Info</div>
                    {this.displayInfo.bind(this)()}
                </div>
            </div>
        )
    }
}


class RegionDisplay extends React.Component{

    
    render(){
        return(
            <div className = "region-container">
                <div className = "title-info">
                    <h1 className = "region-name">{capitalize(this.props.data.name)}</h1>
                    <h1 className = "region-id">Region ID:{this.props.data.id}</h1>
                </div>
                <div className = "core-info">
                    <div className = "locations">
                        {retreiveName(this.props.data.locations)}
                    </div>
                </div>
            </div>
        )
    }
}

class BerryDisplay extends React.Component{

    cleanUp(data){
        let flavors = data.slice()
        let usable = flavors.map(flavor => <p id = {flavor.flavor.name}>{capitalize(flavor.flavor.name)}</p>)
    
        return usable
    }

    render(){
        return(
            <div className = "berry-container">
                <div className = "title-info">
                    <h1 className = "berry-name">{capitalize(this.props.data.name)}</h1>
                    <p className = "berry-id">#{this.props.data.id}</p>
                </div>
                <div className = "core-info">
                    <div className = "flavor-list">
                        <p>Grow Time: {this.props.data.growth_time}</p>
                        <p>Firmness: {this.props.data.firmness.name}</p>
                        <p>Max Harvest: {this.props.data.max_harvest}</p>
                        <p>Size: {this.props.data.size}</p>
                        <p>Smoothness: {this.props.data.smoothness}</p>
                        <p>Soil Dryness: {this.props.data.soil_dryness}</p>
                        {(this.cleanUp(this.props.data.flavors))}
                    </div>
                </div>
            </div>
        )
    }

}

export {DisplayPokeList, PokeDisplay, ColorDisplay, MoveDisplay, AbilityDisplay, TypeDisplay, RegionDisplay, BerryDisplay, capitalize}