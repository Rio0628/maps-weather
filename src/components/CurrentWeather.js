import React, { useEffect, useRef } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { TiWeatherCloudy } from 'react-icons/ti';
import CurrentWeatherBG from './CurrentWeatherBG';
import gsap from 'gsap';

const CurrentWeather = (props) => {

    const cntrRef = useRef(null);
    let cntrAnim = gsap.timeline({ paused: true });

    useEffect(() => {
        props.weatherAnim.to(cntrRef.current, { opacity: 1, x: 0, duration: .5, ease: 'none' })
    }, []);

    // console.log(props.weather)
    // const test = new Date(props.weather.current.dt * 1000);
    // console.log(test)
    // console.log(test.getHours() - 12)
    let currentTime, hourly;
    if (props.weatherSearched) { 
        currentTime = new Date(props.weather.current.dt * 1000); 
        hourly = props.weather.hourly.slice(0, 24);
    }

    const getDay = (date) => {
        let currentDay = currentTime.toString().split(' ');
        let day = new Date(date * 1000);
        day = day.toString().split(' ');

        if (day[2] === currentDay[2]) return 'Today'
        else return day[0]
    }
    // console.log(currentTime)
    

    return (
        <div className='currentWeatherCntr' ref={cntrRef}>
            {props.weatherSearched ?
                <CurrentWeatherBG wthrByIcon={props.weather.current.weather[0].icon} whtrByName={props.weather.current.weather[0].main}/>
            : null}

            {props.weatherSearched ? 
                <div className='wthrInfoCntr'>
                    <div className='returnMainViewBtn'  onClick={ () => props.weatherAnim.reverse()}>
                        <MdArrowBackIos className='logo'/>
                        <p className='returnBtnTxt'>Main View</p>
                    </div>
    
                    <div className='mainWthrLocCntr'>
                        <p className='wthrLocName'>{props.locationName}</p>

                        <div className='locCrrntWthr'>{props.showWeather(props.weather.current.weather[0].icon)}</div>

                        <p className='crrntWthr'>{props.weather.current.temp.toFixed()}°C</p>

                        <p className='crrntWthrTxt'>{props.weather.current.weather[0].main}</p>
                    
                        <p className={ props.newLocSaved ? 'saveWthrLocBtn active' : 'saveWthrLocBtn'} onClick={props.saveLocation}>{props.newLocSaved ? 'Location Saved' : 'Save Location'}</p>
                    </div>
        
                    <div className='wthrHrlCntr' id='wthrHrlCntr'>
                        { hourly.map(hour => 
                            <div className='indHrlFrcst' key={'Hour ' + new Date(hour.dt * 1000) }>
                                <div className='timeWthr'>{props.getTime(hour.dt, currentTime)}</div>

                                <div className='indHrlIcon'>{props.showWeather(hour.weather[0].icon)}</div>

                                <p className='frcstTemp'>{hour.temp.toFixed()}°C</p>
                            </div>
                        )}
                
                    </div>

                    <p className='ftrFrcstHeading'>Future Forecast</p> 
    
                    <div className='ftrFrcstCntr'>
                        {props.weather.daily.map(day => 
                            <div className='indFrcst' key={'day ' + new Date(day.dt * 1000)}>
                                <p className='frcstDay'>{getDay(day.dt)}</p>

                                <div className='WthrIcon'>{props.showWeather(day.weather[0].icon)}</div>

                                <p className='lowTemp'>{day.temp.min.toFixed()}°C</p>

                                <p className='highTemp'>{day.temp.max.toFixed()}°C</p>
                            </div>
                        )}
                    </div>
                </div>               
            : <div className='wthrInfoCntr'>
                <div className='returnMainViewBtn'  onClick={ () => props.weatherAnim.reverse()}>
                    <MdArrowBackIos className='logo'/>
                    <p className='returnBtnTxt'>Main View</p>
                </div>

                <p className='noMainLoc'>Search location to view weather</p>
            </div> }
        </div>
    );
}

export default CurrentWeather;