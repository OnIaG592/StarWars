import './App.css';
import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Header from './components/Main/Header/header';
import MainContainer from './components/Main/MainContainer/mainContainer';



class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      people : "https://swapi.dev/api/people",
      planets : "https://swapi.dev/api/planets",
      films : "https://swapi.dev/api/films",
      species  : "https://swapi.dev/api/species ",
      vehicles : "https://swapi.dev/api/vehicles",
      starships : "https://swapi.dev/api/starships",
      data : [],
    }
  }


  render(){
    return (
     <Router>
       <Header/>
       <MainContainer/>
     </Router>

    )
  }
}

export default App;
