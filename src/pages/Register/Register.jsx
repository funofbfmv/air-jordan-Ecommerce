import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail,] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Ваша логика для регистрации нового аккаунта
    console.log('Регистрация нового аккаунта...', email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-3xl text-center font-bold mb-4">Регистрация аккаунта</h2>
        <form className="bg-white shadow-md rounded-2xl hover:shadow-2xl hover:transition-shadow duration-500 px-8 pt-6 pb-8 mb-4">
                                            {/* Имя */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Имя
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="Введите ваше имя"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
                                            {/* Фамилия */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
              Фамилия
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="surname"
              type="surname"
              placeholder="Введите вашу фамилию"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
                                            {/* Phone */}
                                            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Номер телефона
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="phone"
              placeholder="+993"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

                                            {/* EMAIL */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Введите ваш Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
                                            {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Пароль
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            
            <button
              className="bg-zink-500 hover:bg-gray-800 text-gray-800 hover:text-white duration-300 shadow-md border-current font-bold py-3 px-8 mt-8 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleRegister}
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;