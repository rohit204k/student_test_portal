import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Div,Button1 } from "./Authform";

const StartPage = () => {
  return (

    <Div className="startcard">

      <h1 style={{ textAlign: "center" }}>Take your test</h1>
      <Card>
        <table className="starttable">
          <tr>
            <td>
              <p style={{ textAlign: "center" }}>
                <h3> INSTRUCTIONS</h3><br />
                <p>1. Read the question and choose the right answer. </p>
                <p>2. Each question carries 1 mark.</p>
                <p>3. There is no negative marking.</p>

              </p>
              <Link to="/questions">
                <Button className="btn">Start test</Button>
              </Link>
            
            </td>
          </tr>
        </table>
      </Card>

    </Div>

  );
};
export default StartPage;
