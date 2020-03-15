import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './Components/Authform.js';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import {BrowserRouter as Router,Route} from 'react-router-dom';
//import {Route} from 'react-router-dom';
import {AuthContext} from './Context/auth';
import CourseList from "./Components/CourseList"
import StartPage from './Components/StartPage';
import Questions from "./Components/Questions";
import Results from "./Components/Results";

function App(props) {
  
  return (
  
    <AuthContext.Provider value={false}>
      
      <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} /> 
          {/* <Route path="/student" exact component={ StudentDataService } /> */}
          <Route exact path="/courses" component={CourseList}/>
          <Route exact path="/startpage" component={StartPage}/>
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/results" component={Results} />
           
       </Router>
       </AuthContext.Provider>
  )}
export default App;
