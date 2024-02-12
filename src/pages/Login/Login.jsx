import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [phone, setphone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Ваша логика для проверки учетных данных и выполнения входа
    console.log('Выполняется вход...', phone, password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Ваша логика для регистрации нового аккаунта
    console.log('Регистрация нового аккаунта...', phone, password);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Ваша логика для восстановления пароля
    console.log('Забыли пароль?');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-2xl text-center font-bold mb-4">Аккаунт</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 shadow-lg rounded-lg hover:transition-shadow duration-500 hover:shadow-2xl">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Номер телефона
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="phone"
              placeholder="+993"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Пароль
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Введите ваш Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-sm mt-2">
              <a
                href="#"
                className="text-blue-500 hover:underline"
                onClick={handleForgotPassword}
              >
                Забыли пароль?
              </a>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-zink-500 hover:bg-gray-800 text-gray-800 hover:text-white duration-300 shadow-2xl font-bold py-2 px-8 rounded-full shadow-md focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleLogin}
            >
              Войти
            </button>
            <Link to="/register">
            <button
              className="bg-zink-500 hover:bg-gray-800 text-gray-800 hover:text-white duration-300 shadow-2xl font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={handleRegister}
            >
              Регистрация
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;