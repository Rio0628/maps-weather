import React, { useRef, useEffect } from 'react';
import { RiSunFill } from 'react-icons/ri';
import gsap from 'gsap';

const CurrentWeatherBG = () => {

    const sunnyRef = useRef(null);

    

    useEffect(() => {
        
        console.log(sunnyRef.current)    

        gsap.to(sunnyRef.current, { rotation: '360', ease: 'none', duration: 11, repeat: -1});

    });

    return (
        <div className='animBG'>
    
            <div className='sunnyBG'>
                <div className='sunny' ref={sunnyRef}><RiSunFill /></div>
            </div>
        </div>
    );
}

export default CurrentWeatherBG;