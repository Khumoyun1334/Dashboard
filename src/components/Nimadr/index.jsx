import { AiOutlineGift } from "react-icons/ai";
import React from "react";

function Nmadr() {
  return (
    <div>
      <div className="bg-white py-4 border rounded-[8px]">
        <div className="flex justify-between px-6">
          <div className="flex gap-4">
            <div className="bg-gray-100 rounded-full w-[40px] h-[40px] items-center justify-center flex">
              <AiOutlineGift color="#7BD34E" size={"22px"} />
            </div>
            <div>
              <p className="text-[15px] font-semibold">Order #002434</p>
              <p className="text-[10px]">Today, 2:00 AM</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">+ $1,430</p>
            <p className="text-[14px]">78%</p>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="flex justify-between mt-5 px-6">
          <div className="flex gap-4">
            <div className="bg-gray-100 rounded-full w-[40px] h-[40px] items-center justify-center flex">
              <AiOutlineGift color="#7BD34E" size={"22px"} />
            </div>
            <div>
              <p className="text-[15px] font-semibold">Order #002434</p>
              <p className="text-[10px]">Today, 2:00 AM</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">+ $1,430</p>
            <p className="text-[14px]">78%</p>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="flex justify-between mt-5 px-6">
          <div className="flex gap-4">
            <div className="bg-gray-100 rounded-full w-[40px] h-[40px] items-center justify-center flex">
              <AiOutlineGift color="#7BD34E" size={"22px"} />
            </div>
            <div>
              <p className="text-[15px] font-semibold">Order #002434</p>
              <p className="text-[10px]">Today, 2:00 AM</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">+ $1,430</p>
            <p className="text-[14px]">78%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nmadr;
