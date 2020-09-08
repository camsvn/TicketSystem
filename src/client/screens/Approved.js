import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Container,Row,Col,Card} from 'react-bootstrap';


export default function Approved(){
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('api/tickets/accepted')
    .then(res=> {
      res.data.length && setData(res.data)
    })
    .catch(err =>{})
  },[])
    return(
      <Container className="home"> 
        <h2>🎯Approved Tickets</h2>
        <hr />
        <p>Past 5 Approved Tickets</p>
        {
            data.length ? data.map((request) => (
              <CardBody 
                key={request._id} 
                title={request.subject}
                message={request.message}
                from={request.from.name}
                department={request.from.department}
              />
            )): <p className='text-center pt-3'>No Approved Issues</p>
          }  
      </Container>
    )
}

const CardBody = (props) =>{
  return(
    <Card className="mb-3">
      <div className='p-2 '>
        <Row>
          <Col className="issueicon"> 
            <svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z" />
            </svg>
          </Col>
          <Col>                       
            <p className="title ">              
              {props.title}
            </p> 
          </Col>   
        </Row>
        <p className="issueMsg">
          {props.message}
        </p>        
        <cite className="blockquote-footer pl-3">{`${props.from} | ${props.department}`}</cite>          
      </div>
    </Card>
  )
}