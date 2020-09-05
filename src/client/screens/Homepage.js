import React, {useState, useEffect} from "react";
import {Row,Container, Image, Button} from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ReactImage from "../react.png";
import '../css/homepage.css';


export default function App (props) {     
  return (
    <>
      <Navbar user={props.user} />
      <Container className="home">            
        <h1>
          {`Hello, `}
          {props.user? props.user.name : (<a href="/login">Login</a>)}        
        </h1>
        <Row style={{height:'80vh'}}>
          <Image src={ReactImage} fluid />
          {/* <img src={ReactImage} alt="react" /> */}
        </Row>
      </Container>
    </>
  );
}

