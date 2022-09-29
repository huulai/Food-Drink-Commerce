import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import ProductModal from "./ProductModal";

const Product = ({ product, bg }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [productItem, setProductItem] = useState(null);

  useEffect(() => setProductItem(product), []);
  return (
    <>
      <ProductModal modalOpen={modalOpen} setModalOpen={setModalOpen} product={product} />
      <div
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className="cursor-pointer rounded border border-main p-4 bg-white hover:shadow-lg transitions"
      >
        {bg ? (
          <div className="bg-deepGray cursor-pointer rounded w-full h-52 p-10 relative">
            <img
              alt={productItem?.title}
              src={`${productItem?.image}`}
              className="w-full hover:scale-105 transitions h-full object-contain"
            />
            {productItem?.flashSale && (
              <div className="absolute z-10 top-3 text-xs py-1 px-3 font-bold left-3 bg-flash rounded-full text-white">
                {productItem?.discount}% OFF
              </div>
            )}
          </div>
        ) : (
          <img
            alt={productItem?.title}
            src={`${productItem?.image}`}
            className="w-full h-40 object-contain"
          />
        )}

        <h3 className="font-semibold my-2">{productItem?.title}</h3>
        <div className="flex justify-between items-center gap-2">
          {productItem?.flashSale ? (
            <h2 className="text-lg font-black">
              ${productItem.salePrice}{" "}
              <del className="text-text font-medium"> {productItem.price}</del>
            </h2>
          ) : (
            <h2 className="text-lg font-black">${productItem?.price}</h2>
          )}
          <button className="w-8 h-8 text-sm flex justify-center items-center transitions hover:bg-subMain rounded-md bg-main text-white">
            <FaShoppingBag />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
