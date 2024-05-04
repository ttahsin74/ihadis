import React, { useContext, useState } from "react";
import { BsHexagonFill } from "react-icons/bs";

import hadis from "../../mockdata/hadis.json";
import Cross from "../../assets/cross.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ValueContext from "../../context/valueContext";

const TabList = () => {
  let { bookName } = useParams();
  const filteredBooks = hadis.find((book) => book.link === bookName);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { tablist, setTablist } = useContext(ValueContext);

  return (
    <div>
      <div
        className={`xl:w-[350px] sm:w-7/12 w-full md:w-96 lg: xl:block xl:static fixed top-0 left-[-200%] duration-500 z-[200] ${
          tablist ? "left-[0%]" : "left-[-200%]"
        }`}
      >
        <div className="rounded-2xl xl:h-[calc(100vh_-_115px)] h-screen bg-white flex items-center flex-col">
          <div className="flex items-center justify-between pb-6 pt-7 px-5 text-left w-full xl:hidden">
            <div className="text-xl kalpurush-text">ক্যাটাগরি</div>
            <div
              className="cursor-pointer "
              onClick={() => {
                setTablist(false);
              }}
            >
              <img src={Cross} alt="" />
            </div>
          </div>
          <div className="xl:border-b-[1px] border-y-[1px]  w-full flex items-center justify-center text-lg text-white border-b-[#ECEEF0] ">
            <p
              className={`${
                activeTab === 0 ? "text-white bg-[#2B9E76]" : "text-black"
              } w-1/2 text-center py-3 cursor-pointer xl:rounded-tl-2xl text-xl`}
              onClick={() => handleTabClick(0)}
            >
              বই
            </p>
            <div
              className={`${
                activeTab === 1 ? "text-white bg-[#2B9E76]" : "text-black"
              }  w-1/2 text-center py-3 cursor-pointer xl:rounded-tr-2xl text-xl`}
              onClick={() => handleTabClick(1)}
            >
              অধ্যায়
            </div>
          </div>
          <div className="w-full overflow-hidden overflow-y-scroll scroll-hover">
            {activeTab === 0 && (
              <div className="flex flex-col">
                <div className="w-full sticky top-0 bg-white z-10">
                  <div className="relative px-4 my-3">
                    <input
                      type="text"
                      placeholder="Search For Filter"
                      className=" bg-[#F2F4F6] mt-2 w-full p-3 rounded-lg outline-0  px-10"
                    />
                  </div>
                </div>
                {hadis &&
                  hadis.length > 0 &&
                  hadis.map((val, ind) => {
                    return (
                      <div
                        key={ind}
                        className="px-4"
                        onClick={() => {
                          setTablist(false);
                        }}
                      >
                        <div className="mb-2 ">
                          <div
                            className={`${
                              pathname.includes(val.link) ? "bg-[#ebfcf6]" : ""
                            } p-4 flex  group cursor-pointer hover:bg-[#ebfcf6] justify-between items-center rounded-2xl h-[100px]`}
                            onClick={() => {
                              navigate(`/${val?.link}`);
                            }}
                          >
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-12 sm:w-10 flex items-center justify-center relative">
                                <div
                                  className={`${
                                    pathname.includes(val.link)
                                      ? "text-[#2B9E76]"
                                      : "text-[#f1f5f4]"
                                  } text-[40px]  group-hover:text-[#2B9E76]`}
                                >
                                  <BsHexagonFill />
                                </div>
                                <h3
                                  className={`${
                                    pathname.includes(val.link)
                                      ? "text-white"
                                      : "text-gray-400"
                                  } uppercase text-gray-400 absolute md-:text-base lg:text-xl font-medium xl:text-lg group-hover:text-white top-1/2 left-1/2 -translate-x-1/2 translate-y-[-50%]`}
                                >
                                  {val.startingName}
                                </h3>
                              </div>
                              <div className="flex flex-col justify-between gap-1.5 group">
                                <h4 className="text-sm font-medium leading-7 text-black Kalpurush-font">
                                  {val.bookName}
                                </h4>
                                <p className="text-[#40404099]  Kalpurush-font text-sm leading-[26px] md:text-[13px]">
                                  সর্বমোট হাদিস: <span>{val.totalHadis}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex flex-col">
                <div className="w-full">
                  <div className="relative px-4 my-3">
                    <input
                      type="text"
                      placeholder="Search For Filter"
                      className="bg-[#F2F4F6] mt-2 w-full p-3 rounded-lg outline-0 px-10"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  {filteredBooks?.oddayName &&
                    filteredBooks.oddayName.map((val, ind) => (
                      <div
                        key={ind}
                        className="px-4"
                        onClick={() => {
                          setTablist(false);
                        }}
                      >
                        <div className="mb-2">
                          <div
                            className={`${
                              pathname.includes(val.id) ? "bg-[#ebfcf6]" : ""
                            } p-4 group cursor-pointer hover:bg-[#ebfcf6] justify-between items-center rounded-2xl h-[6.25rem]`}
                            onClick={() => {
                              navigate(`/${filteredBooks?.link}/${val?.id}`);
                            }}
                          >
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-12 sm:w-10 flex items-center justify-center relative">
                                <div
                                  className={`${
                                    pathname.includes(val.id)
                                      ? "text-[#2B9E76]"
                                      : "text-[#f1f5f4]"
                                  } text-[40px]  group-hover:text-[#2B9E76]`}
                                >
                                  <BsHexagonFill />
                                </div>
                                <h3
                                  className={`${
                                    pathname.includes(val.id)
                                      ? "text-white"
                                      : ""
                                  } uppercase text-gray-400 md-:text-base lg:text-xl font-medium xl:text-lg group-hover:text-white absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-50%] xl:`}
                                >
                                  {`${ind + 1}`}
                                </h3>
                              </div>
                              <div className="flex flex-col justify-between gap-1.5 group">
                                <h4 className="text-sm font-medium leading-7 text-black Kalpurush-font">
                                  {val.name}
                                </h4>
                                <p className="text-[#40404099]  Kalpurush-font text-sm leading-[26px] md:text-[13px]">
                                  হাদিসের রেঞ্জ: <span>{val.range}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabList;
