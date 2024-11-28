import Image from "next/image";
import zimLogo from "@/components/dictionary/homepage/image/zim-logo.png";
import dmcaLogo from "@/components/dictionary/homepage/image/DMCA-protected.png";
import ecommerceLogo from "@/components/dictionary/homepage/image/logo-bocongthuong.png";
import * as React from "react";

export const DetailFooter = () => {
  return (
    <div className="footer fixed bottom-0 flex justify-around bg-gray-600 mx-auto text-white w-full p-4">
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
        <img src={dmcaLogo.src} alt="" />
        <img src={ecommerceLogo.src} alt="" />
      </div>
    </div>
  );
};
