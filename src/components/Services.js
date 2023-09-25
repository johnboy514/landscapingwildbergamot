import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Services() {
    const projects = [
        {
            name: "Gardening",
            description: "We do the gardening stuff with the flowers and stuff",
            image: "https://i.guim.co.uk/img/media/ef96c1f2495b60ec83379962d4aec38bfb1ce039/0_187_5600_3363/master/5600.jpg?width=1200&quality=85&auto=format&fit=max&s=f0198ef0d8b34258c6b8b494ca82669e" 
        },
        {
            name: "Gardening",
            description: "We do the gardening stuff with the flowers and stuff",
            image: "https://i.guim.co.uk/img/media/ef96c1f2495b60ec83379962d4aec38bfb1ce039/0_187_5600_3363/master/5600.jpg?width=1200&quality=85&auto=format&fit=max&s=f0198ef0d8b34258c6b8b494ca82669e" 
        },
        {
            name: "Gardening",
            description: "We do the gardening stuff with the flowers and stuff",
            image: "https://i.guim.co.uk/img/media/ef96c1f2495b60ec83379962d4aec38bfb1ce039/0_187_5600_3363/master/5600.jpg?width=1200&quality=85&auto=format&fit=max&s=f0198ef0d8b34258c6b8b494ca82669e" 
        },
        {
            name: "Gardening",
            description: "We do the gardening stuff with the flowers and stuff",
            image: "https://i.guim.co.uk/img/media/ef96c1f2495b60ec83379962d4aec38bfb1ce039/0_187_5600_3363/master/5600.jpg?width=1200&quality=85&auto=format&fit=max&s=f0198ef0d8b34258c6b8b494ca82669e" 
        },
      ];
    return (
      <center className="pb-4">
        <h1 className="mb-4">Services</h1>
        <div class="container">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-4">
        {projects.map((el) => (         
          <Col>          
            <Card style={{ minWidth: 250, maxWidth: 300, minHeight: 400, maxHeight: 620, backgroundColor: "lightGray"}}>
              <Card.Img className="mx-auto" style={{ marginBottom: '20px', marginTop: '15px', maxWidth: '16rem', borderRadius: '25px'}} variant="top" src={el.image} />              
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                {el.description}
                </Card.Text>
              </Card.Body>
            </Card>            
          </Col>
          ))}
      </Row>
      </div>
      </center>
    );
}

export default Services;