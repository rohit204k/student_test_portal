import React from "react";
import { Link } from 'react-router-dom';
import { Card, Form, Input, Button } from '../Components/Authform';

function Signup() {
  return (
    <Card>
     <h1>Student Signup Page</h1>
      <Form>
        <label for = "studID">Student ID:</label> 
        <Input type="text" id="studID" placeholder="eg: 1EL16DW001" />
        <label for = "fname">First Name:</label> 
        <Input type="text" id="fname" placeholder="First Name" />
        <label for = "lname">Last Name:</label> 
        <Input type="text" id="lname" placeholder="Last Name" />
        <label for = "email">Email-ID:</label> 
        <Input type="email" id="email" placeholder="Email" />
        <label for = "password">Password</label> 
        <Input type="password" id="password" placeholder="Password" />
        <label for = "cpassword">Confirm Password</label> 
        <Input type="password" id="cpassword" placeholder="Password Again" />
        <Button>Sign Up</Button>
      </Form>
      
    </Card>
  );
}

export default Signup;