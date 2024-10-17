"use client";
import * as React from "react";
import zimLogo from "./zim-logo.png";
import { RiMoonClearLine } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import dmcaLogo from "./DMCA-protected.png";
import ecommerceLogo from "./logo-bocongthuong.png";
import { useState } from "react";

export const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="bg-[rgb(9,29,105)] h-screen grid grid-rows-[max-content_minmax(0,1fr)_max-content] text-white relative">
      <div className="absolute z-10 w-screen overflow-hidden top-52 [--gap:1rem] [gap:var(--gap)]">
        <div className="flex overflow-hidden whitespace-nowrap from-pink-500 font-jakarta text-[428px] font-extrabold leading-[1.3] text-[rgba(255,255,255,0.03)]">
          <span className="animate-marquee [--duration:69s]">
            PERSONALIZED DICTIONARY
          </span>
          <span className="animate-marquee [--duration:69s]">
            PERSONALIZED DICTIONARY
          </span>
          <span className="animate-marquee [--duration:69s]">
            PERSONALIZED DICTIONARY
          </span>
        </div>
      </div>

      <div className="header flex justify-between mx-36 z-20">
        <div className="flex">
          <a href="#" className=" flex items-center mr-2">
            <img
              src={zimLogo.src}
              alt=""
              className="mx-auto h-[50px] w-[50px] items-center overflow-hidden rounded-full border-0"
            />
            <div className="grid p-4">
              <div className="font-bold text-xl">ZIM Dictionary</div>
              <div className="font-extralight text-[14px] text-gray-400">
                One World, One Wiki
              </div>
            </div>
          </a>
          <div className="flex items-center ml-8 text-[18px]">Khóa học</div>
        </div>
        <div className="flex items-center mx-4">
          <button className="text-xl" onClick={handleClick}>
            {isDarkMode ? <RiMoonClearLine /> : <MdOutlineWbSunny />}
          </button>
          {/*<RiMoonClearLine fontSize={18} className="cursor-pointer" />*/}
          <button className="cursor-pointer rounded-[20px] bg-blue-500 font-bold py-2 px-4 items-center ml-6">
            Đăng nhập
          </button>
        </div>
      </div>

      <div className="body flex flex-col justify-center items-center z-20">
        <div className="font-semibold text-xl mb-2">
          Personalized English Dictionary
        </div>
        <div className="font-bold text-6xl">“One Word, One Wiki”</div>
        <div className="bg-white mt-16 rounded-full w-[800px] h-[70px] px-4 space-x-2 flex items-center">
          <div className="text-gray-500 text-[24px]">
            <IoMdSearch />
          </div>
          <input
            className="outline-0 text-gray-500 text-[20px] font-semibold w-full"
            placeholder="Nhập từ cần tìm kiếm"
          />
        </div>
        <p className="mt-10">
          <a href="#" className="text-orange-400 font-bold">
            Đăng nhập
          </a>{" "}
          để có được trải nghiêm cá nhân hóa cho bạn
        </p>
      </div>

      <div className="footer flex justify-around bg-gray-600 mx-auto text-white w-full p-4">
        <div className="flex">
          <img
            src={zimLogo.src}
            alt=""
            className="mx-auto h-[40px] w-[40px] items-center overflow-hidden rounded-full border-0"
          />
          <div className="grid mx-2 text-xs">
            <p>Công ty cổ phần Eduvator</p>
            <p>Giấy chứng nhận số: 0107346642</p>
          </div>
        </div>
        <div className="grid text-xs">
          <p>Ngày cấp phép: 07/03/2016.</p>
          <p>Nơi cấp: Sở KHĐT Hà Nội.</p>
        </div>
        <div className="grid text-xs">
          <p>Ngày cấp phép: 07/03/2016.</p>
          <p>Nơi cấp: Sở KHĐT Hà Nội.</p>
        </div>
        <div className="flex h-[30px] w-[80px] space-x-2">
          <img src={dmcaLogo.src} alt="" />
          <img src={ecommerceLogo.src} alt="" />
        </div>
      </div>
    </div>
  );
};
