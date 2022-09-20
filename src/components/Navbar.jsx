import React from 'react'

import {Link} from 'react-router-dom'
import {BsSearch,BsShopWindow} from 'react-icons/bs'
import lupa from '../assets/lupa.svg'
import Cart from './Cart'
import vector from '../assets/Vector.svg'
import user from '../assets/user .svg'
import Cartshopping from '../assets/cart.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Navbar = ({search,handleSearch,searchProducts,cart,openCart,toggleCart,removeFromCart,incrementItem,total }) => {   
       
  return (
    <div className='relative mt-[20px] h-[100%] w-[100wv]'>
   <div className='w-[1200px]  md:h-[50px]  flex justify-between  items-center    font-nunito z-20'>
        <div className='flex justify-start w-[250px] ml-[10px]'>
        <LazyLoadImage
                    alt='vector'
                    effect="blur"     
                    src={vector} 
                    className=' object-cover mr-[50px]'/>
                     <div className='rounded-full bg-grayball w-[9px] h-[9px] mt-[35px]'/>
        </div>
        
        <div className='w-full md:w-[40%] flex justify-center items-center'>
          <input type="search" className='bg-slate-100 px-1 w-full focus:border-none focus:bg-slate-200 focus:outline-none' value={search}  name="search" onChange={handleSearch } />
          <BsSearch className='hidden md:block text-2xl cursor-pointer ml-2 text-slate-300' onClick={()=>searchProducts(search)}/></div>
             <div className='md:w-[200px] gap-1 mt-[10px] flex justify-center items-center'>
              <img src={user} className='w-[18px] h-[18px]' />
              <span className='text-nunito text-graytext'>Minha conta</span>
             </div>
             <div className='flex justify-center items-center cursor-pointer  lg:top-[45px] right-0 top-[75px] md:top-[45px] lg:right-[80px] z-50 bg-black py-2 px-1' onClick={toggleCart}>
             <img src={Cartshopping} className='text-2xl text-slate-200'/>
             <div className='rounded-full bg-redball w-[30px] h-[18px] flex center '>
             <span className='text-xs  font-nunito  font-bold text-center text-whitetext px-1   '>{cart.length}</span>
             </div>
            
            </div>

            <Cart cart={cart} openCart={openCart} toggleCart={toggleCart} removeFromCart={removeFromCart} incrementItem={incrementItem} total={total}/> 
   </div>
  
   </div>
  )
}

export default Navbar