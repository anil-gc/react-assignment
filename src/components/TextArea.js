import React from 'react';
import Form from 'react-bootstrap/Form';

function TextControl() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={7} />
      </Form.Group>
    </Form>
  );
}

export default TextControl;