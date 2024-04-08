

export const navItems: NavItem[] = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Courses",
        url: "/courses",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Policy",
        url: "/policy",
    },
    {
        title: "FAQ",
        url: "/faq",
    },
]

export const faqData: FaqDataType[] = [
    {
      id: 1,
      question: "Will I receive a certificate for each course?",
      answer:
        "Yes — each student who completes any course will receive a certificate of completion to acknowledge their proficiency. We encourage students to include these on their LinkedIn profiles and in their job applications!",
    },
    {
      id: 2,
      question: "Can I get source code of each course?",
      answer:
        "Yes - You will get source code of all courses when you will watch the course video.",
    },
    {
      id: 3,
      question:
        "Can I ask about anything related course or if my code dosen't work?",
      answer:
        "Yes, you can comment on every part of the videos in the course. We'll always try to reply to your comment and fix any issues you may have.",
    },
    {
      id: 4,
      question: "Can I download any course videos?",
      answer:
        "For security reasons, course videos cannot be downloaded. However, you have lifetime access to each purchased course and can watch them anytime, anywhere with your account",
    },
  ];
  export const comunicate: Communication[] = [
    {
      title: "About",
      footerItems: [
        {
          title: "Our Story",
          href: "/",
        },
        {
          title: "Privacy Policy",
          href: "/",
        },
        {
          title: "FAQ",
          href: "/",
        },
      ],
    },
    {
      title: "Quick Links",
      footerItems: [
        {
          title: "Courses",
          href: "/",
        },
        {
          title: "My Account",
          href: "/",
        },
        {
          title: "Course Dashboard",
          href: "/",
        },
      ],
    },
    {
      title: "Social Links",
      footerItems: [
        {
          title: "Youtube",
          href: "/",
        },
        {
          title: "Instagram",
          href: "/",
        },
        {
          title: "Github",
          href: "/",
        },
      ],
    },
  ];
  
  export const styles = {
    title: "text-[25px] font-bold text-white  font-Poppins text-center py-2",
    label:"text-[16px] font-Poppins text-white",
    input:"w-full text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins",
    button:"flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full text-[16px] font-Poppins font-semibold"
}