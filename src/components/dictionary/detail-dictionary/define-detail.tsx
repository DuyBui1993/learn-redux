import * as React from "react";
import Image from "next/image";
import { IoFlagOutline } from "react-icons/io5";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { RxBarChart } from "react-icons/rx";
import { Card } from "@/components/ui/card";
import ChuDuSpeak from "./img/chu-du-speak.png";
import American from "./img/american.png";
import UnionJack from "./img/union-jack.png";
import { Language } from "@/components/dictionary/detail-dictionary/language";

export const DefineDetail = ({ data }) => {
  const word = data?.content[0].word;
  const partOfSpeeches = data?.content[0].partOfSpeeches || [];
  const pronunciation = data?.content[0].pronunciation;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-screen-xl mx-auto">
        <div className="md:col-span-3">
          <div>
            <h1 className="text-2xl font-bold text-blue-400">
              {word}{" "}
              <span className="text-gray-400">
                ({partOfSpeeches[0]?.partOfSpeech})
              </span>
            </h1>
            <ul className="text-gray-400 mt-2 space-y-1">
              <li>{partOfSpeeches[0]?.definitions[0]?.definition}</li>
              <li>{partOfSpeeches[0]?.definitions[0]?.definitionVietnamese}</li>
            </ul>
          </div>
          <Image
            src={ChuDuSpeak}
            alt="QR Code"
            width={300}
            height={300}
            className="rounded-lg inline-block mt-1"
          />
        </div>

        <div className="md:col-span-6 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="text-3xl font-bold flex items-center gap-2 w-full">
              {word}
              <div className="bg-orange-400 w-40 h-10 flex items-center justify-center gap-2 text-lg rounded-full">
                {partOfSpeeches[0]?.partOfSpeech}
              </div>
              <div className="bg-orange-400 flex-grow h-1 text-lg rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={UnionJack}
                alt="flag"
                width={25}
                height={25}
                className="rounded-sm inline-block mt-1"
              />
              <HiMiniSpeakerWave className="w-4 h-4" />
              <span className="text-blue-400">/{pronunciation}/</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={American}
                alt="flag"
                width={25}
                height={25}
                className="rounded-sm inline-block mt-1"
              />
              <HiMiniSpeakerWave className="w-4 h-4" />
              <span className="text-blue-400">/{pronunciation}/</span>
            </div>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full ml-auto flex items-center gap-2">
              <RxBarChart className="w-4 h-4" />
              Tập phát âm
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              {partOfSpeeches[0]?.definitions[0]?.definition}
            </h2>
            <p className="text-gray-400">
              {partOfSpeeches[0]?.definitions[0]?.definitionVietnamese}
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="font-semibold mb-2">Ví dụ</h3>
            <div className="space-y-4">
              {partOfSpeeches[0]?.definitions[0]?.examples?.map(
                (example, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center w-full"
                  >
                    <div className="flex-1">
                      <p className="font-semibold">{example.exampleSentence}</p>
                      <p className="text-gray-400">
                        {example.exampleSentenceVietnamese}
                      </p>
                    </div>
                    <div className="flex justify-center items-center mx-2 ">
                      <Language />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="bg-neutral-800 text-white text-sm px-3 py-1 rounded-full ml-auto flex items-center gap-2">
                        <RxBarChart className="w-4 h-4" />
                        Tập phát âm
                      </button>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
          <Card className="p-6 bg-gray-900 text-white border-gray-800">
            <h3 className="text-lg font-semibold mb-2">
              Góp ý & Báo lỗi nội dung
            </h3>
            <p className="text-sm">
              Mọi phản hồi của bạn sẽ được lắng nghe và góp phần giúp ZIM cải
              thiện chất lượng từ điển tốt nhất.
            </p>
            <button className="mt-4 inline-flex items-center text-sm font-medium">
              <IoFlagOutline className="w-4 h-4 mr-2" />
              Góp ý
            </button>
          </Card>
        </div>

        <div className="md:col-span-3 max-w-lg mx-auto">
          <Card className="bg-gray-800 p-4 text-white rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Họ từ</h2>
            <div className="flex flex-wrap gap-2">
              {[word].map((word) => (
                <button
                  key={word}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full"
                >
                  {word}
                </button>
              ))}
            </div>
          </Card>
          <div className="p-4 ">
            <div className="text-lg font-semibold mb-2">Mô tả chung</div>
            <p className="text-gray-400 border-b-[1px] border-b-amber-700 pb-2">
              Từ &#34;{word}&#34; có nghĩa là phát âm không rõ ràng, thường gây
              khó khăn cho người nghe trong việc hiểu thông điệp.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Nguồn gốc và lịch sử</h2>
            <p className="text-gray-400 border-b-[1px] border-b-amber-700 pb-2">
              Từ &#34;{word}&#34; có nguồn gốc từ động từ tiếng Anh cổ &#34;
              {word}&#34;,mang nghĩa là phát âm không rõ ràng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
