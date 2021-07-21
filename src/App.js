import React, { Component } from 'react';
import Header from "./components/Header"; 
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Quickmenu from "./components/Quickmenu";
import './App.css';



class App extends Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
        <Quickmenu></Quickmenu>
      </div>
    );
  }
}

export default App;
