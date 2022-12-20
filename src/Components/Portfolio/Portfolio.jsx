import React,{useContext}from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import UnsplashProject from '../../img/firstproject.png';
import Animal from '../../img/animal.png';
import ObjectDetector from '../../img/object-detector.png';
import Classificationtenserflow from '../../img/classificationtenserflow.png';
import { Pagination } from 'swiper';
import 'swiper/css/pagination'
import { themeContext } from "../../Context";

const Portfolio = () => {


// context
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='portfolio'>
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper 
        modules={[Pagination]}
        pagination={{clickable:true}}
        spaceBetween={30}
        slidesPerView ={3}
        grabCursor={true}
        className='portfolio-slider'>
           <SwiperSlide>
            <a href="https://image-gallery-two-pi.vercel.app/" alt=''>
            <img src={UnsplashProject} alt=''style={{transform:'scale(0.9)'}}/>
            </a>
           </SwiperSlide> 
        <SwiperSlide>
            <a href="https://sauravs.w3spaces.com/" alt=''>
            <img src={Classificationtenserflow} alt='' style={{transform:'scale(0.9)'}}/>
            </a>
           </SwiperSlide> 
           <SwiperSlide>
            <a href='https://github.com/charlesaurav13/animal_classifier' alt=''>
            <img src={Animal} alt=''style={{transform:'scale(0.9)'}}/>
            </a>
           </SwiperSlide>
           <SwiperSlide>
            <a href="https://objectdetectionusingcamera.netlify.app/" alt=''>
            <img src={ObjectDetector} alt=''style={{transform:'scale(0.9)'}}/>
            </a>
           </SwiperSlide> 
        </Swiper>
    </div>
  )
}

export default Portfolio