import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza 1.png";
import chicken from "../assets/chicken.png";
import french from "../assets/french-fries 1.png";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Include navigation styles

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaAviato } from "react-icons/fa";
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

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <div className="py-24">
      <div className="max-w-[1180px] space-y-12 mx-auto xl:px-0 px-4">
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
            className="mySwiper  h-[365px]"
          >
            <SwiperSlide className="h-[365px]">
              <div className=" flex h-full md:flex-row flex-col-reverse  items-center">
                <div className="md:w-5/12 flex flex-col justify-between p-8 h-full w-full bg-secondary ">
                  <p>
                    You can't go wrong with Chicken Mandi, I had it twice. The
                    chicken was cooked perfectly, juicy & soft (usually mandi
                    chicken is a bit dry). I would defiantly recommend it.
                  </p>
                  <div>
                    <div>
                      <p>Khalid Al Dawsry</p>
                      <p>Jeddah, Saudi</p>
                    </div>
                    <img src={<FaAviato />} alt="" />
                  </div>
                </div>
                <div className="md:w-7/12 h-full w-full">
                  <video src={video1}></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-[365px]">
              <div className="bg-white h-full flex md:flex-row flex-col-reverse  items-center">
                <div className="md:w-5/12 flex flex-col justify-between p-8 h-full w-full bg-secondary ">
                  <p>
                    You can't go wrong with Chicken Mandi, I had it twice. The
                    chicken was cooked perfectly, juicy & soft (usually mandi
                    chicken is a bit dry). I would defiantly recommend it.
                  </p>
                  <div>
                    <div>
                      <p>Khalid Al Dawsry</p>
                      <p>Jeddah, Saudi</p>
                    </div>
                    <img src={<FaAviato />} alt="" />
                  </div>
                </div>
                <div className="md:w-7/12 h-full w-full">
                  <video
                    loop={true}
                    width={"100%"}
                    height={"100%"}
                    src={video2}
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-[365px]">
              <div className="bg-white h-full flex md:flex-row flex-col-reverse  items-center">
                <div className="md:w-5/12 flex flex-col justify-between p-8 h-full w-full bg-secondary ">
                  <p>
                    You can't go wrong with Chicken Mandi, I had it twice. The
                    chicken was cooked perfectly, juicy & soft (usually mandi
                    chicken is a bit dry). I would defiantly recommend it.
                  </p>
                  <div>
                    <div>
                      <p>Khalid Al Dawsry</p>
                      <p>Jeddah, Saudi</p>
                    </div>
                    <img src={<FaAviato />} alt="" />
                  </div>
                </div>
                <div className="md:w-7/12 h-full w-full">
                  <video
                    loop={true}
                    // width={"100%"}
                    height={"800px"}
                    src={video3}
                    style={{
                      width: "100%" /* Adjust the width as needed */,
                      /* Set your desired height */
                    }}
                  ></video>
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
