import React from "react";
import { Link } from "react-router-dom";
import {Card,Button } from "./Authform";

const StartPage = () => {
  return (
    <Card>
    <div style={{textAlign:"center"}}className="startcard">
      <table className="starttable">
        <tr>
          <td>
            <h1>Take your test.</h1>
          </td>
        </tr>
        <tr>
          <td>
            Choose the right answer.
          </td>
        </tr>
        <tr>
          <td>
          <Link to="/questions">
        <Button className="btn">Start Test</Button>
      </Link>
          </td>
        </tr>
      </table>
    </div>
  </Card>
  );
};
export default StartPage;
