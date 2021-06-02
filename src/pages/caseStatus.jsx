import React,{useState} from 'react'
import { HeaderSection } from '../components/header.jsx';
import { FooterSection } from '../components/footer.jsx';
import './styles/caseStatus.css';
import { Row, Col } from 'antd';
import Swal from 'sweetalert2';


export const Case = () => {
   const [caseDetails,updateDetails] = useState({date_of_birth:"",address:"",passport:""});
   const formHandler = (e)=>{
       e.preventDefault();
       updateDetails({...caseDetails,[e.target.name]:e.target.value});
     
   }
   console.log('fff',caseDetails);

   const caseUpdate = ()=>{
       if(caseDetails.date_of_birth==="" || caseDetails.address==="" ||caseDetails.passport===""){
       return Swal.fire({
                        title: 'Error!',
                        text: 'date of birth,address and passport required!',
                        icon: 'error',
                        confirmButtonText: 'close'
                    })
       }
       else{
           return Swal.fire({
                        title: 'Success!',
                        text: 'Updated',
                        icon: 'success',
                        confirmButtonText: 'close'
                    });
       }
   }
    return (
        <>
        
            <HeaderSection />
            <div className='status_section'>
                <p className="title">MY CASE STATUS</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit</p>
<p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex</p>
                </div>
            <div className='form_section'>
                <p className='case_title'>HOW CAN I HELP MY CASE</p>
                <p>
                    <form>
                       
                        <Row>
                            <Col>NAME:</Col>
                             <Col>JANE DOE</Col>
                             
                            </Row>
                            <Row>
                            <Col>GENDER:</Col>
                             <Col>FEMALE</Col>
                             
                            </Row>
                            <Row>
                            <Col>DATE OF BIRTH:</Col>
                             <Col> <input name="date_of_birth" type="text" className='case'  placeholder="Please enter your date of birth" onChange={formHandler} /></Col>
                             
                            </Row>
                            <Row>
                            <Col>ID NO:</Col>
                             <Col>35466626</Col>
                             
                            </Row>
                            <Row>
                            <Col>COUNTRY OF ORIGIN:</Col>
                             <Col>KENYA</Col>
                             
                            </Row>
                            <Row>
                            <Col>TELEPHONE NUMBER:</Col>
                             <Col>+25479888</Col>
                             
                            </Row>
                            <Row>
                            <Col>ADDRESS:</Col>
                             <Col><input name="address" type="text" className='case' placeholder="Please enter your address" onChange={formHandler} /></Col>
                             
                            </Row>
                            <Row>
                            <Col>PASSPORT PICTURE:</Col>
                             <Col><input name="passport" type="file" placeholder="Please upload your passport picture:" onChange={formHandler} /></Col>
                             
                            </Row>

                             <Row>
                            
                             <Col><input  type="submit" value='SUBMIT CHANGES' onClick={(e)=>{
                                 e.preventDefault();
                                 caseUpdate();
                             }}/></Col>
                             
                            </Row>

                        </form>
                </p>
            </div>
            <FooterSection />
        </>
    )
}

