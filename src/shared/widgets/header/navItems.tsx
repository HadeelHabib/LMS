"use client";

import { navItems } from "@/configs/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavItems: React.FC<Props> = ({ isMobile }) => {
  const [active, setActive] = useState("/");
  const path = usePathname();
  
  useEffect(() => {
    setActive(path);
  }, [path, active, setActive]);

  return (
    <div className="">
      <div className="md:flex hidden">
        {navItems.map((i: NavItem, index: number) => (
          <Link
            href={i.url}
            onClick={() => setActive(i.url)}
            className={`px-6 font-[400] text-[20px] ${
              active === i.url ? "text-[#37a39a]" : "text-white"
            }`}
            key={index}
          >
            {i.title}
          </Link>
        ))}
      </div>
      <div>

        {isMobile && (
          <div className="">
            <div className="w-full text-center py-7">
              <Link href={"/"}>
                <span
                  className={`font-[500] text-[20px] z-[22222222222] font-Poppins text-white`}
                >
                  LMS
                </span>
              </Link>
            </div>
              {navItems.map((i, index) => (
              <Link
                onClick={() => setActive(i.url)}
                className={`!block text-center py-5 font-[400] text-[25px]  ${
                  active === i.url ? "text-[#37a39a]" : "text-white"
                }`}
                href={i.url}
                key={index}
              >
                <span>{i.title}</span>
              </Link>
            ))}
            <p className="text-[16px] px-2 mt-[50%]  pl-5 text-white">
              Copyright © 2023 LMS
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default NavItems;
