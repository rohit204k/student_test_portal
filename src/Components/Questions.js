import React, { Component } from "react";
import { questions, answerKeys } from "./Data";
import Question from "./Question";
import { Redirect } from "react-router";
import {Card,Button1 } from "./Authform";

export default class Questions extends Component {
  state = {
    answers: {},
    score: 0,
    showResults: false
  };

  onSubmit = () => {
    // Compare the answers array and answerKeys array to accordingly increment the value of result in order to get the final score
    let { answers, score } = this.state;
    Object.keys(answerKeys).forEach(el => {
      if (answerKeys[el] === answers[el]) {
        score++;
      }
    });
    this.setState({ score, showResults: true });
  };

  handleAnswer = (qid, aid) => {
    let { answers } = this.state;
    answers[qid] = aid;
    this.setState({ answers });
  };

  render() {
    const { showResults, score } = this.state;
    return (
      <div>
        {questions.map(question => (
          <Question
            key={question.id}
            data={question}
            handleAnswer={this.handleAnswer}
          />
        ))}
        <br />
        <Button1 type="button" className="btn" onClick={this.onSubmit}>
          Submit
        </Button1>
        {showResults && (
          <Redirect
            to={{
              pathname: "/results",
              state: { score }
            }}
          />
        )}
      </div>
    );
  }
}
