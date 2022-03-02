import React, { useRef, useEffect, useState } from 'react';
import { RiSunFill } from 'react-icons/ri';
import { BsCloudFill, BsFillMoonFill } from 'react-icons/bs';
import { FaSnowflake } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import { WiWindy } from 'react-icons/wi';
import gsap from 'gsap';

const CurrentWeatherBG = (props) => {

    const sunMoonRef = useRef(null);
    const cloudref = useRef([]);
    const dropsRef = useRef([]);
    const mistRef = useRef([]);
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

    const addMistRef = (el) => {
        if (el && !mistRef.current.includes(el)) {
            mistRef.current.push(el);
        }
    }

    /* 
        CODE FOR FUTURE FUNCTION TO ELIMINATE EXTRA LINES OF CODE

     {() => { for (let i = 0; i < numPartlyCloudy; i++ ) {
                    <div className='partlyCloud' ref={addPartlyClouds} key={'cloud' + ( i + 1)}><BsCloudFill /></div>
                } }}
    */

    if (props.wthrByIcon === '02n' || props.whtrByIcon === '03d') { console.log('maroi')}

    useEffect(() => {
        // console.log(mainRef.current.clientWidth)
        setCntrWidth(mainRef.current.clientWidth);
        // console.log(sunMoonRef.current)    

        // Sunny background
        gsap.to(sunMoonRef.current, { rotation: '45', yoyo: true, ease: 'none', duration: 11, repeat: -1});

        // Partly Cloudy Animations
        // cloudref.current.forEach( (el) => {
        //     gsap.to(el, { x: '+=100', ease: 'none', yoyo: true, repeat: -1, duration: 11 })
        // });

        // Coudy Animations
        cloudref.current.forEach( (el) => {
            gsap.to(el, { x: '+=50', ease: 'none', repeat: -1, yoyo: true, duration: 8 });
        });

        // Drizzle Animations
        // dropsRef.current.forEach( (el) => {
        //     gsap.to(el, { y: window.innerHeight, ease: 'none', repeat: -1, duration: (Math.random() * 11) + 2 })
        // });

        // Rain Animations
        dropsRef.current.forEach( (el) => {
            gsap.to(el, { y: window.innerHeight, ease: 'none', repeat: -1, duration: (Math.random() * 6) + 2 })
        });

        // Mist Animations
        mistRef.current.forEach( (el) => {
            gsap.to(el, { x: -30, ease: 'none', yoyo: true, repeat: -1, duration: 5});
        });

    }, [setCntrWidth]);

    return (
        <div className='animBG' ref={mainRef}>
                
            {/* <div className='BG sunny'>
                <div className='sun' ref={sunMoonRef}><RiSunFill /></div>
            </div> */}

                
            {/* <div className='BG night'>
                <div className='moon' ref={sunMoonRef}><BsFillMoonFill /></div>
            </div> */}

            {/* <div className='BG partlyCloudy'>
                <div className='sun' ref={sunMoonRef}><RiSunFill /></div>

                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
            </div> */}

            {/* <div className='BG partlyCloudy night'>
                <div className='moon' ref={sunMoonRef}><BsFillMoonFill /></div>

                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
                <div className='partlyCloud' ref={addPartlyClouds}><BsCloudFill /></div>
            </div> */}
{/* 
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

            {/* <div className='BG thunderstorm'>
           
                <div className='cloudsCntr'>
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
            </div> */}
        
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

            <div className='BG rain'>
                        
                <div className='mist' ref={addMistRef} ><WiWindy /></div>
                <div className='mist' ref={addMistRef} ><WiWindy /></div>
                <div className='mist' ref={addMistRef} ><WiWindy /></div>
                <div className='mist' ref={addMistRef} ><WiWindy /></div>
                <div className='mist' ref={addMistRef} ><WiWindy /></div>
            </div>
        
            
        </div>
    );
}

export default CurrentWeatherBG;