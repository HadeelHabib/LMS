import Image from "next/image";
import business from "@/assets/business-img.png";
import { styles } from "@/configs/constant";

const FeedBackPart = () => {
  return (
    <div className="mt-5 w-full">
      <div style={{ width: "80%", margin: "auto" }} className=" md:flex block">
        <Image src={business} width={600} alt="" />
        <div style={{ width: "40%", marginTop: "3rem" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              paddingBottom: "2rem",
            }}
            className="1290:font-[20px]"
          >
            Our Students Are <span className="text-gradient">Our Strngth</span>
            <br />
            See What They Say About Us
          </h2>
          <p className="font-[500] text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempore
            neque, vel delectus molestias porro itaque aperiam exercitationem
            nihil quibusdam debitis quaerat! Ex laudantium architecto, aliquid
            sint ut rerum illo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackPart;
