import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza 1.png";
import chicken from "../assets/chicken.png";
import french from "../assets/french-fries 1.png";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import img from "../assets/img.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Include navigation styles

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  FaArrowLeft,
  FaArrowRight,
  FaAviato,
  FaQuoteLeft,
} from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

// Custom navigation buttons
const CustomPrevButton = ({ onClick }) => (
  <button
    className="prev absolute z-10 right-20 -top-12  bg-white text-black hover:text-primary rounded-full p-2 shadow-even"
    onClick={onClick}
  >
    <GrFormPrevious className="text-xl  " />
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button
    className="next absolute z-10 right-2 -top-12 bg-white text-black hover:text-primary rounded-full p-2 shadow-even"
    onClick={onClick}
  >
    <GrFormNext className="text-xl " />
  </button>
);

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <div className="py-24">
      <div className="max-w-[1320px] space-y-12 mx-auto xl:px-0 px-4">
        <SectionTitle
          subTitle={"Crispy, Every Bite Taste"}
          Title={"What Some of my Customers Say"}
        />

        <div className="relative">
          {/* Custom Navigation Buttons */}
          <CustomPrevButton onClick={() => swiperRef.current?.slidePrev()} />
          <CustomNextButton onClick={() => swiperRef.current?.slideNext()} />

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={4}
            // autoplay={true}
            loop={true}
            spaceBetween={30}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
            className="mySwiper  md:h-[450px] h-[700px]"
          >
            <SwiperSlide className=" h-full">
              <div className=" flex h-full md:flex-row flex-col-reverse  items-center">
                <div className="md:w-5/12 flex flex-col justify-between px-8 lg:py-12 py-6 h-full w-full bg-secondary ">
                  <p className="relative font-roboto lg:text-xl text-lg">
                    You can't go wrong with Chicken Mandi, I had it twice. The
                    chicken was cooked perfectly, juicy & soft (usually mandi
                    chicken is a bit dry). I would defiantly recommend it.
                    <FaQuoteLeft className="absolute top-0 -left-4 text-sm" />
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bebas text-lg font-medium">
                          Khalid Al Dawsry
                        </p>
                        <p className="font-roboto text-sm">Jeddah, Saudi</p>
                      </div>
                      <img src={img} alt="" />
                    </div>
                    <div className="relative">
                      <hr className="border border-gray-700 " />

                      <hr className="absolute right-0 -top-1 border-4 border-primary w-[100px]" />
                    </div>
                  </div>
                </div>
                <div className="md:w-7/12 h-full w-full">
                  <div
                    className="video-container"
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/_dui6BUmMBg?loop=1&playlist=_dui6BUmMBg&autoplay=1&controls=0&mute=1&modestbranding=1&rel=0"
                      title="YouTube video player"
                      style={{ objectFit: "cover" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <div className="bg-white h-full flex md:flex-row flex-col-reverse  items-center">
                <div className="md:w-5/12 flex flex-col justify-between px-8 lg:py-12 py-6 h-full w-full bg-secondary ">
                  <p className="relative font-roboto lg:text-xl text-lg">
                    You can't go wrong with Chicken Mandi, I had it twice. The
                    chicken was cooked perfectly, juicy & soft (usually mandi
                    chicken is a bit dry). I would defiantly recommend it.
                    <FaQuoteLeft className="absolute top-0 -left-4 text-sm" />
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bebas text-lg font-medium">
                          Khalid Al Dawsry
                        </p>
                        <p className="font-roboto text-sm">Jeddah, Saudi</p>
                      </div>
                      <img src={img} alt="" />
                    </div>
                    <div className="relative">
                      <hr className="border border-gray-700 " />

                      <hr className="absolute right-0 -top-1 border-4 border-primary w-[100px]" />
                    </div>
                  </div>
                </div>
                <div className="md:w-7/12 h-full w-full">
                  <div
                    className="video-container"
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/_dui6BUmMBg?loop=1&playlist=_dui6BUmMBg&autoplay=1&controls=0&mute=1&modestbranding=1&rel=0"
                      title="YouTube video player"
                      style={{ objectFit: "cover" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
