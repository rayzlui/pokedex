import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './search.js'
import Options from './options'
import {DisplayPokeList, PokeDisplay, ColorDisplay, MoveDisplay, AbilityDisplay, TypeDisplay, RegionDisplay, BerryDisplay}from './display'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchby: "pokemon",
      search: "",
      data: null,
      previous: [],
      backward: 0

    }

    this.retreiveData = this.retreiveData.bind(this)
    this.searchRequest = this.searchRequest.bind(this)
  }

  changeSearchBy(type){
    type = type === "number" ? "pokemon" : type
    type = type === "color" ? "pokemon-color" : type
    this.setState({searchby: type, search: "", data: null})
  }

  updateInput(value){
    this.setState({search: value})
  }

  backFunc(){
    
    let back = this.state.backward
    if (back === -(this.state.previous.length)){
      alert("Nothing else back")
    }else{
      back-=1
      
      let previous = this.state.previous[(this.state.previous.length)+back]
      this.setState({searchby: previous.searchby, data: previous.data, backward: back})
    }
  }

  forwardFunc(){
    let back = this.state.backward
    if (back===0){
      alert("You need to go back before going front")
    }else{
      back+=1
      let previous = this.state.previous[this.state.previous.length+back]
      this.setState({searchby: previous.searchby, data: previous.data, backward: back})
    }
  }

  processData(){
    if (this.state.data){
      
      if (this.state.data.count){       
        return <DisplayPokeList searchby = {this.state.searchby} searchRequest = {this.searchRequest} data = {this.state.data}/>
      }else{
        return this.displayParameters(this.state.searchby)
      }
    }else{
      return null 
    }
  }

  displayParameters(search){
    
    switch (search) {
      case ("pokemon"):
        return <PokeDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>

      case ("move"):
        return <MoveDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>

      case ("pokemon-color"):
        return <ColorDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>

      case ("ability"):
        return <AbilityDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>
       
      case ("type"):
        return <TypeDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>
      
      case ("region"):
        return <RegionDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>
    
      default :
        return <BerryDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>
    }
       
  }

  async searchRequest(request = "https://pokeapi.co/api/v2/" + this.state.searchby+ "/" + this.state.search, type = this.state.searchby){
    var response = await this.retreiveData(request)
    let previous = this.state.previous
    await previous.push({searchby: this.state.searchby, data: this.state.data})
    await this.setState({data: response, searchby: type, search: "", previous: previous})
  }

 
  


  async retreiveData(request){
    try{
      let response = await fetch(request)
      if (response.status === 200){
        let data = await response.json()
        return data
      }else{
        alert(`Unable to find your request. Please try again.`)
      }  
    }catch{
      alert("Unable to connect to server")
    }
  }

  dynamicCss(){
    if (this.state.data=== null){
      return 'data-container-null'
    }else{
      return "data-container"
    }
  }


  render(){

    return(
      
      <div className = "pokecontainer" >
        <span className = "back-button">
          <button onClick = {this.backFunc.bind(this)}>Back</button><button onClick = {this.forwardFunc.bind(this)}>Forward</button>
        </span>
        <div className = "header">
          <h1 className = "pokemon-title">Pokedex</h1>
        </div>
        <div className = "poke-data">
          <div className = "search-parameters">
              <Options changeSearchBy = {this.changeSearchBy.bind(this)}/>
              <SearchBar updateInput = {this.updateInput.bind(this)} search = {this.state.searchby} value = {this.state.input} searchRequest = {this.searchRequest}/>
          </div>
          <div className = {this.dynamicCss.bind(this)()}>
            {this.processData.bind(this)()}
          </div>
        </div>

        

      </div>
    )
  }
}
export default App;
