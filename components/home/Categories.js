import React from "react";
import { BsGridFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Title from "../common/Title";
import Link from "next/link";
import Image from "next/image";

const Categories = () => {
  const CategoriesHome = [
    {
      title: "Foods",
      images: [
        {
          img: "1.png",
          name: "Lunch",
        },
        {
          img: "2.png",
          name: "Salad",
        },
        {
          img: "3.png",
          name: "Breakfast",
        },
        {
          img: "4.png",
          name: "Dinner",
        },
      ],
    },
    {
      title: "Drinks",
      images: [
        {
          img: "5.png",
          name: "Juices",
        },
        {
          img: "6.png",
          name: "Soda",
        },
        {
          img: "7.png",
          name: "Cocktailes",
        },
        {
          img: "8.png",
          name: "Beers",
        },
      ],
    },
    {
      title: "Fruits",
      images: [
        {
          img: "9.png",
          name: "Apple",
        },
        {
          img: "10.png",
          name: "Pineapple",
        },
        {
          img: "11.png",
          name: "Watermelon",
        },
        {
          img: "12.png",
          name: "Strawberries",
        },
      ],
    },
  ];

  return (
    <div className="sm:my-12 my-8">
      <Title title="Categories" Icon={BsGridFill} />
      <div className="sm:mt-10 mt-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={4000}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
              autoplay: false,
            },
          }}
          modules={[Autoplay]}
        >
          {CategoriesHome.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="px-4 py-6 rounded border border-text">
                <h3 className="font-semibold mb-3">{s.title}</h3>
                <div className="grid w-full grid-cols-4 gap-2 2xl:gap-4">
                  {s.images.map((e, index) => (
                    <div
                      key={index}
                      className="bg-deepGray cate rounded relative overflow-hidden p-2 h-16 2xl:h-32 xl:h-28"
                    >
                      <Image
                        alt={e.name}
                        layout="fill"
                        src={`/categories/${e.img}`}
                        className="w-full h-full object-contain"
                      />
                      <Link
                        href={`/category/${e.name}`}
                      >
                        <button className="cateSub 2xl:p-0 p-2 flex-colo absolute left-0 right-0 w-full h-full bg-main">
                          <h3 className="font-bold truncate 2xl:text-sm text-xs text-white">
                            {e.name}
                          </h3>
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
