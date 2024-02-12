import React from 'react';
import { Link } from 'react-router-dom';

const Component404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Упссс...</h1>
      <p className="text-lg text-gray-600 mb-8">
        Кажется вы пытаетесь перейти на не существующую страничку.
      </p>
      <Link to="/">
            <button
              className="bg-zink-500 hover:bg-gray-800 text-gray-800 hover:text-white duration-300 shadow-2xl font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={handleRegister}
            >
              Перейти на Главную
            </button>
            </Link>
    </div>
  );
};

export default Component404;