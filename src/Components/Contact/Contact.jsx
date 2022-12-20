import React, { useState ,useContext} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { themeContext } from "../../Context";

const Contact = () => {

// context
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

const form = useRef();
const [done,setDone] = useState(false);
// form validation


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nsohwbl', 'template_o9mlh6i', form.current, 'yjte2uINBpaiYYkpa')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='contact-form' id='contact'>
        <div className='w-left'>
            <div className='awesome'>
                <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
                <span>Contact me</span>
                <div 
                className='blur s-bur1'
                style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>
        {/* right side */}
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user' placeholder='Name' required/>
                <input type='text' name='user_email' className='user' placeholder='Email'required/>
                <textarea name='message' className='user' placeholder='Message'required/>
                <input type='submit' value='Send' className='button'/>
                <span>{done && "Thanks for contacting me!"}</span>
                <div 
                className='blur c-bur1'
                style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact