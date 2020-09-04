import React, {useState, useEffect} from "react";
// import "../app.css";
import axios from 'axios'
import {Row,Container, Image} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import ReactImage from "../react.png";


export default function App () {
  const [username, setUsername] = useState(null)
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/getUsername")
      .then((res) => res.json())
      .then((user) => setUsername(user.username ))    
  }, [])

  useEffect(() => {
    axios.get('/api/users/authchecker')
    .then((res)=> {
      setUser(res.data)
      console.log(res)
    })
    .catch((err)=>console.log(err))
  }, [])
    
  return (
    <Container className="container" style={{textAlign: 'center'}}>      
      <h1>
        {`Hello, `}
        {user? user.name : (<a href="/login">Login</a>)}        
      </h1>      
      <Row style={{height:'80vh'}}>
        <Image src={ReactImage} fluid />
        {/* <img src={ReactImage} alt="react" /> */}
      </Row>
    </Container>
  );
}

