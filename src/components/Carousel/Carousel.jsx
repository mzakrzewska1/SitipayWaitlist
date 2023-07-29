import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

import icon from '../../img/quoteIcon.svg'
import image from '../../img/examplePicStudent.svg'
// import image2 from '../../img/testimon2.svg'
import rating from '../../img/rating.svg'

function Carousel() {
  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7000,
  };
    
     const testimonialsData = [
  { name: "Martha James",
    text: "I’ve been with Sitipay for a few years, and every single encounter w them has been exceptional despite my comparatively small-status among businesses they likely serve.",
    alt: "image1",
    position: "CEO/ Chairman",
    image: image,
  },
  {
    name: "Magan White",
    text: "I've been a loyal customer of Sitipay for several years now, and without fail, each interaction with them has been extraordinary, even though my business might be considered smaller compared to others they cater to.",
    alt: "image2",
    position: "Director",
    // image: image2,
    }]
  
   const testimonial1 = (
      <div className="card-test" key={testimonialsData[0].alt}>
        <img src={icon} alt={testimonialsData[0].alt} />
       <p>{testimonialsData[0].text}</p>
       <img src={rating} alt="rating" />
    
       <div className="img-testm">
        <img src={testimonialsData[0].image} alt="" />
        <p>{testimonialsData[0].name} <br /><span>{testimonialsData[0].position}</span></p>
          </div>
     </div>)
  
  const testimonial2 = (
      <div className="card-test" key={testimonialsData[1].alt}>
        <img src={icon} alt={testimonialsData[1].alt} />
       <p>{testimonialsData[1].text}</p>
       <img src={rating} alt="rating" />
    
       <div className="img-testm">
        <img alt="" />
        <p>{testimonialsData[1].name} <br /><span>{testimonialsData[1].position}</span></p>
          </div>
      </div>)
  
  return (
    <Slider {...settings}>
          <div>
        {testimonial1}
      </div>
      <div>
        { testimonial2 }
  </div>
        

    </Slider>
  );
}
export default Carousel