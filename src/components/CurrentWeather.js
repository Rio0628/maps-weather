import React, { useEffect, useRef } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { TiWeatherCloudy } from 'react-icons/ti';
import CurrentWeatherBG from './CurrentWeatherBG';
import gsap from 'gsap';
import icons from '../weatherIcons';

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
        let currentDay = currentTime.toString().split(' ');
        let day = new Date(date * 1000);
        day = day.toString().split(' ');

        if (day[2] === currentDay[2]) return 'Today'
        else return day[0]
    }
    console.log(currentTime)
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
        
    const hourly = props.weather.hourly.slice(0, 24);
    

    return (
        <div className='currentWeatherCntr' ref={cntrRef}>
            <CurrentWeatherBG wthrByIcon={props.weather.current.weather[0].icon} whtrByName={props.weather.current.weather[0].main}/>

            <div className='wthrInfoCntr'>
                <div className='returnMainViewBtn'  onClick={ () => props.weatherAnim.reverse()}>
                    <MdArrowBackIos className='logo'/>

                    <p className='returnBtnTxt'>Main View</p>
                </div>

                <div className='mainWthrLocCntr'>
                    <p className='wthrLocName'>{props.locationName}</p>

                    <div className='locCrrntWthr'>{showWeather(props.weather.current.weather[0].icon)}</div>

                    <p className='crrntWthr'>{props.weather.current.temp.toFixed()}°C</p>

                    <p className='crrntWthrTxt'>{props.weather.current.weather[0].main}</p>
                    
                    <p className={ props.newLocSaved ? 'saveWthrLocBtn active' : 'saveWthrLocBtn'} onClick={props.saveLocation}>{props.newLocSaved ? 'Location Saved' : 'Save Location'}</p>
                </div>
            
                <div className='wthrHrlCntr' id='wthrHrlCntr'>
                    { hourly.map(hour => 
                        <div className='indHrlFrcst' key={'Hour ' + new Date(hour.dt * 1000) }>
                            <div className='timeWthr'>{getTime(hour.dt)}</div>
  
                            <div className='indHrlIcon'>{showWeather(hour.weather[0].icon)}</div>
  
                            <p className='frcstTemp'>{hour.temp.toFixed()}°C</p>
                        </div>
                    )}
                  
                </div>

                <p className='ftrFrcstHeading'>Future Forecast</p> 

                <div className='ftrFrcstCntr'>
                    {props.weather.daily.map(day => 
                        <div className='indFrcst' key={'day ' + new Date(day.dt * 1000)}>
                            <p className='frcstDay'>{getDay(day.dt)}</p>

                            <div className='WthrIcon'>{showWeather(day.weather[0].icon)}</div>

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