import React, { useState } from 'react';
import NavBar from './NavBar'
import { Container, Row } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
 return(
   <Container fluid className='container-All m-0'>
    <NavBar />
   </Container>
 )

}

/*
if(page === 'home'){
  return(
    <Container fluid className='container-All m-0'>
    <NavBar />
    <Row className='p-0 m-0'>
      <div className='container-Home'>
      <Home />
        </div> 
    </Row>
  </Container>
  )
}

if(page === 'service'){
  return(
    <Container fluid className='container-All m-0'>
    <NavBar />
    <Row className='w-100 justify-content-center p-0 m-0' >
      <div className='container-Service' style={{paddingTop:'25vh'}}><Service service /></div> 
    </Row>
  </Container>
  )
}

return (
  <Container fluid className='container-All m-0'>
    <NavBar />
    <Row className='p-0 m-0'>
      <div className='container-Home'>
      <Home />
        </div> 
    </Row>
    <Row className='w-100 justify-content-center p-0 m-0' >
      <div className='container-Service' style={{paddingTop:'25vh'}}><Service service /></div> 
    </Row>
  </Container>
  
);*/
