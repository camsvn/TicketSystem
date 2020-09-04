import React, { useState } from "react";
import {Container, Row, Form, Button} from 'react-bootstrap';

export default function App(){
    return(
      <Container>
        <Row className='logo justify-content-center'>
          <img src={require("../assets/logo-64.png")} alt="Logo" />
        </Row>
        <Row>
          <Container className="login-form-container">
            <Form>
              <h1 className="login-form-title">Create your Account</h1>
              <div className="login-form-body">
                <Form.Group controlId="formRegisterName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formRegister.DepartmentControlSelect">
                  <Form.Label>Department</Form.Label>
                  <Form.Control as="select">
                    <option>Department 1</option>
                    <option>Department 2</option>
                    <option>Department 3</option>
                    <option>Department 4</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formRegisterEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="formRegisterPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </div>
            </Form> 
            <p>
              Already have an account?
              {' '}
              <a href='/login'>Log In</a>
            </p> 
          </Container>       
        </Row>        
      </Container>
    )
}
