"use client";
import { Card } from "@/components/ui/card";
import { IoFlagOutline } from "react-icons/io5";
import * as React from "react";

export const SynonymsAntonyms = () => {
  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Từ đồng nghĩa <span className="text-gray-400">(Synonym)</span>
          </h2>
          <div className="flex items-center gap-1">
            <span className="text-white">Độ phù hợp</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-blue-700 rounded-sm"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
              <div className="w-4 h-4 bg-blue-300 rounded-sm"></div>
            </div>
          </div>
        </div>
        <Card className="bg-gray-800 border-gray-700 p-4 text-white rounded-lg space-y-4">
          <div>
            <h3 className="text-sm  font-semibold">Phù hợp nhất</h3>
            <div className="flex gap-2 mt-2">
              <button className="bg-blue-900 text-white px-3 py-1 rounded-full">
                Murmur
              </button>
              <button className="bg-blue-900 text-white px-3 py-1 rounded-full">
                Mutter
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-sm  font-semibold">Phù hợp</h3>
            <div className="flex text-blue-800 gap-2 mt-2">
              <button className="bg-blue-500  px-3 py-1 rounded-full">
                Grumble
              </button>
              <button className="bg-blue-500  px-3 py-1 rounded-full">
                Stammer
              </button>
              <button className="bg-blue-500  px-3 py-1 rounded-full">
                Stutter
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Ít phù hợp</h3>
            <div className="flex text-blue-800 gap-2 mt-2">
              <button className="bg-blue-500  px-3 py-1 rounded-full">
                Ramble
              </button>
              <button className="bg-blue-500 px-3 py-1 rounded-full">
                Rumble
              </button>
              <button className="bg-blue-500  px-3 py-1 rounded-full">
                Utter
              </button>
              <button className="bg-blue-500  px-3 py-1 rounded-full">
                Whisper
              </button>
            </div>
          </div>
        </Card>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Từ trái nghĩa <span className="text-gray-400">(Antonym)</span>
          </h2>
          <div className="flex items-center gap-1">
            <span className="text-white">Độ phù hợp</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-orange-600 rounded-sm"></div>
              <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
              <div className="w-4 h-4 bg-orange-200 rounded-sm"></div>
            </div>
          </div>
        </div>
        <Card className="bg-gray-800 text-white border-gray-700 p-4 rounded-lg space-y-4">
          <div>
            <h3 className="text-sm  font-semibold">Phù hợp nhất</h3>
            <div className="flex gap-2 mt-2">
              <button className="bg-orange-600 text-white px-3 py-1 rounded-full">
                Keep quiet
              </button>
              <button className="bg-orange-600 text-white px-3 py-1 rounded-full">
                Specify
              </button>
            </div>
          </div>
          {/*<div className="border-2 border-b-gray-200"></div>*/}
          <div>
            <h3 className="text-sm  font-semibold">Phù hợp</h3>
            <div className="flex gap-2 text-amber-700 mt-2">
              <button className="bg-orange-500  px-3 py-1 rounded-full">
                Mitigate
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Ít phù hợp</h3>
            <div className="flex gap-2 text-amber-800 mt-2">
              <button className="bg-orange-500  px-3 py-1 rounded-full">
                Cheer
              </button>
              <button className="bg-orange-500  px-3 py-1 rounded-full">
                incomplete
              </button>
              <button className="bg-orange-500  px-3 py-1 rounded-full">
                Praise
              </button>
              <button className="bg-orange-500  px-3 py-1 rounded-full">
                Stay
              </button>
            </div>
          </div>
        </Card>
        <Card className=" p-6 bg-gray-900 text-white border-gray-800">
          <h3 className="text-lg font-semibold mb-2">
            Góp ý & Báo lỗi nội dung
          </h3>
          <p className="text-sm ">
            Mọi phản hồi của bạn sẽ được lắng nghe và góp phần giúp ZIM cải
            thiện chất lượng tự điển tốt nhất.
          </p>
          <button className="mt-4 inline-flex items-center   text-sm font-medium">
            <IoFlagOutline className="w-4 h-4 mr-2" />
            Góp ý
          </button>
        </Card>
      </div>
    </div>
  );
};
