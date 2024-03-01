/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import SearchBox from "@/src/components/SearchBox";
import { LegacyRef, MutableRefObject, Suspense, useRef, useState } from "react";
import {SearchBoxSkeleton, SearchPaginationSkeleton} from "@/src/components/skeleton/Skeleton";
import ScrollMotion from "@/src/components/ScrollMotion";
import Trust from "../components/Trust";
import Start from "../components/start";
import Discover from "../components/Discover";
import SlickSlider from "../components/SlickSlider";
import SearchPagination from "../components/SearchPagination";


const ForHiring = () => {

  const Trustdata = [
    {
      img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want."
    },
    {
      img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want."
    },
    {
      img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want."
    },
    {
      img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want."
    },
    {
      img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want."
    },

  ];

  const startContent =
  {
    title: "Start Hiring",
    subtitle: "top freelancer",
    description: "Get Started for free. Plus, Independents on CrewLance keep 100% of what you pay them."
  };

  const data = [
    { img: "/thumbnail5.png", title: "Personal website examples", description: "Learn how to make a personal website and get        inspired by powerful websites from the CrewLance community. " },
    { img: "/thumbnail6.png", title: "Independent Contractors", description: " In recent years, many workers have traded traditional employment for freelance work. But what is an independent Contractor?" },
    { img: "/thumbnail7.png", title: "How to Create Case Studies", description: " Wondering how to create case studies and implement them effectively? This practical guide provides tips and case study examples. " },
    { img: "/thumbnail8.png", title: "How to Find Work as a Freelancer", description: "Wondering how to find work as a freelancer? CrewLance’s handy guide will fill you in with the best freelancing sites and freelance tips. " },
  ]

  






  return (

    <section
      className="flex flex-col pt-5"
    >
      {/* ------------------------------ HERO SECTION ------------------------------ */}
      <section className="flex flex-col items-center gap-5 px-5 pb-16 font-Inter md:h-[90vh] lg:h-fit">
        <h4 className="text-center text-base text-gray-700 lg:text-2xl">Connect with the world's best Independents</h4>
        <h1 className="text-center font-CalistoMT text-[34px] md:text-5xl md:font-medium lg:w-full lg:text-7xl lg:font-light">What do you need help with?</h1>

        {/* ------------------------------- SEARCH BAR ------------------------------- */}
        <Suspense fallback={<SearchBoxSkeleton width="w-full md:w-[80%] lg:w-[60%]" />}>
          <SearchBox placeholder="Try graphic design, copywriter, or webflow website..." width="w-full md:w-[80%] lg:w-[60%]" />
        </Suspense>

        {/* ---------------------------- SEARCH PAGINATION --------------------------- */}
        <div className="flex w-full flex-col items-center justify-center gap-1 md:flex-row md:gap-5">
          <span className="text-sm font-semibold">Suggested:</span>
          <Suspense fallback={<SearchPaginationSkeleton width="w-[40%]" />}>
            <SearchPagination width="w-[95%] md:w-[65%] lg:w-[45%]"/>
          </Suspense>
        </div>

        {/* --------------------------------- or line -------------------------------- */}
        <div className="w-4/5 py-4 lg:w-1/2">
          <p className="before:content-[' '] after:content-[' relative text-center text-sm text-[#677084] before:absolute before:bottom-2 before:left-0 before:h-px before:w-2/5 before:bg-[#677084] after:absolute after:bottom-2 after:right-0 after:h-px after:w-2/5 after:bg-[#677084] lg:text-xl">
            OR
          </p>
        </div>

        <div className="h2 w-4/5 pb-4 text-center text-lg text-[#677084]">
          Let us find the perfect person or team for your projects
        </div>

        <Link href="/hire" className="btn-primary" >Hire on CrewLance</Link>
      </section>

      {/* -------------------------- SCROLLMOTION SECTION -------------------------- */}
      <ScrollMotion />

      {/* Trust only for hiring page*/}
      <section className="bg-primary text-white">
        <Trust data={Trustdata} toptitle="Why Clients" nexttitle="trust Crewlance" />
      </section>

        <Start {...startContent} />

        <Discover data={data} />
    </section>

  );
}

export default ForHiring
