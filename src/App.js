import logo from './logo.svg';
import './App.css';
// import App2 from "./App2.js"
import React from "react"

class App extends React.Component{
  url = "http://google.com"
  constructor(){
    super();
    this.state = {
      title: "Hello Form Bridgelabz"
    }
  }
  
  onClick = ($event)=>{
    console.log("save button is clicked:");
    window.open(this.url,"_blank");
  }

  render (){
    return <div>
      <h1>{this.state.title}</h1>
      <img src={logo} alt="Logo" height="50px" width="50px" onClick={this.onClick}></img>
    </div>

  }
}
export default App;
