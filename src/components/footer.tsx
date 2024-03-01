"use client"
import { FaTiktok, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { usePathname, useSearchParams } from 'next/navigation'
import Image from "next/image";
// import Logo from "../../../public/assets/whitelogo.jpg";
// import LogoDark from "../../../public/assets/updated.png";
import Logo from "@/public/assets/whitelogoTest.png";
import LogoDark from "@/public/assets/updatedTest.png";
import Link from "next/link";

const Footer = () => {
  const searchParams = useSearchParams()
  const userType = searchParams?.get('userType')
  const pathname = usePathname()

  const navBackgroudnd = ((pathname == "/pro" || pathname == "/works") || (userType == 'freelance')) ? "black" : "white"


  return (
    <div className={` pt-4 font-Inter bg-black ${navBackgroudnd != "black" ? "bg-white text-darkBg" : "bg-darkBg text-white"
      }`}>

      {/* footer start */}
      <div className="flex w-full flex-row flex-wrap p-5">

        {/* for freelancer */}
        <div className="p-4 lg:pr-14">
          <h5 className="text-transform: text-xs font-bold uppercase tracking-widest text-[#9BA2B0]">
            for freelancer
          </h5>
          <ul className="pt-4">
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              CrewLance for freelancer
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              <Link href="/pro"> CrewLance Pro </Link>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              <Link href="/portfolio">Portfolios </Link>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              <Link href="/works"> How it works </Link>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              <Link href="/commisionfree"> Commission-free </Link>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Top Independents
            </li>
            {/* <li className="text-md cursor-pointer pb-2 font-semibold tracking-wider hover:underline">   Free invoice generator
            </li> */}
          </ul>
        </div>
        {/*for hiring  */}
        <div className="p-4 lg:pr-14">
          <h5 className="text-transform: text-xs font-bold uppercase tracking-widest text-[#9BA2B0]">
            for hiring
          </h5>
          <ul className="pt-4">
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              CrewLance for hiring
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              <Link href="/teams">CrewLance for teams</Link>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              <Link href="/expert-network">Expert networks</Link>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              How it works
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Hire on CrewLance
            </li>
          </ul>
        </div>
        {/* why CrewLance */}
        <div className="p-4 lg:pr-14">
          <h5 className="text-transform: text-xs font-bold uppercase tracking-widest text-[#9BA2B0]">
            why CrewLance
          </h5>
          <ul className="pt-4">
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Success stories
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Tips & guides
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              <Link href="/faqs">FAQ</Link>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              <Link href="/missions">Mission</Link>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              <Link href="/careers">Careers </Link>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Support
            </li>
          </ul>
        </div>

        {/* hire freelancer */}
        <div className="p-4 lg:pr-14">
          <h5 className="text-transform: text-xs font-bold uppercase tracking-widest text-[#9BA2B0]">
            hire freelancer
          </h5>
          <ul className="pt-4">
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Design
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Engineering
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Marketing
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Music & audio
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Social media
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              video & animation
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Writing
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Explore all
            </li>
          </ul>
        </div>
        {/* drops */}
        <div className="p-4">
          <h5 className="text-transform: text-xs font-bold uppercase tracking-widest text-[#9BA2B0]">
            drops
          </h5>
          <ul className="pt-4">
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Latest Video
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold tracking-wider hover:underline lg:text-base">
              Freelance industry report
            </li>
          </ul>
          <h5 className="text-transform: pt-5 text-xs font-bold uppercase tracking-widest text-gray-400">
            social
          </h5>
          <div className="flex flex-row flex-wrap pt-4">
            <FaTiktok size={45} className="pr-5" />
            <FaTwitter size={45} className="pr-5" />
            <FaInstagram size={45} className="pr-5" />
            <FaPinterest size={45} className="pr-5" />
          </div>
        </div>
      </div>

      {/* the bottom footer */}
      <div className="placeholder: flex flex-col flex-wrap justify-start gap-3 px-9 py-5 md:flex-row lg:justify-between">
        <div className="mb-2 flex w-fit items-center gap-3">
          <Image src={navBackgroudnd == "black" ? Logo : LogoDark} alt="logo" className="h-16 w-fit" />
          <p className="font-LibreCaslonText text-xl font-bold tracking-wider">CREWLANCE</p>
        </div>

        <div className="mb-3 text-sm text-[#9BA2B0]">
          <a href="#">Terms & Conditions</a>
          <span> | </span>
          <a href="#">Privacy Policy</a>
          <span> | </span>
          <a href="#">Cookie Policy</a>
          <span> | </span>
          <a href="#">Code of Conduct</a>
        </div>

      </div>
    </div>

  );
};

export default Footer;
