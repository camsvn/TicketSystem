import React, {useState, useEffect} from "react";
import {Row,Container, Image, Button, Form} from 'react-bootstrap';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';
import TicketForm from '../components/TicketForm';
import RequestList from '../components/RequestList';
import Pending from './Pending';
import Approved from './Approved';
import Rejected from './Rejected';
import ReactImage from "../react.png";
import '../css/homepage.css';

export default function App (props) {     
  return (
    <>            
      <Navbar user={props.user} />
      {!props.pathname ? <Home /> : null}      
      <Switch>
        <Route exact path="/pending" component={Pending} />
        <Route exact path="/approved" component={Approved} />
        <Route exact path="/rejected" component={Rejected} />
      </Switch>
    </>
  )
}

const Home = () => {
  return(
    <Container className="home"> 
      <h2>Issue: 🎫 Raise a Ticket</h2>
      <hr />
      <p>Create an issue tracker.</p>
      <TicketForm />
      <h2>🌀Issues</h2>
      <hr />
      <p>
        List of 'open' issues to the department.
      </p>
      <RequestList />
    </Container>
  )
}

