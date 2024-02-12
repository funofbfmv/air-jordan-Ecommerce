import React from "react";
import {Link} from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar";
import  ReactDOM  from "react";
import ProductGird from "../../components/ProductGird/ProductGird";
import BannerCarousel from "../../components/Body/BannerCarousel/BannerCarousel";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import NewsCard from "../../components/NewsCard/Newscard";
import NavigateFooter from "../../components/NavigateFooter/Navigatefooter";
import Cards from "../../components/Cards/Cards";
import FooterData from "../../components/FooterData/FooterData";
import BannerCarousel2 from "../../components/BannerCarousel2/BannerCarousel2";



function HomePage() {
    return (
        <>
        <div className="flex w-5/6 center  mx-auto lg:mt-6 h-full shadow-lg hover:shadow-2xl duration-500 object-top lg:rounded-3xl  overflow-hidden">
        <BannerCarousel/>
        {/* <BannerCarousel2/> */}
        </div>

        
        <ProductGird/>
        <Cards/>
        {/* <FooterData/> */}
        {/* <NavigateFooter/> */}
        </>
    )
}
export default HomePage;