import React from 'react'
import "./Card.css"


export const Card = ({
    imgSrc,
    title,
    description,
    btnText,
    link
}) => {
  return (
    <div className='card-container'>
        {imgSrc && <img src={imgSrc} alt='Card picture' className='card-img'/>}
        <h1 className='card-title'>{title}</h1>   
        <p className='card-description'>{description}</p>
        <a href={link} className='card-btn'>{btnText}</a>
    </div>
    
  );
}

export default Card