import React from 'react';
import image from "../../assets/ProductImages/nike-1.jpeg"
import { Link } from 'react-router-dom';



const ProductGird = () => {
  // Пример данных о товарах
  const products = [
    { id: 1, name: 'Nike Sneakers', price: 1000,},
    { id: 2, name: 'Nike Sneakers', price: 2000 },
    { id: 3, name: 'Nike Sneakers', price: 3000 },
    { id: 4, name: 'Nike Sneakers', price: 4000 },
    { id: 5, name: 'Nike Sneakers', price: 2000 },
    { id: 6, name: 'Nike Sneakers', price: 1000 },
    { id: 7, name: 'Nike Sneakers', price: 2000 },
    { id: 8, name: 'Nike Sneakers', price: 1000 },
    { id: 9, name: 'Nike Sneakers', price: 2000 },
    { id: 10, name: 'Nike Sneakers', price: 2000 },
    { id: 11, name: 'Nike Sneakers', price: 2000 },
    { id: 12, name: 'Nike Sneakers', price: 2000 },
    { id: 10, name: 'Nike Sneakers', price: 2000 },
    { id: 11, name: 'Nike Sneakers', price: 2000 },
    { id: 12, name: 'Nike Sneakers', price: 2000 },
  ];

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-sm mb-8 mt-4 font-bold text-center">Новое поступление кроссовок!</h2>
        <Link to="/singleproduct" onClick={() => window.scrollTo(0, 0)}>
        <div className="grid grid-cols-2 lg:gap-4 lg:gap-x-12 lg:gap-y-8 md:grid-cols-4 pb-4 md:gap-2 px-4 space-x-4 space-y-4 text-center hover:cursor-pointer">                
            {products.map((product) => (
            <div key={product.id} className="bg-gray-100 important:m-0 lg:m-0 md:p-10 rounded-2xl shadow-md hover:shadow-2xl hover:scale-500 object-cover transform transition duration-300 hover:scale-105">
                <div>
                  
                <button className="bg-gray-100 hover:bg-gray-200 hover:duration-300 text-gray-700 text-white px-4 py-4 rounded-full mx-4 h-auto absolute right-2 top-6 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="bg-gray-700"  class="bi bi-bag-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg>
                </button>
                
                <img src={image} alt="Banner-2" />
                </div>
                <h3 className="text-lg  mb-1">{product.name}</h3>
                
                <p className="text-gray-700 font-bold" placeholder='Цена'>TMT {product.price}</p>
                <Link to="/order" onClick={() => window.scrollTo(0, 0)}>
                <button
                type="button-card"
                class="mt-2 mb-6 lg:mb-2 inline-block rounded-full text-white bg-gray-700 hover:bg-gray-900 hover:text-white px-6 pb-2.5 pt-2.5 text-sm m-auto font-medium uppercase leading-normal
                text-gray-900 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-200 ease-in-out ">
                В корзину
                </button>
                </Link>
            </div>
            ))}
        </div>
        </Link>

    </div>
    
   
  );
};

export default ProductGird;