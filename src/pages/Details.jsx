import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from '../helpers/apiClient'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoadingScreen from '../components/LoadingScreen';


const Details = ({addToCart}) => {

    const {productId} = useParams()
    const [item,setItem] = useState({})
    const [isloading,setIsLoading] = useState(true) 


  


    useEffect(()=>{
        const fetchProduct = () => {        
            axios.get(`/products/${productId}`)
            .then(res => {
                setItem(res.data)
                setIsLoading(false)
            })  
            .catch(err => {
                console.log(err)
            }) 
        }
        fetchProduct()
    },[productId])
 
  item.count=1
      
  return (
    <div className='relative z-[5] bg-white'>      
    
    <div className='w-full grid grid-cols-1 md:grid-cols-2 place-items-start'>
        <div className='w-full border-0 border-slate-400 py-3 px-3 md:pr-16'>            
            <span className='block w-full text-slate-800 text-xl font-frank mb-2 first-letter:font-2xl font-bold md:pt-8 pt-4'>Name: <span className='font-normal text-md font-ibm block'> {item.productName}</span></span>
            <span className='block w-full text-slate-800 text-md font-frank mb-2 first-letter:font-2xl font-bold'>Price: <span className='font-normal text-md font-ibm block'>{item.price}</span></span>
           

            <button className='font-ibm bg-slate-900 text-slate-50 px-6 py-1 mt-8 text-sm shadow-md font-semibold shadow-[#000]' onClick={()=>addToCart(item)}>Add to Cart</button>
        </div>
        <div className='w-full border-0 border-slate-400 py-3 px-3'>
        <LazyLoadImage
                    alt={item.productName}    
                    effect="blur"               
                    src={item.imageUrl} 
                   />
        </div>       
    </div>

<LoadingScreen showLoading={isloading} />
    </div>
  ) 
}
 
export default Details