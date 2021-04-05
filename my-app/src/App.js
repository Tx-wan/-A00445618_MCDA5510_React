import React, { Component } from "react";

import './App.css';
import Myself from './components/Myself';
import Mytown from "./components/Mytown";

class App extends Component{ 
  constructor(props) {
      super(props)
      this.state = {
        selectedMenu: 'm'
      }
  }


  render() {
    return (
      <div className="App">

        <div className="menu">
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'm'})}>About Me</p>
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 't'})}>My Town</p>
        </div>

        {this.state.selectedMenu === 'm' ?
          <Myself/>
          :
            <Mytown/>
        }
        
      </div>
    );
  }
}

export default App;
