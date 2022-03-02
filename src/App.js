import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherCloudy } from 'react-icons/ti';
import { Map, SavedLocsCntr, CurrentWeather } from './components';
import CurrentWeatherBG from './components/CurrentWeatherBG';
import API from './api';
import axios from 'axios';
import gsap from 'gsap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: { latitude: 37.7577, longitude: -122.4376, width: window.innerWidth, height: window.innerHeight, zoom: 10},
      crrtWeatherSrchd: '',
      inputSearchbar: '',
      weatherSearched: false 
    }
    this.weatherCntrAnim = gsap.timeline({ paused: true });
  }

  
  render () {

    // console.log('mario domenech')

    // API.getAllLocs().then(data => console.log(data.data))

    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=miami&appid=f0caa45808a9789d4f46776484b799e2&units=metric`).then(data => console.log(data))


    // console.log(this.state.crrtWeatherSrchd)

    const searchWeather = async () => {
      let lon, lat;
      // let weatherCntrAnim = gsap.timeline({ paused: true });
  
      // Initial Axios call to retrieve lon and lat 
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=miami&appid=f0caa45808a9789d4f46776484b799e2&units=metric`).then(data => {
        lon = data.data.coord.lon;
        lat = data.data.coord.lat;
        // console.log(data.data)
        this.setState({ currentWeatherName: `${data.data.name}, ${data.data.sys.country}`});
      })
    
      await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=4439be80c1f0ade164109e2399a51173
      `).then(data => this.setState({ crrtWeatherSrchd: data.data }) );

      // console.log(lon, lat);

      this.setState({ weatherSearched: true });
      this.setState({ weatherViewTrggrd: true });
      this.weatherCntrAnim.play();
    }

    const saveLocationDB = () => {
      const object = {
        name: this.state.currentWeatherName,
        long: this.state.crrtWeatherSrchd.lon,
        lat: this.state.crrtWeatherSrchd.lat,
        setAsMain: false
      }

      API.createLoc(object).then(res => alert('Location Added Succesfully!'));
      this.setState({ locationSaved: true });
      // console.log(object);
      // console.log(this.state.crrtWeatherSrchd)
    }

// console.log(this.state.crrtWeatherSrchd);
    return (
      <div className="container">

        {/* <SavedLocsCntr /> */}

        <div className='map-headerCntr'>
          <Map />

          <div className='headerBtnsContainer'>
            <div className='openMenuBtn'><AiOutlineMenu className='logo'/></div>
            <div className='searchbarCntr'>
              <input className='searchbar' type='text' placeholder='Search Location' onChange={ (e) => this.setState({ inputSearchbar: e.target.value }) }/>
              <div className='searchBtn' onClick={searchWeather}><AiOutlineSearch className='logo'/></div>
            </div> 
          </div>

          <div className='cntrOpenWeather'><div className='openWeatherBtn' onClick={() => this.setState({ weatherSearched: true }) }><TiWeatherCloudy className='logo' /></div></div>
        </div>

        { this.state.weatherSearched ? 
        <CurrentWeather locationName={this.state.currentWeatherName} weather={this.state.crrtWeatherSrchd} weatherSearched={this.state.weatherSearched} weatherAnim={this.weatherCntrAnim} saveLocation={saveLocationDB} newLocSaved={this.state.locationSaved} /> : null }


      </div>
    );
  }
}

export default App;
