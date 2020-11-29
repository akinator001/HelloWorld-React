import logo from './logo.svg';
import './App.css';
// import App2 from "./App2.js"
import React from "react"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      title: "Hello Form Bridgelabz"
    }
  }

  render (){
    return <div>
      <h1>{this.state.title}</h1>
      <img src={logo} alt="Logo" height="50px" width="50px"></img>
    </div>

  }
}
export default App;
