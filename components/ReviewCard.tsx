import { star } from "@/public/icons";
import Image, { StaticImageData } from "next/image";

type Review = {
  imgURL:
    | StaticImageData
    | {
        src: string;
        height: number;
        width: number;
        blurWidth: number;
        blurHeight: number;
      };
  customerName: string;
  rating: number;
  feedback: string;
};

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Review) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="Customer Image"
        width={120}
        height={120}
        className="rounded-full"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <Image 
        src={star} 
        alt="star" 
        width={24} 
        height={24} 
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
