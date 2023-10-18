import React from "react";
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Feature({itemData}) {
  return (
    <Col sm={6}>
    <Card style={{ width: '100%',marginBottom:'20px',height:'400px' }}>
      <Card.Img variant="top" src={itemData.thumbnail} style={{height:'250px'}} rounded />
      <Card.Body>
        <Card.Title>{itemData.title}</Card.Title>
        <Card.Text>
            {itemData.description}
        </Card.Text>
        <p>See more <FontAwesomeIcon icon={faArrowRight} /></p>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Feature;