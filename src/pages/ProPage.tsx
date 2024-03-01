"use client";
import Image from "next/image"
import Link from "next/link"
import Main from "@/public/assets/pro/main.png"
import Sub from "@/public/assets/pro/sub.png"
import playButtonWhite from "@/public/playButtonWhite.svg"
import PlayButton from "@/public/playButton.svg"
import img1 from '@/public/assets/pro/img1.png'
import img2 from '@/public/assets/pro/img2.png'
import img3 from '@/public/assets/pro/img3.png'
import pro1 from '@/public/assets/pro/pro1.png'
import pro2 from '@/public/assets/pro/pro2.png'
import im1 from '@/public/assets/im1.png'
import Compare from "@/src/components/Compare"
import FaqProPg from "@/src/components/FaqProPg"
import Discover from "@/src/components/Discover"
import Trust from "@/src/components/Trust";

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

const ProPageData = [
  { img: "/thumbnail9.png", title: "Building a Professional Portfolio", description: "Master the art of crafting an exceptional       professional portfolio with this simple guide. Stand out and thrive with our expert tips and insights." },
  { img: "/thumbnail10.png", title: "Connecting Your Custom Domain", description: "If you’re running a freelance business, you need to   have a professional portfolio to show clients. In this blog, we teach you how to connect your custom domain!" },
  { img: "/thumbnail11.png", title: "How to Create Case Studies", description: "Wondering how to create case studies and implement them effectively? This practical guide provides tips and case study examples." },
  { img: "/thumbnail12.png", title: "Find Work as a Freelancer", description: " Wondering how to find work as a freelancer? CrewLance’s handy guide will fill you in with the bestfreelancing sites and freelance tips. " }
];

const Trustdata = [
  {
  img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want." },
  { img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want." },
  { img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want." },
  { img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want." },
  { img: "/stream.png", title: "For CrewLance", subtitle: "Live Straming Platform", content: "With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want." },
];

const ProPage = () => {


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

        {/* comp 2 */}
        <div className="middle">middle</div>

        {/* comp 3 */}
        <div className="flex flex-col items-center gap-5 font-Inter">
          <p className="text-base lg:text-[26px] lg:px-4 font-Inter  w-6/12 lg:w-9/12 text-center lg:leading-8">Join now to enter the portfolio competition! We choose 3 monthly winners with amazing portfolios to win $100 and be featured on our socials!</p>
          <Link href='/access' className="btn-primary bg-[#6A57E3]">Upgrade to Pro</Link>

        </div>
      </div>

      {/* ---------------------------------------------------------------------------- */}
      <div>
        <div className="pt-20 pb-20 p-6 px-4 bg-[#45192f]  ">
          {/* --------------------------------------------------------- */}
          <div className="flex flex-col justify-center items-center gap-7 ">
            <div className="mb-5">
              <h1 className="text-center font-medium text-white lg:text-5xl md:text-5xl text-3xl lg:md:mb-3 mb-2 font-Inter">Customizable Portfolios</h1>
              <p className="text-center font-light text-white lg:text-5xl text-2xl ">Built for Independents</p>
            </div>
            <div>
              <button className="border border-white text-white font-medium  text-xl px-5 py-3 rounded-full font-Inter" >Get Access</button>
            </div>
          </div>
          {/* --------------------------------------------------------- */}


          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center pt-8 px-5 gap-5 mb-5">

            <div className="flex flex-col justify-center items-center px-5 flex-1" >
              <div><Image src={img1} alt='img' /></div>
              <h1 className='text-center text-white text-3xl font-medium mt-2 font-Inter'>Launch</h1>
              <h1 className='text-center text-white text-3xl font-light font-Tobias'>in minutes</h1>
              <p className='pt-3 text-white  text-center  lg:text-2xl text-lg px-5 font-Inter'>AI-powered tools get your portfolio up and running quickly.</p>
            </div>
            <div className="flex flex-col justify-center items-center px-5 flex-1" >
              <div><Image src={img2} alt='img' /></div>
              <h1 className='text-center text-white text-3xl font-medium mt-2 font-Inter'>Put your portfolio</h1>
              <h1 className='text-center text-white text-3xl font-light font-Tobias'>to work</h1>
              <p className='pt-3 text-white  text-center lg:text-2xl  text-lg px-5 font-Inter'>Manage contracts, sign clients, and get paid commission-free— all from your portfolio.</p>
            </div>
            <div className="flex flex-col justify-center items-center px-5 flex-1" >
              <div><Image src={img3} alt='img' /></div>
              <h1 className='text-center text-white text-3xl font-medium mt-2 font-Inter'>Supercharge</h1>
              <h1 className='text-center text-white text-3xl font-light font-Tobias'>your discoverability</h1>
              <p className='pt-3 text-white  text-center lg:text-2xl text-lg px-5 font-Inter'>Boost your ranking in Discover and increase portfolio views.</p>
            </div>

          </div>




          {/* --------------------------------------------------------- */}
        </div>
      </div>

      {/* ---------------------------------------------------------------------------- */}

      <div>
        <div className='bg-[#14171f] p-5'>
          <div className="text-center pt-14">
            <h1 className='text-white text-4xl lg:text-6xl mb-2 font-Inter'>Pro analytics </h1>
          </div>

          <div className="container pb-12 mx-auto max-h-max">
            <div className="flex lg:flex-row flex-col justify-center gap-11 items-center px-10">
              <div className="order-2 lg:order-1 lg:w-1/2">

                <div className="flex flex-col lg:text-left text-center gap-1">
                  <h1 className='text-white font-semibold lg:text-6xl text-3xl font-Inter'>Grow your</h1>
                  <h1 className='text-white font-light text-3xl lg:text-5xl font-Tobias'>Business</h1>
                </div>
                <div className='flex flex-row pt-4'>
                  <h1 className='text-white lg:text-2xl text-lg text-center lg:text-left pt-1 font-Inter'>Access insights like who’s viewing your portfolio (and where they’re coming from) so you can turn engagement into more earnings.</h1>
                </div>
              </div>

              <div className='order-1 lg:order-2'>
                {/* Image */}
                <Image src={pro1} alt='img' className='w-full h-full' />
              </div>

            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          <div className="text-center pt-24">
            <h1 className='text-white text-4xl lg:text-6xl mb-2 font-Inter'> Custom Branding </h1>
          </div>

          <div className="container mx-auto pb-14 ">
            <div className="flex lg:flex-row flex-col justify-center gap-12 items-center px-10">

              <div >
                {/* Image */}
                <Image src={pro2} alt='img' className='w-full h-full' />
              </div>
              <div className=" lg:w-1/2">

                <div className="flex flex-col lg:text-left text-center gap-1">
                  <h1 className='text-white font-semibold lg:text-6xl text-3xl font-Inter'>Build your</h1>
                  <h1 className='text-white font-light text-3xl lg:text-5xl font-Tobias'>personal brand</h1>
                </div>
                <div className='flex flex-row pt-4'>
                  <h1 className='text-white lg:text-2xl text-lg text-center lg:text-left pt-1 font-Inter'>Customize your proposals, contracts, and invoices to impress clients.</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* ---------------------------------------------------------- */}

      <Compare />

      {/* ---------------------------------------------------------- */}
<div className="bg-[#D6E9EB] text-black " style={{ backgroundColor: '#D6E9EB !important' }}>

<Trust data={Trustdata} toptitle="Why freelancers love" nexttitle="Crewlance Pro" />

</div>


 {/* ---------------------------------------------------------- */}
      <div className="flex lg:flex-row flex-col items-center w-full overflow-hidden bg-[#14171f] pt-11  pb-11">
        <div className="container z-40 ">
          <div className=" flex flex-row justify-center gap-8">
            <div className="flex flex-col justify-center px-9 text-white">
              <h1 className="text-4xl font-medium font-Inter lg:text-7xl">Invest in your</h1>
              <p className="pt-1 text-4xl font-light  lg:text-7xl">independent</p>
              <p className="pt-1 text-4xl font-light  lg:text-7xl">journey</p>
              <div className="pt-5">
                <p className="text-base lg:text-2xl py-3 font-Inter font-extralight">
                  Everything you need to launch, build and grow your freelance career.
                </p>
              </div>
              <div className="pt-5">
                <button className="px-3 py-2 text-base font-bold text-white bg-[#6a57e3] rounded-full lg:text-lg lg:px-5 lg:py-3 ">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full ">
          <div className="float-right" >
            <Image src={im1} alt="side img" className="md:w-full h-auto w-96" />
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      <div className="bg-[#14171f] pt-10 pb-10 p-5">
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
      {/* ---------------------------------------------------------- */}

<div style={{ backgroundColor: '#14171f !important' }} className="text-white">
<Discover data={ProPageData} />
</div>
      
      {/* ---------------------------------------------------------- */}

    </div>
  )
}

export default ProPage