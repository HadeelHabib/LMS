import { comunicate } from "@/configs/constant";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="py-5 border-t border-t-[#ffffff40] ">
        <div className="w-[85%] m-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {comunicate.map((i: Communication, index: number) => (
            <div key={index}>
              <h2 className="text-[20px] py-4">{i.title}</h2>
              {i.footerItems?.map((i: FooterItems, index: number) => (
                <Link href={i.href} key={index} className="py-2 text-lg block">
                  {i.title}
                </Link>
              ))}
            </div>
          ))}
          <div>
            <h2 className="text-[20px] py-4">Contact Info</h2>
            <p className="text-lg">
              Call Us: +963 933 077 958
              <br />
              Address: +7011 Vermont Ave, Los
              <br />
              Angeles, CA 90044
              <br />
              Mail Us: hello@LMS.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-white text-center py-10 h-10 text-lg">
        Copyright © 2023 Becodemy. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
