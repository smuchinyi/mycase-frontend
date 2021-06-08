import React, { useState,useEffect } from 'react';
import './styles/gallery2.css';
import { Row, Col, Divider, Modal } from 'antd';
import child from '../images/child-fl4.png';
import Tabletop from 'tabletop';
import {Loader} from '../components/loader.jsx';
import { useSelector } from 'react-redux';






export const Gallery = () => {
    const [visible, setVisible] = useState(false);
    

    

    const photos =  useSelector((state)=> state.gallery.photos);
    console.log('sss------>', photos);

    function openImageModal() {
        setVisible(true);
    }

    useEffect(()=>{
      

    },[photos.length]);


    


    return (
        <>
            <div className="main-container">
                {photos?.length>0?(
                    <div>
                <h1 className="title-gallery">Our Gallery</h1>
                <h1 className='album-name'>Album Name</h1>
                
                <div className="gallery-view" >
                    
                    <Row gutter={16}>
                        {photos.map((item,index) =>(
                        <Col span={6} className="col-image gutter-row" key={index.toString()}>
                            <img src={item.URL} alt={item.Id} className='gallery-image' />
                        </Col>
                        ))}

                       
                    </Row>
                </div>
                </div>
                ):(<Loader/>)}

            </div>
        </>
    )
}