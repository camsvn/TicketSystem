import React, {useState, useEffect} from "react";
import {Row,Container, Image, Button, Form, Alert,Col} from 'react-bootstrap';

export default function App (props) {     
    return (
      <Form>              
        <div className="form-body">
          <Alert variant='danger' className='login-alert'>I am the Danger!</Alert>

          <Form.Row>
            <Col xs={12} sm={6}>
              <Form.Group controlId="formDepartmentControl">
                <Form.Label>Department</Form.Label>
                <Form.Control as="select">
                  <option>Department 1</option>
                  <option>Department 2</option>
                  <option>Department 3</option>
                  <option>Department 4</option>
                </Form.Control>
              </Form.Group>
            </Col>
            
            <Col xs={12} sm={6}>
              <Form.Group controlId="formUserControl">
                <Form.Label>User</Form.Label>
                <Form.Control as="select" value="--">
                  <option>User 1</option>
                  <option>User 2</option>
                  <option>User 3</option>
                  <option>User 4</option>
                </Form.Control>
              </Form.Group>
            </Col>
            
          </Form.Row>

          <Form.Group controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>

          <Form.Group controlId="formIssue">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows='5' />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
 )}