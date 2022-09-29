import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context";
import Cart from "../Drawer/Cart";
import { useRouter } from "next/router";

const Navbar = () => {
  const { toggleCartDrawer, cartDrawerOpen, productsInCart } = useContext(SidebarContext);
  const [searchKey, setSearchKey] = useState("");
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const totalProduct = 0;
    productsInCart.forEach((el) => (totalProduct += el.quantity));
    setTotal(totalProduct);
  }, [productsInCart]);

  const handleSearch = () => {
    router.push({
      pathname: "/shop",
      query: {
        search: searchKey,
      },
    });
  };

  const hover = "hover:text-main transitions";

  return (
    <>
      <Cart cartDrawerOpen={cartDrawerOpen} closeCartDrawer={toggleCartDrawer} />
      <div className="bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-4 px-2 gap-10 lg:grid grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:flex hidden justify-between items-center">
            <Link href="/">
              <span className="cursor-pointer">
                <Image
                  src="/logo.png"
                  width={150}
                  height={75}
                  alt="logo"
                  className="w-full object-contain"
                />
              </span>
            </Link>
          </div>
          <div className="col-span-3">
            <div className="w-full bg-dryGray rounded flex gap-4 justify-between">
              <button
                onClick={() => handleSearch()}
                type="button"
                className="w-12 transitions hover:bg-subMain flex justify-center items-center text-sm h-12 rounded bg-main text-white"
              >
                <FaSearch />
              </button>
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Search Your Product from here"
                className="font-semibold text-sm w-11/12 bg-transparent border-none px-2 text-black"
              />
            </div>
          </div>
          <div className="col-span-3 font-bold hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <Link className={hover} href="/shop">
              Shop
            </Link>
            <Link href="/about-us" className={hover}>
              About Us
            </Link>
            <Link href="/contact-us" className={hover}>
              Contact Us
            </Link>
            <button onClick={toggleCartDrawer} className={`${hover} relative`}>
              <FiShoppingBag className="w-6 h-6" />
              <div className="px-2 py-1 rounded-full text-xs bg-flash text-white absolute -top-4 -right-2">
                {total}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
