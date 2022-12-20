import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className='f-content'>
            <span>Sauravp1236@gmail.com</span>
            <div className='f-icons'>
            <a href='https://www.instagram.com/_charles_saurav/'>
              <Insta color='gray' size='3rem'/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100004508865726'>
                <Facebook color='gray' size='3rem'/>
                </a>
            <a href='https://github.com/charlesaurav13'>
              <Github color='gray' size='3rem'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer