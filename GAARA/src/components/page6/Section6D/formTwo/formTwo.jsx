import React, { useState , useRef } from 'react';
import leafIcon from '/Assets/leaf-icon.png';
import formFooter from '/Assets/formFooter.svg';
import emailjs from '@emailjs/browser';
import './formTwo.scss'

function FormTwo() {

      // validating the input date 

      const [date, setDate] = useState('');
      const [dateError, setDateError] = useState('');
    
      const validateDate = () => {
        if (!date) {
          setDateError('Date is required');
        } else {
          const currentDate = new Date();
          const selectedDate = new Date(date);
          if (selectedDate < currentDate) {
            setDateError('Please select a future date');
          } else {
            setDateError('');
          }
        }
      };
  
      const handleDateChange = (e) => {
          setDate(e.target.value);
          setDateError('');
        };

    const form = useRef();

    const [message, setMessage] = useState('');
    const[errorMessage , setError] = useState('');
    const sendEmail = (e) => {
      e.preventDefault();
      validateDate();
      emailjs.sendForm('service_no2pgwi', 'template_yua55dp', form.current, '-FqssVFpDkJ-AW6c_')
        .then((result) => {

            console.log(result.text);
            setTimeout(() => {
                setMessage('Sent')
                setError('')
            })
            form.current.reset();
        }, (error) => {
            console.log(error.text);
           setTimeout(() => {
            setError('Failed')
            setMessage('')
           },1000)
        });
    };

  
    
  return (
    <div className='fm_container'>
    <div className="fm_header">
      <h3>Schedule Consultancy</h3>
    </div>
    <div className="fm_elements">
      <div className="fm_content">
        <form ref={form} onSubmit={sendEmail} >
          <label htmlFor="firstName">First Name</label><br />
          <input className='Npt' type="text" name="firstName" placeholder="Enter your first name"required /><br />

          <label htmlFor="lastName">Last Name</label><br />
          <input className='Npt' type="text" name="lastName" placeholder="Enter your last name"  required /><br />

          <label htmlFor="email">Work Email</label><br />
          <input className='Npt' type="email" name="email" placeholder="Enter your email"  required /><br />

          <label htmlFor="message">Message</label><br />
          <textarea name="message" placeholder="Enter your message"  required cols="20" rows="5"></textarea><br />

          <label htmlFor="organization">Organization</label><br />
          <input className='Npt' type="text" name="organization" placeholder="Enter your organization"  required /><br />

          <label htmlFor="position">Position</label><br />
          <input className='Npt' type="text" name="position" placeholder="Enter your position"  required /><br />
 
          <div className="fm_img">
            <h2 className='form_date'> Pick a date</h2>
              <input className='Npt' type="date" name="date" value={date} onChange={handleDateChange}  required />
              {dateError && <span style={{ color: 'red' }}>{dateError}</span>}
            </div>
          <button className='Sbtn' type='submit'>Go green</button>
        </form>
      </div>
     
    </div>

    {message && (
      <h2 className='message'>{message}</h2>
    )}
    <div className="form_footerimg">
      <img src={formFooter} alt="Form Footer" />
    </div>
  </div>
  )
}

export default FormTwo
