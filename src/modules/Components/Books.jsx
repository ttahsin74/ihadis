import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsHexagonFill } from "react-icons/bs";
import hadisData from "../../mockdata/hadis.json";
import { Link, useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-[#F2F4F6] rounded-xl w-full h-[86.8vh] overflow-hidden overflow-y-scroll">
      <div className="">
        <div className="col-start-2 lg:mt-4 lg:pr-[7px] ">
          <div className=" mt-5 lg:mt-0 lg:flex justify-between items-center p-6 bg-white rounded-xl w-full">
            <h4 className="Kalpurush-font  text-2xl text-[#504f4f]  text-center lg:text-left">
              সকল বই
            </h4>
            <div>
              <form action="">
                <div className="relative rounded-lg">
                  <div className="text-[#313131] font-bold absolute left-4 top-[1.1rem] text-[18px]">
                    <IoSearchOutline />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Hadith"
                    className="border-[#DEE1E5] text-hadith-offblack border-2 p-3 rounded-lg outline-0 bg-[#ECEEF0] focus:text-black px-10"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:grid-cols-3 w-full mt-4">
            {hadisData &&
              hadisData.length > 0 &&
              hadisData.map((val, ind) => {
                return (
                  // <Link to={`/${val.link}`}>
                  <div
                    key={ind}
                    className={`p-5 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]`}
                    onClick={() => {
                      navigate(`/${val.link}`);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 sm:w-10 md:w-0 xl:w-10 flex items-center justify-center relative">
                        <div className="text-[40px] text-[#f1f5f4] group-hover:text-[#2B9E76]">
                          <BsHexagonFill />
                        </div>
                        <h3 className="uppercase text-gray-400 absolute md-:text-base lg:text-xl font-medium xl:text-lg group-hover:text-white top-1/2 left-1/2 -translate-x-1/2 translate-y-[-50%]">
                          {val.startingName}
                        </h3>
                      </div>
                      <div className="flex flex-col justify-between gap-1.5 group">
                        <h4 className="text-sm font-medium leading-7 text-black Kalpurush-font">
                          {val.bookName}
                        </h4>
                        <p className="text-[#40404099] Kalpurush-font text-sm leading-[26px] md:text-[13px]">
                          সর্বমোট হাদিস <span>{val.totalHadis}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  // </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
