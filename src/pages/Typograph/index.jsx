import React from "react";
import CardsT from "../../components/CardsT";
import MantisDashboard from "../../components/CardsT";
import TypographyCards from "../../components/CardsT";
import TypographyData from "../../components/CardsT";

function Typograph() {
  return (
    <div className="bg-[#FAFAFB] mt-12">
      <div>
        <div className="flex gap-2  text-[14px]">
          <span>Home</span>
          <span>/</span>
          <span className="text-black">Typography</span>
        </div>
        <div className="mt-3">
          <span className="text-black text-[16px] font-semibold">
            Typography
          </span>
        </div>
      </div>
      <CardsT />
    </div>
  );
}

export default Typograph;
