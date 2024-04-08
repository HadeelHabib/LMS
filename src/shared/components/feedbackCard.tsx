import Image from "next/image"
import Ratings from "./rating"
import React from "react"

const FeedBackCard : React.FC<feedBack>= ({img,name,description,comment}) => {
  return (
    <div className="w-full bg-slate-500 radius-5 border  dark:bg-opacity-[0.20]   border-[#ffffff1d] backdrop-blur shadow-[bg-slate-700] rounded-lg p-3 shadow-inner ">
      <div className="flex w-full">
        <Image
        src={img}
        alt=""
        width={50}
        height={50}
        className="rounded-full"
        />
        <div className="">
            <h5 className="text-[20px]">{name}</h5>
            <h6 className="text-[16px] text-[#ffffffab]">{description}</h6>
        </div>
        <Ratings rating={5}/>
      </div>
      <p>{comment}</p>
    </div>
  )
}

export default FeedBackCard
