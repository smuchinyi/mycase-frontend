import React, { Fragment, useEffect, useState } from 'react'
import child from '../images/child-fl4.png'
import footer from '../images/footer.png'
import "./landing.css";
import { Row, Col, Modal } from 'antd';
import "antd/dist/antd.css";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const row1 = {
    height: "700px",
    position: "relative"
}

const row2 = {
    height: "500px",
    baackgroundColor: "white",
    padding: "50px",
    marginTop: '110px'
}

const row3 = {
    height: "700px",
}

const form = {
    height: "525px",
    width: "510px",
    backgroundColor: "#ea9b0a",
    position: "absolute",
    bottom: "0px",
    top: "320px",
    right: "30px",
    padding: "20px",
    marginTop: '100px'
}


export const LandingSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const language = useSelector(state => state?.language?.language);
    const { t } = useTranslation();

    useEffect(() => {
        i18next.changeLanguage(language)
    }, [language]);

    return (
        <>
            <div style={row1}>
                <img src={child} width="100%" height="700px" className="bg-image" />
                <h1 className="image-text1">MyCase</h1>
                <h1 className="image-text2">US Refugee Admissions</h1>
                <h1 className="image-text3">Program</h1>

                <p className="image-text4">Lorem ipsum dolor sit amet, consec</p>
                <p className="image-text5">tetuer adipiscing elit, sed diam nonum</p>
                <p className="image-text6">my nibh euismod tincidunt ut laoreet</p>

                <div style={form}>
                    <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "40px" }}>{t('check_my_case')}</h1>
                    <p style={{ textAlign: "center", fontSize: "20px", color: "black" }}>{t('please_text')}</p>
                    <input type="text" id="cnum" name="casenumber" placeholder={t('case_number')} style={{ marginBottom: "20px", width: "100%", padding: "23px", backgroundColor: "#dbd6d6" }} />
                    <input type="password" id="pass" name="password" placeholder={t('password')} style={{ borderColor: "#dbd6d6", marginBottom: "20px", width: "100%", padding: "23px", backgroundColor: "#dbd6d6" }} />
                    <div style={{ textAlign: "center" }}>
                        <button style={{ cursor: "pointer", boxShadow: "none", fontWeight: "bold", backgroundColor: "black", color: "white", borderColor: "black", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "30px", paddingRight: "30px" }}>
                            {t('view_case')}
                        </button>
                        <p style={{ marginTop: 10 }}>{t('dont_remember')}</p>
                        <p style={{ color: "#3f51b5", fontWeight: "bold", cursor: "pointer" }} onClick={showModal}>{t('request_password')}</p>
                        <Modal
                            title={<span style={{ fontWeight: "bold" }}>Password Change Request</span>}
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{ marginRight: 10 }}
                                >
                                    Send Request
                                </Button>,
                                <Button variant="contained" onClick={handleCancel} >
                                    Cancel
                                </Button>,
                            ]}
                        >
                            <TextField

                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth

                                id="name"
                                label="Name"
                                name="name"
                            />
                            <TextField

                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth

                                id="rscCaseNumber"
                                label="RSC Case Number"
                                name="rscCaseNumber"
                            />
                            <TextField

                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                name="phoneNumber"

                            />
                        </Modal>
                    </div>
                </div>
            </div>
            <div style={row2}>
                <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>{t('how_to_use')}</h1>
                <p style={{ color: "black", fontSize: "17px" }}>{t('dear_text')}</p>
                <p style={{ color: "black", fontSize: "17px" }}>{t('first_paragraph')}</p>
                <p style={{ color: "black", fontSize: "17px" }}>{t('second_paragraph')}</p>
                <p style={{ color: "black", fontSize: "17px" }}>{t('third_paragraph')}</p>
                <p style={{ color: "black", fontSize: "17px" }}>{t('fourth_paragraph')}</p>
            </div>

            <Row style={row3} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={16} style={{ backgroundColor: "#353582", padding: "50px", textAlign: "center" }}>
                    <h1 style={{ color: "white", fontWeight: "bold", fontSize: "45px" }}>Notice</h1>
                    <p style={{ color: "white", fontSize: "18px" }}>The U.S. Government and RSC Africa, operated by CWS, are dedicated to ensuring the safety
                        and security of refugee applicants and our staff around the world who support the U.S. Refugee
                        Admissions Program (USRAP). For the latest information regarding COVID-19 and how to best
                        protect yourself and your family, please visit the Centers for Disease Control and Prevention’s
                        (CDC) website: https://www.cdc.gov/coronavirus/2019-ncov/index.html.</p>
                    <p style={{ color: "white", fontSize: "18px" }}>RSC Africa continues to process cases for departure that conform to the FY 2021 Presidential
                        Determination (PD) on Refugee Admissions. Cases that do not fall under one of the categories
                        in the PD will not be able to depart to the United States at this time. These cases will remain
                        open and the RSC will reach out to the applicant if there is any action needed on the case.
                        Given the changes to the USRAP program categories this fiscal year, we urge applicants to
                        remain patient.</p>
                    <p style={{ color: "white", fontSize: "18px" }}>The RSC is continuing to operate at reduced levels, and has temporarily postponed in-person
                        processing and appointments (if applicable) for the safety of staff and refugee clients. Please
                        check our website at mycase.rscafrica.org for general updates on USRAP processing and RSC
                        operations. As updates for your specific case become available, we will inform you. In the
                        meantime, please feel free to contact us if you have updates or questions about your case. As
                        the volume of inquiries may be high, there may be delays and we kindly ask for your patience in
                        addressing non-urgent matters.</p>
                </Col>
                <Col span={8} style={{ backgroundColor: "#353582" }}>
                    <img src={footer} width="100%" height="700px" style={{ objectFit: "cover" }} />
                </Col>
            </Row>
        </>
    )
}