import React from "react";
import hero from "../assets/Rectangle 4.png";
import Button from "./Button";
import banner from "../assets/image 1.png";
import vector from "../assets/Vector.png";
import offer from "../assets/Offer.png";
import Header from "./Header";
const Hero = () => {
  return (
    <div
      className="min-h-screen bg-primary"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header></Header>
      <div className={` flex items-center  `}>
        <div className="lg:pt-32 pt-20 pb-12 xl:max-w-[1180px] mx-auto xl:px-0 px-4 flex lg:flex-row flex-col">
          <div className=" space-y-4 py-8 lg:relative w-full flex flex-col justify-center">
            <h1 className=" lg:absolute lg:top-14 font-bebas lg:text-[120px] text-[42px] lg:leading-[130px] leading-none lg:w-[845px] w-full text-white z-10 lg:bg-gradient-to-r from-primary/0 to-primary/100 bg-transparent bg-clip">
              Taste the authentic Saudi cuisine
            </h1>
            <p className="font-roboto lg:text-2xl text-xl font-normal xl:pt-52 lg:pt-[280px]  text-white">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.{" "}
            </p>
            <Button text={"Explore Menu"} />
          </div>
          <div className="relative w-full">
            <img
              className="absolute xl:-right-8 right-2 -top-8 z-10"
              src={vector}
              alt=""
            />
            <img className="w-full z-50" src={banner} alt="" />
            <div
              className="absolute flex items-center justify-center font-bebas font-bold lg:bottom-0 xl:-right-8 bottom-1 right-3 h-[120px] w-[120px]  rounded-full bg-secondary z-50"
              src={offer}
              alt=""
            >
              <h1 className="text-black text-3xl flex justify-center items-center text-center border-dashed border border-primary rounded-full h-[100px] w-[100px]">
                Today offer
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
