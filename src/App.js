import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import TeamPage from "./Pages/Team/TeamPage";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";
import Projects from "./Pages/Projects/Projects";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/team" component={TeamPage} />
                    <Route path="/case-study" component={CaseStudy} />
                    <Route path="/projects" component={Projects} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
