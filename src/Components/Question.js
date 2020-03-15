import React, { Component } from "react";
import QuestionDataService from '../Services/QuestionDataService'
import {Div } from "./Authform";

class Question extends Component {
  state = {
    selectedOption: undefined
  };
  handleOptionChange = event => {
    const { data, handleAnswer } = this.props;
    return this.setState(
      {
        selectedOption: event.target.value
      },
      () => {
        const id = data.options.find(
          option => option.value === this.state.selectedOption
        ).id;
        handleAnswer(data.id, id);
      }
    );
  };

  constructor(props) {
    super(props)
    this.state = {
        questions: [],
        message: null
    }
    this.refreshQuestions = this.refreshQuestions.bind(this)
}

componentDidMount() {
    this.refreshQuestions();
}

refreshQuestions() {
  QuestionDataService.retrieveAllQuestions()//HARDCODED
        .then(
            response => {
                console.log(response.data);
                //this.setState({ questions: response.data })
            }
        )
}

  render() {
    const { data } = this.props;
    return (
      <Div>
        <h3>
          {data.id}. {data.question}
        </h3>
        {data.options.map(option => {
          return (
            <div key={option.id}>
              <label>
                <input
                  type="radio"
                  key={option.id}
                  value={option.value}
                  checked={this.state.selectedOption === option.value}
                  onChange={this.handleOptionChange}
                />
                {option.value}
              </label>
              <br />
            </div>
          );
        })}
      </Div>
    );
  }
}
export default Question;
