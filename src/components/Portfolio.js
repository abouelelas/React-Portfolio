import React from 'react';
import { Button, Card,  } from 'react-bootstrap';



function Portfolio (props){
  
  return (
   
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.project.Image} />
  <Card.Body>
    <Card.Title>{props.project.Name}</Card.Title>
    
    <Card.Text>
    {props.project.Description}
    </Card.Text>
    <Card.Link href={props.project.DeployedLink} >Deployed/Website Link</Card.Link>
    <Card.Link href={props.project.RepoLink}>Repo Link</Card.Link>
  </Card.Body>
</Card>
  

</div>

  )



}






export default Portfolio;