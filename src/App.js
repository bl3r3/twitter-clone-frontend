import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { Main } from './Components/Main'
import {FrontPage} from './Components/FrontPage';
import {Login} from './Components/Login'
import {SignUp} from './Components/SignUp'
import ProtectedRoute from './Components/ProtectedRoute'




function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <ProtectedRoute component={Main} path="/feed" />
        </Switch>
      </Router>
      
      
      
    </div>
  );
}

export default App;
