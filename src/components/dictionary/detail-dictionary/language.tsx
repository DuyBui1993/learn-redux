import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import * as React from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import UnionJack from "@/components/dictionary/detail-dictionary/img/union-jack.png";
import American from "@/components/dictionary/detail-dictionary/img/american.png";
import China from "@/components/dictionary/detail-dictionary/img/china-flag.png";
import Russian from "@/components/dictionary/detail-dictionary/img/russian-flag.png";
import Indian from "@/components/dictionary/detail-dictionary/img/indian-flag.png";

export const Language = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <div className="px-6 py-2 flex items-center justify-between border-none rounded-full bg-neutral-800">
            <HiMiniSpeakerWave fontSize={15} className="text-blue-700" />
            <div className="text-neutral-600 mx-2">|</div>
            <MdOutlineKeyboardArrowDown fontSize={15} className="text-white" />
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <div className="flex items-center gap-2">
              <Image
                src={American}
                alt="flag"
                width={25}
                height={25}
                className="rounded-sm inline-block mt-1"
              />
              <HiMiniSpeakerWave className="w-4 h-4 text-blue-800" />
              <span className="text-white">Anh - Mỹ</span>
            </div>
          </MenubarItem>
          <MenubarItem>
            <div className="flex items-center gap-2">
              <Image
                src={UnionJack}
                alt="flag"
                width={25}
                height={25}
                className="rounded-sm inline-block mt-1"
              />
              <HiMiniSpeakerWave className="w-4 h-4 text-blue-800" />
              <span className="text-white">Anh - Anh</span>
            </div>
          </MenubarItem>
          <MenubarItem>
            <div className="flex items-center gap-2">
              <Image
                src={Russian}
                alt="flag"
                width={25}
                height={25}
                className="rounded-sm inline-block mt-1"
              />
              <HiMiniSpeakerWave className="w-4 h-4 text-blue-800" />
              <span className="text-white">Anh - Nga</span>
            </div>
          </MenubarItem>
          <MenubarItem>
            <div className="flex items-center gap-2">
              <Image
                src={China}
                alt="flag"
                width={25}
                height={25}
                className="rounded-sm inline-block mt-1"
              />
              <HiMiniSpeakerWave className="w-4 h-4 text-blue-800" />
              <span className="text-white">Anh - Trung</span>
            </div>
          </MenubarItem>
          <MenubarItem>
            <div className="flex items-center gap-2">
              <Image
                src={Indian}
                alt="flag"
                width={25}
                height={25}
                className="rounded-sm inline-block mt-1"
              />
              <HiMiniSpeakerWave className="w-4 h-4 text-blue-800" />
              <span className="text-white">Anh - Ấn</span>
            </div>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
