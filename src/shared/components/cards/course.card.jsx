import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import Ratings from '../../../utils/rating'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/utils/images'

const CourseCard = () => {
  return (
<Link
      href={"/"}
    >
      <div className="w-full min-h-[35vh] bg-slate-500 bg-opacity-20 backdrop-blur border border-[#ffffff1d] shadow-[bg-slate-700] rounded-lg p-3 shadow-inner">
        <Image
          src={IMAGES.courseIMG}
          width={500}
          height={300}
          objectFit="contain"
          className="rounded w-full"
          alt=""
        />
        <br />
        <h1 className="font-Poppins text-[16px] text-[#fff]">
          lms for beginners
        </h1>
        <div className="w-full flex items-center justify-between pt-2">
          <Ratings rating={5} />
          <h5
            className={`text-[#fff]`}
          >
            1000 Students
          </h5>
        </div>
        <div className="w-full flex items-center justify-between pt-3">
          <div className="flex">
            <h3 className="text-[#fff]">
            10$
            </h3>
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-[#fff]">
              1000$
            </h5>
          </div>
          <div className="flex items-center pb-3">
            <AiOutlineUnorderedList size={20} fill="#fff" />
            <h5 className="pl-2 text-[#fff]">
              20 Lectures
            </h5>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
