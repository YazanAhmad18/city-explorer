import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Alert from 'react-bootstrap/Alert'


export class Map extends Component {
    render() {
        return (
            <div>
                <Container style={{ marginTop: "50px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://maps.locationiq.com/v3/staticmap?key=pk.8331df13fc3aba45408910f6a8439ada&center=${this.props.citydetails.lat},${this.props.citydetails.lon}&zoom=12`}
              />
              <Card.Body>
                <Card.Title> {this.props.citydetails.display_name}</Card.Title>
                <Card.Text>latitude : {this.props.citydetails.lat}</Card.Text>
                <Card.Text>longitude : {this.props.citydetails.lon}</Card.Text>
              </Card.Body>
            </Card>
            <Alert variant="danger" style={{ marginTop: "50px" }}>
                        <Alert.Heading>Description</Alert.Heading>
                        {
                            this.props.weatherData.map(value => {
                                return (
                                    <p>
                                        {value.weather.description}
                                    </p>
                                )
                            })
                        }
                    </Alert>

          </Container>
            </div>
        )
    }
}

export default Map
