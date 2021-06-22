import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import './styles/contacts.css';
import { Row, Col } from 'antd';
import Swal from 'sweetalert2';


export const ContactUs = () => {
    const[emailBody,setEmail] = useState({firstName:'',lastName:'',phone:'',
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
      <div className='contact-us-container'>
     
      <div className='contact-us-div'>
          <p ><span id ='contact-us-title'>Contact Us</span><br/>
          Email – case@cwsafrica.org<br/>
Mail – P.O. Box 14176-00800</p>
          </div>
         
     <div className="form-div">
     <form id='contact-form' onSubmit={sendEmail}>
         
 <div className='form-column'>
 <p> <input type="text" placeholder="First name" name='firstName' id='col-input' onChange={formHandler} required /></p>
  <p><input type="text" placeholder="Last name" name="lastName" id='col-input' onChange={formHandler} /></p>
  </div>
  <di className='form-column'>
 <p> <input type="email" placeholder="Email address" name="address" id='col-input' onChange={formHandler} required/></p>
 <p><input type="text" placeholder="contact number" name='phone' id='col-input' onChange={formHandler} required/></p>
  </di>
  <p>
<select name="topic" id="select" placeholder='select topic' onChange={formHandler}>
  <option value="A">Select top</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
  </p>
  <p><textarea id='text-area' placeholder="Enter Message" onChange={formHandler} required/></p>
  
  <p><input type="submit" id='button' value="SUBMIT" /></p>
 </form>
     </div>
    
     </div>
  );
}