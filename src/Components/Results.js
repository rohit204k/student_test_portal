import React, { Component } from "react";
import axios from 'axios'
import { API_URL } from '../configuration'
import {Card,Button } from "./Authform";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studOb:{}
    }

  };
  fetchdata(id) {
    let fetchStudentUrl = API_URL.STUDENT_API_URL + '/' + id;
    axios.get(fetchStudentUrl).then(response => {
      this.setState({ studOb: response.data })
    })
  }
  componentDidMount() {
    this.fetchdata(window.localStorage.getItem("studID"))

  }
  componentWillUnmount(){
    window.localStorage.clear();
  }
  render() {
    let { studOb } = this.state;
    return this.props.location.state ? (
      <>
       <Card>
        <div>{`Name: ${studOb.fName} ${studOb.lName}`}</div>
        <div>{`Your score is ${this.props.location.state.score}`} </div>
      </Card>
      </>
    ) : (
        <h1> 404 Page</h1>
      );
  }
}

export default Results;
