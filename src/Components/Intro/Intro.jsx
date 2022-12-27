import React ,{ useContext }from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FLoatingDiv from '../FloatingDiv/FLoatingDiv';
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';

const Intro = () => {
    // animation 
const transition ={duration:3,type:'spring'}


// context
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
            {/* darkmode */}
                <span style={{ color: darkMode ? "white" : "" }}>Hey! I am</span>
                <span>Saurav</span>
                <span>FullStack Developer with good level
                of experience in web designing and devlopment.
                I have a sound knowledge of Frontend Development using 
                ReactJS,NextJS.Backend Development using NodeJS,Flask,which include 
                knowledge database in SQL and NOSQL(MongoDB).
                I also have a good knowledge in Machine Learning,
                and training the dataset over variety of models in python.
                </span>
            </div>

            <Link to="contact" spy={true} smooth={true}>
                <button className='button i-button'>Hire me</button>
            </Link>
            
            <div className='i-icons'>
                <a href='https://github.com/charlesaurav13'>
                <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/saurav-4b3444204/'>
                <img src={Linkedin} alt="" />
                </a>
                <a href='https://www.instagram.com/_charles_saurav/'>
                <img src={Instagram} alt="" /></a>
            </div>
        </div>


        <div className='i-right'>
        <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={boy} alt=""/>
        <motion.img 
        initial={{left:'-36%'}}
        whileInView = {{left:'-14%'}}
        transition ={transition}
        src={glassesimoji} alt=""/>
        {/* animation */}
        <motion.div
        initial={{ top: "-4%", left: "64%" }}
        whileInView={{ left: "54%" }}
        transition={transition}
        >
            <FLoatingDiv image={Crown} text1 ='Web' text2='Developer'/>
        </motion.div>
        {/* animation */}
        <motion.div
        initial={{ left: "9rem", top: "18rem" }}
        whileInView={{ left: "0rem" }}
        transition={transition}
        className="floating-div"
        >
            <FLoatingDiv image={thumbup} text1='Good  ' text2='Design  '/>
        </motion.div>
        <div className='blur' style={{background:'rbg(238 210 255)'}}></div>
        <div className='blur'
        style={{
            background:' #87CEEB',
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
        }}></div>
        </div>
    </div>
  )
}

export default Intro