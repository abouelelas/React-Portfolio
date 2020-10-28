import React from 'react';
import {  Card  } from 'react-bootstrap';
// import './src/styles.css';

function Portfolio (props){
  
  return (
   
    <div className="col-lg-4 col-sm-6 mb-4">

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={require(`../assets/img/${props.project.Image}`)} />
  <Card.Body>
    <Card.Title>{props.project.Name}</Card.Title>
    
    <Card.Text>
    {props.project.Description}
    </Card.Text>
    <Card.Link href={props.project.DeployedLink} >Deployed Link</Card.Link>
    <br />
    <Card.Link href={props.project.RepoLink}>Repo Link</Card.Link>
  </Card.Body>
</Card>
  

</div>

  )



}






export default Portfolio;