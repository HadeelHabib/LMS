"use client";
import { ICONS } from "@/utils/icons";
import { useState } from "react";
import NavItems from "./navItems";

const ToolBar = () => {
  const [setOpen, useSetOpen] = useState(false);

  // const [setClose,useSetClose] = useState (false)
  return (
    <div>
      <span className="text-[25px] md:flex hidden">{ICONS.profile}</span>
      <div>
        <span
          // eslint-disable-next-line react-hooks/rules-of-hooks
          onClick={() => useSetOpen(!setOpen)}
          className="text-[25px] md:hidden flex cursor-pointer fixed z-[22222222]"
        >
          {" "}
          {setOpen ? ICONS.closeMenu : ICONS.menu}
        </span>
      </div>
      {setOpen && (
        <div className="fixed w-full h-screen top-0 left-0 z-[99999]  bg-[#00000024]">
          <div className="w-[70%] fixed z-[44444444444] h-screen bg-slate-900 bg-opacity-90 top-0 right-0">
            <NavItems isMobile={true} />
            <br />
            <br />
            <p className="text-[16px] px-2 pl-5 text-white"></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolBar;
