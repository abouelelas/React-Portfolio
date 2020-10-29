import React from 'react';

function Footer (props){
  return (
    <footer className= "footer py-4">
        <div className= "container">
            <div className= "row align-items-center">
                <div className= "col-lg-4 text-lg-left">Copyright © Sarah Abouelela 2020</div>
                <div className= "col-lg-4 my-3 my-lg-0">
                    <a className= "btn btn-dark btn-social mx-2" href="https://github.com/abouelelas"><i
                            className= "fab fa-github"></i></a>
                    <a className= "btn btn-dark btn-social mx-2"
                        href="https://www.linkedin.com/in/sarah-abouelela-006056b2/"><i
                            className= "fab fa-linkedin-in"></i></a>
                </div>
                <div className= "col-lg-4 text-lg-right">
                </div>
            </div>
        </div>
    </footer>


  )



}






export default Footer;