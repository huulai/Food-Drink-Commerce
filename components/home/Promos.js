import Link from "next/link";
import React from "react";

function Promos() {
  const Prom = [
    {
      bg: "bg-blue-400",
      title: "Express Delivery",
      img: "promo1.png",
      text: "text-blue-400",
    },
    {
      bg: "bg-main",
      title: "Cash On Deliver",
      img: "promo2.png",
      text: "text-main",
    },
    {
      bg: "bg-purple-600",
      title: "Ocean Of Gifts",
      img: "promo3.png",
      text: "text-purple-600",
    },
  ];
  return (
    <div className="xl:grid hidden grid-cols-3 gap-10 my-20">
      {Prom.map((p, i) => (
        <div
          key={i + 1}
          className={`${p.bg} hover:-translate-y-4 transitions rounded-xl grid grid-cols-2 gap-2`}
        >
          <div className="text-white py-10 pl-10 pr-2">
            <h2 className="2xl:text-xl text-lg font-bold">{p.title}</h2>
            <p className="mt-3 mb-5">With selected Items</p>
            <Link href="/shop">
              <span
                className={`flex-colo py-3 font-bold text-sm px-4 rounded-full bg-white ${p.text}`}
              >
                SAVE NOW
              </span>
            </Link>
          </div>
          <div className="w-full h-48">
            <img alt={p.title} src={`${p.img}`} className="w-full h-full object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Promos;
