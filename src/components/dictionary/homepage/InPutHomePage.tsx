"use client";
import { IoMdSearch } from "react-icons/io";
import * as React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { fetchWordData } from "@/components/dictionary/api/hooks/searchWords";

const InPutHomePage = () => {
  const [valueInPut, setValueInPut] = useState("");

  const [isFocused, setFocused] = React.useState(false);
  const router = useRouter();

  const { data, error } = useQuery({
    queryKey: ["repoData", valueInPut],
    queryFn: () => fetchWordData(valueInPut),
    enabled: !!valueInPut,
  });
  if (error) return "An error has occurred: " + error.message;

  const haveData = data?.content?.length > 0;
  const handleSearchSubmit = (word: string) => {
    router.push(`/dictionary/detail?search=${word}`);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && valueInPut.trim() !== "") {
      handleSearchSubmit(valueInPut);
    }
  };

  return (
    <div
      className={`relative bg-white mt-16 w-[800px] h-[70px] px-4  flex items-center ${haveData ? "rounded-t-[36px]" : "rounded-full"}`}
    >
      <div className="text-gray-500 text-[24px] pr-2">
        <IoMdSearch />
      </div>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="outline-0 text-black text-[20px] font-semibold w-full"
        placeholder="Nhập từ cần tìm kiếm"
        onChange={(e) => {
          setValueInPut(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      {haveData && (
        <div
          className={`absolute  bg-white items-center flex left-0 top-[70px] w-[800px] h-max p-4 px-4 space-x-2 cursor-pointer ${haveData && "rounded-b-[36px]"}`}
        >
          <div className="outline-0 text-gray-500 text-[20px] font-semibold">
            {(data?.content || []).map((item, index) => {
              const { partOfSpeeches, word } = item;
              const firstPartOfSpeech = partOfSpeeches[0];
              const partOfSpeech = firstPartOfSpeech.partOfSpeech;
              const definitionVietnamese =
                firstPartOfSpeech.definitions[0].definitionVietnamese;
              return (
                <div
                  className="flex "
                  key={index}
                  onClick={() => handleSearchSubmit(word)}
                >
                  <div className="text-blue-600 w-max mr-2">{word}</div>
                  {definitionVietnamese}
                  <div className="text-xs bg-gray-300 rounded-full items-center flex p-2 ml-2">
                    {partOfSpeech}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default InPutHomePage;
