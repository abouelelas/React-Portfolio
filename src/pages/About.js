import React from 'react';
// import {Link, Card} from 'react-router-dom';
import Resume from "../assets/resume2020.pdf";
function About (props){

  return (
    
    
    <section className= "page-section" id="about">
            <div className= "container">
                <div className= "text-center">
                    <h2 className= "section-heading text-uppercase">Brand Statement</h2>
                    <h3 className= "section-subheading text-muted">Teaching is one of the most rewarding professions and I was so
                        proud to be a part of it. I held an engaging classroom environment that was fit for all students and
                        their learning styles. Students developed as learners and progressed with positive reinforcement. As
                        a potential full stack developer, it will be possible to join both worlds of education and
                        technology to benefit students in this ever changing world.
                    </h3>
                    <li> <a href= {Resume} target="_blank" rel="noopener noreferrer"> Resume </a></li>
                </div>
    
            </div>
        </section>
    
      )
    
    
    
    }
    export default About;