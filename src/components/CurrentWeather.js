import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { TiWeatherCloudy } from 'react-icons/ti';

const CurrentWeather = () => {
    return (
        <div className='currentWeatherCntr'>

            <div className='returnMainViewBtn'>
                <MdArrowBackIos className='logo'/>

                <p className='returnBtnTxt'>Main View</p>
            </div>

            <div className='mainWthrLocCntr'>
                <p className='wthrLocName'>Location</p>

                <div className='locCrrntWthr'><TiWeatherCloudy className='logo'/></div>

                <p className='crrntWthr'>00*C / 00*F</p>

                <p className='crrntWthrTxt'>Crrnt Weather</p>
                
                <p className='saveWhtrLocBtn'>Save Location</p>
            </div>
        
            <div className='wthrHrlCntr'>
                <div className='indHrlFrcst'>
                    <div className='timeWthr'>00am</div>

                    <div className='indHrlIcon'><TiWeatherCloudy className='logo' /></div>

                    <p className='frcstTemp'>00*C</p>
                </div>
            </div>

            <p className='ftrFrcstHeading'>Future Forecast</p> 

            <div className='ftrFrcstCntr'>
                <div className='indFrcst'>
                    <p className='frcstDay'>Day</p>

                    <div className='WthrIcon'><TiWeatherCloudy className='logo'/></div>

                    <p className='lowTemp'>00*C</p>

                    <p className='highTemp'>00*C</p>
                </div>

                
            </div>
        </div>
        
    );
}

export default CurrentWeather;