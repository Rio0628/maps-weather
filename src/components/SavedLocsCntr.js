import React from 'react';
import axios from 'axios';
import { TiWeatherCloudy } from 'react-icons/ti';
import { MdArrowForwardIos, MdOutlineRemove } from 'react-icons/md';

const SavedLocsCntr = (props) => {

  
    //  Function to get weather of main location


    const setLocAsMain = () => {

    }
    let hourly, currentTime;

    if (props.mainLocationWeather)  {
        hourly = props.mainLocationWeather.hourly.slice(0, 24);
        currentTime = new Date(props.mainLocationWeather.current.dt * 1000)
    }

    return (
        <div className='savedLocsCntr'>
            <div className='returnMainViewBtn' id='savedLocsReturn'>
                <p className='returnBtnTxt'>Main View</p>
    
                <MdArrowForwardIos className='logo'/>
            </div>

            {props.mainLocationWeather ?
                <div className='mainWthrLocCntr'>
                    <p className='wthrLocName'>{props.mainLocation.name}</p>

                    <div className='locCrrntWthr'>{props.showWeather(props.mainLocationWeather.current.weather[0].icon)}</div>

                    <p className='crrntWthr'>{props.mainLocationWeather.current.temp.toFixed()}</p>

                    <p className='crrntWthrTxt'>{props.mainLocationWeather.current.weather[0].main}</p>
                </div>
            : null}

            { props.mainLocationWeather ?
            
                <div className='wthrHrlCntr'>
                    { hourly.map(hour => 
                        <div className='indHrlFrcst'>
                            <div className='timeWthr'>{props.getTime(hour.dt, currentTime)}</div>

                            <div className='indHrlIcon'>{props.showWeather(hour.weather[0].icon)}</div>
    
                            <p className='frcstTemp'>{hour.temp.toFixed()}*C</p>
                        </div>  
                    )}            
                </div>
            : null}
            

            <div className='othrSavedLocsCntr'>
                <p className='savedLocsTitle'>Other Saved Locations</p>
                
                <div className='locationsCntr'>
                
                    { props.allOtherLocs.map(location => 
                        <div className='indSavedLoc'>
                            <p className='locName'>{location.name}</p>

                            <div className='indLocBtns'>

                                <p className='setLocMain' loc={location.id} onClick={setLocAsMain()}>Set main</p>
    
                                <div className='removeLocBtn' loc={location.id}>
                                    <p>Remove</p>
                                    <MdOutlineRemove className='logo'/>
                                </div>
                            </div> 
                        </div>
                    )}

                    
                </div>
            </div>
        </div>
    );
}

export default SavedLocsCntr;