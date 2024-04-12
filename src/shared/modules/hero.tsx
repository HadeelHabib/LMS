"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import { ICONS } from "@/utils/icons";

// 1000px: = lg: => 1200px: = xl: => 1500px: = 2xl: => 768px: = md:

const Hero = () => {
  return (
    <>
      <div className="w-[95%] mt-[10%] m-auto md:flex items-center">
        <div className="absolute top-[100px] md:w-[400px] md:h-[400px] md:top-[unset] 2xl:h-[700px] 2xl:w-[700px] xl:h-[600px] xl:w-[600px] h-[40vh] left-5 w-[40vh] hero_animation rounded-[50%] xl:left-8 2xl:left-14 sm:w-[450px] sm:h-[450px] sm:m-auto" />
        <Image
          className="relative z-[11] pl-5 md:w-[50%]"
          src={IMAGES.banner}
          width={500}
          height={600}
          alt=""
        />
        <div className="md:w-[70%] flex flex-col items-center md:mt-[0px] text-center md:text-left mt-[150px]">
          <h2 className="text-[#fff] md:!mt-0  text-[30px] px-3 w-full sm:text-[40px] md:text-[40px] md:font-[700] font-[600] font-Josefin lg:leading-[75px] 2xl:w-[60%] xl:w-[78%] ">
            Build your <span className="text-gradient">IT</span> 
            <br /> Career with us
          </h2>
          <br />
          <p className="text-[#edfff4] font-Josefin font-[600] text-[18px] 2xl:!w-[60%] xl:!w-[78%] xl:text-left">
            Empower your programming journey with LMS
            <br /> dedicated community and comprehensive resources.
          </p>
          <br />
          <br />
          <div className="2xl:w-[60%] xl:w-[78%] w-[90%] h-[50px] bg-transparent relative">
            <input
              type="search"
              placeholder="Search Courses..."
              className="bg-transparent border rounded-[5px] p-2 w-full h-full outline-none text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
            />
            <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
              {ICONS.search}
            </div>
          </div>
          <br />
          <br />
          <div className="2xl:w-[55%] xl:w-[78%] w-[90%] ml-2 flex items-center">
            <Image src={IMAGES.client1} alt="" className="rounded-full ml-[-20px]" />
            <Image src={IMAGES.client2} alt="" className="rounded-full ml-[-20px]" />
            <Image src={IMAGES.client3} alt="" className="rounded-full ml-[-20px]" />
            <p className="text-lg ml-2">
              500K+ People already trusted us.{" "}
              <Link href="/courses" className="text-[#46e256] text-left">
                View Courses
              </Link>{" "}
            </p>
          </div>
          <br />
        </div>
      </div>
      <br />
  
     
    </>
  );
};

export default Hero;
