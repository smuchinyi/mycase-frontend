import React, { Fragment } from 'react'
import "antd/dist/antd.css";
import { Row, Col, Popover } from 'antd';
import Typography from '@material-ui/core/Typography';
import cws from '../images/ws.png'
import footer from '../images/footer4.png'
import './mobile_footer.css';


const main = {
    backgroundColor: "rgb(35,31,32)",
    padding: 0
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



const logo = {
    height: 50,
    with: 40
}




export const MobileFooterSection = () => {
    return (
        <>
            <div style={main}>
                <div className='mobileFraudSection'>
                    <img src={footer} width="100%" height="355px" className="fraud-image" />
                    <p id='mobile-title'>Fruad Reporting</p>
                    <p className="mobile-fraud-text">USRAP remains free of charge and applicants should not engage with anyone who is asking you to pay or
provide services for information or a change in status on your case.<br />
Please report any instances of fraud or abuse to the RSC’s confidential email box at<br /><br />
                        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>fraud@CWSAfrica.org</span>
                    </p>

                </div>
                <div className='mobile-operation'><span>RSC Africa is operated by CWS as part of a cooperative agreement with the United States Department of State. This website was
                funded by the United States Department of State under the authority of the Migration and Assistance Act of 1962, as amended.
                The opinions, findings, and conclusions stated herein are those of the author and do not necessarily reflect those of the United
States Department of State.</span></div>

                <div className='mobile-footer-last'>
                    <div>
                        <span className='contact-title'>
                            RSC CONTACT INFORMATION:
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
                        <Popover content={content} title="CORESOURCEEXCHANGE" placement="right" style={{ backgroundColor: "black" }}>
                            <img src={cws} style={logo} />
                        </Popover></div>
                </div>


            </div>
        </>
    )
}
