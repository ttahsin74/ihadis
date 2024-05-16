import React from "react";
import hadisData from "../../mockdata/bannrHadis.json";
import { IoSearchOutline } from "react-icons/io5";
import useEmblaCarousel from "embla-carousel-react";


const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="bg-img ">
      <div className="overlay py-7 lg:py-[60px]">
        <div className="2xl:w-[80%] w-full flex 2xl:m-auto">
          <div className="flex flex-col items-center gap-9 w-full">
            <div>
              <h1 className="text-white text-[25px] md:text-[35px] md:leading-[52px] lg:text-[46px] 2xl:text-[56px] font-medium md:font-semibold">
                আপনার পছন্দের হাদিস খুঁজুন
              </h1>
            </div>
            <div className="w-full sm:w-8/12 lg:w-7/12 2xl:w-6/12 relative lg:my-6 px-7 md:px-0 ">
              <form action="" className="block">
                <div className="w-full  sm:w-8/12 lg:w-7/12 2xl-min:w-6/12 relative lg:my-6 bg-white p-2 m-auto rounded-xl border-none">
                  <input
                    className=" pl-6 pr-28 md:pr-40 py-3 text-black bg-white outline-none w-full"
                    type="text"
                    placeholder="Search hadith"
                  />
                  <div className="py-3 md:px-7 px-3 bg-[#2B9E76] absolute flex gap-2 right-2 top-2 rounded-r-xl items-center">
                    <IoSearchOutline className="text-white" />
                    <p className="text-white">সার্চ করুন</p>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <div className="embla" ref={emblaRef}>
                <div className=" kalpurush-text font-medium text-white kalpurush-text flex w-full px-3 sm:px-0 sm:[450px] lg:w-[750px] text-center ">
                  {hadisData &&
                    hadisData.length > 0 &&
                    hadisData.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="embla__slide sm:text-lg md:text-lg xl:text-xl leading-8 "
                        >
                          <p className="">{item.hadis}</p>
                          <p className="mt-7">{item["hadisName "]}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
