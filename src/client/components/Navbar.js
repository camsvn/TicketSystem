import React  from 'react';
import axios from 'axios'
import {Container, Row, Form, Button, Alert, Navbar, Nav} from 'react-bootstrap';

export default function App (props) {
    
    const handleLogout = () =>{        
        axios.delete('/api/users/logout')
        .then((res)=> {
          if(res.status===200)
          props.handleAuthentication(false,null);           
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    
    return(
      <Navbar bg="dark" variant="dark" expand='md'>
        <Navbar.Brand href="#home">
          {console.log(props.user)}
          <img 
            src={require('../assets/logo-52.png')}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="SOTsys Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#pending">Pending</Nav.Link>
            <Nav.Link href="#approved">Approved</Nav.Link>
            <Nav.Link href="#rejected">Rejected</Nav.Link>
          </Nav>
          {props.user ? 
          (
            <>
              <p className="mr-sm-3 welcome-user">
                {`Hi, ${
                    props.user.name.substr(0,props.user.name.indexOf(' ')) !== '' ? 
                    props.user.name.substr(0,props.user.name.indexOf(' ')):
                    props.user.name.substr(props.user.name.indexOf(' ')+1)
                    }`}
              </p>
              <Button href="/" variant="outline-light" onClick={()=>handleLogout()}>Sign out</Button>
            </>
          ):
          (<Button href="/login" variant="outline-light">Sign in</Button>)}          
          {/* <Form inline>
            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      
    )
}
