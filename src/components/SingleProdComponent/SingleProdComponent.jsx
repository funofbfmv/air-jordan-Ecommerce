import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../assets/ProductImages/nike-1.jpeg"

const SingleProductPage = () => {
  return (
    <div className="container mx-auto lg:my-2 py-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row space-x-10">
          <div className="md:w-1/2">
            <img
              src={image1}
              alt="Product Image"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 space-x-6">
            <h2 className="text-2xl font-bold mb-2">Air Jordan 1 Mid</h2>
            <h4 className="text-md font-bold mb-6">Кроссовки</h4>
            <p className="text-gray-700 mb-4">
            Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps. 
            Fresh color trims the clean, classic materials, imbuing modernity into a classic design.
            </p>
            <p className="text-gray-700 mb-4 font-bold">
              Цена: 2000 TMT
            </p>
            <Link to="/order" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-gray-700 hover:bg-red-800 hover:duration-500 rounded-full shadow-md hover:shadow-lg text-white font-bold py-4 px-8 lg:my-24 rounded">
              В корзину
            </button>
            <button className="bg-gray-700 hover:bg-red-800 py-4 lg:ml-4 hover:duration-500 rounded-full shadow-md hover:shadow-lg text-white font-bold  px-4 lg:my-24 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;