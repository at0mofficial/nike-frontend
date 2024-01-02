"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
type thumbnail = {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
};
type Shoe = {
  thumbnail: thumbnail;
  bigShoe: StaticImageData;
};
const ShoeCard = ({
  shoe,
  changeBigShoeImage,
  currentBigShoeImage,
}: {
  shoe: Shoe;
  changeBigShoeImage: (shoe:StaticImageData) => void;
  currentBigShoeImage: StaticImageData;
}) => {
  const handleClick = () => {
    if (currentBigShoeImage !== shoe.bigShoe) {
      changeBigShoeImage(shoe.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        currentBigShoeImage === shoe.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4"> 
        <Image
          src={shoe.thumbnail}
          alt="shoeThumbnail"
          height={127}
          width={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default ShoeCard;
