import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Col } from 'antd';

const video = {
    maxWidth: "350px",
    width: "100%",
    height: "300px",
    padding: "10px"
}

export const VideoScrollTemplate = ({ title, video_url, selected }) => {

    return (
        <>
            <Col style={{ textAlign: "center" }}>
                <video controls style={video}></video>
                <h1>{title}</h1>
            </Col>
        </>
    )
}
