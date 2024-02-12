import React from 'react';
import { Link } from 'react-router-dom';
import image2 from "../../assets/ProductImages/nike-2.webp"

const RelatedProducts = () => {
  // Здесь можно получить список связанных товаров или загружать данные из API

  const products = [
    { id: 1, name: 'Air Jordan 2 Gray', image: (image2) },
    { id: 2, name: 'Air Jordan 2 Gray', image: (image2) },
    { id: 3, name: 'Air Jordan 2 Gray', image: (image2) },
    { id: 4, name: 'Air Jordan 2 Gray', image: (image2) },
    
  ];

  return (
    <div className="related-products">
      <h2 className="text-2xl font-bold mb-4">Другие товары</h2>
      <div className="flex-wrap justify-between lg:flex md:block">
        {products.map((product) => (
          <div key={product.id} className="lg:w-1/4 p-4 md:w-full">
            <div className="bg-white rounded-lg shadow-md hover:shadow-2xl hover:duration-300 p-4 object-cover transform transition duration-300 hover:scale-110 ">
              <img src={product.image} alt={product.name} className="w-full mb-2 rounded-lg" />
              <h3 className="text-lg font-bold pb-4">{product.name}</h3>
              <p className="text-gray-700 mb-4 font-sans font-sm">
                Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps. 
                Fresh color trims the clean, classic materials, imbuing modernity into a classic design.
              </p>

              <button className="bg-gray-700 hover:bg-red-800 hover:duration-300 text-gray-700 text-white px-4 py-4 rounded-full mx-4 h-auto absolute right-2 top-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg>
                </button>

                <Link to="/order" onClick={() => window.scrollTo(0, 0)}>
              <button
                type="button"
                class="mt-2 mb-6 lg:mb-2 inline-block rounded-full bg-primary hover:bg-gray-900 hover:text-white px-6 pb-2.5 pt-2.5 text-sm m-auto font-medium uppercase leading-normal
                text-gray-900 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-200 ease-in-out hover:bg-primary-600 ">
                В корзину
                </button>
                </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;