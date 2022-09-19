import axios from "../helpers/apiClient"
import { useState } from "react"
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().min(8).max(32).required(),
  });
const Newslatter =()=>{
    
    const { register, handleSubmit, formState:{errors},reset } = useForm({
        resolver: yupResolver(schema)
    });
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [news, setNews]= useState('')
    const handleSubmits =(e)=>{
        e.preventDefault()
        fetchnewslatter(name, email)

    }
    const fetchnewslatter = (name, email) => {
        
          const res =axios.post('/newsletter',{
            name:name,
            email:email
          })
          .then(res =>{
            setNews([res.data,...news])
              
          })
          .catch(err=>{ 
             
          })
          setName('')
          setEmail('')

      }

    return(
        <div className="grid grid-row-6 grid-column-1 grid-flow-row w-[121em] h-[15em] bg-grayhover mt-[5vw]  ml-[-20vw] relative margin-0 auto  z-[5]">
          <strong className="text-center text-[22px] font-lato mt-[20px]">Participe de nossas news com promoções e novidades!</strong>  
          <div className="  px-[40rem] flex ">
            <form action="post" className="py-12 flex gap-4" onSubmit={handleSubmit((d)=>console.log(d))}>
                <input {...register('name')} type="text" placeholder="Digite seu nome" onChange = {(e)=>setName(e.target.value)}  value={name}  className="w-[280px] h-[48px] text-center" required/>
                <p>{errors.name?.message}</p>

                <input   {...register('email')} className="w-[280px] h-[48px]  text-center" required/>
                <p>{errors.email?.message}</p>


                <button className='w-[140px] h-[48px]  pr-3  font-lato  h-[35px] w-32 text-[14px]   bg-buttonColor text-whitetext' onClick={handleSubmits}> Eu quero!</button>
            </form>
          </div>
        </div>
    )
}
export default Newslatter