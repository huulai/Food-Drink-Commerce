import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import ProductModal from "./ProductModal";
import { SidebarContext } from "../../context";

function OrderSummary({ order }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const { productsInCart, handDeleteProduct } = useContext(SidebarContext);
  useEffect(() => {
    let resultSubtotal = 0;
    let resultShipping = 0;
    productsInCart.forEach((el) => {
      resultSubtotal += el.price * el.quantity;
      resultShipping += 3 * el.quantity;
    });
    setSubtotal(resultSubtotal);
    setShipping(resultShipping);

    const resultTax = resultSubtotal * 0.05; // taxFee
    setTax(resultTax);

    setTotal(resultSubtotal + resultShipping + resultTax);
  }, [productsInCart]);

  return (
    <>
      <ProductModal modalOpen={modalOpen} setModalOpen={setModalOpen} product={product} />
      <h2 className="font-semibold text-lg">Order Summary</h2>
      <div className="overflow-y-scroll flex-grow scrollbar-hide w-full h-72">
        {productsInCart.map((p, i) => (
          <div key={i} className="grid grid-cols-8 gap-2 my-6 items-center">
            <div className="col-span-2 bg-deepGray rounded p-2 h-24">
              <img alt={p.title} src={`${p.image}`} className="w-full h-full object-contain" />
            </div>
            <div className="col-span-5 flex flex-col text-sm gap-2">
              <h3 className="font-medium truncate">{p.title}</h3>
              <h2 className=" font-bold">
                $ {p.price} x {p.quantity}
              </h2>
            </div>
            <div className="col-span-1 flex-colo ">
              {order ? (
                <button
                  onClick={() => {
                    setProduct(p);
                    setModalOpen(!modalOpen);
                  }}
                  className="flex-colo text-white p-2 text-lg bg-main rounded"
                >
                  <AiFillEye />
                </button>
              ) : (
                <button onClick={() => handDeleteProduct(p._id)} className="flex-colo p-2 text-lg bg-flash rounded text-white hover:bg-main hover:text-white">
                  <MdDelete />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {!order && (
        <div className="grid w-full gap-3 grid-cols-3 justify-between items-center">
          <input
            type="text"
            placeholder="Input your coupon code"
            className="col-span-2 py-4 px-3 text-main font-semibold text-sm rounded border border-main"
          />
          <button className="bg-main py-4 rounded text-white flex-colo">Apply</button>
        </div>
      )}
      <div className="flex items-center justify-between text-sm w-full font-semibold text-gray-500">
        Subtotal
        <span className=" text-gray-800 font-bold">${subtotal}</span>
      </div>
      <div className="flex items-center justify-between text-sm w-full font-semibold text-gray-500">
        Tax
        <span className=" text-gray-800 font-bold">${tax}</span>
      </div>
      <div className="flex items-center justify-between text-sm w-full font-semibold text-gray-500">
        Shipping
        <span className=" text-gray-800 font-bold">${shipping}</span>
      </div>
      <div className="flex items-center justify-between text-sm w-full font-semibold text-gray-500">
        Discount
        <span className=" text-gray-800 font-bold">$0</span>
      </div>
      <div className="p-1 pl-4 items-center bg-deepGray rounded w-full flex justify-between">
        <h2 className="font-semibold text-sm text-gray-500">Total</h2>
        <button
          type="button"
          className="px-8 border border-text py-4 font-bold flex-colo text-sm rounded bg-white"
        >
          ${total}
        </button>
      </div>
    </>
  );
}

export default OrderSummary;
