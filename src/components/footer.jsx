import  mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import vtex from '../assets/vtex.svg'
import vector from '../assets/Vectorw.svg'

const Footer =()=>{
    
    
    return(
        <div className="grid grid-row-6 grid-column-1 grid-flow-row w-[121em] h-[15em] bg-buttonColor mt-[vw]  ml-[-20vw] relative margin-0 auto  z-[5]">
          <div className='mt-10' >
          <strong className="text-start ml-[20rem] text-whitetext text-[20px] font-nunito mt-[20px]">Localização</strong> 
          <div className="w-[100px] h-[4px] bg-whitetext ml-[20em] mt-[10px]"/> 
         <div className="grid flex-column ml-[20em] mt-[20px]">
            <p className="text-whitetext">Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p className="text-whitetext">Alphavile SP</p>
            <p className="text-whitetext"> brasil@corebiz.ag</p>
            <p className="text-whitetext">+55 11 3090-1039</p>
         </div>
          </div>
          <div className='ml-[60rem] mt-[-9em] '>
            <button className='bg-whitetext flex flex-row justify-between px-2 text-center center text-buttonColor rounded-md text-center w-[195px] h-[38px]'> <img src={mail} className='w-[17px] h-[13px]  mt-[10px] '/> <p className='mt-[10px] px-3 font-nunito text-[12px]'>ENTRE EM CONTATO</p></button>
            <button className='bg-whitetext flex mt-[20px] flex-row justify-between px-2 text-center center text-buttonColor rounded-md text-center w-[195px] h-[38px]'> <img src={phone} className='w-[17px] h-[13px] mt-[10px] '/> <p className='mt-[4px] font-nunito text-[12px]'>FALE COM NOSSOS CONSULTORES ONLINE</p></button>
          </div>
          <div className='ml-[100em] mt-[-10rem]'>
            <div >
                <p className='text-whitetext text-[11px] font-nunito'>Created by</p>
            <img src={vector} alt="" />
             </div>
             <img  className='mt-[20px]' src={vtex} alt="" />
          
          </div>
          
        </div>
    )
}
export default Footer