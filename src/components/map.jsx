import React, { Fragment } from 'react'
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import Typography from '@material-ui/core/Typography';
import "./header.css";
import africa from '../images/africa.png';



const main = {
    height: "600px",
    textAlign: "center",
    backgroundColor: "#8e8d8d"
}

const mapArea = {

}
const coverTitle = {
    fontWeight: "bolder",
    fontSize: 17,
    marginTop: 50,
    marginBottom: 20
}

const galleryBtn = {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "white",
    fontWeight: "bold",
    border: "none",
    marginTop: 30,

}

export const MapSection = () => {
    return (
        <>
            <div style={main}>
                <Row>
                    <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} style={mapArea}>
                        <Typography style={coverTitle}>Our Coverage</Typography>
                        <div>
                            <img src={africa} height="400" width="500" />
                        </div>
                        <button style={galleryBtn}>VISIT OUR GALLERY</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}
