import React from 'react';
import projects from "../data/projects.json";
import Portfolio from "../components/Portfolio";

function Home (){
    console.log(projects);
  return (
      <>
 <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Take a look at some of my projects.</h3>
            </div>
            <div className="row">
{projects.map((proj, index) => {
    return <Portfolio project={proj} key={index}/>

})}
    </div>
    </div>
    </section>
</>
  )



}






export default Home;