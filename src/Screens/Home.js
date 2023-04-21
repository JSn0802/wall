import React from "react";
import Card from "./Components/Card";
// import { Azuki, Cryptoz, MAYC, Moonbird, Otherdeed } from '../Assets/SvgExports'
import Azuki from "../Assets/Azuki.svg";
import Cryptoz from "../Assets/Cryptoz.svg";
import MAYC from "../Assets/MAYC.svg";
import Moonbird from "../Assets/Moonbird.svg";
import Otherdeed from "../Assets/Otherdeed.svg";
import { salesData } from "./Components/data";
import Sales from "./Components/Sales";
import Profile from "./Components/Profile";
const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden pt-[2rem] bg-[#1E1E1E]">
      <div className="ml-[10px] flex gap-[2rem] justify-center">
      <Profile/>
        <div className="flex flex-col justify-center gap-[20px]">
          <div className="text-[14px] text-[#A2A2A2] font-[500]">
            Highlights
          </div>
        <div className="flex flex-wrap gap-[16px]">
        {salesData.map((data,index) => (
          <Sales
            title1={data.title1}
            title2={data.title2}
            textColour={data.textColour}
            blurColour={data.blurColour}
            name={data.name}
            time={data.time}
            icon={data.Icon}
            amount={data.amount}
            xp={data.xp}
            key={index}
          />
        ))}
      </div>

  <div className="flex flex-wrap gap-[1rem]">
      <Card Img={Azuki} title="Azuki"/>
      <Card Img={MAYC} title="MAYC"/>
      <Card Img={Moonbird} title="Moonbird"/>
      <Card Img={Otherdeed} title="Otherdeed"/>
      <Card Img={Cryptoz} title="Cryptoz"/>
      </div>
        </div>
      </div>
     
    </div>
  );
};
export default Home;
