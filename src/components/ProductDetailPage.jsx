import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalState } from '../store';
import "../index.css"


function ProductDetailPage() {
    let { productId } = useParams();
    const [productSummary, setProductSummary] = useState(null)
    const { addItemToCart } = useGlobalState()

    useEffect(() => {
        async function productDetail() {
            const response = await axios.get(`https://innocenti.onrender.com/products/${productId}`);
            setProductSummary(response.data)
        }
        productDetail()
    }, [])

    function Loader() {
        return (
            <div  class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
                <p class="w-1/3 text-center text-white">Ruko jara ...Sabr kro...Page khul rha hai</p>
            </div>
        )
    }




    if (!productSummary) {
        return <Loader />
    }

    return (
        <div >
            <div className='shadow px-24 py-6 '>
                <p className='text-2xl tracking-wider font-semibold'><span className='mr-2'>Product</span>  Summary</p>
            </div>

            {/* ==============================about the product section======================== */}
            <div className='flex justify-center items-start px-24 py-6 space-x-4 bg-gray-100'>
                <div className='  '>
                    <img src={productSummary.image} />
                </div>

                <div className='px-2 py-6'>
                    <p className='text-2xl '>Name: <span className='ml-2 tracking-wider font-semibold'>{productSummary.name}</span></p>
                    <p className='text-2xl mt-2'>Price: <span className='ml-2 tracking-wider font-semibold'>${" "}{productSummary.price}</span></p>
                    <p className='text-xl leading-8 mt-4'>Description: <span className='ml-2'>{productSummary.description}</span></p>
                    <button onClick={() => {
                        addItemToCart(productSummary)
                    }} className='px-8 py-3 bg-black rounded-full text-white tracking-wider mt-8 ml-4'>Add to Cart</button>

                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage