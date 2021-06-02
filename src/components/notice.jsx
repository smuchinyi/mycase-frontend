import React, { Fragment } from 'react'
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import Typography from '@material-ui/core/Typography';
import './form.css'

const mainDiv = {
    height: "630px",
}

const noticeArea = {
    backgroundColor: "white",
    height: "630px",
    padding: 15

}
const fraudArea = {
    backgroundColor: "#d5cfcf91",
    height: "630px",
    paddingTop: 200,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15
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





export const NoticeSection = () => {
    return (
        <>
            <div style={mainDiv}>
                <Row>
                    <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }} style={noticeArea} >
                        <Typography style={mainTitle}>NOTICE</Typography>

                        <Typography style={mainSubtitle}>The U.S. Government and RSC Africa, operated by CWS, are dedicated to
                        ensuring the safety and security of refugee applicants and our staff
                        around the world who support the U.S. Refugee Admissions Program
                        (USRAP). For the latest information regarding COVID-19 and how to best
                        protect yourself and your family, please visit the Centers for Disease
Control and Prevention’s (CDC) website: https://www.cdc.gov/coronavirus/2019-ncov/index.html.</Typography>

                        <Typography style={mainSubtitle}>RSC Africa continues to process cases for departure that conform to the
                        FY 2021 Presidential Determination (PD) on Refugee Admissions. Cases
                        that do not fall under one of the categories in the PD will not be able to
                        depart to the United States at this time. These cases will remain open
                        and the RSC will reach out to the applicant if there is any action needed
                        on the case. Given the changes to the USRAP program categories this
fiscal year, we urge applicants to remain patient.</Typography>

                        <Typography style={mainSubtitle}>The RSC is continuing to operate at reduced levels, and has temporarily
                        postponed in-person processing and appointments (if applicable) for
                        the safety of staff and refugee clients. Please check our website at mycase.rscafrica.org for general updates on USRAP processing and RSC
                        operations. As updates for your specific case become available, we will
                        inform you. In the meantime, please feel free to contact us if you have
                        updates or questions about your case. As the volume of inquiries may be
high, there may be delays and we kindly ask for your patience in addressing non-urgent matters.</Typography>

                    </Col>


                    <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }} style={fraudArea}>
                        <Typography style={mainTitle}>FRAUD REPORTING</Typography>

                        <Typography style={mainSubtitle}>USRAP remains free of charge and applicants
                        should not engage with anyone who is asking you
                        to pay or provide services for information or a
                        change in status on your case.
                        Please report any instances of fraud or abuse to
the RSC’s confidential email box at</Typography>

                        <Typography style={mainSubtitle}>fraud@CWSAfrica.org</Typography>
                    </Col>
                </Row>
            </div>
        </>
    )
}
