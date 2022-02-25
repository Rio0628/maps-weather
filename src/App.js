import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherCloudy } from 'react-icons/ti';
import Map from './components/Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: { latitude: 37.7577, longitude: -122.4376, width: window.innerWidth, height: window.innerHeight, zoom: 10},
    }
  }


  render () {


    // mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW9tZG9tZW5lY2giLCJhIjoiY2wwMXNqMzM4MHhlODNjbWx3aW95MTZqYiJ9.uVERxbdkPqvpiMcJLzimpQ'

    return (
      <div className="container">
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
    );
  }
}

export default App;
