import React, { useContext, useEffect, useState } from "react";
import { FiShoppingBag, FiHome } from "react-icons/fi";
import { CgMenuBoxed } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import MobileDrawer from "../Drawer/MobileDrawer";
import Cart from "../Drawer/Cart";
import Link from "next/link";
import { SidebarContext } from "../../../context";

const MobileFooter = () => {
  const { toggleMobileDrawer, mobileDrawerOpen, toggleCartDrawer, cartDrawerOpen, productsInCart } =
    useContext(SidebarContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalProduct = 0;
    productsInCart.forEach((el) => (totalProduct += el.quantity));
    setTotal(totalProduct);
  }, [productsInCart]);

  return (
    <>
      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full">
        <MobileDrawer mobileDrawerOpen={mobileDrawerOpen} toggleMobileDrawer={toggleMobileDrawer} />
        <Cart cartDrawerOpen={cartDrawerOpen} closeCartDrawer={toggleCartDrawer} />
      </div>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-main rounded-md flex items-center justify-between w-full p-2">
          <Link href="/">
            <span className="text-white text-2xl">
              <FiHome />
            </span>
          </Link>
          <Link href="/shop">
            <span className="text-white text-2xl">
              <FiShoppingBag />
            </span>
          </Link>
          <button onClick={toggleCartDrawer} className="text-white text-2xl relative py-3 px-4">
            <div className="px-2 py-1 rounded-full text-xs bg-flash text-white  absolute -top-1 right-0">
              {total}
            </div>
            <BsCart4 />
          </button>
          <button onClick={toggleMobileDrawer} className="text-white text-2xl">
            <CgMenuBoxed />
          </button>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
