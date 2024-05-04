import React from "react";
import BreadCumb from "../../assets/bread-crumb-book.svg";
import Forward from "../../assets/forword-arrow.svg";
import HadisNameIcon from "./HadisNameIcon";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import hadisData from "../../mockdata/hadis.json";
import { BsHexagonFill } from "react-icons/bs";

const HadisOdday = () => {
  const location = useLocation();
  let { bookName } = useParams();
  const filteredBooks = hadisData.find((book) => book.link === bookName);
  const navigate = useNavigate();

  return (
    <div className="lg:block">
      {filteredBooks ? (
        <>
          <div className="hidden lg:block">
            <div className="flex text-[#667085] h-14 px-5 py-4 gap-2  w-full items-center rounded-t-xl text-sm border-b-2 border-b-[#ECEEF0] cursor-pointer bg-[#FAFBFB]">
              <div className="flex items-center">
                <div>
                  <img src={BreadCumb} alt="" />
                </div>
                <div className="flex items-center">
                  <img src={Forward} alt="" />
                  <span>{filteredBooks?.enName}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:block h-26 px-5 md:py-6 bg-white  rounded-b-xl rounded-t-xl lg:rounded-t-none :py-5">
            <div className="flex items-center gap-x-6">
              <div className="flex w-full justify-between items-center">
                <h3 className="text-2xl  font-bold text-[#404040] kalpurush-text">
                  {filteredBooks?.bookName}
                </h3>
                <div>
                  <form action="">
                    <div className="relative bg-[#F8F8F9] flex items-center justify-center rounded-lg">
                      <div className="text-[#5C5C5C] lg:absolute left-4 top-[1.1rem] text-[18px]">
                        <IoSearchOutline />
                      </div>
                      <input
                        type="text"
                        placeholder="Search For Filter"
                        className="border-[#DEE1E5] bg-[#F8F8F9] text-hadith-offblack border-2 p-3 rounded-lg outline-0 focus:text-black pl-10 pr-10"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <p className="kalpurush-text text-sm">
                {filteredBooks?.compiler}
              </p>
            </div>
            <div className="w-full mb-4 mt-6 mx-auto h-[1px] bg-[#F6F7F7] lg-min:dark:bg-dark-cat-border md-max:bg-transparent"></div>
            <div>
              {filteredBooks?.oddayName &&
                filteredBooks.oddayName.length > 0 &&
                filteredBooks.oddayName.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white lg:bg-transparent py-1.5 sm:py-0 group cursor-pointer h-full lg:border-b lg:border-solid  lg:border-[#f6f7f7] rounded-xl border-transparent md:mb-4"
                      onClick={() => {
                        navigate(`/${filteredBooks?.link}/${item?.id}`);
                      }}
                    >
                      <div className="py-2 lg:py-5  flex items-center h-full lg:bg-white lg:hover:bg-[#ebfcf6] rounded-[0.70rem] gap-6 w-full sm:px-6 :px-3 ">
                        <div className="h-12 w-12 sm:w-10 md:w-0 xl:w-10 flex items-center justify-center relative">
                          <div className="text-[40px] text-[#f1f5f4] group-hover:text-[#2B9E76]">
                            <BsHexagonFill />
                          </div>
                          <h3 className="text-gray-400 absolute md-:text-base lg:text-xl font-medium xl:text-lg group-hover:text-white top-1/2 left-1/2 -translate-x-1/2 translate-y-[-50%] kalpurush-text">
                            {`${index + 1}`}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between w-full text-[#333333]">
                          <h4 className="kalpurush-text">{item.name}</h4>
                          <h4 className="kalpurush-text">{item.range}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1>Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default HadisOdday;
