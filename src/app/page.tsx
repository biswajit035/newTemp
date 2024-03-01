"use client"
import TooglleBtn from "@/src/components/TooglleBtn"
import ForHiring from "../pages/ForHiring"
import ForFreelancer from "../pages/ForFreelancer"
import Start from "@/src/components/start"
import Discover from "@/src/components/Discover"
import { useSearchParams } from "next/navigation"



export default function Home() {
  const params = useSearchParams()
  const userType = params?.get("userType");
  const blackNav = userType == "freelance";  


  

    


  return (
    <>
      {/* ------------------------------ TOOGLE BUTTON ----------------------------- */}
      <div className={`flex [transition:background_0.5s] items-center md:py-12 py-6 lg:py-6 lg:text-xl justify-center text-base ${userType == "freelance" ? "bg-darkBg text-white" : ""
        }`}>
        <span className={`antialiased font-Inter font-bold text-xs md:text-base ${blackNav ? "text-slate-400" : "bg-gradient-to-r from-black via-primary to-pink-400 bg-clip-text text-transparent"}`}>FOR HIRING</span>
        <TooglleBtn />
        <span className={`antialiased font-Inter font-bold text-xs md:text-base ${blackNav ? "bg-gradient-to-r from-amber-300 via-pink-400 to-pink-300 bg-clip-text text-transparent" : "text-slate-500" }`}>FOR FREELANCERS</span>        
      </div>

      {/* hiring */}
      <div className={`[transition:background_0.5s] ${userType == "freelance" ? "bg-darkBg" : "bg-white"}`}>
        {userType != "freelance" && <ForHiring />}

        {/* freelancers */}
        {userType == "freelance" && <ForFreelancer />}
      </div>

     
      {/* TODO:ADD THIS TO FREELANCE PAGE ALSO */}
      {/* <Start {...startContent} /> */}

      
    </>
  )
}
