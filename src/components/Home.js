import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'react-bootstrap' 
import './Home.css'
import RollingCube from './RollingCube'

export default function Home() {
  const StartBtn = 'Start'
  return (
    <>
        <Row className='d-flex justify-content-center home-Body'>
          <Col className='col-12'>
            <div className='Cube-container'><RollingCube /></div> 
          </Col>
        </Row>
    </>
  )
}
