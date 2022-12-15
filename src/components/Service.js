import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Slide from './Slide'
import Card from './Card'
import Cardbg1 from '../img/Cardbg-1.jpg'
import Cardbg2 from '../img/Cardbg-2.png'
import Cardbg3 from '../img/Cardbg-3.png'
import './Service.css'

export default function Service(Service) {
  const [cardType, setCardType] = useState('none')
  const webDevCardItem=[
    {id:1, title:'One-Page Website', img: Cardbg1, discription:'Single Page Website Development, Ad Page/ Shop website/ Personal Page, Low price but High qulity! ' },
    {id:2, title:'Personal Website', img: Cardbg2, discription:'Customized Your Personal WebSite here, Allow Multiple Pages, Customized Functions, This A Perfect choice For You!'},
    {id:3, title:'Business Website', img: Cardbg3, discription:'Customized Your Business Website here, Allow Multiple Pages, Customized Functions, Shopping Car, This Will Make You A Perfect Website For Your Business!'}]
  const webDesignCardItem=[
    {id:1, title:'', img:'', discription:''},
    {id:2, title:'', img:'', discription:''},
    {id:3, title:'', img:'', discription:''}
  ]  
  const codeEduCardItem=[
    {id:1, title:'', img:'', discription:''},
    {id:2, title:'', img:'', discription:''},
    {id:3, title:'', img:'', discription:''}
  ] 

  const ServiceSlide = () => {
    return(
      <>
        <Row className='w-100 d-flex justify-content-center service-Body'>
            <Col className='col-12 d-flex justify-content-center'><h1 style={{color:'#fff', padding: '1em 0'}}>Service</h1></Col>
            <Col className='col-9'><Slide /></Col>
        </Row>
      </>
    )
  }
  const WebDevCard = () => {
    return(
      <>
        <Row className='d-flex justify-content-center' style={{paddingBottom:'4em'}}>
          <Col className='m-0 p-0'></Col>
          <Col className='m-0 p-0'>
            <h2 style={{textAlign:'center', color:'#fff'}}>Web Development</h2>
          </Col>
          <Col className='m-0 p-0'></Col>
        </Row>
        <Row className='w-100 d-flex justify-content-center' style={{paddingRight:'4em',paddingLeft:'4em'}}>
            {webDevCardItem.map((webDevCardItem) => (
              <Col className='col-4 justify-content-center' key={webDevCardItem.id}><Card Item={webDevCardItem} /></Col>
            ))}
        </Row>
      </>
    )
  }

  const CardGroup = () => {
    return(
      <div className='container-Cards'>
        <WebDevCard />
      </div>
    ) 
  }

  switch(cardType){
    case 'webDev':
      return(
        <>
          <ServiceSlide />
          <WebDevCard />
        </>
      )
    default:
      return(
        <>
          <ServiceSlide />
          <CardGroup />
        </>
      )
  }

}
