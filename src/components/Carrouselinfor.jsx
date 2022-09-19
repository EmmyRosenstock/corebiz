import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerblack from '../assets/Bannerblack.svg'
import imgb from '../assets/image 2.svg'

const settings = {
  dots:true ,
  infinite: true,
  speed: 500,
  slidesToShow:1,
  slidesToScroll: 1,
  arrows: false,
 
  
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const CarouselInfor = () => { 


  return (
  <> 
     <Slider {...settings} className=' grid grid-row-6 grid-column-1 grid-flow-row w-[139em] h-[20em] py-5  mr-[100vw] relative margin-0 auto  z-[5]'>
     <div className='w-[998px] h-[430px] mt-[-80px] ml-[-500px]  '>
       <img src={bannerblack} className='w-[230vw] h-[430px] relative z-30'  alt="" />
        <div className='flex flex-col relative ml-[140px] gap-10'>
        <h1 className='  text-whitetext relative mt-[-210px] text-nunito text-[30px]   text-center z-40'>Olá, o que você está buscando?</h1>
        <h1 className='  text-whitetext relative mt-[-30px] text-center font-bold text-[35px] z-40'>Criar ou migrar seu e-commerce?</h1>
        </div>
        <div className='absolute  w-[1250px] h-[430px]  mt-[-430px] ml-[88em] z-10'>
             <img src={imgb} className=' w-[1233px] h-[430px]   ' />
        </div>

   </div>
   <div className='w-[998px] h-[430px] mt-[-80px] ml-[-500px]  '>
       <img src={bannerblack} className='w-[230vw] h-[430px] relative z-30'  alt="" />
        <div className='flex flex-col relative ml-[140px] gap-10'>
        <h1 className='  text-whitetext relative mt-[-210px] text-nunito text-[30px]   text-center z-40'>Olá, o que você está buscando?</h1>
        <h1 className='  text-whitetext relative mt-[-30px] text-center font-bold text-[35px] z-40'>Criar ou migrar seu e-commerce?</h1>
        </div>
        <div className='absolute  w-[1250px] h-[430px]  mt-[-430px] ml-[88em] z-10'>
             <img src={imgb} className=' w-[1250px] h-[430px]   ' />
        </div>

   </div>
   <div className='w-[998px] h-[430px] mt-[-80px] ml-[-500px]  '>
       <img src={bannerblack} className='w-[230vw] h-[430px] relative z-30'  alt="" />
        <div className='flex flex-col relative ml-[140px] gap-10'>
        <h1 className='  text-whitetext relative mt-[-210px] text-nunito text-[30px]   text-center z-40'>Olá, o que você está buscando?</h1>
        <h1 className='  text-whitetext relative mt-[-30px] text-center font-bold text-[35px] z-40'>Criar ou migrar seu e-commerce?</h1>
        </div>
        <div className='absolute  w-[1250px] h-[430px]  mt-[-430px] ml-[88em] z-10'>
             <img src={imgb} className=' w-[1250px] h-[430px]   ' />
        </div>

   </div>
   </Slider>
    </>
  )
}

export default CarouselInfor