import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class AlertMessage extends Component {
    render() {
        return (
            
            <div>
                
                 <Alert variant="danger">
                  <Alert.Heading>There is some error</Alert.Heading>
                  <p>
                  Perhaps the entry field is empty or you entered a city name that does not exist.
                  </p>
              </Alert>
              
            </div>
            
        )
    }
}

export default AlertMessage
