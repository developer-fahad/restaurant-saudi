import React, { useState } from "react";
import img from "../assets/Image.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import call from "../assets/call.png";
import pack from "../assets/package.png";
import medal from "../assets/medal.png";
import bag from "../assets/bag.png";
import frame from "../assets/Frame 1707478071.png";
import Button from "./Button";

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="relative">
      <div className="py-24 max-w-[1320px] mx-auto xl:px-0 px-4">
        <img
          className="xl:scale-100 scale-0  absolute top-[50%] right-0"
          src={frame}
          alt=""
        />
        <section className="flex lg:flex-row flex-col gap-8 ">
          <div className="w-full">
            <img className="w-full" src={img} alt="" />
          </div>
          <div className=" w-full">
            <Tabs
              className={" p-0 !w-full"}
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className={"flex gap-5 border-b-2 border-b-primary"}>
                <Tab
                  className={`p-2 cursor-pointer !rounded-none font-inter text-[14px] ${
                    tabIndex === 0
                      ? "!bg-primary !text-white rounded-none !outline-none"
                      : ""
                  }`}
                >
                  About
                </Tab>
                <Tab
                  className={`p-2 cursor-pointer !rounded-none font-inter text-[14px] ${
                    tabIndex === 1
                      ? "!bg-primary !text-white rounded-none !outline-none"
                      : ""
                  }`}
                >
                  Experience
                </Tab>
                <Tab
                  className={`p-2 cursor-pointer !rounded-none font-inter text-[14px] ${
                    tabIndex === 2
                      ? "!bg-primary !text-white rounded-none !outline-none"
                      : ""
                  }`}
                >
                  Contact
                </Tab>
              </TabList>
              <TabPanel className={""}>
                <h1 className="lg:text-[62px] text-[40px] lg:leading-[56px] leading-[48px] font-bebas font-bold pt-7">
                  Exceptional culinary experience and delicious food
                </h1>
                <p className="font-roboto text-[16px] leading-[26px] pt-3 pb-3">
                  Welcome to Restaurant, where we bring the soul of Saudi Arabia
                  to your table. Our chefs craft each dish with passion, drawing
                  from age-old recipes and authentic flavors that showcase the
                  rich culinary heritage of Saudi cuisine. Dive into a dining
                  experience where traditional ingredients meet contemporary
                  presentation, giving you a true taste of Saudi Arabia's
                  vibrant and diverse culinary culture.
                </p>
                <div className="flex items-center lg:gap-8 gap-3">
                  <Button text={"About More"} />
                  <div className="flex items-center gap-1 font-roboto font-bold lg:text-[14px] text-[16px] leading-[24px]">
                    <img src={call} alt="" />
                    <p>+88 3426 739 485</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className={""}>
                <h1 className="text-[56px] font-bebas !font-medium pt-5 ">
                  Chef’s Story and Journey
                </h1>
                <p className="font-roboto text-[16px] leading-[26px] pb-3 pt-3">
                  Visitors will feel a personal connection with the chefs and
                  the food’s story, adding depth to their dining expectations.
                </p>
                <h1 className="text-[56px] font-bebas font-medium pt-5 ">
                  Events and Special Occasions
                </h1>
                <p className="font-roboto text-[16px] leading-[26px] pb-3 pt-3">
                  This gives customers a reason to return and see your
                  restaurant as a place for special occasions and unique
                  experiences.
                </p>
              </TabPanel>
              <TabPanel>
                <div className=" px-2 ">
                  <h2 className="text-[56px] font-semibold font-bebas  pt-5">
                    Get in Touch
                  </h2>
                  <p className="font-roboto pt-5 pb-5">
                    Have a question, comment, or suggestion? We’d love to hear
                    from you! Our team is here to assist you with any inquiries
                    about our menu, service, or special requests. Please reach
                    out to us through the form below, and we’ll get back to you
                    as soon as possible.
                  </p>
                  <form>
                    <label
                      htmlFor="email"
                      className="block text-3xl font-roboto font-bold mb-2"
                    >
                      Subscribe Newsletter
                    </label>
                    <div className="flex items-center">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full py-2 px-2 border border-gray-300 focus:outline-none "
                        required
                      />

                      <input
                        className="py-2 border border-secondary px-5 text-[16px] font-roboto font-bold uppercase bg-secondary"
                        type="submit"
                        value="Subscribe"
                      />
                    </div>
                  </form>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </section>
        <section className="flex flex-wrap items-center gap-8 pt-12">
          <div className="flex items-center gap-3">
            <div className="p-4 rounded-full shadow-even">
              <img className="w-6 h-6" src={pack} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bebas font-medium lg:text-3xl text-[24px]">
                Fast delivery
              </h2>
              <p className="font-inter lg:text-xl text-lg">Within 30 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-4 rounded-full shadow-even">
              <img className="w-6 h-6" src={medal} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bebas font-medium lg:text-3xl text-[24px]">
                Absolute dining
              </h2>
              <p className="font-inter lg:text-xl text-lg">
                Best buffet restaurant
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-4 rounded-full shadow-even">
              <img className="w-6 h-6" src={bag} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bebas font-medium lg:text-3xl text-[24px]">
                Pickup delivery
              </h2>
              <p className="font-inter lg:text-xl text-lg">
                Grab your food order
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
