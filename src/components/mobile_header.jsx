import React, { Fragment, useEffect, useState } from 'react'
import "antd/dist/antd.css";
import Container from '@material-ui/core/Container';
import { Row, Col, Dropdown, Menu, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import flagUs from '../images/us-fl.jpeg'
import cws from '../images/cws-fl.jpeg'
import rsc from '../images/rsc-fl.jpeg'
import Typography from '@material-ui/core/Typography';
import "./header.css";
import { Link } from 'react-router-dom';
import Tabletop from 'tabletop';
import { uploadGallery } from '../store/actions/galleryActions.js';
import i18next from 'i18next'
import { changeLanguage } from "../store/actions/languageActions";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';


const header = {
    padding: "10px",

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




export const MobileHeaderSection = () => {

    const [currentLanguage, setCurrentLanguage] = useState("Choose Language");

    const handleLanguageClick = ({ key }) => {
        setCurrentLanguage(key);
        dispatch(changeLanguage(key));
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
            <Menu.Item key="English" >
                English
          </Menu.Item>
            <Menu.Item key="Kiswahili">
                Kiswahili
          </Menu.Item>
            <Menu.Item key="Somali">
                Somali
          </Menu.Item>
            <Menu.Item key="Francaise">
                Francaise
          </Menu.Item>
            <Menu.Item key="Arabic">
                عربى
          </Menu.Item>
            <Menu.Item key="Amharic">
                ቋንቋ ለውጥ
          </Menu.Item>
            <Menu.Item key="Kinyarwanda">
                Kinyarwanda
          </Menu.Item>
            <Menu.Item key="Kirundi">
                Kirundi
          </Menu.Item>
            <Menu.Item key="Tigrinya">
                ትግርኛ
          </Menu.Item>
        </Menu>
    );

    const menu = (
        <Menu>
            <Menu.Item>
                <h3 className="nav-link">
                    <Dropdown overlay={myCaseMenu}>
                        <h4 className="nav-link">Check my Case</h4>
                    </Dropdown>
                </h3>
            </Menu.Item>
            <Menu.Item>
                <h3 className="nav-link">Refugee Resources</h3>
            </Menu.Item>
            <Menu.Item>
                <h3 className="nav-link">Public Resources</h3>
            </Menu.Item>
            <Menu.Item>
                <h3 className="nav-link">Gallery</h3>
            </Menu.Item>
            <Menu.Item>
                <h3 className="nav-link">Contact Us</h3>
            </Menu.Item>
        </Menu>
    );

    const dispatch = useDispatch();

    useEffect(() => {
        //getting sms data from drive sheet 
        Tabletop.init({
            key: '19_ZsP7fNAgjaObkRTGISutIMvfejV0QuI-cpUSHEHCE',
            callback: googleData => {
                console.log('google sheet data --->', googleData)
                //updating store
                if (googleData.length > 2) {
                    dispatch(uploadGallery(googleData));
                }
                console.log('www', googleData);
            },
            simpleSheet: true
        })

    }, []);

    return (
        <>
            <div style={header}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                    <Col span={24} style={middleCol}>
                        <Link to='/'><img src={rsc} height={120} /></Link>
                    </Col>

                </Row>
                <Row style={{ padding: "15px" }}>

                    <Col span={2} style={leftCol}>
                        <Dropdown overlay={menu}>
                            <MenuIcon style={{ fontSize: "48px" }} />
                        </Dropdown>
                    </Col>

                    <Col span={12} offset={6} style={rightCol}>
                        <h3>
                            <Dropdown overlay={lang}>
                                <Button style={{ borderColor: "#ea9b0a", backgroundColor: "#ea9b0a", fontWeight: "bold", color: "black", fontSize: "17px", height: "50px" }}>
                                    {currentLanguage} <DownOutlined />
                                </Button>
                            </Dropdown>

                        </h3>
                    </Col>

                </Row>
            </div>
        </>
    )
}

