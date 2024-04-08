"use client";
import { faqData, styles } from "@/configs/constant";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";




const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id: any) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
      <div id="FAQ" className="w-[90%] 800px:w-[80%] m-auto">
      
      <h1 style={{fontSize:"40px",fontWeight:"bold"}} className={`${styles.title} py-6 800px:text-[40px]`}>
          Frequently Asked Questions
        </h1>
      <div className="w-[80%] m-auto py-5 ">
      {faqData.map((i: FaqDataType, index: number) => (
        <div key={i.id} className={`border-t py-6`}>
          <dt className="text-lg">
            <button
              className="flex items-start justify-between w-full text-left focus:outline-none"
              onClick={() => toggleQuestion(i.id)}
            >
              <span className="font-medium">{i.question}</span>
              <span className="ml-6 flex-shrink-0">
                {activeQuestion === i.id ? (
                  <HiMinus className="h-6 w-6" />
                ) : (
                  <HiPlus className="h-6 w-6" />
                )}
              </span>
            </button>
          </dt>
          {activeQuestion === i.id && (
            <dd className="mt-2 pr-12">
              <p className="text-base font-Poppins">{i.answer}</p>
            </dd>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default FAQ;
