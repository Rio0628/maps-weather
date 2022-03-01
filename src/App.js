import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherCloudy } from 'react-icons/ti';
import { Map, SavedLocsCntr, CurrentWeather } from './components';
import CurrentWeatherBG from './components/CurrentWeatherBG';
import API from './api';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: { latitude: 37.7577, longitude: -122.4376, width: window.innerWidth, height: window.innerHeight, zoom: 10},
    }
  }


  render () {

    console.log('mario domenech')

    // API.getAllLocs().then(data => console.log(data.data))

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=miami&appid=f0caa45808a9789d4f46776484b799e2&units=metric`).then(data => console.log(data))


    return (
      <div className="container">

        <SavedLocsCntr />

        <div className='map-headerCntr'>
          <Map />

          <div className='headerBtnsContainer'>
            <div className='openMenuBtn'><AiOutlineMenu className='logo'/></div>
            <div className='searchbarCntr'>
              <input className='searchbar' type='text' placeholder='Search Location'/>
              <div className='searchBtn'><AiOutlineSearch className='logo'/></div>
            </div> 
          </div>

          <div className='cntrOpenWeather'><div className='openWeatherBtn'><TiWeatherCloudy className='logo' /></div></div>
        </div>

        <CurrentWeather  />


      </div>
    );
  }
}

export default App;
