import React, { useState } from "react";
import axios from "axios";
import {Container, Row, Form, Button, Alert, Spinner} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import '../css/login.css'

export default function App(props){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [statusMsg, setStatusMsg] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSignIn = (email,password) => {
  // Headers
  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ email, password });

  axios.post('/api/users/login', body, headers)
  .then((res)=>{
    // console.log(res);
    setStatusMsg({code:res.status});
    setLoading(false);
    props.handleAuthentication(true,res.data);    
      props.history.push("/");
    // console.log("Success")
  })
  .catch((err)=>{
    setLoading(false);
    setStatusMsg({msg:err.response.data, code:null});
    // console.log(err.response.data);
  })
  }

  const handleSignInClick = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log("Email: ", email, " | Password: ",password)
    handleSignIn(email,password);
    setEmail('');
    setPassword('');
    setStatusMsg({});
  }

  props.isAuthenticated && props.history.push('/')
  
    return(
      <Container>
        <Row className='logo justify-content-center'>
          <img src={require("../assets/logo-64.png")} alt="Logo" />
        </Row>
        <Row>
          <Container className="login-form-container">
            <Form onSubmit={(e) => handleSignInClick(e)}>
              <h1 className="login-form-title">Sign in to SOTsys </h1>              
              <div className="login-form-body">
                {statusMsg.msg? (<Alert variant='danger' className='login-alert'>{statusMsg.msg}</Alert>):null}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" value={email} onChange={e=> setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={e=> setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="success" type="submit">
                  {loading? (
                    <span>
                      Signing in..
                      {' '}
                      <Spinner animation="border" role="status" variant='light' size="sm" />
                    </span>
): <span>Sign in</span>}
                </Button>
              </div>
            </Form> 
            <p>
              New to SOTsys?
              {' '}
              <a href='/signup'>Create an account</a>
            </p> 
          </Container>       
        </Row>        
      </Container>
    )
}
