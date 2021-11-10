import { Component } from 'react';
import './style.css';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      timer: 60
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    if (this.state.timer === 0){
        clearInterval(this.timerID)
    }
  }

  tick = () => {
    this.setState({ timer: --this.state.timer })
  }

  render() {
    return (
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
        <h2>{this.state.timer}</h2>
      </div>
    )
  }
}