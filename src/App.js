import React, { Component } from "react";
import "./App.css";
import Todos from './components/Todos'

class App extends Component {
  render() {
    return <>
    <div className="container">
      <Todos/>
    </div>
    </>;
  }
}

export default App;
