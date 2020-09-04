import React, { Component } from "react";
// import "../app.css";
import {Row,Container, Image} from 'react-bootstrap';
import ReactImage from "../react.png";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then((res) => res.json())
      .then((user) => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <Container className="container" style={{textAlign: 'center'}}>
        {username ? (
          <h1>
            {`Hello, `} 
            {' '}
            <a href="/login">Login</a>
          </h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <Row style={{height:'80vh'}}>
          <Image src={ReactImage} fluid />
          {/* <img src={ReactImage} alt="react" /> */}
        </Row>
      </Container>
    );
  }
}
