"use client";
import * as React from "react";
import {useState} from "react";
import Image from "next/image";
import zimLogo from "./zim-logo.png";
import {RiMoonClearLine} from "react-icons/ri";
import {MdOutlineWbSunny} from "react-icons/md";
import {IoMdSearch} from "react-icons/io";
import dmcaLogo from "./DMCA-protected.png";
import ecommerceLogo from "./logo-bocongthuong.png";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import {AiOutlineSetting, AiOutlineUser} from "react-icons/ai";
import {PiTextAa} from "react-icons/pi";
import {FiLogOut} from "react-icons/fi";
import {signOut, useSession} from "next-auth/react";
import {useQuery} from "@tanstack/react-query";

export const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
    };

    const [isSearch, setIsSearch] = useState('');

    const [valueInPut, setValueInPut] = useState('');

    const {data: session} = useSession();
    const isLoggedIn = !!session?.user;

    const handleLogOut = async () => {
        await signOut();
    };

    const {error, data} = useQuery({
        queryKey: ['repoData', valueInPut],
        queryFn: async () => {
            const res = await fetch(`https://tudien.fly.dev/api/dictionary/words/search?q=${valueInPut}`);
            return res.json();
        },
        enabled: !!valueInPut
    })
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div
            className="bg-[rgb(9,29,105)] h-screen grid grid-rows-[max-content_minmax(0,1fr)_max-content] text-white relative">
            <div className="absolute z-10 w-screen overflow-hidden top-52 [--gap:1rem] [gap:var(--gap)]">
                <div
                    className="flex overflow-hidden whitespace-nowrap from-pink-500 font-jakarta text-[428px] font-extrabold leading-[1.3] text-[rgba(255,255,255,0.03)]">
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
                    <div className="flex items-center ml-8 text-[18px]">Khóa học</div>
                </div>
                <div className="flex items-center mx-4 ">
                    <button className="text-xl" onClick={handleClick}>
                        {isDarkMode ? <RiMoonClearLine/> : <MdOutlineWbSunny/>}
                    </button>
                    {isLoggedIn ? (
                        <div>
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={session?.user?.image as string}
                                            alt=""
                                            className="mx-auto ml-6 h-[60px] w-[60px] items-center overflow-hidden rounded-full p-2"
                                        />
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem>
                                            <AiOutlineUser className="mr-2" fontSize={20}/> Xem trang
                                            cá nhân
                                        </MenubarItem>
                                        <MenubarItem>
                                            <PiTextAa className="mr-2" fontSize={20}/> Từ đã lưu
                                        </MenubarItem>
                                        <MenubarItem>
                                            <AiOutlineSetting className="mr-2" fontSize={20}/> Cài
                                            đặt tài khoản
                                        </MenubarItem>
                                        <MenubarSeparator/>
                                        <MenubarItem
                                            className="text-red-600"
                                            onClick={handleLogOut}
                                        >
                                            <FiLogOut className="mr-2 text-lg text-red-600"/> Đăng
                                            xuất
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </div>
                    ) : (
                        <a
                            href="/dictionary/login"
                            className="cursor-pointer rounded-[20px] bg-blue-500 font-bold py-2 px-4 items-center ml-6"
                        >
                            Đăng nhập
                        </a>
                    )}
                </div>
            </div>

            <div className="body flex flex-col justify-center items-center z-20">
                <div className="font-semibold text-xl mb-2">
                    Personalized English Dictionary
                </div>
                <div className="font-bold text-6xl">“One Word, One Wiki”</div>
                <div
                    className="relative bg-white mt-16 rounded-full w-[800px] h-[70px] px-4 space-x-2 flex items-center">
                    <div className="text-gray-500 text-[24px]">
                        <IoMdSearch/>
                    </div>
                    <input
                        className="outline-0 text-black text-[20px] font-semibold w-full"
                        placeholder="Nhập từ cần tìm kiếm"
                        onChange={(e) => {
                            setValueInPut(e.target.value)
                        }}
                    />
                    <div
                        className="absolute bg-white items-center flex left-0 top-[70px] w-[800px] h-[70px] px-4 space-x-2 cursor-pointer">
                        <div className="text-gray-500 text-[24px]">
                            <IoMdSearch/>
                        </div>
                        <div className="outline-0 text-gray-500 text-[20px] font-semibold">
                            {(data?.content || []).map((item, index) => {
                                const {partOfSpeeches, word} = item
                                const firstPartOfSpeech = partOfSpeeches[0];
                                const partOfSpeech = firstPartOfSpeech.partOfSpeech;
                                const definitionVietnamese = firstPartOfSpeech.definitions[0].definitionVietnamese
                                return <div className="flex" key={index}>
                                    <div className="text-blue-600 bg-blue-200 w-max mr-2">{word}</div>
                                    {definitionVietnamese}
                                    <div
                                        className="text-xs bg-gray-300 rounded-full items-center flex p-2 ml-2">{partOfSpeech}</div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <p className="mt-10">
                    <a href="/dictionary/login" className="text-orange-400 font-bold">
                        Đăng nhập
                    </a>{" "}
                    để có được trải nghiệm cá nhân hóa cho bạn
                </p>
            </div>

            <div className="footer flex justify-around bg-gray-600 mx-auto text-white w-full p-4">
                <div className="flex">
                    <Image
                        src={zimLogo}
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
                    <img src={dmcaLogo.src} alt=""/>
                    <img src={ecommerceLogo.src} alt=""/>
                </div>
            </div>
        </div>
    );
};
