import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Card, Logo, Form, Input, Button } from '../Components/Authform';
import { Redirect } from "react-router-dom"
import axios from 'axios'
const DB_URL = 'http://localhost:8080'
const Student_API_URL = `${DB_URL}/student`
// import {retrieveStudents} from '../Services/StudentDataService';

const Login = () => {

  let stu = {}
  const [id, setID] = React.useState("")
  const [login, setLogin] = React.useState(false)
  const [password, setPassword] = React.useState("")

  const [student, setStudent] = React.useState({})





  async function retrieveStudents(e) {
    e.preventDefault();
    const API_URL = `${Student_API_URL}/${id}`

    await axios.get(`${API_URL}`) 
      .then(
        response => {

          stu = response.data
                  }
      ).catch(error => console.log(error))

    
    if (password === stu.password) {
      console.log("DONE!!")
      setLogin(true);
    }
    else
      alert("Login Failed!");
  }


  return (
    <>
      <Card>
        <form onSubmit={(e) => retrieveStudents(e)}>
          <h1>Student Login Page</h1>
          <label for="studID">Student ID:</label>
          <Input type="text" placeholder="eg: 1EL16DW001" value={id} onChange={(e) => setID(e.target.value.toUpperCase())}></Input>
          <br></br><label for="password">Password: </label>
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Sign In</Button>
        </form>
        <Link to="/signup">Don't have an account?Sign up</Link>
      </Card>
      
      {login && <Redirect
        to={{
          pathname: "/courses",
          state: { id: id }
        }} />}
    </>
  );
}
export default Login;