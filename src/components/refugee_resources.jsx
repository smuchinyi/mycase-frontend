import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import { Row, Col, Dropdown, Menu, Button } from 'antd';
import "./refugee_resources.css";
import ftImage from '../images/footer.png';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import app_free from '../images/app_free.jpeg'
import app_store from '../images/app_store.jpeg'
import dna from '../images/dna.jpeg'
import learn_eng from '../images/learn_eng.jpeg'
import p3 from '../images/p3.jpeg'
import patient from '../images/patient.jpeg'
import pay_loan from '../images/pay_loan.jpeg'
import play_store from '../images/play_store.jpeg'
import settle from '../images/settle.jpeg'
import spouse from '../images/spouse.jpeg'
import us_reset_process from '../images/us_reset_process.jpeg'
import wat_can from '../images/wat_can.jpeg'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { VideoScrollTemplate } from './video_scroll_template';



const card = {
    margin: "50px",
    padding: "25px 140px 25px 120px"
}

const cardMobile = {
    margin: "15px",
    padding: "25px 25px 25px 25px"
}

const cardMedium = {
    margin: "50px",
    padding: "25px 120px 25px 120px"
}

const travel = {
    padding: "25px 50px 25px 50px"
}



export const RefugeeResources = () => {


    const [currentLanguage, setCurrentLanguage] = useState("Select Language Download");
    const [selectedVideo, setCurrentVideoSelected] = useState("item1")
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_medium = useMediaQuery(theme.breakpoints.up('sm'))
    const matches_large = useMediaQuery(theme.breakpoints.down('md'))


    // list of videos
    const video_list = [
        { title: 'video1', video_url: "" },
        { title: 'video2', video_url: "" },
        { title: 'video3', video_url: "" },
        { title: 'video4', video_url: "" },
        { title: 'video5', video_url: "" },
        { title: 'video6', video_url: "" },
        { title: 'video7', video_url: "" },
        { title: 'video8', video_url: "" },
        { title: 'video9', video_url: "" }
    ];


    const onSelect = key => {
        setCurrentVideoSelected(key);
    }

    const videoMenu = (list, selected) =>

        list.map(el =>
            <VideoScrollTemplate title={el.title} video_url={el.video_url} selected={selected} />
        );


    const Arrow = ({ icon, className }) => {
        return (
            <div
                className={className}
            >{icon}</div>
        );
    };


    const ArrowLeft = Arrow({ icon: <ArrowBackIosIcon fontSize='large' />, className: 'arrow-prev' });
    const ArrowRight = Arrow({ icon: <ArrowForwardIosIcon fontSize='large' />, className: 'arrow-next' });

    const menu_vids = videoMenu(video_list, selectedVideo)

    const handleLanguageClick = ({ key }) => {
        console.log(key);
    }

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


    // Conditional Rendering for mobile screen, medium screen and large screen

    //Render mobile screen
    if (matches) {
        return (
            <>
                <Card style={cardMobile}>
                    <Row>
                        <Col span={24}>
                            <h1 className="fr-title-mobile">Featured Resources</h1>
                            <img src={ftImage} className="fr-image" />
                            <h1 className="fr-pub-res-mobile">Public Resource</h1>
                        </Col>
                        <Col span={24}>
                            <p className="ft-title-right-mobile"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>

                            <Button className="fr-down-btn">DOWNLOAD</Button>
                        </Col>
                    </Row>
                </Card>
            </>
        )

    }

    //Render Medium Screen
    if (matches_large && matches_medium) {
        return (
            <>
                <Card style={cardMedium}>
                    <Row>
                        <Col span={10}>
                            <h1 className="fr-title">Featured Resources</h1>
                            <img src={ftImage} className="fr-image" />
                            <h1 className="fr-pub-res">Public Resource</h1>
                        </Col>
                        <Col span={4}></Col>
                        <Col span={10}>
                            <p className="ft-title-right-medium"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>

                            <Button className="fr-down-btn">DOWNLOAD</Button>
                        </Col>
                    </Row>
                </Card>
            </>
        )

    }

    //Otherwise render large screen
    return (
        <>
            <Card style={card}>
                <Row>
                    <Col sm={24} xs={24} md={24} lg={10} xl={10} xxl={10} >
                        <h1 className="fr-title">Featured Resources</h1>
                        <img src={ftImage} className="fr-image" />
                        <h1 className="fr-pub-res">Public Resource</h1>
                    </Col>
                    <Col span={1}></Col>
                    <Col sm={24} xs={24} md={24} lg={10} xl={10} xxl={10}>
                        <p className="ft-title-right"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>

                        <Button className="fr-down-btn">DOWNLOAD</Button>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </Card>
            <div style={travel}>
                <h1 className="fr-travel-title">PDF Resources</h1>
                <Row>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">USRAP is Free</h1>
                        <img src={app_free} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "#ea9b0a", backgroundColor: "#ea9b0a", fontWeight: "bold", color: "black", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">USRAP Application Process</h1>
                        <img src={us_reset_process} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "#ea9b0a", backgroundColor: "#ea9b0a", fontWeight: "bold", color: "black", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">P3 Application Process</h1>
                        <img src={p3} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "#ea9b0a", backgroundColor: "#ea9b0a", fontWeight: "bold", color: "black", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "#e8e8e8", marginTop: "30px", padding: "20px" }}>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">What can you do to help RSC Africa with your case</h1>
                        <img src={wat_can} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "rgb(21, 125, 187)", backgroundColor: "rgb(21, 125, 187)", fontWeight: "bold", color: "white", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">Resettlement Process</h1>
                        <img src={patient} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "rgb(21, 125, 187)", backgroundColor: "rgb(21, 125, 187)", fontWeight: "bold", color: "white", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">Learning English</h1>
                        <img src={learn_eng} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "rgb(21, 125, 187)", backgroundColor: "rgb(21, 125, 187)", fontWeight: "bold", color: "white", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
                <Row style={{ marginTop: "30px", padding: "20px" }}>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">Preparing for your Trave</h1>
                        <img src={app_free} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "#ea9b0a", backgroundColor: "#ea9b0a", fontWeight: "bold", color: "black", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">Do’s and Dont’s of Travel</h1>
                        <img src={us_reset_process} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "#ea9b0a", backgroundColor: "#ea9b0a", fontWeight: "bold", color: "black", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">What Should I Expect</h1>
                        <img src={p3} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "#ea9b0a", backgroundColor: "#ea9b0a", fontWeight: "bold", color: "black", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "#e8e8e8", marginTop: "30px", padding: "20px" }}>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">Pay Your IOM Travel Loan</h1>
                        <img src={pay_loan} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "rgb(21, 125, 187)", backgroundColor: "rgb(21, 125, 187)", fontWeight: "bold", color: "white", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">DNA Testing</h1>
                        <img src={dna} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "rgb(21, 125, 187)", backgroundColor: "rgb(21, 125, 187)", fontWeight: "bold", color: "white", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={8} style={{ textAlign: "center" }}>
                        <h1 className="pdf-res-titles">Polygamy</h1>
                        <img src={spouse} className="pdf-res-image" />
                        <Dropdown overlay={lang}>
                            <Button style={{ borderColor: "rgb(21, 125, 187)", backgroundColor: "rgb(21, 125, 187)", fontWeight: "bold", color: "white", fontSize: "17px", height: "50px", marginTop: "10px" }}>
                                {currentLanguage} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
                <h1 className="fr-travel-title">Resource Videos</h1>
                <ScrollMenu
                    data={menu_vids}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selectedVideo}
                    onSelect={onSelect}
                />


            </div>
        </>
    )
}
