import React from "react";
import { Link } from 'react-router-dom';
import { Card, Form, Input, Button } from '../Components/Authform';

const Signup=()=>{
  let stu = {}
  const [student, setStudent] = React.useState({})

  const handleInputChange = (e) => setStudent({...student,
    [e.currentTarget.name]: e.currentTarget.value
  })

  console.log(student)

  return (
    <Card>
     <h1 style={{textAlign:"center"}}>Student Signup Page</h1>
      <Form>
        <label for = "studID">Student ID:</label> 
        <Input type="text" id="studID" name="studID" onChange={handleInputChange} placeholder="eg: 1EL16DW001" />
        <label for = "fname">First Name:</label> 
        <Input type="text" id="fname" name="fname" onChange={handleInputChange} placeholder="First Name" />
        <label for = "lname">Last Name:</label> 
        <Input type="text" id="lname" name="lname" onChange={handleInputChange} placeholder="Last Name" />
        <label for = "email">Email-ID:</label> 
        <Input type="email" id="email" name="email" onChange={handleInputChange} placeholder="Email" />
        <label for = "password">Password</label> 
        <Input type="password" id="password" onChange={handleInputChange} name="password" placeholder="Password" />
        <label for = "cpassword">Confirm Password</label> 
        <Input type="password" id="cpassword" onChange={handleInputChange} name="password" placeholder="Password Again" />
        <Button>Sign Up</Button>
      </Form>
      
    </Card>
  );
}

export default Signup;