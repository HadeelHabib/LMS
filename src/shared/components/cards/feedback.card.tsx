import Image from "next/image";
import Ratings from "../../../utils/rating";
import { IMAGES } from "@/utils/images";

const FeedBackCard = () => {
  return (
    <div className="w-full bg-[#1A202B] radius-5 border  dark:bg-opacity-[0.20]   border-[#ffffff1d] backdrop-blur shadow-[bg-slate-700] rounded-lg p-3 shadow-inner ">
      <div className="flex w-full justify-between">
        <div className="flex">
          <Image
            src={IMAGES.profile}
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-2">
            <h5 className="text-[20px]">hadeel</h5>
            <h6 className="text-[16px] text-[#ffffffab]">IT student</h6>
          </div>
        </div>
        <Ratings rating={5} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi
        eius vero consequatur molestiae voluptatum, aliquam officia similique
        dolore voluptates distinctio quod mollitia ducimus numquam aperiam quos
        sapiente! Aperiam, sunt!
      </p>
    </div>
  );
};

export default FeedBackCard;
