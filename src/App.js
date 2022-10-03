import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import TeamPage from "./Pages/Team/TeamPage";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";
import Projects from "./Pages/Projects/Projects";
import Navbar from "./components/Navbar";
import Catalyst from "./Pages/Catalyst/Catalyst";
import ScrollToTop from "./utils/ScrollToTop";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import PreIncubation from "./Pages/PreIncubation/preIncubation";

const App = () => {
    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/team" component={TeamPage} />
                    <Route path="/case-study" component={CaseStudy} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/catalyst" component={Catalyst} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route path="/PreIncubation" component={PreIncubation} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
