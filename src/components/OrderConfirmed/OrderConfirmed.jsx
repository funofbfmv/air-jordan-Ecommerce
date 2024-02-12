import React from 'react';
import { Link } from 'react-router-dom';
import imagelogo from "../../assets/Logo/Jumpman_logo.svg.png"

const OrderConfirmed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Спасибо за ваш заказ!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Спасибо за ваш заказ. Мы получили ваш платеж и обработаем
        Ваш заказ, Вам доставят его ближайшее время.
      </p>
      <img
        src={imagelogo}
        alt="Order Confirmed"
        className="w-64 mb-8"
      />
      <Link to="/productpage" onClick={() => window.scrollTo(0, 0)}><button
          className="bg-zink-500 hover:bg-gray-800 text-gray-800 hover:text-white duration-300 shadow-2xl font-bold py-2 px-6 rounded-full shadow-md focus:outline-none focus:shadow-outline"
          type="submit">
          Продолжить покупки
        </button>
      </Link>
    </div>
  );
};

export default OrderConfirmed;