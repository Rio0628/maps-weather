import React from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';
import { MdArrowForwardIos, MdOutlineRemove } from 'react-icons/md';

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

            <div className='wthrHrlCntr'>
                <div className='indHrlFrcst'>
                    <div className='timeWthr'>00am</div>

                    <div className='indHrlIcon'><TiWeatherCloudy className='logo' /></div>

                    <p className='frcstTemp'>00*C</p>
                </div>

                
            </div>

            <div className='othrSavedLocsCntr'>
                <p className='savedLocsTitle'>Other Saved Locations</p>

                <div className='locationsCntr'>
                    <div className='indSavedLoc'>
                        <p className='locName'>Location</p>

                        <div className='indLocBtns'>

                            <p className='setLocMain'>Set main</p>

                            <div className='removeLocBtn'>
                                <p>Remove</p>
                                <MdOutlineRemove className='logo'/>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedLocsCntr;