import React, { useState , useContext} from "react";
import axios from "axios";
import {Container, Row, Form, Button, Alert, Spinner} from 'react-bootstrap';
import {AuthContext} from '../contexts/AuthContext';
import '../css/login.css'

export default function App(props){
  const {isAuthenticated, handleAuthentication} = useContext(AuthContext);
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
  // Axios Request
  axios.post('/api/users/login', body, headers)
  .then((res)=>{
    setStatusMsg({code:res.status});
    setLoading(false);
    handleAuthentication(true,res.data);
    isAuthenticated && props.history.push("/");
  })
  .catch((err)=>{
    setLoading(false);
    setStatusMsg({msg:err.response.data, code:null});
  })
  }

  const handleSignInClick = (e) => {
    e.preventDefault();
    setLoading(true);
    handleSignIn(email,password);
    // setEmail('');
    // setPassword('');
    // setStatusMsg({});
  }

  // isAuthenticated && props.history.push('/')

    return(
      !isAuthenticated ? (
        <Container>
          <Row className='logo justify-content-center'>
            <a href='/'><img src={require("../assets/logo-light.svg")} alt="Logo" /></a>
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
                  <Button variant="success" disabled={loading} type="submit">
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
) : <>{props.history.push('/')}</>
    )
}
