import React, { useState } from "react";
import {Container, Row, Form, Button} from 'react-bootstrap';
import '../css/login.css'

export default function App(){
    return(
      <Container>
        <Row className='logo justify-content-center'>
          <img src={require("../assets/logo-64.png")} alt="Logo" />
        </Row>
        <Row>
          <Container className="login-form-container">
            <Form>
              <h1 className="login-form-title">Sign in to SOTsys</h1>
              <div className="login-form-body">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form> 
            <p>
              New to SOTsys?
              {' '}
              <a href='/signup'>Create an account</a>
            </p> 
          </Container>       
        </Row>        
      </Container>
    )
}
