import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import  img1 from "../assests/building.png"
import  img2 from "../assests/sales.png"
import  img3 from "../assests/painting.png"
import  img4 from "../assests/snow.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <div className='services'>
        <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false}
         interval={1200}
         showThumbs={false}>
        <div>
          <img src={img1} alt="An image" />
          <p>A helpful guide</p>
        </div>
        <div>
          <img src={img2} alt="Sales" />
          <p>Sales in 1 year</p> 
        </div>
        <div>
          <img src={img3} alt="Painting" />
          <p>Painting</p> 
        </div>
        <div>
          <img src={img4} alt="Snow" />
          <p>Snow in a year</p> 
        </div>
        </Carousel>
    </div>
  )
}

export default Services;