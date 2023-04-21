import React, { useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import ProfilePhoto from "../../Assets/Profile.svg";
import Bat from "../../Assets/Bat.svg";
import Rainbow from "../../Assets/Rainbow.svg";
import Dude from "../../Assets/Dude.svg";
import Eminem from "../../Assets/Eminem.svg";
import { Social, Twitter } from "../../Assets/SvgExports";
const Profile = () => {
  const [arr, setArr] = useState([
    {
      text: "Art",
      clicked: true,
    },
    {
      text: "Utility",
      clicked: true,
    },
    {
      text: "PFP",
      clicked: false,
    },
    {
      text: "Metaverse",
      clicked: false,
    },
    {
      text: "Gaming",
      clicked: false,
    },
    {
      text: "PFP",
      clicked: false,
    },
    {
      text: "ens",
      clicked: false,
    },
  ]);
  // const arr = ["Art", "Utility", "PFP", "Metaverse", "Gaming", "PFP", "ens"];
  return (
    <div className="h-[640px] w-[292px] rounded-[16px] px-[18px] pt-[16px] pb-[24px] bg-[#111111] flex flex-col">
      <div className="flex gap-[12px]">
        <div className="w-[84px] flex flex-col gap-[8px]">
          <CircularProgressbarWithChildren
            value={75}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: "gold",
              rotation: 0.5,
              strokeLinecap: "round",
            })}
          >
            <img src={ProfilePhoto} alt="" />
          </CircularProgressbarWithChildren>
          <div className="w-[47px] h-[28px] rounded-[44px] bg-[#F8A9101A] ms-[15px] text-[12px] text-[#FFC148] flex justify-center items-center">
            LVL 2
          </div>
        </div>
        <div className="flex flex-col gap-[2px] mt-[20px]">
          <div className="text-[19px] text-[#FFFFFF] font-[500]">
            dingaling.eth
          </div>
          <div className="text-[12px] text-[#A2A2A2] font-[400]">
            0xadgf....jkld
          </div>
        </div>
      </div>
      <div className="mt-[32px] p-[0px] gap-[20px] flex justify-start">
        <div className="h-[32px] w-[126px] gap-[8.36px] rounded-[24px] bg-[#1A1A1A] text-[12px] font-[400] text-[#A2A2A2] flex justify-center items-center">
          <Twitter />
          @dingalingts
        </div>
        <Social />
      </div>
      <div className="text-[14px] text-[#A2A2A2] mt-[32px] font-[400]">
        An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner
        of 📦 @nftboxes
      </div>
      <div className="text-[12px] text-[#A2A2A2] font-[400] mt-[32px]">
        Common communties (3)
      </div>
      <div className="flex flex-wrap gap-[8px]">
        <img src={Bat} alt="" />
        <img src={Rainbow} alt="" />
        <img src={Eminem} alt="" />
        <img src={Dude} alt="" />
      </div>
      <div className="flex flex-wrap gap-[8px] mt-[32px]">
        {arr.map((data, index) => (
          <div className="px-[10px] py-[6px] text-[12px] border-[1px] rounded-[40px]" style={data.clicked?{borderColor:"#FFC148", color:"#FFC148"}:{borderColor:"#1A1A1A",color:"#A2A2A2"}}>
            {data.text} 12%
          </div>
        ))}
      </div>
      <div className="rounded-[24px] flex justify-center border-[#A2A2A2] border-[1px] px-[37px] py-[12px] text-[#FAFAFA] text-[14px] font-[400] mt-[36px]">
        Subscribe {">>"}
      </div>
    </div>
  );
};

export default Profile;
