import React, { useState } from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';

export default function Rejected(){
    return(
      <Container className="home"> 
        <h2>🛑Rejected Tickets</h2>
        <hr />
        <p>Past 5 Rejected Tickets</p>

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
    <Card className="mb-3">
      <div className='p-2 '>
        <Row>
          <Col className="issueicon"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 39.276 36">
              <g id="Group_3" data-name="Group 3" transform="translate(-671 -462)">
                <path id="Path_1" data-name="Path 1" fillRule="evenodd" fill='#F03A17' d="M18,33.75A15.75,15.75,0,1,0,2.25,18,15.75,15.75,0,0,0,18,33.75ZM18,36A18,18,0,1,0,0,18,18,18,0,0,0,18,36Z" transform="translate(671 462)" />
                <path id="Path_2" data-name="Path 2" fill='#F03A17' d="M15.755,24.75A2.25,2.25,0,1,1,18.005,27a2.25,2.25,0,0,1-2.25-2.25Zm.22-13.511a2.036,2.036,0,1,1,4.05,0l-.787,7.891a1.242,1.242,0,0,1-2.475,0Z" transform="translate(671 462)" />
                <rect id="Rectangle_1" data-name="Rectangle 1" fill='#fff' width="14" height="19" rx="5" transform="translate(694 466)" />
                <g id="Group_2" data-name="Group 2" transform="translate(563.742 -380.968) rotate(45)">
                  <line id="Line_2" data-name="Line 2" fill='none' stroke='#F03A17' strokeWidth='3px' strokeLinecap='round' x2="17.169" transform="translate(694.852 507.792)" />
                  <line id="Line_3" data-name="Line 3" fill='none' stroke='#F03A17' strokeWidth='3px' strokeLinecap='round' x2="17.169" transform="translate(703.436 499.207) rotate(90)" />
                </g>
              </g>
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
      </div>
    </Card>
  )
}