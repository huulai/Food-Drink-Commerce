import React from "react";
import { IoClose } from "react-icons/io5";
import MainDrawer from "./MainDrawer";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import Link from "next/link";
import { CategoriesData } from "../../../data/CategoriesData";
import Image from "next/image";

function MobileDrawer({ mobileDrawerOpen, toggleMobileDrawer }) {
  const active = " bg-deepGray";
  const inActive =
    "flex sm:gap-8 gap-4 hover:bg-deepGray items-center py-4 rounded sm:px-8 px-4 text-sm";
  const Hover = ({ isActive }) => (isActive ? `${active} ${inActive}` : inActive);
  const Links = [
    {
      link: "/about-us",
      name: "About Us",
      icon: HiOutlineUserGroup,
    },
    {
      link: "/contact-us",
      name: "Contact Us",
      icon: BiPhoneCall,
    },
  ];
  return (
    <MainDrawer DrawerOpen={mobileDrawerOpen} closeDrawer={toggleMobileDrawer}>
      <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer">
        <div className="w-full flex justify-between items-center h-16 px-6 py-4 bg-main text-white border-b border-gray-100">
          <div></div>
          <button
            onClick={toggleMobileDrawer}
            className="flex text-xl items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-red-500 p-2 focus:outline-none transition-opacity hover:text-red-600"
            aria-label="close"
          >
            <IoClose />
          </button>
        </div>

        {/* cart items */}
        <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2">
              {CategoriesData.map((c) => (
                <Link href={`/category/${c.title}`} key={c._id}>
                  <div className="w-full flex p-5">
                    <div className="shadow rounded-full p-1 w-6 h-6 mx-2">
                      <Image
                        width={50}
                        height={50}
                        src={`${c.icon}`}
                        className="w-full h-full object-contain"
                        alt={c.title}
                      />
                    </div>
                    <h2 className="font-semibold">{c.title}</h2>
                  </div>
                </Link>
              ))}
            </div>
            <hr />
            <div className="pb-12">
              {Links.map((l, i) => (
                <span key={i} className={Hover} onClick={toggleMobileDrawer}>
                  <Link href={l.link}>
                    <div className="flex items-center">
                      <l.icon className="text-lg mx-4" /> {l.name}
                    </div>
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainDrawer>
  );
}

export default MobileDrawer;
