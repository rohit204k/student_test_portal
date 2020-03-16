import React, { Component } from "react";
import { questions, answerKeys } from "./Data";
import Question from "./Question";
import { Redirect } from "react-router";
import axios from 'axios'
import { API_URL } from '../configuration'
import {Card,Button1 } from "./Authform";

export default class Questions extends Component {
  state = {
    answers: {},
    queOb:{},
    score: 0,
    showResults: false
  };
  fetchQuestionData(name) {
    let fetchQuestionUrl = API_URL.QUESTION_API_URL + '/' + name;
    axios.get(fetchQuestionUrl).then(response => {
      this.setState({ queOb: response.data })
      console.log(response)
    })
  }
  componentDidMount() {
    this.fetchQuestionData(window.localStorage.getItem("courseName"))

  }
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
