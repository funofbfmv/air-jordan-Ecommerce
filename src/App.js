import React from "react";
import ReactDOM from "react-dom";
import {Routes, Route, Link, Router, Await} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

//Components

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BannerCarousel from './components/Body/BannerCarousel/BannerCarousel';
import ProductGird from "./components/ProductGird/ProductGird";
import Breadcrumb from "./components/Breadcrumbs/Breadcrumbs";
import Slider from "./components/Slider/Slider";
import NewsCard from "./components/NewsCard/Newscard";
import Pagination from "./components/Pagination/Pagination";
import Selector from "./components/Selector/Selector";
import ProgressBar from "./components/ProgressBar/Progressbar";
import NavigateFooter from "./components/NavigateFooter/Navigatefooter";
import ScrollToTopButton from "./components/ScroolToTopButton/ScroolToTopButton";
import SingleProdComponent from "./components/SingleProdComponent/SingleProdComponent"
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import Cards from "./components/Cards/Cards";
import FooterData from "./components/FooterData/FooterData";
import SearchBar from "./components/SearchBar/SearchBar";
import BannerCarousel2 from "./components/BannerCarousel2/BannerCarousel2";
import OrderConfirmed from "./components/OrderConfirmed/OrderConfirmed";
import Component404 from "./components/Component404/Component404"
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import Loader from "./components/Loader/Loader";


//Pages

import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OrderPage from "./pages/OrderPage/OrderPage";
import NotFound from "./pages/NotFound/NotFound";
import Categories from "./pages/Categories/Categories";



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (

<BrowserRouter>
  <Navbar />
  <ScrollToTopButton/>
  <Routes>
    
        <Route index path="/" element={<HomePage/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="productpage" element={<ProductPage/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="singleproduct" element={<SingleProduct/>}/>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
        <Route path="order" element={<OrderPage />}/>
        <Route path="orderconfirmed" element={<OrderConfirmed />}/>
        <Route path="categories" element={<Categories/>}/>
        <Route path="*" element={<NotFound />}/>
       </Routes>
       
    {/* <NavigateFooter/> */}
  <Footer />
</BrowserRouter> 
      )}
    </>
  
  )
};

export default App;
