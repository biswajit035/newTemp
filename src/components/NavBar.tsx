"use client"
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import IconSVG from "./IconSVG";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter();
  const userType = searchParams?.get('userType')
  const [isOpen, setOpen] = useState(false);

  const navBackgroudnd = ((pathname == "/pro" || pathname == "/works") || (userType == 'freelance')) ? "black" : "white"
  const blackNav = ((pathname == "/pro" || pathname == "/works") || (userType == 'freelance'))

  const handleOpen = () => {
    setOpen(!isOpen);
  };



  /* -------------------------------------------------------------------------- */
  /*                               nav hide fuction                               */
  /* -------------------------------------------------------------------------- */

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState<boolean>(false);
  const [navBlur, setNavBlur] = useState(false)

  useEffect(() => {
    
    const handleScroll = () => {
      if(window.scrollY > 80) setNavBlur(true);
      else setNavBlur(false);
      
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setNavbarStyle(true);
      } else {
        setNavbarStyle(false);
        setOpen(false);
      }

      setLastScrollTop(scrollTop);
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [lastScrollTop]);


  return (
    <>
      {
        <nav className={`${navBlur ? "bg-opacity-0 " : null}${blackNav ? " bg-darkBg" : "bg-white"} h-full z-30 [transition:background_0.5s,top_5s] w-full bg-clip-padding backdrop-blur-md backdrop-filter sticky ${navbarStyle ? null : "top-0  "}`}>
          <div
            id="navbar"
            className={`flex w-full flex-col justify-between [transition:background_0.5s,top_5s] md:flex-row md:items-center md:px-4 md:py-3 lg:px-8`}
          >
            {/* ----------------------- Logo Icon with Company Name ---------------------- */}
            <div className={`px-4 md:px-0 py-1 md:py-0 logo relative z-50 flex items-center md:bg-transparent justify-between gap-2 [transition:background_0.5s] ${blackNav ? "bg-darkBg" : "bg-white"}`}>
              <div className="flex items-center gap-1">
                <IconSVG width={60} height={60} bgcolor={`${blackNav ? "#FFFFFF" : "#14171F"}`} />
                <p className={`font-bold tracking-wider antialiased font-LibreCaslonText lg:text-3xl md:text-lg text-xl ${blackNav ? 'text-white' : "text-darkBg"}`}>CREWLANCE</p>
              </div>
              <div className="md:hidden">
                <GiHamburgerMenu className={`cursor-pointer text-xl ${blackNav ? "text-white" : ""}`} onClick={() => { setOpen((prev => !prev)) }} />
              </div>
            </div>

            {/* ----------------------------- button control ----------------------------- */}

           <div className={`flex-col flex py-5 transition-top duration-700 ease-in-out absolute z-40 left-0 right-0  px-16 md:px-0 md:flex-row md:py-0 md:top-0 md:relative bg-gray-200 md:bg-transparent  auth-control gap-5 md:flex ${isOpen ? "top-10" : "-top-60"}`}>
              {/* HIRE ON CREWLANCE BUTTON */}
              {!blackNav && (
                <button
                  type="button"
                  className="hoverBlack"
                  onClick={() => { setOpen(false) }}
                >
                  Hire on CrewLance 
                </button>
              )}

              <Link
                href="/signup"
                onClick={()=>{setOpen(false)}}
                className={`${blackNav ? "lightButton" : "darkButton"}`}
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                onClick={()=>{setOpen(false)}}
                className={`${blackNav ? "darkButton" : "lightButton"}`}
              >
                Log In
              </Link>
            </div>

          </div>
        </nav>
      }
    </>
  );
};

export default NavBar;


