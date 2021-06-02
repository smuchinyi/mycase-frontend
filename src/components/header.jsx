import React, { Fragment } from 'react'
import "antd/dist/antd.css";
import Container from '@material-ui/core/Container';
import { Row, Col, Dropdown, Menu, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import flagUs from '../images/us-flag.png'
import cws from '../images/cws-logo.png'
import rsc from '../images/rsc-africa.png'
import Typography from '@material-ui/core/Typography';
import "./header.css";
import { Link } from 'react-router-dom';


const header = {
    height: "300px",
    padding: "50px",

}

const leftCol = {
    textAlign: "start"
}

const middleCol = {
    textAlign: "center"
}

const rightCol = {
    textAlign: "end"
}

const handleLanguageClick = () => {

}

const myCaseMenu = (
    <Menu>
        <Menu.Item key="1" >
            How Can I help my Case
      </Menu.Item>
        <Menu.Item key="2" >
            Updates to My Case
      </Menu.Item>
    </Menu>
);

const lang = (
    <Menu onClick={handleLanguageClick}>
        <Menu.Item key="1" >
            English
      </Menu.Item>
        <Menu.Item key="2">
            Kiswahili
      </Menu.Item>
        <Menu.Item key="3">
            Somali
      </Menu.Item>
        <Menu.Item key="4">
            Francaise
      </Menu.Item>
        <Menu.Item key="5">
            Arabic
      </Menu.Item>
        <Menu.Item key="6">
            Amharic
      </Menu.Item>
        <Menu.Item key="7">
            Kinyarwanda
      </Menu.Item>
        <Menu.Item key="8">
            Kirundi
      </Menu.Item>
        <Menu.Item key="8">
            Tigrinya
      </Menu.Item>
    </Menu>
);


export const HeaderSection = () => {
    return (
        <>
            <div style={header}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={8} style={leftCol}>
                        <img src={flagUs} height={50} />
                    </Col>
                    <Col span={8} style={middleCol}>
                        <img src={rsc} height={80} />
                    </Col>
                    <Col span={8} style={rightCol}>
                        <img src={cws} height={50} />
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: "80px", textAlign: "center" }}>
                    <Col span={4}>
                        <h2 className="nav-link">
                            <Dropdown overlay={myCaseMenu}>
                                <h4 className="nav-link">Check my Case</h4>
                            </Dropdown>
                        </h2>
                    </Col>
                    <Col span={4}>
                        <h2 className="nav-link">Refugee Resources</h2>
                    </Col>
                    <Col span={4}>
                        <h2 className="nav-link">Public Resources</h2>
                    </Col>
                    <Col span={4}>
                        <h2 className="nav-link">Gallery</h2>
                    </Col>
                    <Col span={4}>
                        <h2 className="nav-link">Contact Us</h2>
                    </Col>
                    <Col span={4}>
                        <h2>
                            <Dropdown overlay={lang}>
                                <Button style={{ backgroundColor: "#ea9b0a", fontWeight: "bold", color: "black", fontSize: "17px", height: "50px" }}>
                                    Choose Language <DownOutlined />
                                </Button>
                            </Dropdown>

                        </h2>
                    </Col>
                </Row>
            </div>
        </>
    )
}

