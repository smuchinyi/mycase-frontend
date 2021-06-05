import React, { useState } from 'react';
import './styles/gallery2.css';
import { Row, Col, Divider, Modal } from 'antd';
import child from '../images/child-fl4.png'




export const Gallery = () => {
    const [visible, setVisible] = useState(false);


    function openImageModal() {
        setVisible(true);
    }

    return (
        <>
            <div className="main-container">
                <h1 className="title-gallery">Our Gallery</h1>
                <h1 className='album-name'>Album Name</h1>
                <div className="gallery-view">
                    <Row gutter={16}>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>
                        <Col span={6} className="col-image gutter-row">
                            <img src={child} className='gallery-image' />
                        </Col>

                    </Row>
                </div>

            </div>
        </>
    )
}