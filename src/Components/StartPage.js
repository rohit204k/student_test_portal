import React from "react";
import { Link } from "react-router-dom";
import {Card,Button,Div } from "./Authform";

const StartPage = () => {
  return (
    
    <Div className="startcard">
      
            <h1 style={{textAlign:"center"}}>Take your test.</h1>
            <Card>
            <table className="starttable">
        <tr>
      <td>
    <p style={{textAlign:"center"}}>
    <b> INSTRUCTIONS - </b><br/>
    <p>1. Read the question and choose the right answer. </p> 
    <p>2. Each questoin carries 1 mark.</p> 
    <p>3. There is no negative marking.</p> 
    <p>4. Answer every question before submitting.</p>
  </p>
      <Link to="/questions">
    <Button className="btn">Start Test</Button>
  </Link>
      </td>
    </tr>
    </table>
    </Card>
      
    </Div>
  
  );
};
export default StartPage;
