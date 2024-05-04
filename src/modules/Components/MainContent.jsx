import React, { useContext } from "react";
import HadisContent from "./HadisContent";
import Satting from "./Satting";
import TabList from "./TabList";
import MenuIcon from "./MenuIcon";

import { Outlet } from "react-router-dom";
import ValueContext from "../../context/valueContext";

const MainContent = () => {
  const { setTablist, setting } = useContext(ValueContext);
  const handleTab = () => {
    setTablist(true);
    console.log("dgfd");
  };
  // const handleCloseTab = () => {
  //   setTablist(false);
  // };

  return (
    <div className="lg:rounded-tl-3xl bg-[#F2F4F6] w-full">
      <div className=" lg:p-5">
        <div className="grid xl:grid-cols-[350px,1fr] 2xl:grid-cols-[350px,1fr,335px] gap-4 xl:gap-6">
          <TabList />
          <div className="lg:w-[101%] xl:min-w-[101.5%] lg:pb-12 px-4 lg:px-0 overflow-hidden overflow-y-scroll scroll-hover lg:h-[calc(100vh_-_80px)] cursor-pointer">
            <div
              className="flex gap-x-2 xl:hidden mb-4 p-4 rounded-lg bg-white items-center"
              onClick={handleTab}
            >
              <div>
                <MenuIcon />
              </div>
              <div>
                <h3 className="Kalpurush-font-primary font-medium text-[14px]">
                  সহিহ বুখারী
                </h3>
              </div>
            </div>
            <Outlet />
          </div>
          <div
            className={`2xl:block mb-6 2xl:w-[350px] 2xl:h-screen h-full 2xl:pb-36 col-start-3 2xl:static fixed top-0 right-[-200%] duration-500 w-full sm:w-7/12 md:w-96 xl:w-[390px] z-[200] ${
              setting ? "right-[0%]" : "right-[-200%]"
            }`}
          >
            <Satting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
