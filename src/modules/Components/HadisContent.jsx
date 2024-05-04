import React from "react";
import BreadCumb from "../../assets/bread-crumb-book.svg";
import Forward from "../../assets/forword-arrow.svg";
import Book from "../../assets/book-multiple-page.svg";
import CopyIcon from "../../assets/copy-icon.svg";
import BookmarkIcon from "../../assets/bookmark-icon.svg";
import ShareIcon from "../../assets/share-icon.svg";
import ReportIcon from "../../assets/report-icon.svg";
import DirectIcon from "../../assets/direct-icon.svg";

import StarSvg from "./StarBox";
import HadisNameIcon from "./HadisNameIcon";
import { useParams } from "react-router-dom";
import hadisData from "../../mockdata/hadis.json";

const HadisContent = () => {
  let { bookName, chapterId } = useParams();
  const filteredBooks = hadisData.find((book) => book.link === bookName);

  const chapterData = filteredBooks?.oddayName.find(
    (chapter) => chapter.id === chapterId
  );

  return (
    <>
      {filteredBooks && chapterData ? (
        <>
          <div className="hidden lg:block">
            <div className="flex text-[#667085] h-14 px-5 py-4 gap-2  w-full items-center rounded-t-xl text-sm border-b-2 border-b-[#ECEEF0] cursor-pointer bg-[#FAFBFB]">
              <div className="flex items-center">
                <div>
                  <img src={BreadCumb} alt="" />
                </div>
                <div className="flex items-center">
                  <img src={Forward} alt="" />
                  <a href="/bukhari">Bukhari</a>
                </div>
                <div class="flex items-center">
                  <img src={Forward} alt="" />
                  <span href="">{filteredBooks?.oddayName[0].id}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:block h-26 px-5 md:py-6 bg-white  rounded-b-xl rounded-t-xl lg:rounded-t-none :py-5">
            <div className="flex items-center gap-x-6">
              <HadisNameIcon />
              <div className="flex w-full justify-between items-center">
                <div className="">
                  <h3 className="Kalpurush-font mb-1 sm:text-[15px] lg:text-[24px]">
                    {filteredBooks?.bookName}
                  </h3>
                  <p className="Kalpurush-font text-sm">
                    সর্বমোট হাদিস: <span>{filteredBooks?.totalHadis}</span>{" "}
                  </p>
                </div>
                <div>
                  <p className="hidden md:block text-2xl font- me-quran-font">
                    {filteredBooks?.bookArabicName}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 md:px-5 py-5 w-full bg-white rounded-xl my-4 px-4">
              <div className="Kalpurush-font flex items-center justify-center text-white w-[42.34px] h-10 rounded-xl bg-[#2B9E76] text-xl">
                {chapterData?.id}
              </div>
              <div>
                <h3 className="Kalpurush-font text-xl leading-7 text-[#404040] w-full">
                  {chapterData?.name}
                </h3>
              </div>
            </div>
          </div>
          {chapterData?.hadisDetails &&
            chapterData.hadisDetails.length > 0 &&
            chapterData.hadisDetails.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="bg-white my-4 p-5 rounded-xl sm-max:px-4"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <img src={Book} alt="" />
                        <h3 className="Kalpurush-font text-[17px] font-normal leading-5">
                          {item?.oddayNumber}
                        </h3>
                      </div>
                      <h3 className="Kalpurush-font text-[19px] leading-[24px]">
                        {item?.starting}
                      </h3>
                    </div>
                    <div className="">
                      <div className="w-full h-[1px] bg-[#ECEEF0] my-5"></div>
                      <div>
                        <p className="text-[#373737] block leading-[1.8]">
                          {item?.ayat}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white my-4 rounded-xl">
                    <div className="px-4 pt-8 flex items-center w-full justify-between">
                      <div className="flex items-center gap-x-3 ">
                        <StarSvg />
                        <div className="Kalpurush-font text-[#3CA288] text-xl leading-6">
                          {item?.hadisNumber}
                        </div>
                      </div>
                      <span className="whitespace-nowrap flex items-center justify-center font-medium text-sm bg-[#46B891] text-white Kalpurush-font-primary rounded-[.3rem] pt-1.5 pb-1 px-3">
                        {item?.man}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="leading-[2] text-[22px] me-quran-font word-spacing-[8px] mb-8">
                        <p className="text-right">{item?.arabic}</p>
                      </div>
                      <p className="Kalpurush-font-primary text-[17px] text-[#2A9C74] leading-[1.8]">
                        {item?.bornito}
                      </p>
                      <p className="mt-4 Kalpurush-font-primary leading-[1.8] text-[19px]">
                        {item.bangla}
                      </p>
                      <div className="hidden lg:flex  items-center justify-between mt-10">
                        <div className="flex gap-2 items-center w-full">
                          <p className="Kalpurush-font-primary whitespace-nowrap">
                            হাদিসের মান :
                          </p>
                          <span className="whitespace-nowrap flex items-center justify-center font-medium text-sm bg-[#46B891] text-white Kalpurush-font-primary rounded-[.3rem] pt-1.5 pb-1 px-3">
                            {item?.man}
                          </span>
                        </div>
                        <div className="flex w-full gap-10 justify-end">
                          <div>
                            <img src={CopyIcon} alt="" />
                          </div>
                          <div>
                            <img src={BookmarkIcon} alt="" />
                          </div>
                          <div>
                            <img src={ShareIcon} alt="" />
                          </div>
                          <div>
                            <img src={ReportIcon} alt="" />
                          </div>
                          <div>
                            <img src={DirectIcon} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </>
      ) : (
        <div>
          <h1>Not Found</h1>
        </div>
      )}
    </>
  );
};

export default HadisContent;
