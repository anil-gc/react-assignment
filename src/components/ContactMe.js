import React from 'react';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Row,Container,Col } from "react-bootstrap";
import Select from "./Select";
import './css/contact.css'
import Button from 'react-bootstrap/Button';
import './css/Button.css';

function ContactMe() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form data is valid, you can submit it or perform other actions
      console.log('Form submitted:', formData);
    }
  };

  const isValidEmail = (email) => {
    // A simple regex for basic email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div className='contact' id='contactMe'>

      <Container>
        <Row>
          <Col xs={8} sm={{offset:2}}> 
          <h3 style={{color:'white'}}>Contact me</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" size='sm' name="name" value={formData.name} onChange={handleChange}/>
                  {errors.name && <div>{errors.name}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" size='sm' name="email" value={formData.email} onChange={handleChange}/>
                  {errors.email && <div className="error">{errors.email}</div>}
                </Form.Group>
                <Form.Label>Type of enquiry</Form.Label>
                  <Select/>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={7} />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" className="btn" size="sm">
                    Submit
                  </Button>
                </div>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactMe;