import React, { useRef, useEffect, useState } from 'react';
import { RiSunFill } from 'react-icons/ri';
import { BsCloudFill } from 'react-icons/bs';
import { FaSnowflake } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import gsap from 'gsap';

const CurrentWeatherBG = () => {

    const sunnyRef = useRef(null);
    const cloudref = useRef([]);
    const dropsRef = useRef([]);
    const mainRef = useRef(null);
    const [ cntrWidth, setCntrWidth ] = useState();

    const numPartlyCloudy = 7;

    const addPartlyClouds = (el) => {
        if (el && !cloudref.current.includes(el)) {
            cloudref.current.push(el);
        }
        // console.log(cloudref.current)
    }

    const addDropsRef = (el) => {
        if (el && !dropsRef.current.includes(el)) {
            dropsRef.current.push(el);
        }
    }

    /* 
        CODE FOR FUTURE FUNCTION TO ELIMINATE EXTRA LINES OF CODE

     {() => { for (let i = 0; i < numPartlyCloudy; i++ ) {
                    <div className='partlyCloud' ref={addPartlyClouds} key={'cloud' + ( i + 1)}><BsCloudFill /></div>
                } }}
    */

    useEffect(() => {
        // console.log(mainRef.current.clientWidth)
        setCntrWidth(mainRef.current.clientWidth);
        // console.log(sunnyRef.current)    

        // Sunny background
        gsap.to(sunnyRef.current, { rotation: '360', ease: 'none', duration: 11, repeat: -1});

        // Partly Cloudy Animations
        cloudref.current.forEach( (el) => {
            gsap.to(el, { x: '+=100', ease: 'none', repeat: -1, duration: 11 })
        });

        // Coudy Animations
        // cloudref.current.forEach( (el) => {
        //     gsap.to(el, { x: '+=50', ease: 'none', repeat: -1, duration: 2 });
        // });

        // Drizzle Animations
        // dropsRef.current.forEach( (el) => {
        //     gsap.to(el, { y: window.innerHeight, ease: 'none', repeat: -1, duration: (Math.random() * 11) + 2 })
        // });

        // Rain Animations
        dropsRef.current.forEach( (el) => {
            gsap.to(el, { y: window.innerHeight, ease: 'none', repeat: -1, duration: (Math.random() * 6) + 2 })
        });


    }, [setCntrWidth]);

    return (
        <div className='animBG' ref={mainRef}>
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

            {/* <div className='BG cloudy'>
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
            </div>  */}

            {/* <div className='BG drizzle'>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>

                <div className='dropsCntr'>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                </div>
                
            </div>  */}

            {/* <div className='BG rain'>
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
            
                <div className='dropsCntr'>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                </div>
            </div> */}

            <div className='BG thunderstorm'>
           

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
            
                <div className='dropsCntr'>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    <div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><GiWaterDrop /></div>
                    
                    <div className='lightning flashit'></div>
                </div>
            </div>
        
            {/* <div className='BG snow'>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
                <div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} ><FaSnowflake /></div>
            </div> */}
        </div>
    );
}

export default CurrentWeatherBG;