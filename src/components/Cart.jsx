import clsx from 'clsx';
import React from 'react';
import { useGlobalState } from '../store';

function Cart() {
  let { cart } = useGlobalState();
  let {decrementQuantityItem} = useGlobalState();
  let {incrementQuantityItem} = useGlobalState();


  let { removeItemFromCart } = useGlobalState();




  // ===== the way we use clsx package :

  // clsx("border border-4",{
  //   'hidden': isLoading,
  //   'bg-red-500 block':!isLoading
  // })



  return (
    <div className='px-2 pt-2 mt-4 pb-20 justify-center flex items-center'>

      <div className='w-2/5  shadow-xl rounded-lg'>
        {
          cart.map((item, index) => (
            <div className={clsx("flex justify-center pb-2 w-full", {
              "border-b-2 border-gray-300": index !== cart.length - 1
            })} >
              <div className='flex justify-center   w-full'>
                <div className=' h-44 pt-2 w-44 overflow-hidden  '>
                  <img src={item.image} />
                </div>
                <div className='px-8 pt-3 text-gray-600 tracking-wider font-semibold text-lg  flex flex-col w-2/3    justify-start '>
                  <p className='mb-2'><span className='font-normal'>Name :</span> {item.name}</p>
                  <p className='mb-2'><span className='font-normal'>Quantity :</span><span className=' px-4 text-center ml-2 rounded-full mr-2 text-lg  text-white bg-black hover:text-black hover:bg-gray-200 transition duration-300 hover:shadow-xl' onClick={()=>incrementQuantityItem(item)}>+</span> {item.quantity}<span className=' px-4 text-center ml-2 rounded-full mr-2 text-lg  text-white bg-black hover:text-black hover:bg-gray-200 transition duration-300 hover:shadow-xl' onClick={()=>decrementQuantityItem(item)}>-</span></p>
                  <p><span className='font-normal'>Price :</span> $ {item.quantity * item.price}</p>
                  <button onClick={() => {
                    console.log("cart check",item._id)
                    return removeItemFromCart(item._id)
                  }} className='w-1/2 py-1 mt-4 rounded-full font-normal hover:bg-gray-200 hover:text-black transition duration-300 tracking-wider bg-black text-white'>Remove</button>
                </div>
              </div>

            </div>




          ))

        }

        {
          cart.length !== 0 && <button className='px-6 py-3 w-full hover:bg-rose-200 hover:text-rose-500 transition duration-300 rounded-b-lg mt-4 text-rose-200 font-semibold text-lg tracking-wider bg-rose-500'>
            Proceed to payment
          </button>
        }





      </div>

    </div>

  )
}

export default Cart;






