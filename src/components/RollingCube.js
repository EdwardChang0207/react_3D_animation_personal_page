import React from 'react'
import './RollingCube.css'
import Btn from './Btn'

export default function rollingCube() {
  return (
    <div className='cube-Body'>
        <div className='scene'>
            <div className='floor'></div>
            <div className='cube'>
                <div className='front'></div>
                <div className='back'></div>
                <div className='left'></div>
                <div className='right'></div>
                <div className='top'></div>
                <div className='bottom'></div>
            </div>
        </div>
        <div className='title'>
                <h1 style={{color:'#ffffffae'}}>Edward Chang</h1>
         </div>
        <div className='Btn'><Btn /></div>
    </div>
  )
}
