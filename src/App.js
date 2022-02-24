import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherCloudy } from 'react-icons/ti';

class App extends Component {
  render () {
    return (
      <div className="container">
        
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
