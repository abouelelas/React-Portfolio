import React from 'react';
import Card from './Card';
import projects from '../data/projects.json';


function Portfolio(props) {

  return (

    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h1 className="section-heading text-uppercase">Portfolio</h1>
          <h3 className="section-subheading text-uppercase">Take a look at some of my projects.</h3>
        </div>
        <div className="row">
          {projects.map((proj, index) => {
            return <Card project={proj} key={index} />

          })}
        </div>
      </div>
    </section>



  )
}
export default Portfolio;
