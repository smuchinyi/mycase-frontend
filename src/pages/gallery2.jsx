import React, { useState, useEffect } from 'react';
import './styles/gallery2.css';
import { Row, Col, Divider, Modal } from 'antd';
import child from '../images/child-fl4.png';
import afr from '../images/afr.png';
import { Loader } from '../components/loader.jsx';
import { useSelector } from 'react-redux';
import "antd/dist/antd.css";





export const Gallery = () => {
    const [visible, setVisible] = useState(false);




    const photos = useSelector((state) => state.gallery.photos);
    console.log('sss------>', photos);


    useEffect(() => {


    }, [photos.length]);





    return (
        <>
            <div className="main-container">
                {photos?.length > 0 ? (
                    <div>
                        <h1 className="title-gallery">Our Gallery</h1>
                        <h1 className='album-name'>Album Name</h1>

                        <div className="gallery-view" >

                            <Row gutter={16} className='gallery-row'>
                                {photos.map((item, index) => (
                                    <Col xs={24} sm={12} md={6} lg={6} xl={6} className="col-image gutter-row" key={index.toString()}>
                                        <img src={item.URL} alt={item.Id} className='gallery-image' onClick={() => setVisible(true)} />
                                        <Modal
                                            centered
                                            mask={false}
                                            style={{ backgroundColor: "none" }}
                                            visible={visible}
                                            onOk={() => setVisible(false)}
                                            onCancel={() => setVisible(false)}
                                            width={700}
                                            footer={null}
                                        >
                                            <Row>
                                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                                    <img src={afr} width="100%" />
                                                </Col>
                                                <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{ backgroundColor: "white", position: "relative" }}>
                                                    <p className="img-desc">Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                                                </Col>
                                            </Row>
                                        </Modal>
                                    </Col>

                                ))}


                            </Row>
                        </div>
                    </div>
                ) : (<Loader />)}

            </div>
        </>
    )
}