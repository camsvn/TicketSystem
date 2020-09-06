import React, { useState } from 'react';
import {Container,Row,Col,Card, Button} from 'react-bootstrap';

export default function Pending(){
    return(
      <Container className="home"> 
        <h2>👀Review Issues</h2>
        <hr />
        <p>Issues pending to review</p>
        
        <TestStyle title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />            
        <TestStyle title="Lorem ipsum dolor sit  incididunt ut labore et dolore magna aliqua." />
        <TestStyle title="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <TestStyle title="Lorem ipsum dolor sit  incididunt ut labore et dolore magna aliqua." />
        <TestStyle title="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        
      </Container>
    )
}

const TestStyle = (props) =>{
  return(
    <Card className="mb-3 ">
      <div className='p-2 '>
        <Row>
          <Col className="issueicon"> 
            <svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
              <path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
            </svg>
          </Col>
          <Col>                       
            <p className="title ">              
              {props.title}
            </p> 
          </Col>   
        </Row>
        <p className="issueMsg">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>       
        <cite className="blockquote-footer pl-3">Amal Salvin</cite>
        <hr />
        <div className="actionBtnContainer">
          <Button className="actionBtn mr-3" variant="danger">Delete</Button>
          <Button variant="success" className="actionBtn ">Accept</Button>
        </div>
      </div>
    </Card>
  )
}