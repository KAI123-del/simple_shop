import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalState } from "../store";
import "../index.css";
import {
  useQuery,
} from "react-query";

function ProductDetailPage() {
  let { productId } = useParams();
  const { addItemToCart } = useGlobalState();

 async function getProductById() {
    return await axios.get(`https://innocenti.onrender.com/products/${productId}`);
  }

  const { data, isLoading, isError, error } = useQuery(
    ["getProductById"],
    getProductById
  );
  

  function Loader() {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-white">
          Ruko jara ...Sabr kro...Page khul rha hai
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }


  return (
    <div>
      <div className="shadow px-24 py-6 ">
        <p className="text-2xl tracking-wider font-semibold">
          <span className="mr-2">Product</span> Summary
        </p>
      </div>

      {/* ==============================about the product section======================== */}
      <div className="flex justify-center items-start px-24 py-6 space-x-4 bg-gray-100">
        <div className="  ">
          <img src={data.data.image} />
        </div>

        <div className="px-2 py-6">
          <p className="text-2xl ">
            Name:{" "}
            <span className="ml-2 tracking-wider font-semibold">
              {data.data.name}
            </span>
          </p>
          <p className="text-2xl mt-2">
            Price:{" "}
            <span className="ml-2 tracking-wider font-semibold">
              $ {data.data.price}
            </span>
          </p>
          <p className="text-xl leading-8 mt-4">
            Description: <span className="ml-2">{data.data.description}</span>
          </p>
          <button
            onClick={() => {
              addItemToCart(data.data);
            }}
            className="px-8 py-3 bg-black rounded-full text-white tracking-wider mt-8 ml-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
