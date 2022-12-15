import React, {useState} from 'react'
import firstslide from '../img/first slide.png'
import secondslide from '../img/second slide.png'
import thirdslide from '../img/third slide.png'
import { Carousel, Row } from 'react-bootstrap' 

export default function Slide() {
    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  return (
    <>
        <Row className='d-flex justify-content-center slide-Row'>
            <Carousel fade activeIndex={index} onSelect={handleSelect} className='slides slide-Body justify-content-center'>
            <Carousel.Item >
                <img className=" w-100" src={firstslide} alt="First slide" height='500px'/>
                <Carousel.Caption>
                    <h3>Web Development</h3>
                    <p>Make your costume business or your costume personal page.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img className=" w-100" src={secondslide} alt="Second slide" height='500px'/>
                <Carousel.Caption>
                    <h3>Web Page Design</h3>
                    <p>Help you to make your website look more like a pro.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img className=" w-100" src={thirdslide} alt="Third slide" height='500px'/>
                <Carousel.Caption>
                    <h3>Coding Education</h3>
                    <p>Learn how to coding right now and start making your own project.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Row>
    </>
  )
}
