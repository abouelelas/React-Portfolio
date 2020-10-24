import React from 'react';
// import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Background from "../assets/img/background2.jpg";
// import "import 'bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    
    <Router>
      <div>
     className="test" style={{backgroundImage: `url("${Background}")`}}>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
