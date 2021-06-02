import React, { Fragment } from 'react'
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import flagUs from '../images/us-flag.png'
import cws from '../images/cws-logo.png'
import rsc from '../images/rsc-africa.png'
import Typography from '@material-ui/core/Typography';
import './form.css';



const mainDiv = {
    height: "600px",
    marginTop: 50,
}

const formArea = {
    backgroundColor: "#d5cfcf91",
    height: "600px",
    padding: 15
}
const aboutArea = {
    backgroundColor: "white",
    height: "600px",
    padding: 15
}

const mainTitle = {
    marginTop: 30,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bolder"
}

const mainSubtitle = {
    marginTop: 25,
    textAlign: "center",
    fontSize: 16,
}





export const FormSection = () => {
    return (
        <>
            <div style={mainDiv}>
                <Row>
                    <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 0 }} style={formArea} >
                        <Typography style={mainTitle}>APPLICANT LOGIN</Typography>
                        <Typography style={mainSubtitle}>Please enter your case number and password below to view your case status.</Typography>
                        <form>
                            <input style={{ marginTop: 20 }} type="text" id="fname" name="firstname" placeholder="CASE NUMBER:" />
                            <input style={{ marginTop: 20 }} type="text" id="lname" name="lastname" placeholder="PASSWORD:" />
                            <input type="submit" value="VIEW CASE STATUS"  onClick={(event) => {
    event.preventDefault();
    window.location='/case';
  }} />
                        </form>
                        <Typography style={mainSubtitle}>Don't remember your password?</Typography>
                        <Typography style={{ fontWeight: "bolder", textAlign: "center", fontSize: 16, marginTop: 10 }}>Request Password Change</Typography>
                    </Col>


                    <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} lg={{ span: 14, offset: 0 }} style={aboutArea}>
                        <Typography style={mainTitle}>HOW TO USE THIS WEBSITE</Typography>
                        <Typography style={mainSubtitle}>Dear USRAP Applicant,</Typography>
                        <Typography style={mainSubtitle}>This is RSC Africa's My Case site which will help you look up information
                        about your resettlement case to the United States. Use the login panel to
the left to log in and receive an update of your individual case status.</Typography>

                        <Typography style={mainSubtitle}>You should have been provided with a password by the RSC Africa
                        caseworker that completed your first interview. If you have forgotten
                        your password or you would like to change your existing password,
                        please click the "REQUEST PASSWORD CHANGE" link to the left and follow
instructions.</Typography>
                        <Typography style={mainSubtitle}>If you have additional questions about your individual case, RSC Africa,
                        or the United States Refugee Admissions Program, you may write to
Case@CWSAfrica.org. RSC Africa will attempt to respond to your question within 14 calendar days.</Typography>
                        <Typography style={mainSubtitle}>The USRAP is free of charge. Report any solicitation of funds or suspected fraud to Fraud@CWSAfrica.org</Typography>

                    </Col>
                </Row>
            </div>
        </>
    )
}
