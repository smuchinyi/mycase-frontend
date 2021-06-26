import React, { Fragment } from 'react'
import "antd/dist/antd.css";
import { Row, Col, Popover } from 'antd';
import Typography from '@material-ui/core/Typography';
import cws from '../images/ws.png'
import footer from '../images/footer4.png'
import './footer.css';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const main = {
    backgroundColor: "black",
    padding: 0
}

const core_content = (
    <div style={{ textAlign: "center" }}>
        <p>Click <a target='_blank' href='https://coresourceexchange.org/'>here</a> to access additional resources on<br/> the U.S. Refugee Admissions Program</p>

    </div>
);

const cws_content = (
    <div style={{ textAlign: "center" }}>
        <p>Click <a target='_blank' href='https://cwsglobal.org/our-work/africa/'>here</a>to know more about Church World Service<br/> and their work around the globe.</p>

    </div>
);


const logo = {
    height: 80,
    width: 350
}

const logo2 = {
    height: 80,
    width: 150
}

const logo_mobile = {
    height: 100,
    width: 300
}


export const FooterSection = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    // Conditional Rendering for mobile screen, medium screen and large screen

    //Render mobile screen
    if (matches) {
        return (
            <>
                <div style={main}>
                    <div className='mobileFraudSection'>
                        <img src={footer} width="100%" height="355px" className="fraud-image" />
                        <p id='mobile-title'>Fraud Reporting</p>
                        <p className="mobile-fraud-text">USRAP remains free of charge and applicants should not engage with anyone who is asking you to pay or
                            provide services for information or a change in status on your case.<br />
                            Please report any instances of fraud or abuse to the RSC’s confidential email box at<br /><br />
                            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>fraud@CWSAfrica.org</span>
                        </p>

                    </div>
                    <div className='mobile-operation'><span>This website was
                        funded by the United States Department of State under the authority of the Migration and Assistance Act of 1962, as amended.
                        The opinions, findings, and conclusions stated herein are those of the author and do not necessarily reflect those of the United
                        States Department of State.</span></div>
                    <div className='core-logo'>
                        <div>
                            <Popover content={core_content} title="CORESOURCEEXCHANGE" placement="right" style={{ backgroundColor: "black" }}>
                                <img src='images/CWS-12.png' style={logo2} />
                            </Popover></div>
                    </div>
                    <div className='wcs-logo'>
                        <Popover content={cws_content} title="CORESOURCEEXCHANGE" placement="right" style={{ backgroundColor: "black" }}>
                            <img src={cws} style={logo_mobile} />
                        </Popover>
                    </div>
                    <div className='mobile-footer-last'>
                        <div>

                            <div className='footer-contacts'>
                                <span className='contact-title'>
                                    RSC AFRICA CONTACT INFORMATION:
                                </span>
                                <p className='contact-info'>
                                    P.O. Box 14176-00800,<br />
                                    Nairobi, Kenya<br />
                                    Email: case@CWSAfrica.org
                                </p></div>

                        </div>
                        <div>

                            <div className='site-map'>
                                <span className='site-title'>
                                    SITEMAP
                                </span>
                                <p className="siteMap">
                                    Check my Case<br />
                                    Gallery<br />
                                    Refugee Resources<br />
                                    Public Resources<br />
                                    Contact Us<br />
                                </p>
                            </div>
                        </div>


                    </div>


                </div>
            </>
        )
    }

    //Otherwise render this for medium and large screen
    return (
        <>
            <div style={main}>
                <div className='fraudSection'>
                    <img src={footer} width="100%" height="250px" className="fraud-image" />
                    <p id='title'>Fraud Reporting</p>
                    <p className="fraud-text">USRAP remains free of charge and applicants should not engage with anyone who is asking you to pay or
                        provide services for information or a change in status on your case.<br />
                        Please report any instances of fraud or abuse to the RSC’s confidential email box at<br /><br />
                        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>fraud@CWSAfrica.org</span>
                    </p>

                </div>
                <div className='operation'><span>This website was
                    funded by the United States Department of State under the authority of the Migration and Assistance Act of 1962, as amended.
                    The opinions, findings, and conclusions stated herein are those of the author and do not necessarily reflect those of the United
                    States Department of State.</span></div>

                <div className='footer-last'>
                    <div>
                        <span className='contact-title'>
                            RSC AFRICA CONTACT INFORMATION:
                        </span>
                        <p className='contact-info'>
                            P.O. Box 14176-00800,<br />
                            Nairobi, Kenya<br />
                            Email: case@CWSAfrica.org
                        </p>

                    </div>
                    <div>
                        <span className='site-title'>
                            SITEMAP
                        </span>
                        <p className="siteMap">
                            Check my Case<br />
                            Gallery<br />
                            Refugee Resources<br />
                            Public Resources<br />
                            Contact Us<br />
                        </p>
                    </div>
                    <div>
                        <Popover content={core_content} title="CORESOURCEEXCHANGE" placement="right" style={{ backgroundColor: "black" }}>
                            <img src='images/flogos-CORE.png' style={logo2} />
                        </Popover></div>
                    <div>
                        <Popover content={cws_content} title="CWS" placement="right" style={{ backgroundColor: "black" }}>
                            <img src='images/flogos-CWS.png' style={logo} />
                        </Popover></div>
                </div>


            </div>
        </>
    )
}
