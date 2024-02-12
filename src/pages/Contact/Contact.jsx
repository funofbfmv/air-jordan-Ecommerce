import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';


const Contact = () => {

  return (

    <div className='lg:flex md:block justify-center '>
          <Breadcrumbs />
      <div className='lg:py-36 lg:px-4 h-full lg:mx-24 lg:w-1/4 md:w-full'>
        <div className='contacts  py-4 lg:px-20 md:px-20 mx-0 max-w-3xl bg-gray-50 shadow-xl rounded-full p-8 md:w-full'>
          <h1 className='font-bold'>Адрес магазина</h1>
          <p className='font-mono'>ТЦ Ашхабад мол 1 этаж<br /> Магазин №146</p>
          </div>

          <div className='contacts  mt-12 py-4 lg:px-20 mx-4 max-w-3xl  bg-gray-50 shadow-xl rounded-full p-8 '>
          <h1 className='font-bold'>Контакты </h1>
          <p className='font-mono'>+99361999999</p>
          </div>

          <div className='contacts  mt-12 py-4 lg:px-20 mx-4 max-w-3xl  bg-gray-50 shadow-xl rounded-full p-8 '>
          <h1 className='font-bold'>Instagram</h1>
          <p className='font-mono'>@airjordan</p>
          </div>
          
      </div>
      
      

      <div className="bg-white min-h-screen">
        <div className="container py-12 lg:px-4 lg:mx-24 md:w-full md:m-24">
          <div className="max-w-3xl mx-auto bg-gray-50 shadow-xl rounded-2xl p-8 ">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 font-thin font-bold">Свяжитесь с нами</h1>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-300"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                  Номер телефона
                </label>
                <input
                  type="phone"
                  id="phone"
                  className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-300"
                  placeholder="+993"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Введите ваш email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                  rows="5"
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>
              <button
                className="bg-zink-500 hover:bg-gray-800 text-gray-800 hover:text-white duration-300 shadow-2xl font-bold py-2 px-8 rounded-full shadow-md focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;