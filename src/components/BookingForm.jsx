import React from "react";
import form from "../assets/form.jpeg";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const BookingForm = () => {
  return (
    <div
      className=" py-24 bg-black/50"
      style={{
        backgroundImage: `url(${form})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1320px] flex lg:flex-row flex-col justify-between gap-8 mx-auto xl:px-0 px-4">
        <div className="lg:w-1/2 w-full space-y-6 text-white">
          <SectionTitle subTitle={"Book Now"} Title={"Book Your Table"} />
          <p className="font-roboto text-[16px]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <div className="">
            <form className="space-y-6 text-white" action="">
              <div className="flex lg:flex-row flex-col gap-3">
                <input
                  className="w-full px-2 py-2 bg-transparent focus-within:outline-none placeholder:text-[14px] placeholder:font-roboto border"
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                />
                <input
                  className="w-full px-2 py-2 bg-transparent focus-within:outline-none placeholder:text-[14px] placeholder:font-roboto border"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex lg:flex-row flex-col gap-3">
                <input
                  className="w-full px-2 py-2 bg-transparent focus-within:outline-none placeholder:text-[14px] placeholder:font-roboto border"
                  type="date"
                  name="date"
                  placeholder="Reservation Date"
                />
                <input
                  className="w-full px-2 py-2 bg-transparent focus-within:outline-none placeholder:text-[14px] placeholder:font-roboto border"
                  type="number"
                  name="people"
                  placeholder="Total People"
                />
              </div>
              <div className="flex lg:flex-row flex-col gap-3">
                <textarea
                  rows={8}
                  className="w-full p-2  bg-transparent focus-within:outline-none placeholder:text-[14px] placeholder:font-roboto border"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="text-black">
                <Button text={"Book Now"} />
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2 w-full"></div>
      </div>
    </div>
  );
};

export default BookingForm;
