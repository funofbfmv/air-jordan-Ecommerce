import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom"
import { ReactDOM } from "react";
import ProductGird from "../../components/ProductGird/ProductGird";
import ProductFilter from "../../components/ProductFilter/ProductFilter"
import Cards from "../../components/Cards/Cards";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Pagination } from "@mui/material";
import Select from "../../components/Selector/Selector"

function ProductPage() {
    return (

<>
<div className="lg:flex md:block ">
    <div className="block lg:w-1/5 md:w-full md:mt-2 mx-4"> 
    <Breadcrumb />
    <ProductFilter/>
    </div> <hr />
    <div className="flex lg:w-4/5 md:w-full mx-4 rounded-lg lg:mt-10">
        <div>
            <ProductGird />
            <Pagination count={5} variant="inlined" shape="rounded" className="flex mb-8 justify-center" />
        </div>
    </div>
</div>
</>

    )
}
export default ProductPage;