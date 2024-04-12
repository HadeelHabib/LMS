"use client";
import { courses, styles } from "@/configs/constant";
import CourseCard from "@/shared/components/cards/course.card";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Page = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <h1
        className={`${styles.title} py-5 800px:text-[40px] font-[700] text-[40px] `}
      >
        Let's take a look with our{" "}
        <span className="text-gradient">Courses</span>
      </h1>
      <div className="md:w-[80%] w-full md:mx-auto flex items-center ">
        {courses.map((i: Buttons, index: number) => (
          <div className="h-screen">
            <Button
              key={index}
              className={`md:mt-8 mx-1 text-[12px] text-white md:mx-3  md:p-7 lg:p-4 lg:text-[17px] p-2 md:text-[15px] py-2 sm:text-[14px] rounded-[30px] md:flex items-center justify-center font-Poppins ${
                category === i.title ? "bg-[linear-gradient(90deg,_#3e7fd9_2.34%,_#5c3bd6_100.78%)] " : "bg-slate-500 "
              }`}
              onClick={() => setCategory(i.title)}
            >
              {i.title}
            </Button>
            {category === i.title &&
              (i.title === "Programming" || i.title === "All" ? (
                <div className=" absolute mt-20 grid md:grid-cols-4  grid-cols-1 w-[90%] left-1 md:mx-auto gap-4 md:left-20">
                  <CourseCard />
                  <CourseCard />
                </div>
              ) : (
                <p
                  className={`${styles.label} text-[25px] items-center mt-[15%] md:text-[20px]  absolute left-[20%]`}
                >
                  No courses found in this category. Please try another one!
                </p>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
