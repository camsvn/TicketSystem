import React, {useState, useContext}  from 'react';
import axios from 'axios'
import { Button, Navbar, Nav, Modal} from 'react-bootstrap';
import {AuthContext} from '../contexts/AuthContext'

export default function App (props) {
  const {handleLogout, user} = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
        
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
            {user ? 
          (
            <>
              <p className="mr-3 welcome-user">
                {`Hi, ${
                    user.name.substr(0,user.name.indexOf(' ')) !== '' ? 
                    user.name.substr(0,user.name.indexOf(' ')):
                    user.name.substr(user.name.indexOf(' ')+1)
                    }`}
              </p>
              <Button href="/" variant="outline-light" onClick={handleLogout}>Sign out</Button>
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
