import React, { useEffect, useRef } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { TiWeatherCloudy } from 'react-icons/ti';
import CurrentWeatherBG from './CurrentWeatherBG';
import gsap from 'gsap';

const CurrentWeather = (props) => {

    const cntrRef = useRef(null);
    let cntrAnim = gsap.timeline({ paused: true });

    useEffect(() => {
        console.log(cntrRef)
        props.weatherAnim.to(cntrRef.current, { opacity: 1, x: 0, duration: .5, ease: 'expo' })
    }, []);

    console.log(props.weather)
    // const test = new Date(props.weather.current.dt * 1000);
    // console.log(test)
    // console.log(test.getHours() - 12)
    const currentTime = new Date(props.weather.current.dt * 1000);

    const getTime = (timeStamp) => {
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

    const getDay = (date) => {
        let day = new Date(date * 1000);
        day = day.toString().split(' ');

        return day[0]
    }

    const hourly = props.weather.hourly.slice(0, 24);
    

    return (
        <div className='currentWeatherCntr' ref={cntrRef}>
            <CurrentWeatherBG />

            <div className='wthrInfoCntr'>
                <div className='returnMainViewBtn'  onClick={ () => props.weatherAnim.reverse()}>
                    <MdArrowBackIos className='logo'/>

                    <p className='returnBtnTxt'>Main View</p>
                </div>

                <div className='mainWthrLocCntr'>
                    <p className='wthrLocName'>{props.locationName}</p>

                    <div className='locCrrntWthr'><TiWeatherCloudy className='logo'/></div>

                    <p className='crrntWthr'>{props.weather.current.temp.toFixed()}°C</p>

                    <p className='crrntWthrTxt'>{props.weather.current.weather[0].main}</p>
                    
                    <p className='saveWhtrLocBtn' onClick={ () => console.log('mario')}>Save Location</p>
                </div>
            
                <div className='wthrHrlCntr' id='wthrHrlCntr'>
                    { hourly.map(hour => 
                        <div className='indHrlFrcst'>
                          <div className='timeWthr'>{getTime(hour.dt)}</div>
  
                          <div className='indHrlIcon'><TiWeatherCloudy className='logo' /></div>
  
                    <p className='frcstTemp'>{hour.temp.toFixed()}°C</p>
                        </div>
                    )}
                  
                </div>

                <p className='ftrFrcstHeading'>Future Forecast</p> 

                <div className='ftrFrcstCntr'>
                    {props.weather.daily.map(day => 
                        <div className='indFrcst'>
                            <p className='frcstDay'>{getDay(day.dt)}</p>

                            <div className='WthrIcon'><TiWeatherCloudy className='logo'/></div>

                            <p className='lowTemp'>{day.temp.min.toFixed()}°C</p>

                            <p className='highTemp'>{day.temp.max.toFixed()}°C</p>
                        </div>
                    )}
                </div>
            </div>
           
        </div>
    );
}

export default CurrentWeather;