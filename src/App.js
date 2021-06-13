import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main/>

      </div>
    )
  }
}

export default App

