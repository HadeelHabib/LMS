"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import banner from "@/assets/banner-img-1.png";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import Image from "next/image";
type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div style={{height:"90vh", gap:"15%"}} className=" w-[90%] m-auto flex items-center">
      <div 
      style={{height:"40vmax",
      width:"40vmax",}}
       className="rounded-full hero_animation absolute top-[300px] z-[11] w-24 h-24"></div>
      <Image className="relative z-[111] pl-5" src={banner} width={500} height={600} alt=""/>
      <div
      style={{alignItems:"center",
      marginTop:"90px"      }} 
      className="1000px:w-[60%] flex flex-col 1000px:mt-[0px] text-center 1000px:text-left ">
        <h2 
        style={{
         width:"100%",
        fontWeight:"700",
        fontSize:"60px"}} >
        Build your IT<br/> Career with us
        </h2>
        <br />
        <p className="text-[#edfff4] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
         Empower your programming journey with LMS<br/> dedicated community and comprehensive resources. 
        </p>
        <br />
        <br />
        <div className="1500px:w-[55%]: 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
          <input
            type="search"
            placeholder="Search Courses..."
            style={{
              padding:"0.5rem",
              borderRadius:"5px",
              width:"100%",
              height:"100%",
              backgroundColor: "rgb(87 87 87 / var(--tw-bg-opacity))"
            }}
            className=" border dark:border-none bg-[#575757] placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
          />
          <div style={{
            position:"absolute",
            display:"flex",
            alignItems:"center",
            justifyItems:"center",
            width:"50px",
            cursor:"pointer",
            height:"50px",
            right:"0px",
            top:"0",
            backgroundColor:"#39c1f3",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
          >
            <BiSearch className="text-white" size={30} />
          </div>
        </div>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
          <Image
            src={client1}
            alt=""
            className="rounded-full"
            style={{
              marginLeft: "-20px",
            }}
          />
          <Image
            src={client2}
            alt=""
            style={{
              marginLeft: "-20px",
            }}
            className="rounded-full ml-[-20px]"
          />
          <Image
            src={client3}
            alt=""
            style={{
              marginLeft: "-20px",
            }}
            className="rounded-full ml-[-20px]"
          />
          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            500K+ People already trusted us.{" "}
            <Link
              href="/courses"
              style={{
                color:"#46e256"
              }}
            >
              View Courses
            </Link>{" "}
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Hero;
