import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Container,Row,Col,Card, Button} from 'react-bootstrap';

export default function Pending(){
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('api/tickets/pending')
    .then(res=> {
      res.data.length && setData(res.data)
    })
    .catch(err =>{})
  },[])

  const handleDelete = (id) => {
    console.log("Delete",id);
    axios.put('api/tickets/delete', {id})
    .then(res=>{
      // console.log(res)
      if(res.status===200){
        const newData = data.filter(item => {
          if(item._id !== id){
            // console.log(item._id, "Filtered")
            return item
          }
        })
        setData(newData)
      }  
    })
    .catch(err=> console.log(err))
  }

  const handleAccept = (id) => {
    console.log("Accept",id);
    axios.put('api/tickets/accept', {id})
    .then(res=>{
      // console.log(res)
      if(res.status===200){
        const newData = data.filter(item => {
          if(item._id !== id){
            // console.log(item._id, "Filtered")
            return item
          }
        })
        setData(newData)
      }  
    })
    .catch(err=> console.log(err))
  }
    return(
      <Container className="home"> 
        <h2>👀Review Issues</h2>
        <hr />
        <p>Issues pending to review</p>
        {
            data.length ? data.map((request) => (
              <CardBody 
                key={request._id} 
                delete={()=>handleDelete(request._id)} 
                accept={()=>handleAccept(request._id)} 
                title={request.subject}
                message={request.message}
                from={request.from.name}
                department={request.from.department}
              />
            )): <p className='text-center pt-3'>No Pending Issues</p>
          }
      </Container>
    )
}

const CardBody = (props) =>{  
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
          {props.message}
        </p>       
        <cite className="blockquote-footer pl-3">{`${props.from} | ${props.department}`}</cite>
        <hr />
        <div className="actionBtnContainer">
          <Button className="actionBtn mr-3" variant="danger" onClick={props.delete}>Delete</Button>
          <Button variant="success" className="actionBtn " onClick={props.accept}>Accept</Button>
        </div>
      </div>
    </Card>
  )
}