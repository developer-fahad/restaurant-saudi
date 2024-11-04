import React from "react";
import footer from "../assets/footer.jpeg";
import clock from '../assets/clock.png'
import call from '../assets/call-alt.png'
import email from '../assets/mail.png'
import map from '../assets/map-pin.png'

const Footer = () => {
  return (
    <div
      className="py-24 relative"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>
      {/* Content */}
      <div className="relative xl:max-w-[1180px] mx-auto xl:px-0 px-4 space-y-3 text-white z-10">
        <div>
          <h1 className="font-bebas font-bold text-[56px] uppercase text-center text-white">
            We are ready to provide you with the best dining experiences
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-8 ">
          <div className="flex flex-col items-center space-y-3">
            <img src={clock} alt="" />
            <h2 className="font-bebas font-semiboldbold text-2xl uppercase">
              Opening hours
            </h2>
            <div className="flex flex-col items-center">
              <p className="font-roboto text-[16px]">Monday - Sunday</p>
              <p className="font-roboto text-[16px]">9:00 AM to 11:30 PM</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <img src={call} alt="" />
            <h2 className="font-bebas font-semiboldbold text-2xl uppercase">
              LET'S TALK
            </h2>
            <div className="flex flex-col items-center">
              <p className="font-roboto text-[16px]">Phone: 1-800-222-4545</p>
              <p className="font-roboto text-[16px]">Fax: 1-800-222-4545</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <img src={email} alt="" />
            <h2 className="font-bebas font-semiboldbold text-2xl uppercase">
              BOOK A TABLE
            </h2>
            <div className="flex flex-col items-center">
              <p className="font-roboto text-[16px]">Email: demo@website.com</p>
              <p className="font-roboto text-[16px]">
                Support: support@website.com
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <img src={map} alt="" />
            <h2 className="font-bebas font-semiboldbold text-2xl uppercase">
              Our Address
            </h2>
            <div className="flex flex-col items-center">
              <p className="font-roboto text-[16px]">
                123 Stree New York City , United
              </p>
              <p className="font-roboto text-[16px]">States Of America</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;