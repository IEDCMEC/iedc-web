import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import TeamPage from './Pages/Team/TeamPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/" component={ Landing } />
          <Route path="/team" component={ TeamPage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
