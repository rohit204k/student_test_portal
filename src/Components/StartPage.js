import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div>
      <h2>Take your test.</h2>
      <p>
        <b>Choose the right answer.</b>
      </p>
      <Link to="/questions">
        <button className="btn">Start Test</button>
      </Link>
    </div>
  );
};
export default StartPage;
