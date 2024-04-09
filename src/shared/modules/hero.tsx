"use client";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import banner from "@/assets/banner-img-1.png";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import Image from "next/image";
import FeedBackPart from "./feedBackPart";

// 1000px: = lg: => 1200px: = xl: => 1500px: = 2xl: => 768px: = md:

const Hero = () => {
  return (
    <>
      <div className="w-[95%] h-screen m-auto md:flex items-center">
        <div className="absolute top-[100px] md:top-[unset] 2xl:h-[700px] 2xl:w-[700px] xl:h-[600px] xl:w-[600px] h-[40vh] left-5 w-[40vh] hero_animation rounded-[50%] xl:left-8 2xl:left-14" />
        <Image
          className="relative z-[11] pl-5 md:w-[50%]"
          src={banner}
          width={500}
          height={600}
          alt=""
        />
        <div className="md:w-[70%] flex flex-col items-center md:mt-[0px] text-center md:text-left mt-[150px]">
          <h2 className="text-[#fff] text-[30px] px-3 w-full lg:text-[70px] font-[600] font-Josefin py-2 lg:leading-[75px] 2xl:w-[60%] xl:w-[78%]">
            Build your IT
            <br /> Career with us
          </h2>
          <br />
          <p className="text-[#edfff4] font-Josefin font-[600] text-[18px] 2xl:!w-[60%] xl:!w-[78%]">
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
              <BiSearch className="text-white" size={30} />
            </div>
          </div>
          <br />
          <br />
          <div className="2xl:w-[55%] xl:w-[78%] w-[90%] flex items-center">
            <Image src={client1} alt="" className="rounded-full ml-[-20px]" />
            <Image src={client2} alt="" className="rounded-full ml-[-20px]" />
            <Image src={client3} alt="" className="rounded-full ml-[-20px]" />
            <p className="text-lg ml-2">
              500K+ People already trusted us.{" "}
              <Link href="/courses" className="text-[#46e256]">
                View Courses
              </Link>{" "}
            </p>
          </div>
          <br />
        </div>
      </div>
      <br />
      <div className="">
        <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl text-white md:!leading-[60px] font-[700] tracking-tight">
          Expand Your Career{" "}
          <span className={`text-gradient`}>Opportunity</span>
          <br />
          With Our Courses
        </h1>
      </div>
      <br />
      <FeedBackPart />
    </>
  );
};

export default Hero;
