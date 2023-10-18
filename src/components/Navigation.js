import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub,faMedium,faTwitter} from '@fortawesome/free-brands-svg-icons';

function Navigation() {
  return (
    <Navbar expand="lg" className="navh navbar-expand bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><FontAwesomeIcon className='fontcolor' icon={faEnvelope} /></Nav.Link>
            <Nav.Link href="#action2"><FontAwesomeIcon className='fontcolor' icon={faLinkedin} /></Nav.Link>
            <Nav.Link href="#action3"><FontAwesomeIcon className='fontcolor' icon={faGithub} /></Nav.Link>
            <Nav.Link href="#action3"> <FontAwesomeIcon className='fontcolor' icon={faMedium} /></Nav.Link>
            <Nav.Link href="#action3"><FontAwesomeIcon className='fontcolor' icon={faTwitter} /></Nav.Link>
          </Nav>
          <nav className="ml-auto">
            <a href="#portfolio" className="port">Portfolio</a>
            <a href="#contactMe" className='port'>Contact Me</a>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;