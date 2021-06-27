import React, { useState } from 'react';
import './styles/caseStatus.css';
import Swal from 'sweetalert2';
import { Footer } from 'antd/lib/layout/layout';
import child from '../images/child-fl4.png'
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Case = () => {

    const [userDetails, setUserDetails] = useState('');
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const formValidator = (e) => {
        e.preventDefault();
        var x = document.forms["caseForm"]["date"].value;
        var y = document.forms["caseForm"]["address"].value;
        var z = document.forms["caseForm"]["passport"].value;
        console.log('www', x);
        if (x === "") {Swal.fire({
                title: 'Error!',
                text: 'date of birth is required!',
                icon: 'error',
                confirmButtonText: 'close'
            })
            return 
        }
        if (y === "") {
            return Swal.fire({
                title: 'Error!',
                text: 'address is required!',
                icon: 'error',
                confirmButtonText: 'close'
            })
        }
        if (z === "") {
            return Swal.fire({
                title: 'Error!',
                text: 'date passport is required!',
                icon: 'error',
                confirmButtonText: 'close'
            })
        }
    }

    // Conditional Rendering for mobile screen, medium screen and large screen

    //Render mobile screen
    if (matches) {
        return (
            <>
                <div className='mobile-case-status'>
                    <span className='mobile-status'>Case Status</span>
                    <div className="mobile-status-display">
                        <div className="mobile-status-head">
                            <p id='mobile-header'>STATUS: HOLD</p>
                            <p>Your case is currently on hold. A representative from RSC Africa will<br />

                                contact you if any additional information is required.</p>
                        </div>
                        <div className="mobile-status-body">
                            <div className='mobile-case-info'> <span className='mobile-label'>RSC Interview:</span><span className="mobile-right-value">You have completed this step of the process</span></div>
                            <div className='mobile-case-info'> <span className='mobile-label'>USCIS Interview:</span><span className="mobile-right-value">You have completed this step of the process</span></div>
                            <div className='mobile-case-info'> <span className='mobile-label'>Security Status:
                            </span><span>In Process</span></div>
                            <div className='mobile-case-info'> <span className='mobile-label'>Medical Status:</span><span className="mobile-right-value">___</span></div>
                            <div className='mobile-case-info'> <span className='mobile-label'>Cultural Orientation:</span><span className="mobile-right-value">___</span></div>
                            <div className='mobile-case-info'> <span className='mobile-label'>Travel Status:</span><span className="mobile-right-value">___</span></div>
                        </div>
                    </div>

                </div>

                <div className='helpCase'>
                    <div id='mobile-help-title'><span >How Can I Help My Case</span></div>
                    <Row>
                        <Col span={24} className="col-items">
                            <img src='images/CWS-08.png' width="50%" />
                            <span id='info-title'>Always Tell the Truth</span>
                            <p>
                                Knowingly providing false information can affect
                                your eligibility for resettlement to the United States.</p>
                        </Col>
                        <Col span={24} className="col-items">
                            <img src='images/CWS-09.png' width="50%" />
                            <span id='info-title'>Come to All Your Appointments</span>
                            <p>
                                Please come to all your RSC Africa scheduled
                                interviews, IOM medical appointments, and cultural
                                orientation sessions.</p>
                        </Col>
                        <Col span={24} className="col-items">
                            <img src='images/CWS-07.png' width="50%" />
                            <span id='info-title'>Bring All Important Documents to Interviews</span>
                            <p>
                                Make sure to have all important documents ready at each
                                interview, including marriage certificates, birth certificates,
                                and any registration documents.
                            </p>
                        </Col>
                        <Col span={24} className="col-items">
                            <img src='images/CWS-11.png' width="50%" />
                            <span id='info-title'>Inform Us of Any Changes to Your Family</span>
                            <p>Tell RSC Africa about any marriages, deaths or births that
                                have happened for members on your case.</p>
                        </Col>
                        <Col span={24} className="col-items">
                            <img src='images/CWS-10.png' width="50%" />
                            <span id='info-title'>Provide All of Your Contact Information</span>
                            <p>
                                Tell RSC Africa all your contact information at your first
                                interview and notify us if you change your information.
                                Please try to keep the same contact information throughout
                                the resettlement process.
                            </p>
                        </Col>
                        <Col span={24} className="col-items">
                            <img src='images/CWS-06.png' width="50%" />
                            <span id='info-title'>Inform Us if You Move</span>
                            <p>
                                Tell RSC Africa about any changes to your current
                                location. If you or a family member moves to a
                                different camp or city, RSC Africa will need to know
                                for scheduling future appointments.
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="contacts">
                    <p id='mobile-contacts-title'>How to Contact RSC Africa</p>
                    <p id='contacts-p-mobile'>

                        1.Write an email to <b>case@CWSAfrica.org</b><br />
                        2.Write a letter and give it to RSC Africa staff<br />
                        3.Check your case status at: <b>mycase.rscafrica.org</b><br />
                    </p>
                </div>
                {userDetails ? (
                    <div className="mobile-account-details">
                        <form name="caseForm">
                            <div className='details-title'>
                                <span>Account Details</span>
                            </div>
                            <div className='user-info'>
                                <span className="detail-label">NAME : </span> &nbsp; <span>JANE DOE</span>

                            </div>
                            <div className='user-info'>
                                <span className="detail-label">GENDER:  </span>&nbsp; <span>FEMALE</span>

                            </div>
                            <div className='user-info'>
                                <span className="detail-label">DATE OF BIRTH: </span>&nbsp; <span><input type="text" name="date" placeholder="Please enter your date of birth" /> </span>

                            </div>
                            <div className='user-info'>
                                <span className="detail-label">ID NO:  </span>&nbsp; <span>564273</span>

                            </div>
                            <div className='user-info'>
                                <span className="detail-label">COUNTRY OF ORIGIN:</span> &nbsp;<span> KENYA </span>

                            </div>
                            <div className='user-info'>
                                <span className="detail-label">TELEPHONE NUMBER:</span> &nbsp;<span> +254785643</span>

                            </div>
                            <div className='user-info'>
                                <span className="detail-label">ADDRESS:  </span>&nbsp; <span><input type="text" name="address" placeholder="Please enter your address" /></span>

                            </div>
                            <div className='user-info'>
                                <span className="detail-label">PASSPORT PICTURE:  </span>&nbsp; <span><input type="file" name="passport" placeholder="Please upload your passport picture" /></span>

                            </div>
                            <div className='user-info'>
                                <span className="detail-label"> </span>&nbsp; <span><input type="submit" value="submit changes" onClick={formValidator} /></span>

                            </div>
                        </form>
                    </div>) : ('')}
            </>
        )

    }

    //Otherwise render this for large and medium screen
    return (
        <>
            <div className='case-status'>
                <img src={child} width="100%" height="850px" className="bg-image" />
                <span className='status'>Case Status</span>
                <div className="status-display">
                    <div className="status-head">
                        <p id='header'>STATUS: HOLD</p>
                        <p>Your case is currently on hold. A representative from RSC Africa will<br />

                            contact you if any additional information is required.</p>
                    </div>
                    <div className="status-body">
                        <div className='case-info'> <span className='label'>RSC Interview:</span><span className="right-value">You have completed this step of the process</span></div>
                        <div className='case-info'> <span className='label'>USCIS Interview:</span><span className="right-value">You have completed this step of the process</span></div>
                        <div className='case-info'> <span className='label'>Security Status:
                        </span><span className="right-value">In Process</span></div>
                        <div className='case-info'> <span className='label'>Medical Status:</span><span className="right-value">___</span></div>
                        <div className='case-info'> <span className='label'>Cultural Orientation:</span><span className="right-value">___</span></div>
                        <div className='case-info'> <span className='label'>Travel Status:</span><span className="right-value">___</span></div>
                    </div>
                </div>

            </div>

            <div className='helpCase'>
                <div id='help-title'><span >How Can I Help My Case</span></div>
                <Row>
                    <Col span={8} className="col-items">
                        <img src='images/CWS-08.png' width="50%" />
                        <div className='col-itmes-div'>
                            <span id='info-title'>Always Tell the Truth</span>
                            <p>Knowingly providing false information can affect
                                your eligibility for resettlement to the United States.</p></div>

                    </Col>
                    <Col span={8} className="col-items">
                        <img src='images/CWS-09.png' width="50%" />
                        <div className='col-itmes-div'>
                            <span id='info-title'>Come to All Your Appointments</span>
                            <p>
                                Please come to all your RSC Africa scheduled
                                interviews, IOM medical appointments, and cultural
                                orientation sessions.</p>
                        </div>
                    </Col>
                    <Col span={8} className="col-items">
                        <img src='images/CWS-07.png' width="50%" />
                        <div className='col-itmes-div'>
                            <span id='info-title'>Bring All Important Documents to Interviews</span>
                            <p>
                                Make sure to have all important documents ready at each
                                interview, including marriage certificates, birth certificates,
                                and any registration documents.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} className="col-items">

                        <img src='images/CWS-11.png' width="50%" />
                        <div className='col-itmes-div'>
                            <span id='info-title'>Inform Us of Any Changes to Your Family</span>
                            <p>Tell RSC Africa about any marriages, deaths or births that
                                have happened for members on your case.</p>
                        </div>
                    </Col>
                    <Col span={8} className="col-items">

                        <img src='images/CWS-10.png' width="50%" />
                        <div className='col-itmes-div'>
                            <span id='info-title'>Provide All of Your Contact Information</span>
                            <p>
                                Tell RSC Africa all your contact information at your first
                                interview and notify us if you change your information.
                                Please try to keep the same contact information throughout
                                the resettlement process.
                            </p>
                        </div>
                    </Col>
                    <Col span={8} className="col-items">
                        <img src='images/CWS-06.png' width="50%" />
                        <div className='col-itmes-div'>
                            <span id='info-title'>Inform Us if You Move</span>
                            <p>
                                Tell RSC Africa about any changes to your current
                                location. If you or a family member moves to a
                                different camp or city, RSC Africa will need to know
                                for scheduling future appointments.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="contacts">
                <p id='contacts-title'>How to Contact RSC Africa</p>
                <p id='contacts-p'>

                    1.Write an email to <b>case@CWSAfrica.org</b><br />
                    2.Write a letter and give it to RSC Africa staff<br />
                    3.Check your case status at: <b>mycase.rscafrica.org</b><br />
                </p>
            </div>

            {userDetails ? (<div className="account-details">
                <form name="caseForm">
                    <div className='details-title'>
                        <span>Account Details</span>
                    </div>
                    <div className='user-info'>
                        <span className="detail-label">NAME : </span> &nbsp; <span>JANE DOE</span>

                    </div>
                    <div className='user-info'>
                        <span className="detail-label">GENDER:  </span>&nbsp; <span>FEMALE</span>

                    </div>
                    <div className='user-info'>
                        <span className="detail-label">DATE OF BIRTH: </span>&nbsp; <span><input type="text" name="date" placeholder="Please enter your date of birth" /> </span>

                    </div>
                    <div className='user-info'>
                        <span className="detail-label">ID NO:  </span>&nbsp; <span>564273</span>

                    </div>
                    <div className='user-info'>
                        <span className="detail-label">COUNTRY OF ORIGIN:</span> &nbsp;<span> KENYA </span>

                    </div>
                    <div className='user-info'>
                        <span className="detail-label">TELEPHONE NUMBER:</span> &nbsp;<span> +254785643</span>

                    </div>
                    <div className='user-info'>
                        <span className="detail-label">ADDRESS:  </span>&nbsp; <span><input type="text" name="address" placeholder="Please enter your address" /></span>

                    </div>
                    <div className='user-info'>
                        <span className="detail-label">PASSPORT PICTURE:  </span>&nbsp; <span><input type="file" name="passport" placeholder="Please upload your passport picture" /></span>

                    </div>
                    <div className='user-info'>
                        <span className="detail-label"> </span>&nbsp; <span><input type="submit" value="submit changes" onClick={formValidator} /></span>

                    </div>
                </form>
            </div>) : ('')}
        </>
    )
}

