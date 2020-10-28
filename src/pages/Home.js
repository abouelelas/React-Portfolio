import React from 'react';
import projects from "../data/projects.json";
// import Card from "../components/Card";
import {header} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import './styles.css';
function Home (){
    console.log(projects);
  return (
      <>
  <header class="masthead">
        <div className="container">
            <div className="masthead-subheading">Welcome To Sarah's Portfolio!</div>
            <div className="masthead-heading text-uppercase">Full-Stack Engineer</div>
            <li> <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to= "/portfolio">Find Out More</Link></li>
        </div>
    </header>
    </>
)

}
export default Home;