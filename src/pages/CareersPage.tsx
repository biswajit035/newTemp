"use client";
import Image from "next/image"
import Link from "next/link"
import Main from "@/public/assets/pro/main.png"
import Sub from "@/public/assets/pro/sub.png"
import playButtonWhite from "@/public/playButtonWhite.svg"
import PlayButton from "@/public/playButton.svg"
import Start from "@/src/components/start"
import Discover from "@/src/components/Discover"

const WorksPageData = [
  { img: "/thumbnail9.png", title: "Building a Professional Portfolio", description: "Master the art of crafting an exceptional       professional portfolio with this simple guide. Stand out and thrive with our expert tips and insights." },
  { img: "/thumbnail10.png", title: "Connecting Your Custom Domain", description: "If you’re running a freelance business, you need to   have a professional portfolio to show clients. In this blog, we teach you how to connect your custom domain!" },
  { img: "/thumbnail11.png", title: "How to Create Case Studies", description: "Wondering how to create case studies and implement them effectively? This practical guide provides tips and case study examples." },
  { img: "/thumbnail12.png", title: "Find Work as a Freelancer", description: " Wondering how to find work as a freelancer? CrewLance’s handy guide will fill you in with the bestfreelancing sites and freelance tips. " }
];

const CareersPage = () => {
  return (
    <div className="bg-[#14171f]">
       <div className=" max-w-screen h-fit text-white flex flex-col p-5 ">
        {/* comp 1 */}
        <div className="top flex flex-col items-center gap-10 pt-11">
          <h1 className="text-5xl sm:text-[50px] lg:text-[82px] text-center font-Inter">Do more with CrewLance Pro</h1>
          <h3 className="text-2xl lg:w-6/12 text-center font-Inter">More leads, more earning, and more tools to grow your freelance business</h3>
          <div className="flex gap-4">
            <Link href='/access' className="btn-primary bg-[#6A57E3] font-Inter">Get Access</Link>
            <Link
              href="/watch"
              className="btn-watch group font-Inter"
            >
              <Image src={playButtonWhite} alt="watch button" className="w-6 h-6 group-hover:hidden" />
              <Image src={PlayButton} alt="watch button" className="w-6 h-6 hidden group-hover:inline-block" />
              Watch
            </Link>
          </div>
          <div className="imageSection relative flex pl-12 sm:pl-60 lg:pl-0 lg:justify-center w-full">
            <Image src={Main} alt="star image" className="aspect-w-16 aspect-h-9 w-9/12 sm:w-6/12 lg:w-7/12" />
            <Image src={Sub} alt="star image" className="absolute top-3 right-1 sm:top-4 sm:right-44 lg:top-20 lg:right-40 aspect-w-9 aspect-h-16 w-4/12 sm:w-2/12 lg:w-2/12" />
          </div>
        </div>

      </div>
      <div className="pt-10 pb-10">
        <Start title="Try CrewLance" subtitle="for free" description="Everything you need to launch, build, and grow your freelance career."/>
      </div>     
      <div className="text-white">
          <Discover data={WorksPageData} />
        </div>
      
    </div>
  )
}

export default CareersPage
