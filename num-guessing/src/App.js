import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    //num to guess
    //guess guessed num
    //fb for feedback
    this.correctNum = Math.round(Math.random() * (101 - 1));
    this.score = 100;
    this.state = {
      fb: "",
      guess: "",
    };
    this.handleGuess = this.handleGuess.bind(this);
  }

  handleGuess(e) {
    e.preventDefault();
    let fb;
    if (this.state.guess < this.correctNum) {
      fb = "too low";
    } else if (this.state.guess > this.correctNum) {
      fb = "too high";
    } else {
      fb = `Correct! score: ${this.score}`;
    }
    this.setState({ fb }); //fb : fb
    this.score = this.score -9;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Number Guessing Game</h1>
          <p>{this.state.fb}</p>
          <p>Guess a number</p>
          <form onSubmit={this.handleGuess}>
            <label htmlFor="guess"></label>
            <input
              type="number"
              name="guess"
              id="guess"
              value={this.state.guess}
              onChange={(e) => this.setState({ guess: Number(e.target.value) })}
            />
            <button type="submit">Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
