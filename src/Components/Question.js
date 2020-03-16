import React, { Component } from "react";
// import QuestionDataService from '../Services/QuestionDataService'
import { Div } from "./Authform";

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
        console.log(this.state.selectedOption)
        
        handleAnswer(data, this.state.selectedOption );
      }
    );
  };

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      message: null
    }
    // this.refreshQuestions = this.refreshQuestions.bind(this)
  }

  // componentDidMount() {
  //     this.refreshQuestions();
  // }

  // refreshQuestions() {
  //   QuestionDataService.retrieveAllQuestions()//HARDCODED
  //         .then(
  //             response => {
  //                 console.log(response.data);
  //                 //this.setState({ questions: response.data })
  //             }
  //         )
  // }

  render() {
    const { data } = this.props;
    return (
      <Div>
        <h3>
          {data.qno}. {data.question}
        </h3>
          <label>
            <input
              type="radio"
              // key={option.id}
              value="a"
              checked={this.state.selectedOption === "a"}
              onChange={this.handleOptionChange}
            />
            {data.a}
          </label>
          <br />
          
          <label>
            <input
              type="radio"
              // key={option.id}
              value="b"
              checked={this.state.selectedOption === "b"}
              onChange={this.handleOptionChange}
            />
            {data.b}
          </label>
          <br />

          <label>
            <input
              type="radio"
              // key={option.id}
              value="c"
              checked={this.state.selectedOption === "c"}
              onChange={this.handleOptionChange}
            />
            {data.c}
          </label>
          <br />

          <label>
            <input
              type="radio"
              // key={option.id}
              value="d"
              checked={this.state.selectedOption === "d"}
              onChange={this.handleOptionChange}
            />
            {data.d}
          </label>
          <br />

      </Div>
    );
  }
}
export default Question;
