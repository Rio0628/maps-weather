import React, { useRef, useEffect } from 'react';
import { RiSunFill } from 'react-icons/ri';
import { BsCloudFill } from 'react-icons/bs';
import gsap from 'gsap';

const CurrentWeatherBG = () => {

    const sunnyRef = useRef(null);
    const cloudref = useRef([]);

    const addPartlyClouds = (el) => {
        if (el && !cloudref.current.includes(el)) {
            cloudref.current.push(el);
        }
        // console.log(cloudref.current)
    }

    useEffect(() => {
        
        // console.log(sunnyRef.current)    

        // Sunny background
        gsap.to(sunnyRef.current, { rotation: '360', ease: 'none', duration: 11, repeat: -1});

        // Partly Cloudy Animations
        // cloudref.current.forEach( (el) => {
        //     gsap.to(el, { x: '+=100', ease: 'none', repeat: -1, duration: 11 })
        // });

        // Coudy Animations
        cloudref.current.forEach( (el) => {
            gsap.to(el, { x: '+=50', ease: 'none', repeat: -1, duration: 9 })
        });

    });

    return (
        <div className='animBG'>
            {/*     
            <div className='BG sunny'>
                <div className='sunny' ref={sunnyRef}><RiSunFill /></div>
            </div> */}

            {/* <div className='BG partlyCloudy'>
                <div className='sun' ref={sunnyRef}><RiSunFill /></div>

                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
            </div> */}

            <div className='BG cloudy'>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='cloud' ref={addPartlyClouds}><BsCloudFill /></div>
            </div> 
        </div>
    );
}

export default CurrentWeatherBG;