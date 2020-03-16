import React, { Component, useState, useEffect } from "react";
import "./CourseList.css";
import CourseDataService from "../Services/CourseDataService";
import { Redirect } from "react-router";
import { Card, Button ,Button1} from "./Authform";
import { Link } from "react-router-dom";


class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            message: null,
            startTest: false
        };
        this.getAllCourses = this.getAllCourses.bind(this);
    }
    componentDidMount() {
        this.getAllCourses();
    }

    getAllCourses() {
        CourseDataService.retrieveAllCourses().then(response => {
            console.log("reached")
            this.setState({ courses: response.data });
        });
    }
    handleTest = (event, name) => {
        window.localStorage.setItem("courseName", name)
        this.setState({
            startTest: true
        });
    };
    render() {
        return (
            <div className="container">
                <h3 style={{ textAlign: "center" }}>Available Courses</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map((course, index) => (
                            <tr key={course.courseID}>
                                <td>{course.courseID}</td>
                                <td>{course.courseName}</td>
                                <td>

                                    <Button className="buttonClass" onClick={(event) => this.handleTest(event, course.courseName)}>
                                        Take Test Now!
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><Link to="/">
                    <Button1 className="btn1">Log Out</Button1>
                </Link></div>
                {this.state.startTest && (
                    <Redirect
                        to={{
                            pathname: "/startpage",
                            // state: { courseID }
                        }}
                    />
                )}
            </div>
        );
    }
}
export default Courses;