import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      citydetails: {},
      showdetails: false,
      err:false
    

    };

  }



  getNameCity = (e) => {
  
    
    this.setState({
      cityName: e.target.value,
    });
  }

  getcitydetails = async (e) => {
    e.preventDefault();
    try{
    const request = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=pk.8331df13fc3aba45408910f6a8439ada&city=${this.state.cityName}&format=json`
    );
  
    console.log(request);
    this.setState({
      citydetails: request.data[0],
      showdetails: true,
      err:false
    });
  }catch(error){
    this.setState({
      err: true,
      showdetails: false,

    });
    alert("you have error 404");

  }
  };

  render() {
   
    return (
      <div>
        <Container style={{ marginTop: "50px" }}>
          <h2>City Explorer</h2>
          
          <Form onSubmit={this.getcitydetails}>
            <Form.Group className="mb-3">
              <Form.Label>City Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                onChange={this.getNameCity}
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

        {this.state.showdetails && (
          <Container style={{ marginTop: "50px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://maps.locationiq.com/v3/staticmap?key=pk.8331df13fc3aba45408910f6a8439ada&center=${this.state.citydetails.lat},${this.state.citydetails.lon}&zoom=12`}
              />
              <Card.Body>
                <Card.Title> {this.state.citydetails.display_name}</Card.Title>
                <Card.Text>latitude : {this.state.citydetails.lat}</Card.Text>
                <Card.Text>longitude : {this.state.citydetails.lon}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        )}
         {this.state.err && (
          <Container style={{ marginTop: "50px" }}>
            <Card style={{ width: "18rem" }}>
              
              <Card.Body>
                <Card.Title>no title </Card.Title>
                <Card.Text>latitude : error</Card.Text>
                <Card.Text>longitude : error</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        )}
      </div>
    );
  }
}

export default Main;
