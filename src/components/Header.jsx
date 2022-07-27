import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import { useGlobalState } from '../store'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    
  let navigate=useNavigate();
    const {cart}=useGlobalState()
    const CartPageHandler=()=>{
      navigate("/cart")
    }
    
   
  return (
    <div className='shadow shadow-gray-200 w-full h-24 px-40 py-8'>
    <div className='flex justify-between items-center'>
        <p onClick={()=>navigate("/")} className='text-xl  font-semibold'>Random Shop</p>
        <div className='text-2xl flex hover:text-gray-500 transition duration-300' onClick={CartPageHandler}>
            <BsHandbag /> <span className='ml-1 text-xl'>{cart.length}</span>
        </div>
    </div>
</div>
  )
}

export default Header