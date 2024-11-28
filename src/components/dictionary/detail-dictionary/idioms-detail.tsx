import { IoFlagOutline } from "react-icons/io5";
import { Card } from "@/components/ui/card";
import * as React from "react";

export const Idioms = () => {
  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen flex justify-center ">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-6">Không có idiom phù hợp</div>
        <Card className="p-6 bg-gray-900 text-white border-gray-800">
          <h3 className="text-lg font-semibold mb-2">
            Góp ý & Báo lỗi nội dung
          </h3>
          <p className="text-sm">
            Mọi phản hồi của bạn sẽ được lắng nghe và góp phần giúp ZIM cải
            thiện chất lượng tự điển tốt nhất.
          </p>
          <button className="mt-4 inline-flex items-center text-sm font-medium">
            <IoFlagOutline className="w-4 h-4 mr-2" />
            Góp ý
          </button>
        </Card>
      </div>
    </div>
  );
};
