import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../assets/ProductImages/nike-2.webp"
import image2 from "../../assets/ProductImages/nike-1.jpeg"


const OrderPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <body className='z-0'>
  <div class="lg:h-screen bg-gray-100 pt-20">
    <h1 class="mb-10 text-center text-2xl font-bold">Корзина</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div class="justify-between mb-6 rounded-2xl hover:shadow-2xl bg-white p-6 shadow-md sm:flex sm:justify-start transition duration-200 ease-in-out">
          <img src={image1} alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
              <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="3" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm font-bold">5000 TMT</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-between mb-6 rounded-2xl hover:shadow-2xl bg-white p-6 shadow-md sm:flex sm:justify-start transition duration-200 ease-in-out">
          <img src={image1} alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2022</h2>
              <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">7000 TMT</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Sub total --> */}
      <div class="mt-6 h-full rounded-2xl border bg-white p-6 shadow-md md:mt-0 md:w-1/3 mb-6">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Сумма</p>
          <p class="text-gray-700">29000 TMT</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Доставка</p>
          <p class="text-gray-700">Бесплатно!</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Итого</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">29000 TMT</p>
            <p class="text-sm text-gray-700">Включая доставку</p>
          </div>
        </div>
        <Link to="/orderconfirmed" onClick={() => window.scrollTo(0, 0)}>
          <button class="mt-6 w-full rounded-full bg-gray-500 py-1.5 font-medium text-blue-50 hover:bg-red-700 font-medium uppercase leading-normal
          text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-200 ease-in-out hover:bg-primary-600">Заказать
          </button>
          </Link>
      </div>
    </div>
  </div>
</body>
  );
};

export default OrderPage;
<footer />