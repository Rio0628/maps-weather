import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherCloudy } from 'react-icons/ti';
import { Map, SavedLocsCntr, CurrentWeather } from './components';
import icons from './weatherIcons';
import APIS from './api';
import axios from 'axios';
import gsap from 'gsap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewportLon: -122.4376,
      viewportLat: 37.7577,
      crrtWeatherSrchd: '',
      allSavedLocs: [],
      mainLocation: [],
      allOtherLocs: [],
      inputSearchbar: '',
      weatherSearched: false,
      locationSaved: false,
      wthrTypeIsC: true
    }
    this.getLocs = this.getLocs.bind(this);
    this.weatherCntrAnim = gsap.timeline({ paused: true });
    this.savedLocsAnim = gsap.timeline({ paused: true });
  }
  
  // Main function to get current weather for saved locs container 
  async getLocs () {
    let allSavedLocs;
    await APIS.getAllLocs().then(data => allSavedLocs = data.data )
    this.setState({ allSavedLocs: allSavedLocs });    console.log(this.state.allSavedLocs)

    const mainLocation = this.state.allSavedLocs.filter(location => location.setAsMain === true);
    this.setState({ mainLocation: mainLocation[0] });
    
    if (mainLocation[0]) {
      await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${mainLocation[0].lat}&lon=${mainLocation[0].long}&exclude=minutely&units=metric&appid=4439be80c1f0ade164109e2399a51173
      `).then(data => { this.setState({ mainLocationWeather: data.data }); this.setState({ mainWthrPrsnt: true }); } );  
    } else { this.setState({ mainLocationWeather: {} }); this.setState({ mainWthrPrsnt: false }); }
    
    const allOtherLocs = this.state.allSavedLocs.filter(location => location.setAsMain === false )
    this.setState({ allOtherLocs: allOtherLocs });
    console.log(allOtherLocs)

    
  }

  async componentDidMount () {
    await this.getLocs();
  }
  
  render () {

    // Checks if current searched location is within the database so there are no duplicates (Takes away save location functionality)
    const checkIfLocSaved = () => {
      for (let i = 0; i < this.state.allSavedLocs.length; i++) {
        if (this.state.allSavedLocs[i].name === this.state.currentWeatherName) {
          this.setState({ locationSaved: true });
        }
      }
    }
    
    // Primary function to get weather info from API using the searchbar
    const searchWeather = async () => {
      let lon, lat;
  
      this.setState({ locationSaved: false });

      // Initial Axios call to retrieve lon and lat
      try {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputSearchbar}&appid=f0caa45808a9789d4f46776484b799e2&units=metric`).then(data => {
          lon = data.data.coord.lon;
          lat = data.data.coord.lat;
          this.setState({ currentWeatherName: `${data.data.name}, ${data.data.sys.country}`});
        })
      
        await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=4439be80c1f0ade164109e2399a51173
        `).then(data => this.setState({ crrtWeatherSrchd: data.data }) );
  
        checkIfLocSaved();
        this.setState({ weatherSearched: true });
        this.weatherCntrAnim.play();
  
        this.setState({ viewportLon: lon });
        this.setState({ viewportLat: lat });
      } catch { alert('Please enter a valid location!'); }
    }

    // Gathers name, lon, and lat from current weather info and saves it into the database 
    const saveLocationDB = async () => {
      const object = {
        name: this.state.currentWeatherName,
        long: this.state.crrtWeatherSrchd.lon,
        lat: this.state.crrtWeatherSrchd.lat,
        setAsMain: false
      }

      APIS.createLoc(object).then(res => alert('Location Added Succesfully!'));
      this.setState({ locationSaved: true });
      await this.getLocs();
    }

    // Show a certain icon according to what icon code the API returns 
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
      wthr === '50d' || wthr === '50n' ? <icons.WiWindy className='logo' /> 
    : null ;

    // Convert timestamp returned from API into normal date (Only using hours) 
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

    // Delete a location with the loc attribute (id of location)
    const deleteMainLoc = async (e) => {
      console.log(e.target.getAttribute('loc'));
      this.setState({ mainWthrPrsnt: false });
      await APIS.deleteLoc(e.target.getAttribute('loc')).then(res => alert('Location deleted successfully!'));
      this.getLocs();
    }

    // Searchs for weather with the lon and lat provided by mapbox gl
    const showWthrFromMap = async (lon, lat) => {
      let name;
      
      this.setState({ locationSaved: false });

      try {
        // Will get the name of the current location with the reverse geocoding API from mapbox gl 
        await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=4439be80c1f0ade164109e2399a51173
        `).then(data => this.setState({ crrtWeatherSrchd: data.data }) );
      
        await axios.get(`http://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/${lon},${lat}.json?access_token=pk.eyJ1IjoibWFyaW9tZG9tZW5lY2giLCJhIjoiY2wwMXNqMzM4MHhlODNjbWx3aW95MTZqYiJ9.uVERxbdkPqvpiMcJLzimpQ`).then( data => name = data.data.features)

        for (let i = 0; i < name.length; i++) { // Isolate the city object (Different position with each call)
          if (name[i].id.split('.')[0] === 'city') {
            name = name[i];
          }
        }
        name = name.text;

        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=f0caa45808a9789d4f46776484b799e2&units=metric`).then(data => {
          this.setState({ currentWeatherName: `${data.data.name}, ${data.data.sys.country}`});
        })
      
      } catch { alert('Unable to get weather with current coordinates. Please try other coordinates or search location directly!') }

      checkIfLocSaved();
      this.getLocs();
      this.setState({ weatherSearched: true });
      this.weatherCntrAnim.play();

      this.setState({ viewportLon: lon });
      this.setState({ viewportLat: lat });
    }

    // According to the value of the wthrTypeIsC Celsius or Fahrenheit will be displayed
    const changeWeatherType = (temp) => {
      if (!this.state.wthrTypeIsC) { 
        let calc = ((temp * 9) / 5) + 32
        return `${calc.toFixed()}°F`
      }
      else return `${temp.toFixed()}°C`
    }

    // CHnage the state that dictates if Celsius or Fahrenheit is being displayed
    const weatherType = () => this.setState({ wthrTypeIsC: !this.state.wthrTypeIsC });

    return (
      <div className="container">

        <SavedLocsCntr wthrTypeIsC={this.state.wthrTypeIsC} weatherType={weatherType} changeWeatherType={changeWeatherType} savedLocsAnim={this.savedLocsAnim} mainLocation={this.state.mainLocation} mainLocationWeather={this.state.mainLocationWeather} allOtherLocs={this.state.allOtherLocs} showWeather={showWeather} getTime={getTime} getLocs={this.getLocs} deleteMainLoc={deleteMainLoc} mainWthrPrsnt={this.state.mainWthrPrsnt} />

        <div className='map-headerCntr'>
          <Map showWthrFromMap={showWthrFromMap} locationName={this.state.currentWeatherName} viewportLon={this.state.viewportLon} viewportLat={this.state.viewportLat}/>

          <div className='headerBtnsContainer'>
            <div className='openMenuBtn' onClick={() => this.savedLocsAnim.play()}><AiOutlineMenu className='logo'/></div>
            <div className='searchbarCntr'>
              <input className='searchbar' type='text' placeholder='Search Location' onChange={ (e) => this.setState({ inputSearchbar: e.target.value }) }/>
              <div className='searchBtn' onClick={searchWeather}><AiOutlineSearch className='logo'/></div>
            </div> 
          </div>

          <div className='cntrOpenWeather'><div className='openWeatherBtn' onClick={() =>  this.weatherCntrAnim.play() }><TiWeatherCloudy className='logo' /></div></div>
        </div>

        <CurrentWeather changeWeatherType={changeWeatherType} locationName={this.state.currentWeatherName} weather={this.state.crrtWeatherSrchd} weatherSearched={this.state.weatherSearched} weatherAnim={this.weatherCntrAnim} saveLocation={saveLocationDB} getTime={getTime} showWeather={showWeather} newLocSaved={this.state.locationSaved}/>


      </div>
    );
  }
}

export default App;
