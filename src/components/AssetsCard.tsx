import React from "react";
import { IAssetCard } from "../pages/DashboardData";

const AssetsCard = (props: IAssetCard) => {
  const {
    assetIcon,
    backgroundIcon,
    name,
    price,
    percentageChangeOfPrice,
    totalLockedValue,
    popularPairing,
    profit,
  } = props;

  const textColor = profit ? `text-[#00FFA3]` : `text-[#FF4D4D]`;

  return (
    <div
      className="flex flex-col items-center justify-center relative w-[fit-content]"
      key={name}
    >
      <div className="w-32 h-32 rounded-full bg-[#14172B] items-center flex justify-center absolute top-[-85px]">
        <div
          className={`w-24 h-24 rounded-full items-center flex justify-center`}
          style={{ backgroundImage: `url(${backgroundIcon})` }}
        >
          <img src={assetIcon} className="min-w-[50px]" alt={assetIcon} />
        </div>
      </div>

      <div className="w-[290px] h-[350px] bg-gradient-to-b from-[#626a881a] to-[#2e31491a] rounded-[35px] text-center flex flex-col justify-evenly">
        <p className="text-[#737BAE] mt-[40px]">{name}</p>
        <div className="flex text-center justify-center items-center flex-col ">
          <div className="flex justify-center w-[90%] bg-[#14172B] rounded-full p-2">
            <p className="mr-5">$ {price}</p>

            <p className={`text-[12px] items-center flex ${textColor}`}>
              {profit ? "+ " : "-"} %{percentageChangeOfPrice} %
            </p>
          </div>

          <p className="text-[#737BAE] mt-[2px]">Price</p>
        </div>
        <div className="flex text-center justify-center items-center flex-col ">
          <div className="flex justify-center w-[90%] bg-[#14172B] rounded-full p-2">
            <p>$ {totalLockedValue}</p>
          </div>
          <p className="text-[#737BAE] mt-[2px]">TVL</p>
        </div>
        <div>
          <div className="flex text-center justify-center items-center flex-col ">
            <div className="flex justify-center w-[40%] bg-[#14172B] rounded-full p-2">
              {popularPairing.map((item) => {
                return (
                  <img
                    src={item}
                    className="w-[22px] h-[22px] mr-2"
                    alt={item}
                    key={item}
                  />
                );
              })}
            </div>
            <p className="text-[#737BAE] mt-2">Popular pairs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsCard;
