import React from 'react';
import Background from "../assets/img/background3.jpg";
function Contact (){
  return (
    <section className= "page-section" id="contact">
      <div className="App background" style={{backgroundImage: `url(${Background})`}}></div>
    <div className= "container">
        <div className= "text-center">
            <h2 className="section-heading text-uppercase">Contact Me</h2>
            <h3 className="section-subheading text-uppercase">Leave me a shout below.</h3>
            <h4 className="section-subheading text-uppercase">Cell: 917-495-8111</h4>
                    <a href="mailto:abouelelas@gmail.com" target="_blank" rel="noopener noreferrer">SEND EMAIL</a>
                    </div>
                    </div>

                    </section>

  

  )

}
export default Contact;