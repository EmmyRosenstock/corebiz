import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route }  from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import axios from './helpers/apiClient'

import CarouselInfor from './components/Carrouselinfor';

const App = () => { 
 
const[showLoading,setShowLoading]=useState(false)

const[items,setItems] = useState([])
const[backup,setBackUp]=useState([])
   
    const[isLoading,setIsLoading] = useState(true)
  
    const[error,setError] = useState(null)

    useEffect(()=>{  
        fetchProducts()
    },[]) 

   
   
 

    const fetchProducts = () => {
      setShowLoading(true)
        const res =axios.get('/products')
        .then(res =>{
            setItems(res.data)
            setBackUp(res.data)
            setIsLoading(false)
            setShowLoading(false) 
        })
        .catch(err=>{ 
            setError(err)
            setIsLoading(false)
        })
    }
    

    const[cart,setCart]=useState([])
  
    const addToCart = (item) => {
        
        const itemInCart = cart.find(itemInCart => itemInCart.productId === item.productId)       
        if(!itemInCart){
          setCart([...cart,item])     
        }
       else{
            setCart(cart.map(itemInCart => itemInCart.productId === item.productId ? {...itemInCart,count:itemInCart.count+1} : itemInCart))    
       }     
    }   
 

  
    const removeFromCart = (productId) => { 
      const itemInCart = cart.find(itemInCart => itemInCart.productId === productId)
      if(itemInCart.count > 1){
        setCart(cart.map(itemInCart => itemInCart.productId === productId ? {...itemInCart,count:itemInCart.count-1} : itemInCart))    
      
      }
       else{
        setCart(cart.filter(item=>item.productId!==productId))
       }
    }
  
    const clearCart = () => {
        setCart([])
    }
   

    const[search,setSearch] = useState('')
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }    
   
    
    useEffect(()=>{  
      let results=[]         
      if(search.length > 0){
        results=items.filter(item=>item.productName.toLowerCase().startsWith(search.toLowerCase()) || item.productName.toLowerCase().includes(search.toLowerCase()) )             
      } 
      if(search.length === 0 || search=== null || search=== undefined || search === ''){
        results=backup
      }
      setItems(results)
    },[search])
   
    const[openCart,setOpenCart] = useState(false)

    const toggleCart = () => {
        setOpenCart(prevState=>!prevState)
    }

    const incrementItem = (productId) => {
        setCart(cart.map(item=>item.productId===productId ? {...item,count:item.count+1} : item))
    }

    const addition=(acc,currentValue)=>{
      return acc + currentValue.count * currentValue.price 
  }
  const total=cart.reduce(addition,0)

  return (
    <BrowserRouter>
    <Navbar search={search} handleSearch ={handleSearch} cart={cart} openCart={openCart} toggleCart={toggleCart} removeFromCart={removeFromCart } incrementItem={incrementItem} total={total} />

    <Routes>
      <Route path="/" element={<Home items={items} isLoading={isLoading} addToCart={addToCart}  />}/>
  
    </Routes>
    </BrowserRouter>
  )
} 

export default App