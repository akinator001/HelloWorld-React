import logo from './logo.svg';
import './App.css';
// import App2 from "./App2.js"
import React from "react"

class App extends React.Component{
  url = "http://google.com"
  constructor(){
    super();
    this.state = {
        userName:""
    }
  }
  
  onClick = ($event)=>{
    console.log("save button is clicked:");
    window.open(this.url,"_blank");
  }

  onNameChange = (event)=>{
    console.log("value is ", event.target.value);
    this.setState({ userName: event.target.value})
  }

  render (){
    return <div>
      <div>
        <h1> Hello {this.state.userName} from BridgeLabz</h1>
      <img src={logo} alt="Logo" height="50px" width="50px" onClick={this.onClick}></img>
      </div>
      <div>
        <input onChange={this.onNameChange} />
      </div>
    </div>

  }
}
export default App;
