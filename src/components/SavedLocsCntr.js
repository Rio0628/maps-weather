import React from 'react';
import axios from 'axios';
import APIS from '../api';
import { TiWeatherCloudy } from 'react-icons/ti';
import { MdArrowForwardIos, MdOutlineRemove } from 'react-icons/md';

const SavedLocsCntr = (props) => {

  
    //  Function to get weather of main location


    const setLocAsMain = async (e) => {
        // Set current main location to a normal location
        let mainLocation;
        if (props.mainWthrPrsnt) {
            mainLocation = props.mainLocation;
            console.log(mainLocation)
            mainLocation.setAsMain = false;
        }
        
        // Set the new location to the main one
        const newMainLocation = await props.allOtherLocs.filter(location => location.id.toString() === e.target.getAttribute('loc'));
        newMainLocation[0].setAsMain = true;

        if (props.mainWthrPrsnt) { await APIS.updateLoc(mainLocation.id, mainLocation).then(res => console.log('location updated!')) } 
        await APIS.updateLoc(newMainLocation[0].id, newMainLocation[0]).then(res => console.log('Location updated successfully!'));
        // props.getMainWeather(mainLocation);
        props.getLocs();
    }

    const deleteLoc = async (e) => {
        // Delete a location with the loc attribute (id of location)
        console.log(e.target.getAttribute('loc'));
        await APIS.deleteLoc(e.target.getAttribute('loc')).then(res => alert('Location deleted successfully!'));
        props.getLocs();
    }

    let hourly, currentTime;

    if (props.mainWthrPrsnt)  {
        hourly = props.mainLocationWeather.hourly.slice(0, 24);
        currentTime = new Date(props.mainLocationWeather.current.dt * 1000)
    }

    return (
        <div className='savedLocsCntr'>
            <div className='returnMainViewBtn' id='savedLocsReturn'>
                <p className='returnBtnTxt'>Main View</p>
    
                <MdArrowForwardIos className='logo'/>
            </div>

            {props.mainWthrPrsnt ?
                <div className='mainWthrLocCntr'>
                    <p className='wthrLocName'>{props.mainLocation.name}</p>

                    <div className='locCrrntWthr'>{props.showWeather(props.mainLocationWeather.current.weather[0].icon)}</div>

                    <p className='crrntWthr'>{props.mainLocationWeather.current.temp.toFixed()}</p>

                    <p className='crrntWthrTxt'>{props.mainLocationWeather.current.weather[0].main}</p>

                    <p className='removeMainBtn' loc={props.mainLocation.id} onClick={deleteLoc}>Remove Main Location</p>
                </div>
            : <div className='mainWthrLocCntr'><p className='noMainLoc'>No main location saved</p></div>}

            { props.mainWthrPrsnt ?
            
                <div className='wthrHrlCntr'>
                    { hourly.map(hour => 
                        <div className='indHrlFrcst' key={'Hour ' + new Date(hour.dt * 1000) }>
                            <div className='timeWthr'>{props.getTime(hour.dt, currentTime)}</div>

                            <div className='indHrlIcon'>{props.showWeather(hour.weather[0].icon)}</div>
    
                            <p className='frcstTemp'>{hour.temp.toFixed()}*C</p>
                        </div>  
                    )}            
                </div>
            : <div className='wthrHrlCntr'></div>}
            

            <div className='othrSavedLocsCntr'>
                <p className='savedLocsTitle'>Other Saved Locations</p>
                
                <div className='locationsCntr'>
                    { props.allOtherLocs.map(location => 
                        <div className='indSavedLoc' key={`location ${location.long} ${location.lat}`}>
                            <p className='locName'>{location.name}</p>

                            <div className='indLocBtns'>

                                <p className='setLocMain' loc={location.id} onClick={setLocAsMain}>Set main</p>
    
                                <div className='removeLocBtn' loc={location.id} onClick={deleteLoc}>
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