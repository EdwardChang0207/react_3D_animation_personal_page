import React from 'react'
import './Card.css'

export default function Card({Item}) {
  return (
    <div className='d-flex justify-content-center'>
      <div className='card' style={{backgroundImage: `url(${Item.img})`}}>
          <div className='card-Container'>
            <h2 className='card-Title'>{Item.title}</h2>
            <p className='card-text'>{Item.discription}</p>
            <a href='#' className='card-Btn'>Learn More</a>
          </div>
      </div>
    </div>
  )

}
