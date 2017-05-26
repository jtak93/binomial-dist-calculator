import React, { PropTypes, Component } from 'react';
import logo from './logo.svg';
import './style.css';

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      n: 0,
      p: 0,
      answer:null,
      error:""
    };

    this.handleNChange = this.handleNChange.bind(this);
    this.handleXChange = this.handleXChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  handleNChange(event) {
    console.log(event)
    this.setState({n: Number(event.target.value)});
  }

  handleXChange(event) {
    this.setState({x: Number(event.target.value)});
  }

  handlePChange(event) {
    this.setState({p: Number(event.target.value)});
  }

  calculate() {
    let n = this.state.n;
    let x = this.state.x;
    let p = this.state.p;
    // handle validations and bad user input
    // check for valid ranges
    if (p > 1 || p < 0) {
      this.setState({
        error: "Enter a valid probability decimal range of 0 to 1",
        answer: null
      })
      return;
    }
    if (x > n) {
      this.setState({
        error: "Number of Trials must be greater than attempted successes",
        answer: null
      })
      return;
    }
    let diff = n - x
    let probability = (factorial(n) / (factorial(x) * factorial(diff))) * Math.pow(p, x) * Math.pow((1 - p), diff)
    this.setState({
      answer: probability,
      error: ""
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Binomial Distribution Calculator</h2>
        </div>
        Number of Trials:<input type="number" placeholder="number of trials" onChange={this.handleNChange}/><br/>
        Number of Successful Trials<input type="number" placeholder="number of successes" onChange={this.handleXChange}/><br/>
        Probability of success for one trial<input type="number" placeholder="probability of success for any trial" onChange={this.handlePChange}/><br/>

        <button onClick={this.calculate}>Calculate</button><br/>
        <h4 className="error">{this.state.error}</h4>
        <h1>{(this.state.answer * 100).toFixed(3)}%</h1>

      </div>
    );
  }
}

export default App;
