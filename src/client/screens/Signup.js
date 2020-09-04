import React, { useState } from "react";
import axios from "axios";
import {Container, Row, Form, Button, Alert, Spinner} from 'react-bootstrap';

export default function App(props){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('Department 1');
  const [statusMsg, setStatusMsg] = useState({});
  const [loading, setLoading] = useState(false);

  const handleRegister = (name, department, email, password) => {    
    // Headers
    const headers = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    // Request body
    const body = JSON.stringify({ name, department, email, password });
  
    axios.post('/api/users/register', body, headers)
    .then((res)=>{
      // console.log(res);      
      setStatusMsg({msg:res.data, code:res.status});
      if(res.status === 200){
        setTimeout(() => {
          props.history.push("/login");
        }, 2000);        
      }
      console.log(res);
    })
    .catch((err)=>{
      setLoading(false);
      setStatusMsg({msg:err.response.data, code:err.response.status});
      // console.log(err.response);
    })
    }

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setLoading(true); 
    // console.log("Email: ", email, " | Password: ",password, " | Name: ",name, " | Department: ",department)
    handleRegister(name, department, email, password);
    setName('');
    setEmail('');
    setPassword('');
    setDepartment('Department 1');
    setStatusMsg({});
  }
    return(
      <Container>
        <Row className='logo justify-content-center'>
          <img src={require("../assets/logo-64.png")} alt="Logo" />
        </Row>
        <Row>
          <Container className="login-form-container">
            <Form onSubmit={(e) => handleRegisterClick(e)}>
              <h1 className="login-form-title">Create your Account</h1>
              <div className="login-form-body">
                {statusMsg.msg? (<Alert variant={statusMsg.code === 200 ? 'success': 'danger'} className='login-alert'>{statusMsg.code === 200 ? (`${statusMsg.msg} \n Redirecting to LogIn Screen`) : statusMsg.msg}</Alert>):null}
                <Form.Group controlId="formRegisterName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={name} onChange={e=> setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formRegister.DepartmentControlSelect">
                  <Form.Label>Department</Form.Label>
                  <Form.Control as="select" value={department} onChange={e=> setDepartment(e.target.value)}>
                    <option>Department 1</option>
                    <option>Department 2</option>
                    <option>Department 3</option>
                    <option>Department 4</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formRegisterEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" value={email} onChange={e=> setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formRegisterPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={e=> setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="success" type="submit">
                  {loading? (
                    <span>
                      Registering..
                      {' '}
                      <Spinner animation="border" role="status" variant='light' size="sm" />
                    </span>
): 'Register'}
                </Button>
              </div>
            </Form> 
            <p>
              Already have an account?
              {' '}
              <a href='/login'>Log In</a>
            </p> 
          </Container>       
        </Row>        
      </Container>
    )
}
