import React from "react";
import UpArrow from "../../Assets/Arrow.svg";
const Sales = ({
  title1,
  title2,
  textColour,
  blurColour,
  name,
  time,
  icon,
  amount,
  xp
}) => {
  return (
    <div className="h-[148px] w-[201px] rounded-[16px] bg-[#111111] p-[10px] relative">
      <div className={`absolute h-[100px] w-[100px] rounded-br-[100%] top-[0px] left-[0px] blur-xl `} style={{backgroundColor:blurColour}} />
      <div className="grid grid-cols-5 gap-[12px]">
        <div className="col-span-2">
          <img className="h-[52px] w-[52px]" src={icon} alt="" />
        </div>
        <div className="flex col-span-3 flex-col gap-[12px]">
          <div className="text-[14px] truncate text-[#FAFAFA]">{title1}</div>
          <div className="text-[12px]" style={{color:textColour}}>{title2}</div>
        </div>
      </div>
      <div className="flex  justify-between mt-[28px]">
        <div className="text-[#A2A2A2] text-[12px] font-[500]">
          {name}
        </div>
        <div className="flex gap-[6.3px] text-[#FAFAFA] text-[12px] mr-[10px] font-[500]">
          {amount}
          <img src={UpArrow} alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-[8px]">
        <div className="text-[#A2A2A2] text-[12px] font-[500]">
          {time}
        </div>
        <div className="flex gap-[6.3px] text-[#19ED7B] text-[12px] mr-[10px] font-[400]">
          +{xp}XP
        </div>
      </div>
    </div>
  );
};

export default Sales;
