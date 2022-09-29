import React, { useContext, useState } from "react";
import MainModal from "./MainModal";
import { FiPlus, FiMinus } from "react-icons/fi";
import { SidebarContext } from "../../context";


const ProductModal = ({ modalOpen, setModalOpen, product }) => {
  const { handleAddToCart } = useContext(SidebarContext);

  const [item, setItem] = useState(1);

  // const handleAddToCart = () => {
  //   const products = JSON.parse(localStorage.getItem("productsInCart")) || [];
  //   const idx = products.findIndex((el) => el._id === product._id);
  //   idx > -1 ? (products[idx].quantity += 1) : products.push({ ...product, quantity: 1 });
  //   localStorage.setItem("productsInCart", JSON.stringify(products));
  // };

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block lg:py-0 py-24 md:w-3/4 w-full overflow-y-auto h-full align-middle transition-all transform ">
        <div className="grid bg-white lg:grid-cols-2 gap-2 overflow-hidden shadow-xl rounded-2xl">
          <div className="p-4 md:h-96 h-72">
            <img
              src={`${product?.image}`}
              className="w-full h-full object-contain"
              alt={product?.title}
            />
          </div>
          <div className="w-full flex gap-4 flex-col p-5 md:p-8 text-left">
            <div className="block">
              <h1 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold">
                {product?.title}
              </h1>
            </div>
            <p className="text-sm leading-6 text-gray-500 md:leading-6">{product?.description}</p>
            <div className="flex items-center">
              {product?.flashSale ? (
                <h2 className="text-xl font-bold">
                  $ {product?.salePrice}
                  <del className="text-text ml-3 text-sm font-medium">{product?.price}.00</del>
                </h2>
              ) : (
                <h2 className="text-xl font-bold">$ {product?.price}</h2>
              )}
            </div>
            <div className="grid sm:grid-cols-5 gap-3 items-center">
              <div className="grid sm:col-span-2 col-span-5 grid-cols-3 gap-1 border border-text rounded-md">
                <button
                  onClick={() => setItem(item - 1)}
                  disabled={item === 1}
                  className="flex-colo py-4 border-none"
                >
                  <FiMinus />
                </button>
                <p className="flex-colo py-4">{item}</p>
                <button
                  onClick={() => setItem(item + 1)}
                  disabled={product?.quantity < item || product?.quantity === item}
                  className="flex-colo py-4 border-none"
                >
                  <FiPlus />
                </button>
              </div>
              <button
                disabled={product?.quantity < 1}
                onClick={() => handleAddToCart(product)}
                className="sm:col-span-3 col-span-5 transitions hover:bg-subMain bg-main py-4 px-2 rounded-md flex-colo font-semibold text-white"
              >
                Add To Cart
              </button>
            </div>
            <div className="flex  text-sm">
              Category:
              <span className="text-main font-bold ml-3">{product?.type}</span>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              {product?.tag?.map((t, i) => (
                <div key={i} className="py-1 px-3 bg-deepest text-main rounded-full text-xs">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default React.memo(ProductModal);
