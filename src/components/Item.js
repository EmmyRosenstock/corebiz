import React,{useState,useEffect} from 'react'
import {BsCartPlus} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import flag from '../assets/Flag.svg'
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Item = ({item,addToCart}) => {

    const[added,setAdded]=useState(false)

   


    const handleAdded = (item) => {
        setAdded(true)
        addToCart(item)
    }

    useEffect(()=>{        
        setTimeout(()=>{
            setAdded(false)
        },3000)
    },[added])

  

  return (
    <div key={item.productId} className='w-full'> 
                <div className='w-full bg-white px-3   flex flex-col justify-center items-center  relative z-[5]'>
                    
                    <LazyLoadImage
                    alt={item.productName}    
                    effect="blur"               
                    src={item.imageUrl} 
                    className='h-[40vh] md:h-[25vh] object-cover py-2'/>
                     {item.listPrice &&(<img className= 'absolute top-0 right-10 h-16 w-16 ...' src={flag} />)}  
                    <div className='w-60 h-56 bg-white px-3   flex flex-col justify-center items-center  relative z-[5] hover:bg-grayhover'>
                    <span className='block mr-4 w-[100%] py-1  text-center text-xs font-nunito text-graytext'>{item.productName}</span>                    
                    <ReactStars className='   justify-center items-center  relative z-[5] ' count={5} value={item.stars} activeColor="#F8475F" fullIcon={<i className="fa fa-star"></i>}/>
                    <div className='flex justify-center  items-center border-0 border-slate-400 py-0 px-2 mb-2'>
                     <div className='border-r-0 border-slate-600 '>
                     {item.listPrice &&(<span className='block pr-3 text-slate-900 font-nunito text-xs text-graytext' >De : R${item.listPrice/100}</span>)}  
                     <span className='block pr-3 text-slate-900 font-nunito text-lg font-bold '> Por R${item.price/100}</span>
                       
                     {item.installments.length>0&& (
                      
                         <span className='block pr-3 text-slate-900 font-nunito text-lg text-graytext'>ou em {item.installments[0].quantity} x de {item.installments[0].value/100}</span>
                              )}
                               <div  className='absolute top-40   right-14'>
                               <button className='block rounded-full pr-3 text-slate-900 font-nunito  h-[35px] w-32 text-lg mt-3  hover:bg-buttonColor text-whitetext' onClick={()=>handleAdded(item)}>Comprar</button>
                    
                     </div> 
                     </div>
                    
                    </div> 
                    </div>
                   
                   <div className={`absolute bottom-3 right-1 w-[80px] bg-sky-900 items-center justify-center transition-all duration-300 ease-in-out ${added ? 'flex':'hidden'}`}><span className='text-xs text-slate-50 font-ibm  py-1 px-1'>Added </span></div>
                </div>

            </div>
  )
}

export default Item