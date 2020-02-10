import React from 'react'

class App extends React.Component {

  state = {
    number: 0
  }
  increment = () => {
    this.setState(numbers => ({
      number: numbers.number + 1
    }))
  }
  decrement = () => {
    this.setState(numbers => ({
      number: numbers.number - 1
    }))
  }
  render() {
    return (
      <div>
        <h1>Hello React Component</h1>
        <h3>Number : {this.state.number}</h3>
        <button onClick={this.increment}>Increment Number</button>
        <button onClick={this.decrement}>Decrement Number</button>
      </div>
    )
  }
}

export default App