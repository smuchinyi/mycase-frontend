import React from 'react'
import "./map.css";
// import africa from '../images/africa.png';
import { VectorMap} from '@south-paw/react-vector-maps';
import africa from './africa.json';


export const MapSection = () => {

    const [hovered, setHovered] = React.useState('');
    const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: () => setHovered('')
}
    console.log('map',hovered);
    return (
        <>
            <div className="map-area" >
                <div className='map-title'><span>Our Coverage</span></div>
                <div className='map-div'>
                    {hovered && <p className='map-tooltip'>{hovered}</p>}
                    <VectorMap className="map" {...africa} layerProps={layerProps} />
                     
                    </div>
                
            </div>
        </>
    )
}
