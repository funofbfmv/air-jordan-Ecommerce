



import DropdownMenu from '../DropdownMenu/DropdownMenu';
import LoginPage from '../LoginPage/LoginPage';
import Logo from "../../assets/Logo/nike.png";
import { Link } from 'react-router-dom';
import AboutUs from '../../pages/AboutUs/AboutUs';
import React, { useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import HomePage from '../../pages/HomePage/HomePage';
import imglogo from "../../assets/Logo/logo.png";
import { Search } from '@mui/icons-material';
import SearchBar from '../SearchBar/SearchBar';



export default function Navbar() {
  const [navbar, setNavbar] = useState(false);


  return (

    <nav className="w-full h-20">
      <div className="justify-between bg-white shadow-lg z-10 opacity-95 rounded-lg fixed w-full px-4 mx-auto  md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-4 md:py-5 md:block">
            <Link className='flex center' to="/">
              <img className='h-12 w-12 lg:mx-2'  src={imglogo} alt="" />
              <h2 className="text-2xl"></h2>
            </Link>
            <div className="md:hidden ">
              <button
                className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-sans font-bold text-sm">
              <li>
                <Link to="/"onClick={() => window.scrollTo(0, 0)||setNavbar(!navbar)} className="hover:text-gray-600 uppercase font-bold text-sm hover:underline">Главная</Link>
              </li>

              <li>
                <Link to="/categories" onClick={() => window.scrollTo(0, 0)||setNavbar(!navbar)} className="hover:text-gray-600 uppercase font-bold text-sm hover:underline">Категории</Link>
              </li>
              <li>
                <Link to="/productpage" onClick={() => window.scrollTo(0, 0)||setNavbar(!navbar)} className="hover:text-gray-600 uppercase font-bold text-sm hover:underline">Магазин</Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)||setNavbar(!navbar)} className="hover:text-gray-600 uppercase font-bold text-sm hover:underline">О нас</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)||setNavbar(!navbar)} className="hover:text-gray-600 uppercase font-bold text-sm hover:underline">Контакты</Link>
              </li>

              {/* <LanguageSwitcher /> */}
              <div className='lg:flex md:block'> 
              <SearchBar/>
              <Link to="/login" onClick={() => window.scrollTo(0, 0) ||setNavbar(!navbar)}>
              <button
                type="button"
                class="flex inline-block rounded-full bg-white hover:bg-gray-900 hover:text-white px-6 mx-2 py-2 my-2 text-sm  font-medium  leading-normal
                      text-gray-900 shadow-md transition duration-150 ease-in-out  ">
                        <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        </svg>
                 Аккаунт
              </button>
              </Link>
          
              
              <Link to="/order" onClick={() => window.scrollTo(0, 0) ||setNavbar(!navbar)}>
              <button className="flex items-center justify-center px-4 py-2 my-2 mx-2 text-black bg-white shadow-md rounded-full hover:bg-gray-900 hover:text-white hover:duration-300">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M15.414 4H4.586L3.293 2.707A1 1 0 002.586 2H1a1 1 0 000 2h1v12a2 2 0 002 2h10a2 2 0 002-2V4h1a1 1 0 000-2h-1.586a1 1 0 00-.707.293L15.414 4zM6 4h8v1a1 1 0 01-2 0V4H6v1a1 1 0 11-2 0V4a1 1 0 011-1zm9 10H5a1 1 0 000 2h10a1 1 0 000-2zm0-4H5a1 1 0 000 2h10a1 1 0 000-2zm-2-4V6H7v1h6z"
                    clipRule="evenodd"
                  />
                </svg>
                Корзина
              </button>
              </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}









// function Navbar () {

//  return (

//   <header className="bg-white text-gray-900 p-4 shadow-lg rounded-sm w-full fixed z-10 opacity-95">
//     <div className="container mx-auto flex justify-between items-right  bg-cover bg-center rounded-md backdrop-filter backdrop-blur-lg opacity-80 transition duration-300 ease-in-out">
//       <h1 className="text-2xl flex">
//       <img src={Logo} alt="Logo" className="h-12 mr-4" />
//       Air Jordan Turkmenistan
//         </h1>

//       <nav>
//         <ul className="flex space-x-6 py-2">
//           <li>
//             <Link to="/" className="hover:text-gray-400 uppercase font-bold text-sm">Главная</Link>
//           </li>
//           <li>
//             <a className="hover:text-gray-400 uppercase font-bold text-sm" href="/">Кроссовки</a>
//           </li>
//           <li>
//             <a className="hover:text-gray-400 uppercase font-bold text-sm" href="/">Одежда</a>
//           </li>
//           <li>
//             <a className="hover:text-gray-400 uppercase font-bold text-sm" href="/">Джинсы</a>
//           </li>
//           <li>
//             <a className="hover:text-gray-400 uppercase font-bold text-sm" href="/">Детям</a>
//           </li>
//           <li>
//             <Link to="/aboutus" className="hover:text-gray-400 uppercase font-bold text-sm" >О нас</Link>
//           </li>
//           <li>
//             <a className="hover:text-gray-400 uppercase font-bold text-sm" href="/">Контакты</a>
//           </li>

//           {/* <DropdownMenu name={"Кроссовки"}>
//               <a className="block hover:text-gray-300" href="/">Пункт меню 1</a>
//               <a className="block hover:text-gray-300" href="/">Пункт меню 2</a>
//               <a className="block hover:text-gray-300" href="/">Пункт меню 3</a>
//           </DropdownMenu> */}

//           {/* <DropdownMenu name={"Пример"}>
//           <a className="block hover:text-gray-300" href="/">Пункт меню 1</a>
//               <a className="block hover:text-gray-300" href="/">Пункт xdvxdv 2</a>
//               <a className="block hover:text-gray-300" href="/">Пункт xdvxdv 3</a>
//           </DropdownMenu> */}

//         {/* <button
//             type="button"
//             class="inline-block rounded-full hover:bg-gray-900 hover:text-white bg-primary px-6 pb-2 pt-2.5 text-sm m-auto font-medium uppercase leading-normal
//             text-gray-900 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ">
//             Войти
//         </button> */}

{/* <button
  type="button"
  class="inline-block rounded-full bg-primary hover:bg-gray-900 hover:text-white px-6  py-2 text-sm m-auto font-medium uppercase leading-normal
            text-gray-900 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 ">
  Аккаунт
</button> */}

//         </ul>
//       </nav>
//     </div>
// </header>

//    )
// }
// export default Navbar;