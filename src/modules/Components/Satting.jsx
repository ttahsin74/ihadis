import React, { useContext, useState } from "react";
import Cross from "../../assets/cross.svg";
import ValueContext from "../../context/valueContext";
import MaszidLogo from "./MaszidLogo";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Satting = () => {
  const { setSetting } = useContext(ValueContext);
  const [sliderArabic, setSliderArabic] = useState(22);
  const [sliderbangla, setSliderBangla] = useState(17);

  const handleArabic = (event, newValue) => {
    setSliderArabic(newValue);
    console.log(sliderArabic);
  };
  const handleBangla = (event, newValue) => {
    setSliderBangla(newValue);
    console.log(sliderbangla);
  };
  return (
    <>
      <div className="2xl:bg-[#F2F4F6] bg-white">
        <div className="2xl:p-5 pl-6 pr-[17px] mb-6 rounded-xl bg-white">
          <div
            className="flex 2xl:hidden items-center justify-between py-3 w-full
        "
          >
            <h3 className="2xl:text-center text-left font-medium text-2xl kalpurush-text">
              সেটিংস
            </h3>
            <div
              className="py-4 cursor-pointer"
              onClick={() => {
                setSetting(false);
              }}
            >
              <img src={Cross} alt="" />
            </div>
          </div>
          <h3 className="2xl:text-center text-left font-medium text-2xl kalpurush-text 2xl:block hidden">
            সেটিংস
          </h3>
          <div className="xl:mt-6 mt-0">
            <div>
              <label
                className="Kalpurush-font-primary mt-4 mb-2 text-[1.05rem] block"
                htmlFor=""
              >
                আরবি ফন্ট সিলেক্ট করুন
              </label>

              <select
                name="fonts"
                className="w-full h-12 border border-solid border-[#ECEEF0] rounded-lg px-4 py-3 text-[#7A7A7A] outline-none font-select"
              >
                <option value="KFGQ">KFGQ</option>
                <option value="Me Quran">Me Quran</option>
                <option value="Al Mushaf">Al Mushaf</option>
                <option value="Amiri">Amiri</option>
                <option value="Arial">Arial</option>
              </select>
            </div>
            <div>
              <label
                className="Kalpurush-font-primary font-medium block my-2.5 text-[]"
                htmlFor=""
              >
                এরাবিক ফন্ট সাইজ
              </label>
              <div>
                <Box>
                  <Slider
                    value={sliderArabic}
                    aria-label="Default"
                    onChange={handleArabic}
                    valueLabelDisplay="off"
                    style={{ color: "#2B9E76" }}
                  />
                </Box>
              </div>
            </div>
            <div>
              <label
                className="Kalpurush-font-primary font-medium block my-2.5 text-[]"
                htmlFor=""
              >
                অনুবাদ ফন্ট সাইজ
              </label>
              <div>
                <Box>
                  <Slider
                    value={sliderbangla}
                    aria-label="Default"
                    onChange={handleBangla}
                    valueLabelDisplay="off"
                    style={{ color: "#2B9E76" }}
                  />
                </Box>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:mx-0 mx-[20px]">
          <div className="border mb-10 p-5 rounded-lg 2xl:mb-2.5 bg-[#34ab82] relative ">
            <div className="absolute right-0 bottom-0 z-[-0]">
              <MaszidLogo />
            </div>
            <div>
              <h4 className="text-[1.5rem] text-white kalpurush-text leading-[26px] text-whitet">
                আপনিও সদাকায়ে জারিয়াতে অংশ নিন
              </h4>
              <p className="leading-6 text-white font-light mt-2.5 opacity-80 kalpurush-text">
                আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা
                করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে
                আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ
                হিসেবে আল্লাহ্‌র কাছে কবুল হবে।
              </p>
              <button className="block m-auto py-3 mt-5 bg-white rounded-lg text-base px-10 text-[1.05rem] hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] cursor-pointer">
                সাপোর্ট করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Satting;
