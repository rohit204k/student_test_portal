import React, { Component, useState, useEffect } from "react";
import "./CourseList.css";
import CourseDataService from "../Services/CourseDataService";
import { Redirect } from "react-router";
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
    handleTest = () => {
        this.setState({
            startTest: true
        });
    };
    render() {
        return (
            <div className="container">
                <h3>Available Courses</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Test Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map(course => (
                            <tr key={course.courseID}>
                                <td>{course.courseID}</td>
                                <td>{course.courseName}</td>
                                <td>{course.date}</td>
                                <td>
                                    <button className="buttonClass" onClick={this.handleTest}>
                                        Take Test Now!
                  </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        
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