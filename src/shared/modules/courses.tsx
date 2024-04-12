import CourseCard from "@/shared/components/cards/course.card";

const Courses = () => {
  return (
    <div className="md:w-[90%] w-[95%] m-auto py-5">
      <div className="text-center 2xl:my-16 font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl text-white md:!leading-[60px] font-[700] tracking-tight mb-6">
        <h1>
          Expend Your Career{" "}
          <span className="text-gradient">
            Opportunity
            <br />
          </span>
          With Our Courses
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 2xl:grid-cols-3 2xl:gap-[35px] mb-12 border-0">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />

      </div>
    </div>
  );
};

export default Courses;
