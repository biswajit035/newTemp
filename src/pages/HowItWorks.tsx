"use client";
import Image from "next/image"
import Link from "next/link";
import PlayButton from "@/public/playButton.svg"
import playButtonWhite from "@/public/playButtonWhite.svg"
import bg from "@/public/assets/works/bg.png"
import splice from '@/public/assets/company/splice.png'
import person1 from "@/public/assets/people/person1.png"
import workimg from "@/public/assets/samplework/w1.png"
import second from "@/public/assets/works/second.png"
import third from "@/public/assets/works/third.png";
import four from "@/public/assets/works/fourth.png"
import col1 from "@/public/assets/works/col1.png";
import col2 from "@/public/assets/works/col2.png";
import col3 from "@/public/assets/works/col3.png";
import im2 from "@/public/assets/works/im2.png";
import im3 from "@/public/assets/works/im3.png";
import im1 from '@/public/assets/im1.png'
import FaqProPg from "@/src/components/FaqProPg"
import Discover from "@/src/components/Discover"

const faqItems = [
  {
    question: 'What is CrewLance Pro?',
    answer: 'Lorem ipsum dolor sit n'
  },
  {
    question: 'How do I sign up for CrewLance Pro?',
    answer: 'Lorem ipsum dolor sit n'
  },
  {
    question: 'Can I connect my portfolio to a custom domain?',
    answer: 'Lorem ipsum dolor sit n'
  },
  {
    question: 'How is a portfolio different from a profile on CrewLance',
    answer: 'Lorem ipsum dolor sit n'
  },
  {
    question: 'How does a portfolio on CrewLance compare to other portfolio sites?',
    answer: 'Lorem ipsum dolor sit n'
  },
  {
    question: 'How much does a subscription to CrewLance Pro cost?',
    answer: 'Lorem ipsum dolor sit n'
  },
  {
    question: 'What are the benefits of CrewLance Pro?',
    answer: 'Lorem ipsum dolor sit nqdvghxhajbdBIFBCNCJB JDJHUIEFBUIW UQWGBDBGFU isjdfb dbcioweiof hbjsdbfc  uewfbhjweq jedb'
  },
];

const WorksPageData = [
  { img: "/thumbnail9.png", title: "Building a Professional Portfolio", description: "Master the art of crafting an exceptional       professional portfolio with this simple guide. Stand out and thrive with our expert tips and insights." },
  { img: "/thumbnail10.png", title: "Connecting Your Custom Domain", description: "If you’re running a freelance business, you need to   have a professional portfolio to show clients. In this blog, we teach you how to connect your custom domain!" },
  { img: "/thumbnail11.png", title: "How to Create Case Studies", description: "Wondering how to create case studies and implement them effectively? This practical guide provides tips and case study examples." },
  { img: "/thumbnail12.png", title: "Find Work as a Freelancer", description: " Wondering how to find work as a freelancer? CrewLance’s handy guide will fill you in with the bestfreelancing sites and freelance tips. " }
];

const HowItWorks = () => {
  return (
    <div>
      <div className="bg-[#14171F]" >
        <div className="bg-[#14171F] py-12  px-5 relative overflow-hidden">
          <div className="relative lg:block hidden">
            <div className="absolute -left-[27%] z-0 overflow-hidden">
              <Image src={bg} alt='img' className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-center text-center ">
            <h1 className="lg:text-8xl text-4xl pt-8 font-thin text-white font-Gupter"> The all-in-one  <span className="lg:text-8xl text-4xl font-medium font-Inter">  platform </span></h1>
            <h1 className="lg:text-8xl text-4xl font-Inter text-white "> for independent work</h1>

          </div>

          <div>
            <p className="text-[#E4E6EB] pt-14 lg:text-3xl text-xl mx-auto max-w-[650px] text-center " >Everything you need to launch, build, and grow
              your freelance career.</p>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-2 pt-14 pb-14">
            <button
              type="button"
              className="btn-primary font-semibold font-Inter text-base px-3 py-2"
            >
              Get Access
            </button>
            <Link
              href="/watch"
              className="btn-watch group font-Inter text-base px-3 py-2"
            >
              {/* <img src="/assets/play-button.svg" alt="" className="w-4 h-4 " /> */}
              <Image src={playButtonWhite} alt="watch button" className="w-4 h-4 group-hover:hidden" />
              <Image src={PlayButton} alt="watch button" className="w-4 h-4 hidden group-hover:inline-block" />
              Watch
            </Link>
          </div>

          <div className="pt-14 p-5 px-5 mx-auto text-center">

            <h1 className="font-Inter uppercase mx-auto text-white text-lg  tracking-wide">Top Companies hire on crewlance</h1>
          </div>

          <div className="flex flex-row flex-wrap justify-center items-center pt-10 pb-10 gap-10">
            <Image src={splice} alt="company" className="" height={100} width={100} />
            <Image src={splice} alt="company" className="" height={100} width={100} />
            <Image src={splice} alt="company" className="" height={100} width={100} />
            <Image src={splice} alt="company" className="" height={100} width={100} />
            <Image src={splice} alt="company" className="" height={100} width={100} />
          </div>

        </div>

        {/* -------------------------------------------- */}
        <div className="pt-14 p-5 pb-10">
          <h1 className="text-center mx-auto text-white lg:text-6xl text-4xl pb-10 font-Inter">How to get started</h1>
          {/* -----------------part 1------------------ */}
          <div className="container mx-auto pt-10">
            <div className="flex lg:flex-row flex-col justify-between items-center gap-12">
              <div className="order-2 lg:order-1">
                <div className="flex flex-col lg:text-left text-center gap-1 ">
                  <h1 className='text-white font-medium lg:text-5xl text-3xl font-Inter'>Build with</h1>
                  <h1 className='text-white font-light text-3xl lg:text-5xl font-Gupter'>portfolio magic</h1>
                  <div>
                    <p className="lg:text-3xl text-base py-6 text-white max-w-[550px] ">Use CrewLance’s AI tools to generate your portfolio content so you can launch fast and grow your freelance business</p>
                    <button className="border border-white text-white rounded-full font-Inter px-5 py-3 font-medium">Create Now</button>
                  </div>

                </div>
              </div>

              <div className="order-1 lg:order-2 lg:pr-20 ">
                <div className="p-5 flex justify-center items-center">
                  <div className=" bg-white  rounded-2xl  flex flex-col shadow-md relative  overflow-hidden h-70">

                    <div className="flex flex-row px-5 items-center justify-center gap-4 mb-2 pt-4">
                      <div className='w-20 h-20 ' >
                        <Image src={person1} alt="img"
                          width={300} height={300}
                          className="rounded-full w-full h-full object-cover mb-4 lg:mb-0" />
                      </div>

                      <div className="lg:pl-2">
                        <div className="flex flex-col ">
                          <h2 className="lg:text-2xl indent-0 font-light text-left font-Gupter">Barbiana</h2>
                          <h2 className="lg:text-2xl font-light font-Gupter text-left">Liu</h2>
                        </div>

                      </div>
                    </div>

                    <div className="flex justify-center py-2 px-4 rounded-md text-center mb-2">
                      <h6 className="border bg-black-500 lg:px-5 lg:py-3 px-2 py-1 font-Inter rounded-full">Brand Designer</h6>
                    </div>

                    <div className='object-cover'>
                      <Image src={workimg} width={100} height={200} alt="img" className="rounded w-full h-full  lg:mb-0" />
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          {/* -----------------part 2------------------ */}
          <div className="container mx-auto pt-14">
            <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-12">
              <div className="order-2 lg:order-1">
                <div className="flex flex-col lg:text-left text-center gap-1">
                  <h1 className='text-white font-medium lg:text-5xl text-3xl font-Inter'>Find your next</h1>
                  <h1 className='text-white font-light text-3xl lg:text-5xl font-Gupter'> opportunity</h1>
                  <div>
                    <p className="lg:text-3xl text-base py-6 text-white max-w-[550px] ">Discover jobs, get matched, or invite current clients onto the platform to manage all your projects & payments in one place.</p>
                    <button className="border border-white text-white rounded-full font-medium font-Inter  px-5 py-3">Find Opportunities</button>
                  </div>

                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="p-5 flex">
                  <Image src={second} alt={'img'} />
                </div>
              </div>


            </div>
          </div>
          {/* -----------------part 3------------------ */}
          <div className="container mx-auto pt-10">
            <div className="flex lg:flex-row flex-col justify-between items-center gap-12">
              <div className="order-2 lg:order-1">
                <div className="flex flex-col lg:text-left text-center gap-1 ">
                  <h1 className='text-white font-medium lg:text-5xl text-3xl font-Inter'>Get paid </h1>
                  <h1 className='text-white font-light text-3xl lg:text-5xl font-Gupter'>commission-free</h1>
                  <div>
                    <p className="lg:text-3xl text-base py-6 text-white max-w-[550px] ">Built-in contracts streamline your workflow. Keep 100% of what you earn with direct deposit, Paypal, or other mode of payments.</p>
                    <button className="border border-white text-white rounded-full font-Inter font-medium px-5  py-3">Get Paid</button>
                  </div>

                </div>
              </div>

              <div className="order-1 lg:order-2 lg:pr-20 ">
                <div className="p-5 flex flex-col  relative">
                  <div className="flex-col flex items-end">
                    <Image src={third} alt={'3'} className=" w-72" />
                  </div>
                  <div className="flex-col flex items-start">
                    <Image src={four} alt={"4"} className="w-72 mr-48 -mt-4" />
                  </div>

                </div>
              </div>


            </div>
          </div>

        </div>

        {/* -------------------------------------------- */}
        <div className="pt-14 pb-14">
          <div className="container text-center bg-[#1c212b] rounded-3xl mx-auto">
            <div className="flex lg:flex-row flex-col justify-between items-center gap-11  p-14">
              <div className="flex flex-col justify-center items-center flex-1">
                <Image src={col1} alt={'alt1'} />
                <h1 className="text-white font-Inter lg:text-4xl text-3xl py-3">Launch your career</h1>
                <p className="text-white font-Inter text-xl pt-3 max-w-[250px]">Work on your own terms doing what you love.</p>
              </div>
              <div className="flex flex-col justify-center items-center flex-1">
                <Image src={col2} alt={'alt1'} />
                <h1 className="text-white font-Inter lg:text-4xl text-3xl py-3">Built in contracts</h1>
                <p className="text-white font-Inter text-xl pt-3 max-w-[250px]">Focus on your work instead of the administrative part.</p>
              </div>
              <div className="flex flex-col justify-center items-center flex-1">
                <Image src={col3} alt={'alt1'} />
                <h1 className="text-white font-Inter lg:text-4xl text-3xl py-3">No hidden fees</h1>
                <p className="text-white font-Inter text-xl pt-3 max-w-[250px]">Keep 100% of what you earn on CrewLance.</p>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------------------- */}
        <div className="pt-14 pb-14">
          <div className="container mx-auto p-5">
            <div className="flex lg:flex-row flex-col gap-10 ">
              <div className="flex-row flex items-center">
                <Image src={im2} alt={'im2'} />
                <div className="  -ml-10 lg:block hidden">
                  <Image src={im3} alt={"4"} className="" />
                </div>
              </div>

              <div className="flex flex-col text-white lg:pl-14">
                <h1 className=" p-2 mb-5 max-w-[50px] font-bold rounded-lg text-[#93370D] bg-gradient-to-r from-[#F3CA4D] via-[#FF989A] to-[#CBABFF] text-sm">PRO</h1>

                <h1 className="font-Inter lg:text-5xl text-3xl pb-2">Upgarde to </h1>
                <h1 className="font-Gupter lg:text-5xl text-3xl">CrewLance PRO</h1>
                <p className="py-4 text-white lg:text-2xl text-base font-Inter max-w-[500px]">Launch a customized portfolio, brand your business, and access powerful analytics to boost your income.</p>
                <div className="flex flex-col w-1/2 py-4">
                  <button className="bg-white font-Inter text-lg text-black w-auto rounded-full font-medium lg:py-3 py-2 max-w-[150px]">Learn More</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* -------------------------------------------- */}
        <div className="pt-14 pb-14">
          <div className="flex lg:flex-row flex-col items-center w-full overflow-hidden bg-[#14171f] pt-11  pb-11">
            <div className="container z-40 ">
              <div className=" flex flex-row justify-center gap-8">
                <div className="flex flex-col justify-center px-9 text-white">
                  <h1 className="text-4xl font-medium font-Inter lg:text-7xl">Start your</h1>
                  <p className="pt-1 text-4xl font-light  lg:text-7xl font-Gupter">independent journey</p>
                  <div className="pt-5">
                    <p className="text-base lg:text-2xl py-3 font-Inter font-extralight">
                      Everything you need to launch, build and grow your freelance career.
                    </p>
                  </div>
                  <div className="pt-5">
                    <button className="px-2 py-2 text-base font-bold text-white bg-[#6a57e3] rounded-full lg:text-lg lg:px-5 lg:py-3 font-Inter">Get Access</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full overflow-hidden">
              <div className="float-right -mr-48" >
                <Image src={im1} alt="side img" className="md:w-full h-auto w-96" />
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------- */}
        <div className="pt-10 pb-10">
          <div className="bg-[#14171f] p-5">
            <div className="container text-white font-Inter">

              <div className="flex flex-1 lg:flex-row flex-col px-5 gap-10 pb-11 justify-center">
                <div className="w-1/2">
                  <h1 className="lg:text-5xl text-4xl  font-Inter">Frequently asked </h1>
                  <p className="lg:text-5xl  text-3xl font-Tobias">questions </p>
                </div>

                <FaqProPg items={faqItems} />
              </div>


            </div>

          </div>

        </div>

        {/* -------------------------------------------- */}
        <div className="text-white">
          <Discover data={WorksPageData} />
        </div>
        {/* -------------------------------------------- */}
      </div>

    </div>
  )
}

export default HowItWorks
