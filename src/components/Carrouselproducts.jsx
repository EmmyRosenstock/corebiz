import React, { useState } from 'react'
import LoadingScreen from './LoadingScreen';
import Item from './Item';
import Slider from "react-slick";
import arrowl from '../assets/arrowl.svg'
import arrowr from '../assets/arrowr.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots:false,
  infinite: true,
  speed: 500,
  slidesToShow:4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow:(
    <div ><img src={arrowl}/></div>
  ),
  prevArrow:(
    <div><img src={arrowr}/></div>
  ),
  
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 1,
        arrow:false,
        dots:true
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:false,
        dots:true
      },
    },
  ],
};


const CarouselProduct = ({ items,addToCart}) => { 


  return (
    <div className='relative  z-[5] bg-slate-white'>
       
    <div className='w-[70vw]   py-20 mt-[20px] relative z-[5]'>
    <strong className ='text-[20px] font-nunito ml-[30em] text-buttonColor font-bold'>Mais Vendidos</strong>
     <Slider {...settings}
        nextArrow={<div><img src={arrowr}/></div>}
        prevArrow={<div><img src={arrowl}/></div>}
        className='left-[26vw] px-4 py-3 mt-8 relative z-[5]'
        >
         {items && items.map(item=>(
                item.count=1,        
            <Item key={item.productId} item={item} addToCart={addToCart} />
        ))}
    
    </Slider>
    </div> 



    </div>
  )
}

export default CarouselProduct