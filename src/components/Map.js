import React, { useRef, useEffect } from 'react';
import gsap from 'gsap'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = (props) => {

    const mapRef = useRef(null), cntrRef = useRef(null);

    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW9tZG9tZW5lY2giLCJhIjoiY2wwMXNqMzM4MHhlODNjbWx3aW95MTZqYiJ9.uVERxbdkPqvpiMcJLzimpQ'

    // Initialize the map when comp mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [props.viewportLon, props.viewportLat],
            zoom: 10
        });

        map.doubleClickZoom.disable();
        map.on('style.load', function() {
            map.on('dblclick', function(e) {
                let coordinates = e.lngLat;
                props.showWthrFromMap(coordinates.lng, coordinates.lat);
                })
        });

        // Animation to bring cntr to view
        gsap.fromTo(cntrRef.current, { opacity: 0, z: -1}, { opacity: 1, z: 1, duration: 1, ease: 'expo' } ).play();

        return () => map.remove();
    }, [props]);


    return (
        <div className='mapContainer' ref={cntrRef}>
            <div className='map' ref={mapRef} ></div>
        </div>
    );
}

export default Map;

/* 
    const [ viewport, setViewport ] = useState({
        width: window.innerWidth - 100,
        height: window.innerHeight,
        latitude: 25.761,
        longitude: 80.1918,
        zoom: 10,
      });
<ReactMapGl
                className='map'
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle='mapbox://styles/mapbox/dark-v9'
                {...viewport}>
            </ReactMapGl>
*/