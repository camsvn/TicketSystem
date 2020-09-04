import React, {useState, useEffect} from "react";
// import "../app.css";
import {Row,Container, Image, Button} from 'react-bootstrap';
import axios from 'axios';
import ReactImage from "../react.png";


export default function App (props) {
    
  const handleLogout = (e) =>{
    e.preventDefault();
    axios.delete('/api/users/logout')
    .then((res)=> {
      if(res.status===200)
      props.handleAuthentication(false,null);           
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <Container className="container" style={{textAlign: 'center'}}>      
      <h1>
        {`Hello, `}
        {props.user? props.user.name : (<a href="/login">Login</a>)}        
      </h1>
      {props.user? (<Button onClick={e => handleLogout(e)}>Logout</Button>): null}    
      <Row style={{height:'80vh'}}>
        <Image src={ReactImage} fluid />
        {/* <img src={ReactImage} alt="react" /> */}
      </Row>
    </Container>
  );
}

