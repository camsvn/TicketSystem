import React, {useState, useEffect} from "react";
import axios from 'axios'; 
import {Row,Col,Card} from 'react-bootstrap';
import '../css/requestlist.css';

export default function RequestList(){
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('api/tickets/getall')
    .then(res=> {
      res.data.length && setData(res.data)
    })
    .catch(err =>{})
  },[])

    return(
      <div className="mb-3">
        <Card>
          <Card.Header>
            <Row>
              <Col>Subject</Col>
              <Col xs={3} md={4}>Issued To</Col>            
            </Row>
          </Card.Header>
          {
            data.length ? data.map((request) => (
              <CardBody 
                key={request._id} 
                title={request.subject}
                message={request.message}
                to={request.to.name}
                from={request.from.name}
                department={request.from.department}
              />
            )): <p className='text-center pt-3'>No Active Issues</p>
          } 
        </Card>
      </div>
    )
}

const CardBody = (props) =>{
    return(
      <>
        <div className='p-2'>
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
            <Col xs={3} md={4}>
              <span>{props.to}</span>
            </Col>
          </Row>
          <p className="col-9 col-md-8 mb-1 open-issue-msg">{props.message}</p>     
          <cite className="blockquote-footer pl-3">{`${props.from} | ${props.department}`}</cite>          
        </div>
        <hr />
      </>
    )
}

