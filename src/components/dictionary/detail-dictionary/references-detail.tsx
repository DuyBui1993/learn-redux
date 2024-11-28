import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { PiPencilLight } from "react-icons/pi";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiListDashesLight } from "react-icons/pi";
import { Card } from "@/components/ui/card";
import { IoFlagOutline } from "react-icons/io5";
interface SkillRowProps {
  icon: React.ReactNode;
  title: string;
  score: number;
  label: string;
}
export const SkillRow = ({ icon, title, score, label }: SkillRowProps) => {
  return (
    <div className="flex flex-col items-start p-4">
      <div className="flex items-center ">
        <div className="w-8 h-8  flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="font-medium">{title}</div>
      </div>
      <div className="flex items-center space-x-2 w-full">
        <Progress
          value={score * 12.5}
          className="bg-black h-2 rounded-md flex-1"
        />
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );
};

export const References = () => {
  return (
    <div className=" flex flex-col bg-gray-900 text-white min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-screen-xl mx-auto">
        <div className="md:col-span-3 flex-grow">
          <Card className=" p-6  text-white bg-gray-900 border-gray-800 text-center">
            <div className="text-2xl font-bold text-white">
              Tần suất xuất hiện
            </div>
            <div className="text-6xl font-bold text-blue-500">
              1.0<span className="text-2xl text-gray-400">/8</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-gray-400 px-4 py-2 rounded-full bg-gray-900">
                Thấp
              </div>
            </div>

            <div className="space-y-4">
              <SkillRow
                icon={<LiaHeadphonesAltSolid className="w-5 h-5" />}
                title="Listening"
                score={2}
                label="Rất thấp"
              />
              <SkillRow
                icon={<RxSpeakerLoud className="w-5 h-5" />}
                title="Speaking"
                score={1}
                label="Rất thấp"
              />
              <SkillRow
                icon={<IoEyeOutline className="w-5 h-5" />}
                title="Reading"
                score={1}
                label="Rất thấp"
              />
              <SkillRow
                icon={<PiPencilLight className="w-5 h-5" />}
                title="Writing Task 1"
                score={1}
                label="Rất thấp"
              />
              <SkillRow
                icon={<PiPencilLight className="w-5 h-5" />}
                title="Writing Task 2"
                score={1}
                label="Rất thấp"
              />
            </div>
          </Card>
        </div>

        <div className="md:col-span-9 mx-auto">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">
              Tài liệu trích dẫn có chứa từ
            </h1>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-gray-900 text-white  gap-2 ">
              <TabsTrigger
                value="all"
                className="text-sm border rounded-full px-4 py-2 focus:outline-none active:bg-none data-[state=active]:bg-blue-700  data-[state=active]:text-while data-[state=active]:border-none"
              >
                <PiListDashesLight className="w-4 h-4 mr-2" />
                Tất cả
              </TabsTrigger>
              <TabsTrigger
                value="reading"
                className="text-sm border rounded-full px-4 py-2 focus:outline-none active:bg-none data-[state=active]:bg-blue-700  data-[state=active]:text-while data-[state=active]:border-none"
              >
                <IoEyeOutline className="w-4 h-4 mr-2" />
                Reading
              </TabsTrigger>
              <TabsTrigger
                value="writing"
                className="text-sm border rounded-full px-4 py-2 focus:outline-none active:bg-none data-[state=active]:bg-blue-700  data-[state=active]:text-while data-[state=active]:border-none"
              >
                <PiPencilLight className="w-4 h-4 mr-2" />
                Writing
              </TabsTrigger>
              <TabsTrigger
                value="speaking"
                className="text-sm border rounded-full px-4 py-2 focus:outline-none active:bg-none data-[state=active]:bg-blue-700  data-[state=active]:text-while data-[state=active]:border-none"
              >
                <RxSpeakerLoud className="w-4 h-4 mr-2" />
                Speaking
              </TabsTrigger>
              <TabsTrigger
                value="listening"
                className="text-sm border rounded-full px-4 py-2 focus:outline-none active:bg-none data-[state=active]:bg-blue-700  data-[state=active]:text-while data-[state=active]:border-none"
              >
                <LiaHeadphonesAltSolid className="w-4 h-4 mr-2" />
                Listening
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className=" p-4 ">
              Không có tài liệu phù hợp
            </TabsContent>
            <TabsContent value="reading" className=" p-4 ">
              Không có tài liệu phù hợp
            </TabsContent>
            <TabsContent value="writing" className=" p-4 ">
              Không có tài liệu phù hợp
            </TabsContent>
            <TabsContent value="speaking" className=" p-4 ">
              Không có tài liệu phù hợp
            </TabsContent>
            <TabsContent value="listening" className=" p-4 ">
              Không có tài liệu phù hợp
            </TabsContent>
          </Tabs>

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
    </div>
  );
};
