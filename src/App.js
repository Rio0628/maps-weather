import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherCloudy } from 'react-icons/ti';
import { Map, SavedLocsCntr, CurrentWeather } from './components';
import CurrentWeatherBG from './components/CurrentWeatherBG';
import icons from './weatherIcons';
import API from './api';
import axios from 'axios';
import gsap from 'gsap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: { latitude: 37.7577, longitude: -122.4376, width: window.innerWidth, height: window.innerHeight, zoom: 10},
      crrtWeatherSrchd: '',
      allSavedLocs: [],
      mainLocation: [],
      allOtherLocs: [],
      inputSearchbar: '',
      weatherSearched: false,
      locationSaved: false 
    }
    this.getLocs = this.getLocs.bind(this);
    this.weatherCntrAnim = gsap.timeline({ paused: true });
  }
  
  async getLocs () {
    let allSavedLocs;
    await API.getAllLocs().then(data => allSavedLocs = data.data )
    this.setState({ allSavedLocs: allSavedLocs });

    const mainLocation = this.state.allSavedLocs.filter(location => location.setAsMain === true);
    this.setState({ mainLocation: mainLocation[0] });
    
    await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${mainLocation[0].lat}&lon=${mainLocation[0].long}&exclude=minutely&units=metric&appid=4439be80c1f0ade164109e2399a51173
    `).then(data => this.setState({ mainLocationWeather: data.data }) );

    const allOtherLocs = this.state.allSavedLocs.filter(location => location.setAsMain === false )
    this.setState({ allOtherLocs: allOtherLocs });

    
  }

  async componentDidMount () {
    await this.getLocs();
  }
  
  render () {

    const checkIfLocSaved = () => {

      const lon = this.state.crrtWeatherSrchd.lon, lat = this.state.crrtWeatherSrchd.lat;

      for (let i = 0; i < this.state.allSavedLocs.length; i++) {
        if (this.state.allSavedLocs[i].long === lon && this.state.allSavedLocs[i].lat === lat) {
          this.setState({ locationSaved: true });
        }
      }
    }
    // console.log(this.state.mainLocationWeather)
    const searchWeather = async () => {
      let lon, lat;
      // let weatherCntrAnim = gsap.timeline({ paused: true });
  
      // Initial Axios call to retrieve lon and lat 
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=orlando&appid=f0caa45808a9789d4f46776484b799e2&units=metric`).then(data => {
        lon = data.data.coord.lon;
        lat = data.data.coord.lat;
        this.setState({ currentWeatherName: `${data.data.name}, ${data.data.sys.country}`});
      })
    
      await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=4439be80c1f0ade164109e2399a51173
      `).then(data => this.setState({ crrtWeatherSrchd: data.data }) );

      // console.log(lon, lat);
      checkIfLocSaved();
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
    }

    const showWeather = wthr => 
        wthr === '01d' ? <icons.IoMdSunny className='logo' /> : 
        wthr === '01n' ? <icons.IoMdMoon className='logo' /> : 
        wthr === '02d' ? <icons.IoIosPartlySunny className='logo' /> : 
        wthr === '02n' ? <icons.IoIosCloudyNight className='logo' /> : 
        wthr === '03d' || wthr === '04d' || wthr === '03n' || wthr === '04n' ? <icons.BsCloudyFill className='logo' /> :
        wthr === '09d' || wthr === '09n' ? <icons.BsCloudDrizzleFill className='logo' /> :
        wthr === '10d' || wthr === '10n' ? <icons.IoIosRainy className='logo' /> : 
        wthr === '11d' || wthr === '11n' ? <icons.IoIosThunderstorm className='logo' /> : 
        wthr === '13d' || wthr === '13n' ? <icons.BsCloudSnowFill className='logo' /> : 
        wthr === '50d' || wthr === '50n' ? <icons.WiWindy className='logo' /> :
        null ;

    const getTime = (timeStamp, currentTime) => {
      let time = new Date(timeStamp * 1000);
      time = time.getHours();
  
      if (time === currentTime.getHours()) { return `Now`} 
      else if (time > 12) { 
        time = time - 12;
        return `${time} PM`
      }
      else if (time === 12) { return `${time} PM`}
      else if (time === 0) { return `12 AM`} 
      else { return `${time} AM`}
    }

    // console.log(this.state.crrtWeatherSrchd)
    return (
      <div className="container">

        <SavedLocsCntr mainLocation={this.state.mainLocation} mainLocationWeather={this.state.mainLocationWeather} allOtherLocs={this.state.allOtherLocs} showWeather={showWeather} getTime={getTime} getLocs={this.getLocs} />

        <div className='map-headerCntr'>
          <Map />

          <div className='headerBtnsContainer'>
            <div className='openMenuBtn'><AiOutlineMenu className='logo'/></div>
            <div className='searchbarCntr'>
              <input className='searchbar' type='text' placeholder='Search Location' onChange={ (e) => this.setState({ inputSearchbar: e.target.value }) }/>
              <div className='searchBtn' onClick={searchWeather}><AiOutlineSearch className='logo'/></div>
            </div> 
          </div>

          <div className='cntrOpenWeather'><div className='openWeatherBtn' onClick={() =>  this.weatherCntrAnim.play() }><TiWeatherCloudy className='logo' /></div></div>
        </div>

        { this.state.weatherSearched ? 
        <CurrentWeather locationName={this.state.currentWeatherName} weather={this.state.crrtWeatherSrchd} weatherSearched={this.state.weatherSearched} weatherAnim={this.weatherCntrAnim} saveLocation={saveLocationDB} getTime={getTime} showWeather={showWeather} newLocSaved={this.state.locationSaved} /> : null }


      </div>
    );
  }
}

export default App;
