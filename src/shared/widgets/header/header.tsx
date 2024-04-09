import { Navbar } from "@nextui-org/react"
import Link from "next/link"
import NavItems from "./navItems"
import ToolBar from "./toolbar"

const Header = () => {

  return (
    <Navbar maxWidth="full" isBlurred className="w-full h-[80px] bg-gradient-to-b from-gray-900 to-black m-auto border-b !border-b-[#ffffff48] sticky">
     <div className="w-[90%] m-auto flex justify-between items-center">
      <div>
        <Link href="/" className="font-[500] text-[25px]" >
            LMS
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <NavItems isMobile={false}/>
        <ToolBar/>
      </div>
     </div>
    </Navbar>
  )
}

export default Header
