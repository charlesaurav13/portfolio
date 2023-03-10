import React,{useContext}from 'react'
import './Works.css'
import Netflix from '../../img/netflix.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Facebook from '../../img/Facebook.png'
import Google from '../../img/google.png'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'


const Works = () => {
    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>Like to Work for All </span>
        <span>Brands & Clients</span>
        <spane>Like to work for all clients 
        I am open to every frontend devleopment
        <br/>
        project,that has been/will be given to me.
        <br/>
        I would like to share experience with you all,
        <br/>on a way of creating wonderful webapps and website.<br/>
        </spane>

        <Link to="contact" spy={true} smooth={true}>
            <button className='button s-button'>Hire Me</button>
        </Link>

        
        <div className='blur s-blur1' style={{background:"#00FFF6"}}></div>
        </div>
        {/* Right side */}
        {/* animation */}
        <div className='w-right'>
            <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 360}}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 5, type: "spring" }}
          className="w-mainCircle">
                <div className='w-secCircle'>
                    <img src={Netflix} alt=''/>
                </div>
                <div className='w-secCircle'>
                    <img src={Fiverr} alt=''/>
                </div>
                <div className='w-secCircle'>
                    <img src={Google} alt=''/>
                </div>
                <div className='w-secCircle'>
                    <img src={Amazon} alt=''/>
                </div>
                <div className='w-secCircle'>
                    <img src={Facebook} alt=''/>
                </div>
            </motion.div>
            {/* backgound circle */}
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Works