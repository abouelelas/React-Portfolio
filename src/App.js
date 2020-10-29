import React from 'react';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio"
import Background from "./assets/img/background2.jpg";
// import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  console.log({Background});
  return (
    
    <Router>
    
      <div className="App background" style={{backgroundImage: `url(${Background})`, height: "100vh"}}>
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path={["/about"]}>
            <About />
          </Route>
          <Route exact path={["/contact"]}>
            <Contact />
          </Route>
          <Route exact path={["/portfolio"]}>
            <Portfolio />
          </Route>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
