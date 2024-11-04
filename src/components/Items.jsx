import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza 1.png";
import chicken from "../assets/chicken.png";
import french from "../assets/french-fries 1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Include navigation styles

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

// Custom navigation buttons
const CustomPrevButton = ({ onClick }) => (
  <button
    className="prev absolute z-10 md:right-20 md:-top-20 right-52  top-96 bg-white text-black hover:text-primary rounded-full p-2 shadow-even"
    onClick={onClick}
  >
    <GrFormPrevious className="text-xl  " />
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button
    className="next absolute z-10 md:right-2 md:-top-20 right-36  top-96 bg-white text-black hover:text-primary rounded-full p-2 shadow-even"
    onClick={onClick}
  >
    <GrFormNext className="text-xl " />
  </button>
);

const Items = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-[#FBF7F2]">
      <div className="py-24 max-w-[1180px] mx-auto xl:px-0 px-4">
        <SectionTitle
          subTitle={"Crispy, Every Bite Taste"}
          Title={"POPULAR FOOD ITEMS"}
        />

        <div className="relative py-12">
          {/* Custom Navigation Buttons */}
          <CustomPrevButton onClick={() => swiperRef.current?.slidePrev()} />
          <CustomNextButton onClick={() => swiperRef.current?.slideNext()} />

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={4}
            autoplay={true}
            loop={true}
            spaceBetween={30}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <div className="bg-white space-y-2 flex flex-col h-72 py-12 items-center">
                <img src={burger} alt="Burger" />
                <hr className="border-2 border-primary w-3/12 mx-auto" />
                <h2 className="font-bebas text-2xl font-bold">
                  Vegetables Burger
                </h2>
                <p className="font-inter text-[16px]">
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="bg-white space-y-2 flex flex-col h-72 py-12 items-center">
                <img src={pizza} alt="Pizza" />
                <hr className="border-2 border-primary w-3/12 mx-auto" />
                <h2 className="font-bebas text-2xl font-bold">
                  Vegetables Burger
                </h2>
                <p className="font-inter text-[16px]">
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="bg-white space-y-2 flex flex-col h-72 py-12 items-center">
                <img src={chicken} alt="Chicken" />
                <hr className="border-2 border-primary w-3/12 mx-auto" />
                <h2 className="font-bebas text-2xl font-bold">
                  Vegetables Burger
                </h2>
                <p className="font-inter text-[16px]">
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="bg-white space-y-2 flex flex-col h-72 py-12 items-center">
                <img src={french} alt="French Fries" />
                <hr className="border-2 border-primary w-3/12 mx-auto" />
                <h2 className="font-bebas text-2xl font-bold">
                  Vegetables Burger
                </h2>
                <p className="font-inter text-[16px]">
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="bg-white space-y-2 flex flex-col h-72 py-12 items-center">
                <img src={chicken} alt="Chicken" />
                <hr className="border-2 border-primary w-3/12 mx-auto" />
                <h2 className="font-bebas text-2xl font-bold">
                  Vegetables Burger
                </h2>
                <p className="font-inter text-[16px]">
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Items;
