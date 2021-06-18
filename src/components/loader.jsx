import React from 'react';
import './loader.css';
import Loader from 'react-loader-spinner';



export const Load = () =>{
    return(
        <div>
           <h1 className="title">Loading</h1>
       <div style={{ position: 'relative', zIndex: '1' }} className="wrapper">
                <Loader
                    type="Bars"
                    color="#1B7EC2"
                    height={50}
                    width={50}
                />
                </div>
        </div>
    )
}