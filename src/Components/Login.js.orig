import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Card,Input, Button } from '../Components/Authform';
import { Redirect } from "react-router-dom"
import axios from 'axios'
import { API_URL } from '../configuration'

const Login = () => {

  let stu = {}
  const [id, setID] = React.useState("")
  const [login, setLogin] = React.useState(false)
  const [password, setPassword] = React.useState("")

  const [student, setStudent] = React.useState({})

  async function retrieveStudents(e) {
    e.preventDefault();
    const STUDENT_URL = `${API_URL.STUDENT_API_URL}/${id}`

    await axios.get(`${STUDENT_URL}`)
      .then(
        response => {
          stu = response.data
        }
      ).catch(error => console.log(error))

    if (password === stu.password) {
      console.log("DONE!!")
      window.localStorage.setItem("studID",stu.studID);
      setLogin(true);
    }
    else
      alert("Login Failed!");
  }

  var linkStyle = {
    margin: "2.25rem",
  }

  return (
    <div className="loginCard">
      <table className="loginTable">
        <tbody>
          <tr>
            <td>
              <h2 style={{textAlign:"center"}}>Student Login Page</h2>
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                placeholder="Student Id"
                value={id}
                onChange={(e) => setID(e.target.value.trim().toUpperCase())}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button type="submit" onClick={(e) => retrieveStudents(e)}>Sign In</Button>
            </td>
          </tr>
          <tr>
            <td>
              {/* {validationErrorMessage} */}
            </td>
          </tr>
          <tr>
            <td>
              <Link style={linkStyle} to="/signup">Don't have an account?Sign up</Link>
            </td>
          </tr>
        </tbody>
      </table>
      {login && <Redirect
        to={{
          pathname: "/courses",
          state: { id: id }
        }} />}
    </div>
  );
}
export default Login;
