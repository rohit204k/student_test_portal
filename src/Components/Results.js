import React, { Component } from "react";
import axios from 'axios'
import { API_URL } from '../configuration'
import {Card,Button } from "./Authform";
import { Link } from "react-router-dom";


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studOb:{},
      courOb:{}
    }

  };
  fetchStudentData(id) {
    let fetchStudentUrl = API_URL.STUDENT_API_URL + '/' + id;
    axios.get(fetchStudentUrl).then(response => {
      this.setState({ studOb: response.data })
    })
  }
  fetchCourseData(name) {
    let fetchCourseUrl = API_URL.COURSE_API_URL + '/' + name;
    axios.get(fetchCourseUrl).then(response => {
      this.setState({ courOb: response.data })
    })
  }
  componentDidMount() {
    this.fetchStudentData(window.localStorage.getItem("studID")
  
    )

  }
  componentWillUnmount(){
    window.localStorage.clear();
  }
  render() {
    let { studOb } = this.state;
    return this.props.location.state ? (
      <>
       <Card>
       <table className="resulttable">
        <tr>
         <td>
        <div>{`Name: ${studOb.fName} ${studOb.lName}`}</div>
        </td>
        </tr>
        <tr><td>
        <div>{`Your score is : ${this.props.location.state.score}`} </div>
        </td></tr>
        <tr><td>
        <div><Link to="/">
        <Button className="btn">Log Out</Button>
      </Link></div>
      </td></tr>
      </table>
      </Card>
      </>
    ) : (
        <h1> 404 Page</h1>
      );
  }
}

export default Results;
