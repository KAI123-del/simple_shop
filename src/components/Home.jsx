import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../store';
import "../index.css"







function Home() {
    const { addItemToCart } = useGlobalState();
    let navigate = useNavigate();
    const [productDetails, setProductDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const productInfoHandler = (item) => {
        console.log("id", item._id)
        navigate(`/products/${item._id}`);

    }

    function Products() {
        return (
            <div className='grid grid-cols-12 gap-6 px-24  pt-4 pb-8'>
                {
                    productDetails.map((item) =>
                        <>
                            <div className=' shadow-xl pt-2 pb-4 border px-2 shadow-gray-200   col-span-4 rounded-lg'>
                                <div className='   bg-gray-100 rounded-t-lg '>
                                    <img src={item.image} style={{ height: "55vh", width: "100%" }} />
                                </div>
                                <div className='flex justify-between items-center py-3 px-4'>
                                    <div className=' text-lg font-semibold'>
                                        <p className=''>{item.name}</p>
                                        <p>$ {item.price}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => productInfoHandler(item)} className='bg-lime-500 px-6 py-2 rounded-full text-medium shadow text-lime-100 hover:text-lime-500 hover:bg-lime-100 transition duration-300'>Product Info</button>
                                    </div>
                                </div>
                                <div className='col-span-4'>
                                    <button onClick={() => addItemToCart(item)} className='px-8 hover:bg-gray-200 hover:text-black transition duration-300 py-3 mt-4 bg-black rounded-full w-full text-white tracking-wider '>Add to Cart
                                    </button>
                                </div>

                            </div>

                        </>

                    )
                }

            </div>
        )
    }

    function Loader() {
        return (
            <div  class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
                <p class="w-1/3 text-center text-white">Ruko jara ...Sabr kro...Page khul rha hai</p>
            </div>
        )
    }




    async function getProducts() {
        let response = await axios.get(" https://innocenti.onrender.com/products");
        setLoading(false)
        setProductDetails(response.data)
    }
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div className='m-0  p-0'>

            {
                loading ? <Loader /> : <Products />
            }


        </div>


    )
}

export default Home;