import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Main from "./component/Main";
import AlertMessage from "./component/AlertMessage";
import axios from "axios";
import Map from "./component/Map";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      citydetails: {},
      showdetails: false,
      err: false,
      weatherData: '',

    };
  }

  getNameCity = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  getcitydetails = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=pk.8331df13fc3aba45408910f6a8439ada&city=${this.state.cityName}&format=json`
      );
      const myRes1 = await axios.get(`${process.env.REACT_APP_URL}/weather`);

      console.log(request);
      this.setState({
        citydetails: request.data[0],
        showdetails: true,
        err: false,
        weatherData: myRes1.data.data,

      });
    } catch (error) {
      this.setState({
        err: true,
        showdetails: false,
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Main
          getNameCity={this.getNameCity}
          getcitydetails={this.getcitydetails}
        />
        {this.state.showdetails && <Map citydetails={this.state.citydetails}  weatherData={this.state.weatherData}/>}
        {this.state.err && <AlertMessage />}
      </div>
    );
  }
}

export default App;
