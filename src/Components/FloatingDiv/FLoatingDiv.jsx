import React from 'react'
import './FloatingDiv.css';
const FLoatingDiv = ({image,text1,text2}) => {
  return (
    <div className='floatingdiv'>
        <img src={image} alt='' />
        <span>
            {text1}
            <br></br>
            {text2}
        </span>
    </div>
  )
}

export default FLoatingDiv