import React, { useContext, useState } from "react";
import NavLogo from "../../assets/home-logo.png";
import SupportLogo from "../../assets/helping-hand.svg";
import { IoIosSettings } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import ValueContext from "../../context/valueContext";

const Navber = () => {
  const { setSetting } = useContext(ValueContext);
  const { search, setSearch } = useState();

  return (
    <nav className="sticky top-0 left-0 z-[100]">
      <div className="flex items-center justify-between w-full h-16 lg:h-20 px-4 bg-white ">
        <div className="flex items-center cursor-pointer">
          <div className="w-11 ">
            <img
              className="lg:w-11 lg:h-11 w-9 h-9"
              src={NavLogo}
              alt="nav-logo"
            />
          </div>
          <div className="lg:ml-6 block">
            <h3 className="text-xl font-bold text-black kalpurush-text lg:block hidden">
              হাদিস সমূহ
            </h3>
            <h3 className="text-[17px] ml-4 kalpurush-text lg:hidden block text-[#1fa471] Kalpurush-text mt-[3px]">
              আল হাদিস
            </h3>
            <h6 className="text-[12px] text-[#404040] lg:block hidden text- kalpurush-text">
              হাদিস পড়ুন শিখুন এবং জানুন
            </h6>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 lg:gap-20 2xl:gap-5 sticky top-0 left-0 lg:static">
          <form action="">
            <div className="relative bg-[#ECEEF0] flex items-center justify-center rounded-lg search-input w-10 h-10 lg:w-auto lg:-auto">
              <div
                className="text-[#5C5C5C] lg:absolute left-4 top-[16px] text-[18px] lg:top-1/2 lg:translate-y-[-40%]
                "
                onClick={() => {
                  setSearch(!search);
                }}
              >
                <IoSearchOutline />
              </div>
              <input
                type="text"
                placeholder="Search Hadith"
                className="border-[#DEE1E5] lg:block hidden text-hadith-offblack border-2 p-3 rounded-lg outline-0 focus:text-black pl-10 pr-10"
              />
            </div>
          </form>
          <div className="fixed 2xl:static hidden lg:block bottom-5 left-4 z-10">
            <div className="flex bg-[#2B9E76] px-5 py-3 gap-2 text-white rounded-lg">
              <p className="2xl:block hidden">সাপোর্ট করুন</p>
              <div>
                <img src={SupportLogo} alt="support-logo" />
              </div>
            </div>
          </div>
          <div
            className="2xl:hidden block cursor-pointer "
            onClick={() => {
              setSetting(true);
            }}
          >
            <div className="bg-[#2B9E76] flex items-center justify-center rounded-lg w-10 h-10">
              <IoIosSettings className="text-white text-[24px]" />
            </div>
          </div>
        </div>
      </div>
      {search && (
        <div className="w-full h-screen bg-[#0000006e]">
          <div className="w-full md:w-8/12 top-0 p-4 absolute h-fit duration-500 transform translate-y-10 md:translate-y-24">
            <div className="bg-white px-5 pt-6 pb-2 rounded-xl relative w-full flex flex-col h-full">
              <form action="">
                <input
                  type="text"
                  placeholder="Search Hadith"
                  className="rounded-xl pl-6 pr-36 lg:py-5 text-black bg-gray-100 py-3 w-full focus:outline-none placeholder:leading-4"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;

// md-max:fixed md-max:z-10 md-max:top-0 md-max:left-0 md-max:right-0 dark:bg-hadith-dark-card md-max:border-b md-max:dark:border-[#2F2F2F]
