import React, {  useEffect, useState } from 'react'
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
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


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
    top: "155px",
    left: "50px",
    padding: "20px",
    marginTop: '100px'
}

const row1_mobile = {
    position: "relative",
    textAlign: 'center',
    height: "300px"
}

const row2_mobile = {
    baackgroundColor: "white",
    padding: "50px",
    marginTop: "250px",
    scrollX: 'auto',
    fontSize: '1.2vmin'

}

const row3_mobile = {
}

const form_mobile = {
    height: "410px",
    backgroundColor: "#ea9b0a",
    width: "100%",
    position: "absolute",
    bottom: "5px",
    top: "190px",
    right: "auto",
    left: "auto",
    padding: "5px"
}


const row1_medium = {
    height: "700px",
    position: "relative"
}

const row2_medium = {
    
    baackgroundColor: "white",
    padding: "50px",
    marginTop: '110px'
}

const row3_medium = {
    
    marginBottom: "102px"
}

const form_medium = {
    height: "525px",
    width: "510px",
    backgroundColor: "#ea9b0a",
    position: "absolute",
    bottom: "0px",
    top: "230px",
    left: "10px",
    padding: "20px",
    marginTop: '100px'
}


export const LandingSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_medium = useMediaQuery(theme.breakpoints.up('sm'))
    const matches_large = useMediaQuery(theme.breakpoints.down('md'))

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


    // Conditional Rendering for mobile screen, medium screen and large screen

    //Render mobile screen
    if (matches) {
        return (
            <>
                <div style={row1_mobile}>
                    <img src={child} width="100%" height="300px" className="bg-image" />
                    <p className="mobile-image-text1">My Case</p>
                    <p className="mobile-image-text2">US Refugee Admissions</p>
                    <p className="mobile-image-text3">Program</p>

                    <p className="mobile-image-text4">RSC Africa is operated by CWS as part</p>
                    <p className="mobile-image-text5">of a cooperative agreement</p>
                    <p className="mobile-image-text6">with the US Department of state</p>

                    <div style={form_mobile}>
                        <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "26px" }}>{t('check_my_case')}</h1>
                        <p style={{ textAlign: "center", fontSize: "14px", color: "black" }}>{t('please_text')}</p>
                        <input type="text" id="cnum" name="casenumber" placeholder={t('case_number')} style={{ marginBottom: "10px", width: "100%", padding: "15px", backgroundColor: "#dbd6d6" }} />
                        <input type="password" id="pass" name="password" placeholder={t('password')} style={{ borderColor: "#dbd6d6", marginBottom: "10px", width: "100%", padding: "15px", backgroundColor: "#dbd6d6" }} />
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
                <div style={row2_mobile}>
                    <h1 style={{ fontWeight: "bold", fontSize: "26px" }}>{t('how_to_use')}</h1>
                    <p style={{ color: "black", fontSize: "3vmin" }}>{t('dear_text')}</p>
                    <p style={{ color: "black", fontSize: "3vmin" }}>{t('first_paragraph')}</p>
                    <p style={{ color: "black", fontSize: "3vmin" }}>{t('second_paragraph')}</p>
                    <p style={{ color: "black", fontSize: "3vmin" }}>{t('third_paragraph')}</p>
                    <p style={{ color: "black", fontSize: "3vmin" }}>{t('fourth_paragraph')}</p>
                    <p style={{ color: "black", fontSize: "3vmin" }}>{t('fiveth_paragraph')}</p>
                </div>

                <Row style={row3_mobile} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={24} style={{ backgroundColor: "#353582", padding: "50px" }}>
                        <h1 style={{ color: "white", fontWeight: "bold", fontSize: "26px", textAlign: "center" }}>Notice</h1>
                        <p style={{ color: "white", fontSize: "16px", margin: "10px" }}>The U.S. Government and RSC Africa, which CWS operates, are dedicated to ensuring the safety and  our staff around the world who support the U.S. Refugee
                            Admissions Program (USRAP). For the latest information regarding COVID-19 and how to best
                            protect yourself and your family, please visit the Centers for Disease Control and Prevention’s
                            (CDC) website: https://www.cdc.gov/coronavirus/2019-ncov/index.html.</p>
                        <p style={{ color: "white", fontSize: "15px", margin: "10px" }}>RSC Africa continues to process cases for departure that conform to the FY 2021 Presidential
                            Determination (PD) on Refugee Admissions. Cases that do not fall under one of the categories
                            in the PD will not be able to depart to the United States at this time. These cases will remain
                            open and the RSC will reach out to the applicant if there is any action needed on the case.
                            Given the changes to the USRAP program categories this fiscal year, we urge applicants to
                            remain patient.</p>
                        <p style={{ color: "white", fontSize: "16px", margin: "10px" }}>The RSC is continuing to operate at reduced levels, and has temporarily postponed in-person
                            processing and appointments (if applicable) for the safety of staff and refugee clients. Please
                            check our website at mycase.rscafrica.org for general updates on USRAP processing and RSC
                            operations. As updates for your specific case become available, we will inform you. In the
                            meantime, please feel free to contact us if you have updates or questions about your case. As
                            the volume of inquiries may be high, there may be delays and we kindly ask for your patience in
                            addressing non-urgent matters.</p>
                    </Col>
                    {/* <Col span={8} style={{ backgroundColor: "#353582" }}>
                        <img src={footer} width="100%" height="700px" style={{ objectFit: "cover" }} />
                    </Col> */}
                </Row>
            </>
        )

    }

    //Render medium screen
    if (matches_large && matches_medium) {
        return (
            <>
                <div style={row1_medium}>
                    <img src={child} width="100%" height="700px" className="bg-image" />
                    <h1 className="image-text1">My Case</h1>
                    <h1 className="image-text2">US Refugee Admissions</h1>
                    <h1 className="image-text3">Program</h1>

                    <p className="medium-image-text4">RSC Africa is operated by CWS as part</p>
                    <p className="medium-image-text5">of a cooperative agreement with</p>
                    <p className="medium-image-text6">the US Department of state</p>

                    <div style={form_medium}>
                        <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "40px" }}>{t('check_my_case')}</h1>
                        <p style={{ textAlign: "center", fontSize: "16px", color: "black" }}>{t('please_text')}</p>
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
                <div style={row2_medium}>
                    <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>{t('how_to_use')}</h1>
                    <p style={{ color: "black", fontSize: "20px" }}>{t('dear_text')}</p>
                    <p style={{ color: "black", fontSize: "20px" }}>{t('first_paragraph')}</p>
                    <p style={{ color: "black", fontSize: "20px" }}>{t('second_paragraph')}</p>
                    <p style={{ color: "black", fontSize: "20px" }}>{t('third_paragraph')}</p>
                    <p style={{ color: "black", fontSize: "20px" }}>{t('fourth_paragraph')}</p>
                    <p style={{ color: "black", fontSize: "20px" }}>{t('fiveth_paragraph')}</p>
                </div>

                <Row style={row3_medium} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={16} style={{ backgroundColor: "#353582", padding: "50px", textAlign: "center" }}>
                        <h1 style={{ color: "white", fontWeight: "bold", fontSize: "40px" }}>Notice</h1>
                        <p style={{ color: "white", fontSize: "20px" }}>The U.S. Government and RSC Africa, which CWS operates, are dedicated to ensuring the safety and our staff around the world who support the U.S. Refugee
                            Admissions Program (USRAP). For the latest information regarding COVID-19 and how to best
                            protect yourself and your family, please visit the Centers for Disease Control and Prevention’s
                            (CDC) website: https://www.cdc.gov/coronavirus/2019-ncov/index.html.</p>
                        <p style={{ color: "white", fontSize: "20px" }}>RSC Africa continues to process cases for departure that conform to the FY 2021 Presidential
                            Determination (PD) on Refugee Admissions. Cases that do not fall under one of the categories
                            in the PD will not be able to depart to the United States at this time. These cases will remain
                            open and the RSC will reach out to the applicant if there is any action needed on the case.
                            Given the changes to the USRAP program categories this fiscal year, we urge applicants to
                            remain patient.</p>
                        <p style={{ color: "white", fontSize: "20px" }}>The RSC is continuing to operate at reduced levels, and has temporarily postponed in-person
                            processing and appointments (if applicable) for the safety of staff and refugee clients. Please
                            check our website at mycase.rscafrica.org for general updates on USRAP processing and RSC
                            operations. As updates for your specific case become available, we will inform you. In the
                            meantime, please feel free to contact us if you have updates or questions about your case. As
                            the volume of inquiries may be high, there may be delays and we kindly ask for your patience in
                            addressing non-urgent matters.</p>
                    </Col>
                    <Col span={8} style={{ backgroundColor: "#353582" }}>
                        <img src={footer} width="100%" height="800px" style={{ objectFit: "cover" }} />
                    </Col>
                </Row>
            </>
        )

    }


    //Otherwise render large screen
    return (
        <>
            <div style={row1}>
                <img src={child} width="100%" height="700px" className="bg-image" />
                <p className="image-text1">My Case</p>
                <p className="image-text2">US Refugee Admissions</p>
                <p className="image-text3">Program</p>

                <p className="image-text4">RSC Africa is operated by CWS as part of a cooperative</p>
                <p className="image-text5"> agreement with the US Department of state</p>
                {/* <p className="image-text6">the US Department of state</p> */}

                <div style={form}>
                    <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "40px" }}>{t('check_my_case')}</h1>
                    <p style={{ textAlign: "center", fontSize: "16px", color: "black" }}>{t('please_text')}</p>
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
                <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>{t('how_to_use')}</h1>
                <p style={{ color: "black", fontSize: "16px" }}>{t('dear_text')}</p>
                <p style={{ color: "black", fontSize: "16px" }}>{t('first_paragraph')}</p>
                <p style={{ color: "black", fontSize: "16px" }}>{t('second_paragraph')}</p>
                <p style={{ color: "black", fontSize: "16px" }}>{t('third_paragraph')}</p>
                <p style={{ color: "black", fontSize: "16px" }}>{t('fourth_paragraph')}</p>
                <p style={{ color: "black", fontSize: "16px" }}>{t('fiveth_paragraph')}</p>
            </div>

            <Row style={row3} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={16} style={{ backgroundColor: "#353582", padding: "50px", textAlign: "center" }}>
                    <h1 style={{ color: "white", fontWeight: "bold", fontSize: "40px" }}>Notice</h1>
                    <p style={{ color: "white", fontSize: "16px" }}>The U.S. Government and RSC Africa, which CWS operates, are dedicated to ensuring the safety and  our staff around the world who support the U.S. Refugee
                        Admissions Program (USRAP). For the latest information regarding COVID-19 and how to best
                        protect yourself and your family, please visit the Centers for Disease Control and Prevention’s
                        (CDC) website: https://www.cdc.gov/coronavirus/2019-ncov/index.html.</p>
                    <p style={{ color: "white", fontSize: "16px" }}>RSC Africa continues to process cases for departure that conform to the FY 2021 Presidential
                        Determination (PD) on Refugee Admissions. Cases that do not fall under one of the categories
                        in the PD will not be able to depart to the United States at this time. These cases will remain
                        open and the RSC will reach out to the applicant if there is any action needed on the case.
                        Given the changes to the USRAP program categories this fiscal year, we urge applicants to
                        remain patient.</p>
                    <p style={{ color: "white", fontSize: "16px" }}>The RSC is continuing to operate at reduced levels, and has temporarily postponed in-person
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