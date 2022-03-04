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

    // Get ref of all different objects
    const addPartlyClouds = (el) => {
        if (el && !cloudref.current.includes(el)) {
            cloudref.current.push(el);
        }
    }

    // Get ref of all different objects
    const addDropsRef = (el) => {
        if (el && !dropsRef.current.includes(el)) {
            dropsRef.current.push(el);
        }
    }

    // Get ref of all different objects
    const addMistRef = (el) => {
        if (el && !mistRef.current.includes(el)) {
            mistRef.current.push(el);
        }
    }

    useEffect(() => {
        setCntrWidth(mainRef.current.clientWidth);

        // Sunny background
        if (props.wthrByIcon === '01d' || props.wthrByIcon === '01n') {
            gsap.to(sunMoonRef.current, { rotation: '45', yoyo: true, ease: 'none', duration: 11, repeat: -1});
        }
        

        // Partly Cloudy Animations
        if (props.wthrByIcon === '02d' || props.wthrByIcon === '02n' || props.wthrByIcon === '09d' || props.wthrByIcon === '09n') {
            cloudref.current.forEach( (el) => {
                gsap.to(el, { x: '+=100', ease: 'none', yoyo: true, repeat: -1, duration: 11 })
            });
        }

        // Coudy Animations
        if (props.wthrByIcon === '03d' || props.wthrByIcon === '04d' || props.wthrByIcon === '03n' || props.wthrByIcon === '04n' || props.wthrByIcon === '10d' || props.wthrByIcon === '10n' || props.wthrByIcon === '11d' || props.wthrByIcon === '11n') {}
        cloudref.current.forEach( (el) => {
            gsap.to(el, { x: '+=50', ease: 'none', repeat: -1, yoyo: true, duration: 8 });
        });

        // Drizzle Animations
        if (props.wthrByIcon === '09d' || props.wthrByIcon === '09n') {
            dropsRef.current.forEach( (el) => {
                gsap.to(el, { y: window.innerHeight, ease: 'none', repeat: -1, duration: (Math.random() * 11) + 2 })
            });
        }

        // Rain Animations
        if (props.wthrByIcon === '10d' || props.wthrByIcon === '10n' || props.wthrByIcon === '11d' || props.wthrByIcon === '11n') {
            dropsRef.current.forEach( (el) => {
                gsap.to(el, { y: window.innerHeight, ease: 'none', repeat: -1, duration: (Math.random() * 6) + 2 })
            });
        }

        // Mist Animations
        if (props.wthrByIcon === '50d' || props.wthrByIcon === '50n') {
            mistRef.current.forEach( (el) => {
                gsap.to(el, { x: -30, ease: 'none', yoyo: true, repeat: -1, duration: 5});
            });    
        }
    }, [setCntrWidth, props.wthrByIcon]);

    const partlyCloudNum = 7, cloudNum = 12, drizzleDropsNum = 14, rainDropsNum = 25, flakeNum = 15;
    const partlyCloudCntr = [], cloudCntr = [], drizzleDropsCntr = [], rainDropsCntr = [], flakeCntr = [];
    
    // For functions to bring elements to view

    for (let i = 0; i < partlyCloudNum; i ++) {
        partlyCloudCntr.push(<div className='partlyCloud' ref={addPartlyClouds}key={'partly cloud ' + i}><BsCloudFill /></div>)
    }

    for (let i = 0; i < cloudNum; i++) {
        cloudCntr.push(<div className='cloud' ref={addPartlyClouds} key={'Cloud ' + i}><BsCloudFill /></div>)
    }

    for (let i = 0; i < drizzleDropsNum; i++) {
        drizzleDropsCntr.push(<div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} key={'Drizzle Drop ' + i}><GiWaterDrop /></div>)
    }

    for (let i = 0; i < rainDropsNum; i++) {
        rainDropsCntr.push(<div className='drop' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} key={'Rain Drop ' + i}><GiWaterDrop /></div>)
    }

    for (let i = 0; i < flakeNum; i++) {
        flakeCntr.push(<div className='flake' ref={addDropsRef} style={{ left: Math.floor(Math.random() * (cntrWidth / 16)) + 'rem' }} key={'Flake ' + i}><FaSnowflake /></div>);
    }

    return (
        <div className='animBG' ref={mainRef}>
                
            { props.wthrByIcon === '01d' ? 
                <div className='BG sunny'>
                    <div className='sun' ref={sunMoonRef}><RiSunFill /></div>
                </div> 
            :  null }

                
            { props.wthrByIcon === '01n' ? 
                <div className='BG night'>
                    <div className='moon' ref={sunMoonRef}><BsFillMoonFill /></div>
                </div>
            : null }


            { props.wthrByIcon === '02d' ? 
                <div className='BG partlyCloudy'>
                    <div className='sun' ref={sunMoonRef}><RiSunFill /></div>

                   {partlyCloudCntr}
                </div>
            : null }

            { props.wthrByIcon === '02n' ? 
                <div className='BG partlyCloudy night'>
                    <div className='moon' ref={sunMoonRef}><BsFillMoonFill /></div>

                    {partlyCloudCntr}
                </div>
            : null }

            { props.wthrByIcon === '03d' || props.wthrByIcon === '03n' || props.wthrByIcon === '04d' || props.wthrByIcon === '04n' ? 
                <div className='BG cloudy'>
                    {cloudCntr}
                    
                </div> 
            : null }

            { props.wthrByIcon === '09d' || props.wthrByIcon === '09n' ?
                <div className='BG drizzle'>
                    {partlyCloudCntr}

                    <div className='dropsCntr'>
                       {drizzleDropsCntr}
                    </div> 
                </div> 
            : null}
           
            { props.wthrByIcon === '10d' || props.wthrByIcon === '10n' ?
                <div className='BG rain'>
                    {cloudCntr}
         
                    <div className='dropsCntr'>
                        {rainDropsCntr}
                    </div>
                </div>
            : null }
           
            { props.wthrByIcon === '11d' || props.wthrByIcon === '11n' ?
                <div className='BG thunderstorm'>
                    <div className='cloudsCntr'>
                       {cloudCntr}
                    </div>
                        
                    <div className='dropsCntr'>
                        {rainDropsCntr}

                        <div className='lightning flashit'></div>
                    </div>
                </div>
            : null }
            
            { props.wthrByIcon === '13d' || props.wthrByIcon === '13n' ? 
                <div className='BG snow'>                  
                    {flakeCntr}
                </div>
            : null }

            { props.wthrByIcon === '50d' || props.wthrByIcon === '50n' ?
                <div className='BG rain'>
                    <div className='mist' ref={addMistRef} ><WiWindy /></div>
                    <div className='mist' ref={addMistRef} ><WiWindy /></div>
                    <div className='mist' ref={addMistRef} ><WiWindy /></div>
                    <div className='mist' ref={addMistRef} ><WiWindy /></div>
                    <div className='mist' ref={addMistRef} ><WiWindy /></div>
                </div>
            : null }
        </div>
    );
}

export default CurrentWeatherBG;