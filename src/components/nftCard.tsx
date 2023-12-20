/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./button";

type NftCardProps = {
  type: number;
  tokenId: number;
  imgUrl: string;
};

const NftCard: React.FC<NftCardProps> = ({ type, tokenId, imgUrl }) => {
  return (
    <div
      className={`w-full flex flex-col bg-black bg-opacity-30 rounded-md p-[10px]`}
    >
      <div className="relative shadow-nftImgShadow min-h-[340px]">
        <img src={imgUrl} className="relative w-full rounded-md" alt="" />
        <div className="absolute top-[10px] left-[10px] py-[7px] px-[10px] bg-black bg-opacity-30 rounded-md text-[14px] font-extrabold text-white">
          #{tokenId}
        </div>
      </div>
      <div className="flex items-center justify-between w-full p-[20px]">
        <Button type={type} />
      </div>
    </div>
  );
};

export default NftCard;
