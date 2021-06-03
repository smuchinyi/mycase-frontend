import React, { Fragment } from 'react'
import child from '../images/child-fl4.png'
import footer from '../images/footer.png'
import "./landing.css";
import { Row, Col } from 'antd';
import "antd/dist/antd.css";


const row1 = {
    height: "700px",
    position: "relative"
}

const row2 = {
    height: "500px",
    baackgroundColor: "white",
    padding: "50px"
}

const row3 = {
    height: "700px",
}

const form = {
    height: "500px",
    width: "500px",
    backgroundColor: "#ea9b0a",
    position: "absolute",
    bottom: "0px",
    top: "350px",
    right: "40px",
    padding: "20px"
}


export const LandingSection = () => {
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
                    <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "40px" }}>Check My Case</h1>
                    <p style={{ textAlign: "center", fontSize: "20px", color: "black" }}>Please enter your case number and password below to view your case status.</p>
                    <input type="text" id="cnum" name="casenumber" placeholder="CASE NUMBER:" style={{ marginBottom: "20px", width: "100%", padding: "23px", backgroundColor: "#dbd6d6" }} />
                    <input type="password" id="pass" name="password" placeholder="PASSWORD:" style={{ borderColor: "#dbd6d6", marginBottom: "20px", width: "100%", padding: "23px", backgroundColor: "#dbd6d6" }} />
                    <div style={{ textAlign: "center" }}>
                        <button style={{ cursor: "pointer", boxShadow: "none", fontWeight: "bold", backgroundColor: "black", color: "white", borderColor: "black", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "30px", paddingRight: "30px" }}>
                            VIEW CASE STATUS
                            </button>
                    </div>
                </div>
            </div>
            <div style={row2}>
                <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>How To Use This Website</h1>
                <p style={{ color: "black", fontSize: "17px" }}>Dear USRAP Applicant,</p>
                <p style={{ color: "black", fontSize: "17px" }}>This is RSC Africa's My Case site which will help you look up information about your resettlement case to the United States. Use the login panel to the
right to log in and receive an update of your individual case status.</p>
                <p style={{ color: "black", fontSize: "17px" }}>You should have been provided with a password by the RSC Africa caseworker that completed your first interview. If you have forgotten your password
or you would like to change your existing password, please click the "REQUEST PASSWORD CHANGE" link to the left and follow instructions.</p>
                <p style={{ color: "black", fontSize: "17px" }}>If you have additional questions about your individual case, RSC Africa, or the United States Refugee Admissions Program, you may write to
Case@CWSAfrica.org. RSC Africa will attempt to respond to your question within 14 calendar days.</p>
                <p style={{ color: "black", fontSize: "17px" }}>The USRAP is free of charge. Report any solicitation of funds or suspected fraud to Fraud@CWSAfrica.org</p>
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
                    <img src={footer} width="100%" height="700px" style={{ objectFit: "cover", display: "block" }} />
                </Col>
            </Row>
        </>
    )
}