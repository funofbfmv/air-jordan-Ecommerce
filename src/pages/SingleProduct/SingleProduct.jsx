import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import  ReactDOM  from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import SingleProdComponent from "../../components/SingleProdComponent/SingleProdComponent"
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";




function SingleProduct() {
    return (
        <>
        <div className="flex w-3/5 h-full center mx-auto h-120 shadow-lg hover:shadow-2xl duration-500 object-top rounded-3xl m-4 z-2">
        <SingleProdComponent/>
        </div>
        
        <div className="w-3/5 md:block h-full center  mx-auto h-120  duration-500 object-top rounded-3xl m-4 z-2 flex-wrap">
        <RelatedProducts/>
        </div>
        
        </>
    )
}
export default SingleProduct;