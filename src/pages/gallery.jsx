import React from 'react';
import './styles/gallery.css';
import {Popover} from 'antd';


const x= [...Array(20).keys()];

 

const content = (
    <div className="popContent">
        <div className='pop-pic'>
             <img src="/images/gallery.png" className="pop-pic" />
            </div>
    <div className="pop-text">
        <p>Lorem ipsum dolor sit amet, consectetuer
        uismod tincidunt ut laoreet dolore magn
        aliquam erat volutpat. Ut wisi enim ad
        minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip</p>
    </div>
    </div>
);

export const Gallery = () =>{
    return(
        <>
        <div className='container'>
           <div className='header'> <span>Our Gallery</span></div>
           <div className="gallery-container">

            <div className='album'>
                <span id='album-name'>Album Name</span>
            <div className="album-container">
                        {x.map((item,index) =>(
                    <div className="Card"  key={index.toString()}>
                        <Popover content={content}  placement="right">
                             <img src="/images/gallery.png" className='gallery-image' />
                        </Popover>
                        </div> ))} 
                </div>

                </div>
                 
                <div className='album'>
                <span id='album-name'>Album Name</span>
            <div className="album-container">
                        {x.map((item,index) =>(
                    <div className="Card"  key={index.toString()}>
                        <Popover content={content}  placement="right">
                             <img src="/images/gallery.png" className='gallery-image' />
                        </Popover>
                        </div> ))} 
                </div>

                </div>

                </div>
            </div>
            
        </>
    )
}