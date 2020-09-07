import React, {useContext} from "react";
import {Container, Image, Button, Form} from 'react-bootstrap';
import { Route,Switch } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';
import TicketForm from '../components/TicketForm';
import RequestList from '../components/RequestList';
import Pending from './Pending';
import Approved from './Approved';
import Rejected from './Rejected';
import {AuthContext} from '../contexts/AuthContext';
import '../css/homepage.css';

export default function App (props) {
  const {isAuthenticated, user} = useContext(AuthContext);
  console.log("At Home");  
  return (
    isAuthenticated ? (
      <>  
        <Navbar />
        {!props.pathname && <Home /> }      
        <Switch>
          <Route exact path="/pending" component={Pending} />
          <Route exact path="/approved" component={Approved} />
          <Route exact path="/rejected" component={Rejected} />
        </Switch>
      </>
) : <>{props.history.push('/login')}</>
  )
}

const Home = (props) => {
  return(
    <Container className="home"> 
      <h2>Issue: 🎫 Raise a Ticket</h2>
      <hr />
      <p>Create an issue tracker.</p>
      <TicketForm />
      <h2>🌀Issues</h2>
      <hr />
      <p>
        List of 
        {' '}
        <i><u>'open'</u></i>
        {' '}
        issues to the department.
      </p>
      <RequestList />
    </Container>
  )
}

