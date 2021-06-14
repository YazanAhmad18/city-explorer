import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'



export class Main extends Component {
 
  render() {
   
    return (
      <div>
        <Container style={{ marginTop: "50px" }}>
          <h2>City Explorer</h2>
          
          <Form onSubmit={this.props.getcitydetails}>
            <Form.Group className="mb-3">
              <Form.Label>City Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                onChange={this.props.getNameCity}
              />
              <Form.Text className="text-muted">
                Ask about the location of any city
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>
  
          </Container>
  
        
      
      </div>
    );
  }
}

export default Main;
