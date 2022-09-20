import React from 'react'
import LoadingScreen from '../components/LoadingScreen';
import Item from '../components/Item';
import CarouselProduct from '../components/Carrouselproducts';
import CarouselInfor from '../components/Carrouselinfor';
import Newslatter from '../components/newsLetter';
import Footer from '../components/footer'
const Home = ({items,addToCart,showLoading}) => { 


  return (
    <div className='relative z-[5] '>
     
      <div className='ml-[-500px] px-4 py-10 relative z-[5]'>
      
      <CarouselInfor/>
      
      </div>
   
    <div className='w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 place-items-center px-4 py-3 mt-8 relative z-[5]'>      
   
 <CarouselProduct items={items}  addToCart={addToCart} />
    </div> 
    <LoadingScreen  showLoading={showLoading}/>

    <div> 
      <Newslatter/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
  )
}

export default Home