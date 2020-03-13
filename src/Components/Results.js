import React, { Component } from "react";


class Results extends Component {


  render() {
    return this.props.location.state ? (
      <div>{`Your score is ${this.props.location.state.score}`} </div>
    ) : (
      <h1> 404 Page</h1>
    );
  }
}

export default Results;
