import React, { useState } from 'react'
import { Row, Col, Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import Home from './Home'
import Service from './Service'
import { Prev } from 'react-bootstrap/esm/PageItem'

export default function NavBar() {
    const [page, setPage] = useState('home')
    const NavBody = () => {
        return(
            <Navbar collapseOnSelect className='Nav-body' sticky='top' variant='dark' style={{backgroundColor:'#030303', height:'100px'}}>
                <Row className='w-100'>
                <Col className='col-md-5'><Navbar.Brand href='#' style={{color:'white', alignContent:'center'}} className='brandName d-flex justify-content-start'><h2>EdwardChang</h2></Navbar.Brand></Col>
                <Col className='col-md-5'>
                    <Nav className='w-100 d-flex navLinks pt-2'>
                     <Nav.Item>
                            <Nav.Link onClick={() =>{ setPage('home') }}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() =>{ setPage('service') }} >Service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() =>{ alert('we are still working on this, thanks!') }}>Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() =>{ alert('we are still working on this, thanks!') }}>Contect</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col className='col-md-2'>
                    <Nav className='w-100 d-flex navLinks justify-content-end pt-2'>
                    <Nav.Item className='btn-padding'>
                        <Nav.Link active className='text-bold'>LogIn</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='btn-Signup btn-padding'>
                        <Nav.Link active className='text-bold' style={{color:'black'}}>SignUp</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                
            </Row>
            </Navbar>
        )
    }

    switch(page){
        case 'home':
            return(
                <>
                    <NavBody />
                    <div className='container-Home'>
                        <Home />
                    </div>
                </>
            )
        case 'service':
            return(
                <>
                    <NavBody />
                    <div className='container-Page'>
                        <Service />
                    </div>
                </>
            )
        case 'education':
            
        case 'contract':
            

        default:
            return(
                <>
                    <NavBody />
                    <div className='container-Page'>
                        <Home />
                    </div>
                </>
            )
    }

}

