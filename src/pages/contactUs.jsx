import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import './styles/contactUs.css';
import { Row, Col } from 'antd';
import Swal from 'sweetalert2';
import child from '../images/child-fl4.png';


export const ContactUs = () => {
    const[emailBody,setEmail] = useState({case:'',email:'',
    address:'',topic:'',message:''
})

  function clearForm() {
  document.getElementById("contact-form").reset();
}

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8sf51dv', 'template_7fqoev4', e.target, 'user_DIyUT21hzng5y4QqC2rmf')
      .then((result) => {
          console.log(result.text);
        if(result.text==='OK'){
            return Swal.fire({
                title: 'Success!',
                text: 'sent!',
                icon: 'success',
                confirmButtonText: 'close'
            });
            clearForm();
            
        }
      }, (error) => {
          console.log(error.text);
          return Swal.fire({
                title: 'Error!',
                text: 'somthing went wrong!',
                icon: 'error',
                confirmButtonText: 'close'
            })
      });
  }

  const formHandler = (e) =>{
      e.preventDefault();
      setEmail({...emailBody,[e.target.name]:e.target.value});

  }

console.log('form---->',emailBody);
  return (
    <div className='contact-us-main-container'>
       
      {/* <div className='contact-us-container'> */}
     
      <div className='contact-us-div'>
          <div><span id ='contact-us-title'>Contact Us</span></div>
         <div className='icons-div1'><img src='images/email-con.png' className='contact-icons' /><span>Email – case@cwsafrica.org</span></div>
<div className='icons-div'><img src='images/mail-icon.png' className='contact-icons' /><span>Mail – P.O. Box 14176-00800</span></div>
          </div>
         
     <div className="form-div">
     <form id='contact-form' onSubmit={sendEmail}>
  <p><input type="text"  id='contact-input' placeholder="Case Number" name='case'  onChange={formHandler} required/></p>
  <p><input type="email" placeholder="Email Address" name="address"  onChange={formHandler} required id='contact-input'/></p>
 
  <p>
<select name="topic" id="select" placeholder='Select Topic' onChange={formHandler}>
  <option value="A">Select topic</option>
  <option value="B">General Case Inquiry
</option>
  <option value="D"> Case Member Update</option>
  <option value="E">  Address Change
</option>
  <option value="H"> Contact Change
</option>
<option value="P">   Request for Review Submission
</option>
<option value='k'>  Other</option>

</select>
  </p>
  <p><textarea id='text-area' name='message' placeholder="Message" onChange={formHandler} required/></p>
  
  <p><input type="submit" id='button' value="SUBMIT" /></p>
 </form>
     </div>
    
     {/* </div> */}
     </div>
  );
}