import './App.css'
import React, { Component } from "react"
class App extends Component {
  state = {
    count: 0
  }




  add = () => {
    const{count} = this.state
    if (count < 10){
      this.setState({
        count: count + 1
      })
    }
  };

  remove = () => {
    const {count} = this.state
    if(count > 0){
      this.setState({
        count: count - 1
      })
    }
  };

  render() {
    const {count} = this.state
    const{add, remove} = this
    return (
      <div class="container">
      <h1>contador</h1>
        <button onClick={add}>+</button>
        <h2> {count}  </h2>
        <button onClick={remove}>-</button>
      </div>
    );
  }
}

export default App;

