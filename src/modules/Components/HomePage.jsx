import React, { useState } from "react";
import NavLogo from "../../assets/home-logo.png";
import SupportLogo from "../../assets/helping-hand.svg";
import Home from "../../assets/home.svg";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
import HadisOdday from "./HadisOdday";
import HadisContent from "./HadisContent";
import Books from "./Books";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import send from "../../assets/send-active-fill.svg";
import book from "../../assets/book-active-fill.svg";
import download from "../../assets/download.svg";
import help from "../../assets/helping-hand-copy.svg";
import MaszidLogo from "./MaszidLogo";

const HomePage = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="2xl:w-[80%] z-[100] bg-white  w-full 2xl:m-auto sticky top-0 left-0">
        <nav className=" ">
          <div className="flex items-center justify-between w-full px-4  py-5 bg-white ">
            <div className="flex gap-3 items-center cursor-pointer">
              <div className="w-11 ">
                <img className="w-11 h-11" src={NavLogo} alt="nav-logo" />
              </div>
              <div className=" block">
                <h3 className="text-xl font-bold text-[#1FA471] kalpurush-text">
                  আল হাদিস
                </h3>
              </div>
            </div>
            <div
              className={` absolute z-[999] lg:static w-full sm:w-[70%] md:w-[40%] top-0 right-0 bg-white text-left p-4 lg:p-0 duration-500 ${
                showMenu ? "right-0" : "right-[-120%]"
              }`}
            >
              <ul className="flex flex-col lg:flex-row lg:gap-10 gap-6 w-full items-center">
                <li className="flex lg:hidden items-center justify-between w-full ">
                  <div className="flex  gap-3 items-center cursor-pointer ">
                    <div className="w-11 ">
                      <img className="w-11 h-11" src={NavLogo} alt="nav-logo" />
                    </div>
                    <div className=" block">
                      <h3 className="text-xl font-bold text-[#1FA471] kalpurush-text">
                        আল হাদিস
                      </h3>
                    </div>
                  </div>
                  <div
                    onClick={() => setShowMenu(false)}
                    className=" bg-[#7777770e] p-3 rounded-full"
                  >
                    <RxCross1 className="text-[20px]" />
                  </div>
                </li>
                <li className="w-full flex justify-center ">
                  <div className="flex justify-center  items-center gap-2 bg-[#1FA471] lg:px-6 lg:py-[6px] p-3 rounded-lg lg:rounded-3xl">
                    <img src={Home} className="w-5" />
                    <a href="" className="text-white block">
                      হোম
                    </a>
                  </div>
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/bukhari");
                  }}
                  className="w-full lg:w-auto hover:bg-[#42424215] lg:hover:bg-[transparent] p-3 lg:p-0 rounded-lg lg:block flex items-center gap-4 whitespace-nowrap"
                >
                  <img className="lg:hidden block" src={send} alt="" />
                  <a href="">হাদিসে যান</a>
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full lg:w-auto hover:bg-[#42424215] lg:hover:bg-[transparent] p-3 lg:p-0 rounded-lg lg:block flex items-center gap-4 whitespace-nowrap"
                >
                  <img className="lg:hidden block" src={book} alt="" />
                  <a href="">হাদিস গ্রন্থসমূহ</a>
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full lg:w-auto hover:bg-[#42424215] lg:hover:bg-[transparent] p-3 lg:p-0 rounded-lg lg:block flex items-center gap-4 whitespace-nowrap"
                >
                  <img className="lg:hidden block" src={download} alt="" />
                  <a href="">আমাদের প্রজেক্ট</a>
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full lg:w-auto hover:bg-[#42424215] lg:hover:bg-[transparent] p-3 lg:p-0 rounded-lg flex items-center gap-4 lg:hidden  whitespace-nowrap"
                >
                  <img className="lg:hidden block" src={help} alt="" />
                  <a href="">সাপোর্ট করুন</a>
                </li>
                <li className="lg:hidden block 2xl:mx-0 ">
                  <div className="border mb-10 p-5 rounded-lg 2xl:mb-2.5 bg-[#34ab82] relative ">
                    <div className="absolute right-0 bottom-0 z-[-0]">
                      <MaszidLogo />
                    </div>
                    <div>
                      <h4 className="text-[1.5rem] text-white kalpurush-text leading-[26px] text-whitet">
                        আপনিও সদাকায়ে জারিয়াতে অংশ নিন
                      </h4>
                      <p className="leading-6 text-white font-light mt-2.5 opacity-80 kalpurush-text">
                        আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে
                        সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ
                        কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন।
                        ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে
                        কবুল হবে।
                      </p>
                      <button className="block m-auto py-3 mt-5 bg-white rounded-lg text-base px-10 text-[1.05rem] hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] cursor-pointer">
                        সাপোর্ট করুন
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:flex bg-[#2B9E76] px-5 py-3 gap-2 text-white rounded-lg hidden">
              <p className="">সাপোর্ট করুন</p>
              <div>
                <img src={SupportLogo} alt="support-logo" />
              </div>
            </div>
            <div
              onClick={() => {
                setShowMenu(true);
              }}
              className="lg:hidden block "
            >
              <HiMenuAlt3 className="text-[#383838] text-[60px] p-2 bg-[#00000015] rounded-lg" />
            </div>
          </div>
        </nav>
      </div>
      <Banner />
      <Books />
    </>
  );
};

export default HomePage;
