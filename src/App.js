import './App.css';
import React from "react"
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom"
import  Users  from './screen/Users/Users';
import Home from './screen/main/Home';
import Header from './screen/header/Header';

const App =()=> {

    return (
      <Router>
        <Header/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/users" component={Users}></Route>
      </Router>
    )
  }

export default App;
