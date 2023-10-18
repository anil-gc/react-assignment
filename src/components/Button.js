import React from "react";
import Button from 'react-bootstrap/Button';
import './css/Button.css';

function Block() {
  return (
    <div className="d-grid gap-2">
      <Button className="btn" size="sm">
        Submit
      </Button>
    </div>
  );
}

export default Block;