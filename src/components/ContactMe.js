import React from 'react';
import Form from 'react-bootstrap/Form';
import { Row,Container,Col } from "react-bootstrap";
import TextArea from './TextArea';
import Select from "./Select";
import Block from "./Button";
import './css/contact.css'

function ContactMe() {
  return (
    <div className='contact'>
      <Container>
        <Row>
          <Col xs={6} sm={{offset:3}}> 
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" size='sm' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" size='sm' />
                </Form.Group>
                <Form.Label>Type of enquiry</Form.Label>
                  <Select/>
                <TextArea/>
                <Block/>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactMe;