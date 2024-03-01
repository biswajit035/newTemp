import Image from "next/image";
import {
  center,
  topRight,
  bottomLeft,
  bottomRight,
  ai,
  jobs,
  project,
  discover,
  twenty
} from '@/public/assets/freelancers';
import PlayButton from "@/public/playButton.svg"
import playButtonWhite from "@/public/playButtonWhite.svg"
import sign from '@/public/assets/freelancers/sComp/sign.png';
import invoice from '@/public/assets/freelancers/sComp/invoice.png';
import GraphicsCard from "@/src/components/GraphicsCard";
import FreelancersCards from "@/src/components/FreelancersCards";
import Start from "@/src/components/start";
import Link from "next/link";
import Discover from "../components/Discover";

type thirdSectionCard = {
  title: string;
  subtitle: string;
}


const ForFreelancer = () => {

  const data =
    [
      { img: "/thumbnail1.png", title: "For CrewLance Clients", description: " With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want. " },
      { img: "/thumbnail2.png", title: "How to Hire on CrewLance", description: "There are three ways to hire on CrewLance — we’ll go through all three of these in this article and when to use each one! " },
      { img: "/thumbnail3.png", title: "Guide to Discover", description: "This guide will provide the steps to finding your perfect match on CrewLance using our Discover tool👇" },
      { img: "/thumbnail4.png", title: "Top Independents on CrewLance", description: " Everything you need to know about our Top Independents! " }
    ];


  return (
    <div className="freelancers h-fit">

      {/* /* -------------------------------------------------------------------------- */
      /*                                  1st part                                  */
      /* -------------------------------------------------------------------------- */}
      <div className="flex h-fit flex-col md:gap-5 lg:flex-row lg:gap-0" >
        {/* // left */}
        <div className="flex w-full flex-col justify-center gap-4 self-center px-8 pt-10 lg:w-3/5 lg:justify-start lg:pl-8">
          <span className="text-center font-Inter text-[34px] font-bold text-white md:text-5xl lg:text-left lg:text-6xl"> Independence</span>
          <span className="text-center font-Tobias text-2xl tracking-wide text-white lg:text-left lg:text-3xl">starts here.</span>
          <div className="control flex justify-center lg:justify-start">
            <button
              type="button"
              className="btn-primary px-5 py-2"
            >
              Get Started
            </button>
            <Link
              href="/watch"
              className="btn-watch group px-5 py-2"
            >
              <Image src={playButtonWhite} alt="watch button" className="h-4 w-4 group-hover:hidden" />
              <Image src={PlayButton} alt="watch button" className="hidden h-4 w-4 group-hover:inline-block" />
              Watch
            </Link>
          </div>
        </div>

        {/* // right */}
        <div className="relative h-[40vh] w-full md:h-[80vh]">
          <Image src={center} alt="graphics" className="absolute right-10 top-8 aspect-video w-9/12 rounded-xl md:top-14 lg:top-16 lg:w-8/12" />
          <Image src={topRight} alt="graphics" className="md::w-[13%] absolute right-0 top-0 aspect-square w-[14%] rounded-xl" />
          <Image src={bottomLeft} alt="graphics" className="absolute bottom-0 left-0 aspect-square w-3/12 rounded-xl lg:bottom-10 lg:left-32" />
          <Image src={bottomRight} alt="graphics" className="absolute bottom-5 right-0 w-5/12 rounded-xl md:bottom-0 lg:bottom-24" />
        </div>
      </div>

      {/* -------------------------------------------------------------------------- */
        /*                                  2nd part                                  */
        /* -------------------------------------------------------------------------- */}
      <div className="secondPart font-Interm flex flex-col gap-5 bg-white px-7 py-10">
        <div className="gap-y-10">
          <div className="first grid grid-cols-8 gap-5">
            <span className="order-2 col-span-4 rounded-lg bg-slate-200 lg:order-1 lg:col-span-1">
              <GraphicsCard imgData={sign} alt="Sign Contracts" />
            </span>
            <span className="order-3 col-span-4 rounded-lg bg-slate-200 lg:order-2 lg:col-span-3">
              <GraphicsCard imgData={invoice} alt="Send Invoices" />
            </span>
            <span className="order-1 col-span-8 flex flex-col justify-center rounded-lg text-center font-Inter lg:order-3 lg:col-span-4 lg:text-left">
              <p className="text-3xl font-bold lg:text-5xl">Your entire</p>
              <p className="text-3xl font-bold lg:text-5xl">freelance workflow</p>
              <p className="font-Tobias text-3xl lg:text-5xl">all in one place</p>
            </span>
          </div>
        </div>

        <div>
          <div className="second grid grid-cols-8 gap-5">
            <span className="col-span-8 flex h-full justify-center rounded-lg bg-slate-200 lg:col-span-3 lg:h-3/4">
              <GraphicsCard imgData={ai} alt="Launch an AI Portfolio" />

            </span>
            <span className="col-span-8 grid grid-cols-4 gap-5 rounded-lg lg:col-span-1 lg:grid-rows-2">
              <span className="col-span-2 rounded-lg bg-slate-200 lg:col-span-4">
                <GraphicsCard imgData={jobs} alt="Find Jobs" />

              </span>
              <span className="col-span-2 rounded-lg bg-slate-200 lg:col-span-4">
                <GraphicsCard imgData={discover} alt="Get Discovered" />
              </span>
            </span>
            <span className="col-span-4 flex h-full justify-center rounded-lg bg-slate-200 lg:col-span-2 lg:h-3/4">
              <GraphicsCard imgData={project} alt="Manage Projects" />

            </span>
            <span className="col-span-4 flex h-full justify-center rounded-lg bg-slate-200 lg:col-span-2 lg:h-2/4">
              <GraphicsCard imgData={twenty} alt="" />

            </span>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------- */
        /*                                  3rd part                                  */
        /* -------------------------------------------------------------------------- */}
      <div className="bg-white pt-10">
        <h1 className="px-5 text-center text-3xl lg:text-6xl">
          <p className="font-Tobias">The <span className="font-bold">best Independents</span> are</p>
          <p className="font-Tobias">growing with CrewLance</p>
          <p className="pt-5 font-Inter text-base text-[#677084] lg:text-xl">A commission-free freelancer marketplace</p>
        </h1>
        <div className="mid py-4 text-center">

          {/* card section start */}
          <div className="px-3 pt-7">
            <FreelancersCards />
          </div>

          {/* card section end */}
        </div>
        <div className="flex flex-col items-center justify-center gap-5 py-5 md:flex-row md:gap-10 md:py-10">
          <ThirdSectionCard title="$30MM+" subtitle="in projects" />
          <ThirdSectionCard title="0%" subtitle="commision fees" />
          <ThirdSectionCard title="15K+" subtitle="clients" />
        </div>
      </div>

      {/* -------------------------------------------------------------------------- */
        /*                                  4th part                                  */
        /* -------------------------------------------------------------------------- */}
      <Start title="Try CrewLance" subtitle="for free" description="Everything you need to launch, build, and grow your freelance career." />

      {/* -------------------------------------------------------------------------- */
        /*                                  5th part                                  */
        /* -------------------------------------------------------------------------- */}

      <div className="bg-[#eff4f7] px-4 py-5">
        <div className="items-centerpt-14 flex flex-col">
          <p className="text-center text-4xl lg:text-6xl">
            <span className="font-Inter font-bold">Invest in your </span>
            independent journey
          </p>
          <p className="text-center text-4xl lg:text-6xl">
            <span className="font-Inter font-bold">with </span>
            <span className="bg-gradient-to-r from-[#9586f5] to-[#6A57E3] bg-clip-text text-transparent">CrewLance Pro</span>
          </p>
          <p className="pt-4 text-center font-Inter text-sm text-[#677084] lg:text-xl">No more paying for 5+ different apps. It’s your freelance journey, simplified.</p>

        </div>

        <div className="mt-20 flex w-full flex-col items-center justify-center font-Inter md:px-[15%] lg:px-[25%]">

          <div className="grid w-full grid-cols-3 gap-y-5 rounded-2xl bg-white px-4 py-4 md:gap-y-8 md:p-8">
            <div className="col-span-2">
            </div>
            <div className="">
              <p className="text-right text-xs font-medium text-[#454545] md:text-base">Your spendings <br /> on other platforms</p>
            </div>

            <InvoiceCard title="AI-powered portfolio" subTitle="Replaces squarespace, Wix, webflow" price={29} />
            <InvoiceCard title="Job discovery" subTitle="Replaces squarespace, Wix, webflowReplaces Upwork, Fiverr, Linkedin" price={59} commision={20} />
            <InvoiceCard title="Invoices & billings" subTitle="Replaces Honeybook, Bonsai, Docusign" price={66} commision={20}/>
            <InvoiceCard title="Audience analytics" subTitle="Replaces Google Analytics" price={1} commision={20} />


          </div>

          {/* bottom box */}
          <div className="mt-5 w-full rounded-2xl bg-white p-8">
            <div className="flex w-full flex-col justify-between gap-12 md:flex-row md:gap-0">

              <div className="flex-col px-3">
                <h1 className="text-center text-xl">All included in</h1>
                <h1 className="bg-gradient-to-r from-[#61A6F2] via-[#8F6FDB] to-[#FF5A5E] bg-clip-text text-center text-3xl text-transparent lg:text-4xl">CrewLance Pro</h1>
                <p className="mt-2 text-center text-[#677084]">(Saving over $143)</p>
              </div>
              <div className="flex flex-col justify-center" >
                <h1 className="text-bold text-center text-xl font-medium">$12/mo</h1>
                <p className="mb-2 text-center text-[#677084]">+ 0% commission</p>
                <button className="text-bold rounded-full bg-violet-500 px-4 py-2 text-center text-white">Upgrade to Pro</button>
              </div>
            </div>

          </div>


        </div>

      </div>

      <Discover data={data} />
    </div>

  );
}

export default ForFreelancer







const ThirdSectionCard = ({ title, subtitle }: thirdSectionCard) => {
  return (
    <div className="text-center lg:w-1/3">
      <p className="font-Inter text-xl font-medium md:text-2xl lg:text-4xl">{title}</p>
      <p className="font-Tobias text-sm font-thin text-slate-700 md:text-base lg:text-xl">{subtitle}</p>
    </div>
  );
};

const InvoiceCard = ({ title, subTitle, price, commision }: { title: string, subTitle: string, price: number, commision?: number | null }) => {
  return (
    <>
      <div className="col-span-2 flex-col">
        <h1 className="text-bold text-xl font-medium md:text-2xl">{title}</h1>
        <p className="text-sm text-[#677084] md:text-base">{subTitle}</p>
      </div>
      <div className="">
        <h1 className="text-right text-xl font-medium md:text-2xl">${price}</h1>
        {commision != null && <p className="text-right text-sm text-[#677084] md:text-base">{`+ ${commision}% commission`}</p>}
      </div>
    </>
  )
}

