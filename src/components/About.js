import React from 'react'
import Aboutimg from './about.jpg'

const About = () => {
  return (
    <>
      <div className="container about px-0">
        <div className="row align-items-center">
          <div className="col-7 mt-5">
            <h1 className='mb-4'>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae sequi itaque error consequatur voluptatum ex placeat nulla tenetur modi nam, tempore vero dolores distinctio? Porro minus architecto voluptas consequuntur?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla necessitatibus provident reiciendis, beatae rerum nihil ipsam, nisi odit soluta atque doloribus iste? Itaque a at illo, earum perspiciatis laudantium placeat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla necessitatibus provident reiciendis, beatae rerum nihil ipsam, nisi odit soluta atque doloribus iste? Itaque a at illo, earum perspiciatis laudantium placeat.
            </p>
             
            
          </div>
          <div className="col-5">
            <img src={Aboutimg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
