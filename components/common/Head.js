import Image from "next/image";
import React from "react";

const Head = ({ title }) => {
  return (
    <div className="w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md">
      <Image priority={true} layout="fill" alt="headImage" src="/head.png" className="w-full h-full object-cover" />
      <div className="flex-colo w-full absolute lg:top-24 top-16">
        <h1 className="lg:text-5xl text-2xl font-bold text-main">{title && title}</h1>
      </div>
    </div>
  );
};

export default Head;
