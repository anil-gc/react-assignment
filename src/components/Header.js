import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import './css/Header.css';

function Header() {
    return(
            <Container fluid className='Container'>
                <Row>
                    <Col className='text-center'>
                        <img src="/itachi.jpeg" alt="img" className='img-container mx-auto' />
                        <p>hello, i am itachi</p>
                    </Col>
                </Row>
                <Row className=''>
                    <Col className = 'text-center'>
                        <h2>A front-end developer</h2>
                        <h2>specalize in react</h2>
                    </Col>
                </Row>
            </Container>
    )
}

export default Header