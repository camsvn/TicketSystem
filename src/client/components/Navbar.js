import React, {useState}  from 'react';
import axios from 'axios'
import {Container, Row, Form, Button, Alert, Navbar, Nav, Modal} from 'react-bootstrap';

export default function App (props) {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    
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
      <>
        <Navbar bg="dark" variant="dark" expand='md'>
          <Navbar.Brand href="/">
            <img 
              src={require('../assets/logo-dark.svg')}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="SOTsys Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/pending">Pending</Nav.Link>
              <Nav.Link href="/approved">Approved</Nav.Link>
              <Nav.Link href="/rejected">Rejected</Nav.Link>
            </Nav>
            <img src={require('../assets/bell-dark.svg')} alt='Notification' className="notification mr-3 d-block pb-2 pb-md-0 " onClick={handleShow} />          
            <span className="badge-notify" />
            {props.user ? 
          (
            <>
              <p className="mr-3 welcome-user">
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
          </Navbar.Collapse>
        </Navbar>   
        <ModalView handleClose={handleClose} show={showModal} />  
      </> 
    )
}

const ModalView = ({show,handleClose}) => {
    return(
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
