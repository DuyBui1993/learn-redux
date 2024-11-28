import { useState } from "react";
import Image from "next/image";
import zimLogo from "@/components/dictionary/homepage/image/zim-logo.png";
import { IoIosSearch } from "react-icons/io";
import { RiMoonClearLine } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { ContentNavbar } from "@/components/dictionary/detail-dictionary/contentNavbar";
import { DetailFooter } from "@/components/dictionary/detail-dictionary/detail-footer";
import * as React from "react";

export const DetailHeader = ({ data, search }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const haveData =
    data?.content && Array.isArray(data.content) && data.content.length > 0;
  return (
    <div className="top-0 left-0 w-full">
      <div className="bg-gradient-to-b from-[#070158] to-[#1562fd]">
        <div className="header z-20 text-white py-4">
          <div className="flex justify-between mx-36">
            <div className="flex">
              <a href="#" className="flex items-center mr-2">
                <Image
                  src={zimLogo}
                  alt="logo"
                  className="mx-auto h-[50px] w-[50px] items-center overflow-hidden rounded-full border-0"
                />
                <div className="grid p-4">
                  <div className="font-bold text-xl">ZIM Dictionary</div>
                  <div className="font-extralight text-[14px] text-gray-400">
                    One World, One Wiki
                  </div>
                </div>
              </a>
              <div className="flex items-center space-x-8 text-lg">
                <a href="#">Khóa học</a>
                <a href="#">Chu Du Speak</a>
                <div className="relative">
                  <input
                    value={search}
                    className={`relative text-black border-2 px-8 py-1 rounded-full w-[600px] ${
                      haveData ? "" : ""
                    }`}
                  />
                  <span className="absolute left-4 top-1/4 transform text-lg text-gray-600">
                    <IoIosSearch />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center mx-4">
              <button
                className="text-xl"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <RiMoonClearLine /> : <MdOutlineWbSunny />}
              </button>
              <a
                href="/dictionary/login"
                className="cursor-pointer rounded-[20px] bg-blue-500 font-bold py-2 px-4 items-center ml-6"
              >
                Đăng nhập
              </a>
            </div>
          </div>
        </div>

        <div className="pt-[120px]">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-white mb-4">
              {haveData ? data.content[0].word : "Từ tìm thấy"}
            </div>
            <div className="flex gap-2 justify-center mb-4">
              {haveData &&
              Array.isArray(data.content[0]?.partOfSpeeches) &&
              data.content[0]?.partOfSpeeches.length > 0 ? (
                data.content[0]?.partOfSpeeches.map((item, index) => {
                  const { partOfSpeech } = item;
                  let tagDisplay =
                    partOfSpeech === "interjection"
                      ? "Part of Speech"
                      : partOfSpeech;

                  console.log("Part of Speech:", partOfSpeech);

                  return (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full ${
                        tagDisplay === "Part of Speech"
                          ? "bg-purple-500"
                          : "bg-orange-500"
                      } text-white text-sm`}
                    >
                      {tagDisplay === "Part of Speech"
                        ? "Interjection"
                        : partOfSpeech}
                    </span>
                  );
                })
              ) : (
                <span className="text-gray-500">
                  No part of speech available
                </span>
              )}
            </div>

            <button className="text-white font-bold py-2 px-4">
              <span className="mr-2 flex items-center">
                <GoShareAndroid fontSize={20} className="mr-2" />
                Chia sẻ
              </span>
            </button>
          </div>
          <div className="body max-w-4xl mx-auto">
            <ContentNavbar />
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};
