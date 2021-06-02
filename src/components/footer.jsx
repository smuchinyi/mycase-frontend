import React, { Fragment } from 'react'
import "antd/dist/antd.css";
import { Row, Col, Popover } from 'antd';
import Typography from '@material-ui/core/Typography';
import cws from '../images/cws-logo.png'
import './footer.css';


const main = {
    height: "350px",
    backgroundColor: "rgba(66, 64, 64, 0.9)",
    padding: 50
}

const row1 = {

}

const content = (
    <div style={{ textAlign: "center" }}>
        <p>Lorem ipsum dolor sit amet, consectetuer</p>
        <p>uismod tincidunt ut laoreet dolore magn</p>
        <p>aliquam erat volutpat. Ut wisi enim ad</p>
        <p>minim veniam, quis nostrud exerci tation</p>
        <p>ullamcorper suscipit lobortis nisl ut aliquip</p>
        <button>Visit Website</button>
    </div>
);

const row2 = {

}

const contact = {


}

const info = {
    fontWeight: "bolder",
    fontSize: 17,
    margin: 10
}

const footerText = {
    marginTop: 100,
    color: "black",
    textAlign: "center"
}

const logo = {
    marginTop: 50
}




export const FooterSection = () => {
    return (
        <>
            <div style={main}>
                <Row style={row1}>
                    <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }} style={contact}>
                        <Typography style={info}>RSC Contact Information:</Typography>
                        <Typography style={info}>Email: case@CWSAfrica.org</Typography>
                        <Typography style={info}>Address: P.O. Box 14176-00800, Nairobi, Kenya</Typography>
                    </Col>
                    <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                        <Popover content={content} title="CWS Website" placement="right" style={{ backgroundColor: "black" }}>
                            <img src={cws} style={logo} />
                        </Popover>
                    </Col>
                </Row>
                <Row style={row2} justify="center">
                    <Typography style={footerText}>RSC Africa is operated by CWS as part of a cooperative agreement with the United States Department of State. This website was funded by the United States Department of State under the authority of the Migration and Assistance Act of 1962, as amended. The opinions, findings, and conclusions stated herein are those of the author
and do not necessarily reflect those of the United States Department of State</Typography>
                </Row>
            </div>
        </>
    )
}
