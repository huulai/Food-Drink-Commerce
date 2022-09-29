import React from "react";
import { BsCollectionFill } from "react-icons/bs";
import { ProductsData } from "../../data/ProductsData";
import Product from "../common/Product";
import Title from "../common/Title";

const PopularProducts = () => {
  
  const products = ProductsData.sort(() => Math.random() - Math.random()).slice(0, 8);
  return (
    <div className="sm:my-20 my-8  bg-deepest xl:py-16 py-10 sm:px-10 px-6">
      <Title title="Popular Products" Icon={BsCollectionFill} />
      <div
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="1000"
        className="grid sm:mt-10 mt-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
      >
        {products.map((p) => (
          p ? <Product bg={false} key={p._id} product={p} /> : null
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
