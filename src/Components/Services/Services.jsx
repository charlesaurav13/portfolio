import React,{useContext}from 'react'
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className='services' id='services'>
    {/* left side */}
        <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <spane>
        I provide services like creating Webpages,Webapps
        <br></br>using MERN . Training the model, and applying that model
        <br/>to website and deploying them are some of my skills.
        </spane>
        <a href={Resume} download>
        <button className='button s-button'>Download Resume</button>
        </a>
        <div className='blur s-blur1' style={{background:"#00FFF6"}}></div>
        </div>
        {/* Right side */}
        <div className='cards'>
            <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
                <Card
                emoji ={HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Sketch,Photoshop,Adobe "}/>
            </motion.div>

            
            {/* second card */}
            <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
                <Card 
                emoji={Glasses}
                heading={'Devloper'}
                detail={"HTML, CSS,JavaScript,React, Python"}/>
            </motion.div>

            {/* third card */}
            <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          >
                <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={'Hey there I am Third Card'}
                color="rgba(252, 166, 31, 0.45)"
                />
            </motion.div>
            <div className='blur s-blur2' style={
                {background:'#F8F988'}
            }></div>
        </div>
    </div>
  )
}

export default Services