import React from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';
import { MdArrowForwardIos } from 'react-icons/md';

const SavedLocsCntr = () => {
    return (
        <div className='savedLocsCntr'>
            <div className='returnMainViewBtn'>
                <p className='returnBtnTxt'>Main View</p>
    
                <MdArrowForwardIos className='logo'/>
            </div>

            <div className='mainWthrLocCntr'>
                <p className='wthrLocName'>Location</p>

                <div className='locCrrntWthr'><TiWeatherCloudy className='logo'/></div>

                <p className='crrntWthr'>00*C / 00*F</p>

                <p className='crrntWthrTxt'>Crrnt Weather</p>
            </div>
        </div>
    );
}

export default SavedLocsCntr;