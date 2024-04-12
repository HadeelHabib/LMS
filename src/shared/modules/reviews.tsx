import Image from "next/image";
import business from "@/assets/business-img.png";
import FeedBackCard from "../components/cards/feedback.card";

const Reviews = () => {
  return (
    <div className="mt-5 md:w-[90%] m-auto w-[90%]">
      <div className=" md:flex w-[80%] m-auto">
        <Image className="object-contain" src={business} width={650} height={400} alt="" />
        <div className="md:w-[50%] mt-3">
          <h2 className="text-[25px] text-white font-[700] font-Poppins text-center py-2 md:!text-[40px] lg:text-left lg:font-[400] lg:!text-[20]">
            Our Students Are <span className="text-gradient">Our Strength</span>
            <br />
            See What They Say About Us
          </h2>
          <p className="text-[16px] font-Poppins sm:text-center mb-3 text-white lg:mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempore
            neque, vel delectus molestias porro itaque aperiam exercitationem
            nihil quibusdam debitis quaerat! Ex laudantium architecto, aliquid
            sint ut rerum illo.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0">
      <FeedBackCard/>
      <FeedBackCard/>
      <FeedBackCard/>
      <FeedBackCard/>
      <FeedBackCard/>
      <FeedBackCard/>
      <FeedBackCard/>

      </div>
    </div>
  );
};

export default Reviews;
