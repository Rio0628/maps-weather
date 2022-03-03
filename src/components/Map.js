import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {

    const mapRef = useRef(null);

    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW9tZG9tZW5lY2giLCJhIjoiY2wwMXNqMzM4MHhlODNjbWx3aW95MTZqYiJ9.uVERxbdkPqvpiMcJLzimpQ'

    // Initialize the map when comp mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [-104.9876, 39.7405],
            zoom: 10
        });

        // Navigation controls
        // map.addControl( new mapboxgl.NavigationControl(), 'bottom-right');
    
        // Clean up on unmount
        return () => map.remove();
    }, []);


    return (
        <div className='mapContainer'>
            <div className='map' ref={mapRef} onClick={(e) => console.log(e.target)}></div>
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