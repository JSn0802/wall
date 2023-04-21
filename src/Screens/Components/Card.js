import React from "react";
import UpArrow from "../../Assets/Arrow.svg";

const Card = ({ Img, title }) => {
  return (
    <div className="w-fit rounded-[4px] pt-[4px] pb-[8px] bg-[#111111] pl-[8px] relative">
      <div className="h-[22px] w-[69px] rounded-[31px] z-1 bg-[#00000080] absolute top-[171px] right-[8px] py-[1px] px-[6px] text-[#FAFAFA] text-[11px] font-[500]">
        3 months
      </div>
      <img src={Img} alt="" />
      <div className="mt-[16px] h-full  pt-[20px]">
        <div className="text-[#FAFAFA] text-[14px] font-[500]">
          {title}#9839
        </div>
        <div className="flex justify-between mt-[8px]">
          <div className="text-[#A2A2A2] text-[12px] font-[500]">Bought</div>
          <div className="flex gap-[6.3px] text-[#FAFAFA] text-[12px] mr-[10px] font-[500]">
            02.82
            <img src={UpArrow} alt="" />
          </div>
        </div>
        <div className="flex justify-between mt-[8px]">
          <div className="text-[#A2A2A2] text-[12px] font-[500]">Floor</div>
          <div className="flex gap-[6.3px] text-[#FAFAFA] text-[12px] mr-[10px] font-[500]">
            12.74
            <img src={UpArrow} alt="" />
            <span className="text-[#19ED7B]">+21.6%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
