import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './search.js'
import Options from './options'
import {DisplayPokeList, PokeDisplay, ColorDisplay, MoveDisplay} from './display'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchby: "Pokemon",
      search: "",
      data: null

    }

    this.retreiveData = this.retreiveData.bind(this)
    this.searchRequest = this.searchRequest.bind(this)
  }

  changeSearchBy(type){
    type = type === "Number" ? "Pokemon" : type
    type = type === "Color" ? "Pokemon-color" : type
    this.setState({searchby: type, search: "", data: null})
  }

  updateInput(value){
    this.setState({search: value})
  }

  processData(){
    if (this.state.data){
      if (this.state.data.count){
      //this means that it's a list of objects we want to show a list that allows pagination
        
        return <DisplayPokeList searchRequest = {this.searchRequest} data = {this.state.data}/>
      }else{
        //this means it returned one object, this we run pokedex on.
        return this.displayParameters(this.state.searchby)
      }
    }else{
      //this means there's no data.
      return null 
    }
  }

  displayParameters(search){
    switch (search) {
      case ("Pokemon"):
        return <PokeDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>

      case ("Move"):
        return <MoveDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>

      case ("Pokemon-color"):
        return <ColorDisplay searchRequest = {this.searchRequest} data = {this.state.data}/>

      case ("Ability"):
        return //<AbilityDisplay/>
       
      case ("Type"):
        return //<TypeDisplay/>
      
      case ("Region"):
        return //<RegionDisplay/>
    
      default :
        return //<BerryDisplay/>
    }
       
  }

  async searchRequest(request = "https://pokeapi.co/api/v2/" + this.state.searchby.toLowerCase() + "/" + this.state.search, type = this.state.searchby){
    
    var response = await this.retreiveData(request)
    await this.setState({data: response, searchby: type, search: ""})
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


  render(){
    return(
      <div className = "pokecontainer">
        <div className = "header">
          <h1 className = "pokemon-title">Pokedex</h1>
        </div>
        <div className = "poke-data">
          <div className = "search-parameters">
              <Options changeSearchBy = {this.changeSearchBy.bind(this)}/>
              <SearchBar updateInput = {this.updateInput.bind(this)} search = {this.state.searchby} value = {this.state.input} searchRequest = {this.searchRequest}/>
          </div>
          <div className = "data-container">
            {this.processData.bind(this)()}
          </div>
        </div>

        

      </div>
    )
  }
}
export default App;
