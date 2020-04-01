import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/" component={ Landing } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
