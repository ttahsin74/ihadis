import React from "react";
import Home from "../../assets/home-copy.svg";
import HomeHover from "../../assets/home-activefil.svg";
import book from "../../assets/book.svg";
import bookActive from "../../assets/book-active-focus.svg";
import bookActivefill from "../../assets/book-active-fill.svg";
import subject from "../../assets/subject.svg";
import subjectActiveFill from "../../assets/subject-active-fill.svg";
import subjectActive from "../../assets/subject-focus-active.svg";
import bookmark from "../../assets/bookmark.svg";
import bookmarkActiveFill from "../../assets/bookmark-active-fill.svg";
import bookmarkActive from "../../assets/bookmark-fucus-active.svg";
import others from "../../assets/others.svg";
import send from "../../assets/send.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import hadisData from "../../mockdata/hadis.json";

const MenuBer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  let { bookName } = useParams();
  const filteredBooks = hadisData.find((book) => book.link === bookName);

  const menuActive = filteredBooks || pathname === "/books";

  return (
    <div className="bg-white py-3 lg:py-8 fixed bottom-[0%] left-0 w-full lg:max-w-[96px] lg:h-[calc(100vh_-80px)] lg:static flex lg:justify-center drop-shadow lg:shadow-none lg:drop-shadow-none ">
      <div className="flex lg:flex-col items-center lg:justify-center justify-around gap-[4.5%] w-full ">
        <div
          className={`lg:p-4 cursor-pointer p-2 w-9 lg:w-auto rounded-lg hover:bg-[#F8F8F9] group`}
          onClick={() => {
            navigate("/home-page");
          }}
        >
          <img className="group-hover:hidden" src={Home} alt="" />
          <img className="group-hover:block hidden" src={HomeHover} alt="" />
        </div>
        <div
          className={`${
            menuActive
              ? "bg-[#2B9E76] hover:bg-[#2B9E76]"
              : "hover:bg-[#F8F8F9]"
          } lg:p-4 cursor-pointer p-2 w-9 lg:w-auto rounded-lg group`}
          onClick={() => {
            navigate("/books");
          }}
        >
          <img
            className="group-hover:hidden"
            src={menuActive ? bookActive : book}
            alt=""
          />
          <img
            className="hidden group-hover:block"
            src={
              pathname === "/" || pathname === "/books"
                ? bookActive
                : bookActive
            }
            alt=""
          />
        </div>
        <div
          className={`${
            pathname === "/subject"
              ? "bg-[#2B9E76] hover:bg-[#2B9E76]"
              : "hover:bg-[#F8F8F9]"
          } lg:p-4 cursor-pointer p-2 w-9 lg:w-auto rounded-lg group`}
          onClick={() => {
            navigate("/subject");
          }}
        >
          <img
            className="group-hover:hidden"
            src={pathname === "/subject" ? subjectActive : subject}
            alt=""
          />
          <img
            className="hidden group-hover:block"
            src={pathname === "/subject" ? subjectActive : subjectActiveFill}
            alt=""
          />
        </div>
        <div
          className={`${
            pathname === "/bookmarks"
              ? "bg-[#2B9E76] hover:bg-[#2B9E76]"
              : "hover:bg-[#F8F8F9]"
          } lg:p-4 cursor-pointer p-2 w-9 lg:w-auto rounded-lg lg:block hidden group`}
          onClick={() => {
            navigate("/bookmarks");
          }}
        >
          <img
            className="group-hover:hidden"
            src={pathname === "/bookmarks" ? bookmarkActive : bookmark}
            alt=""
          />
          <img
            className="hidden group-hover:block"
            src={
              pathname === "/bookmarks" ? bookmarkActive : bookmarkActiveFill
            }
            alt=""
          />
        </div>
        <div className=" lg:p-4 cursor-pointer p-2 w-9 lg:w-auto rounded-lg hover:bg-[#F8F8F9]">
          <img src={others} alt="" />
        </div>
        <div className=" lg:p-4 cursor-pointer p-2 w-9 lg:w-auto rounded-lg hover:bg-[#F8F8F9]">
          <img src={send} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MenuBer;
