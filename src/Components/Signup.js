import React from "react";
import { Link } from 'react-router-dom';
import { Card, Form, Input, Button } from '../Components/Authform';
import axios from 'axios'
import { Redirect } from "react-router-dom"
import { API_URL } from '../configuration'

const Signup = () => {
  let stat
  const [student, setStudent] = React.useState({})
  const [signup, setsignup] = React.useState(false)

  const handleInputChange = (e) => setStudent({
    ...student,
    [e.currentTarget.name]: e.currentTarget.value
  })

  async function addStudents(e) {
    e.preventDefault();
    const STUDENT_URL = `${API_URL.STUDENT_API_URL}`
    if (student.password === student.cpassword) {
      await axios.post(`${STUDENT_URL}`, { studID: student.studID, fName: student.fname, lName: student.lname, email: student.email, password: student.password })
        .then(
          response => {
            console.log(response)
            stat = response.status
            setsignup(true)
            alert("Signup Successful. Click to Login again.")
            setsignup(true)
          }
        ).catch(error => alert("Some error occured. Please try again"))
    }
    else
      document.getElementById('error').style.display = 'block'


  }
  console.log(student)

  var linkStyle = {
    margin: "2.25rem",
  }


  return (
    <Card>

      <h1 style={{ textAlign: "center" }}>Student Signup Page</h1>
      <Form>
        <label for="studID">Student ID:</label>
        <Input type="text" id="studID" name="studID" onChange={handleInputChange} placeholder="eg: 1EL16DW001" required />
        <label for="fname">First Name:</label>
        <Input type="text" id="fname" name="fname" onChange={handleInputChange} placeholder="First Name" required />
        <label for="lname">Last Name:</label>
        <Input type="text" id="lname" name="lname" onChange={handleInputChange} placeholder="Last Name" required />
        <label for="email">Email-ID:</label>
        <Input type="email" id="email" name="email" onChange={handleInputChange} placeholder="Email" required />
        <label for="password">Password</label>
        <Input type="password" id="password" onChange={handleInputChange} name="password" placeholder="Password" required />
        <label for="cpassword">Confirm Password</label>
        <Input type="password" id="cpassword" onChange={handleInputChange} name="cpassword" placeholder="Password Again" required />
        <span id="error" className="text text-danger">Passwords don't match. Please try again.</span>
        <span id="error1" className="text text-danger">Some error occured. Please try again</span>
        <Button onClick={(e) => addStudents(e)}>Sign up</Button>
        <Link style={linkStyle} to="/">Have an account already? Login</Link>
      </Form>
      {signup && <Redirect
        to={{
          pathname: "/",
        }} />}
    </Card>
  );
}

export default Signup;