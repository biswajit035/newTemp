/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/assets/logo.png'
import SignupCard from "@/src/components/SignupCard";
import signupLeft from "@/public/assets/signupLeft.png";
import signupRight from "@/public/assets/signupRight.png";
 
const Signup = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      {/* -------------------------------------------------------------------------- */
      /*                           top part of login page                           */
      /* -------------------------------------------------------------------------- */}
      <div className="flex items-center justify-between w-full h-15 sm:h-20 ">
        {/* logo */}
        <div className="logo">
          <Image src={Logo} alt="logo" className="w-auto h-full" />
        </div>
        {/* cross button */}
        <Link href="/" className="pr-10 cursor-pointer">
          X
        </Link>
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                          bottom part of login page                         */
      /* -------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center justify-between flex-1 gap-4 px-5 sm:px-14 lg:p-0 sm:gap-0">
        <div className="w-full text-2xl font-semibold text-center lg:w-3/4 sm:text-4xl h-fit">
          What brings you to CrewLance?
        </div>

        {/* Login card holder */}
        <div className="flex flex-col gap-5 sm:flex-row">
          <SignupCard
            title="I am an independent"
            content="Find work and manage your freelance business"
            img={signupLeft}
          />
          <SignupCard
            title="I'm Hiring"
            content="Post opurtunities and discover independents"
            img={signupRight}
          />
        </div>

        <div className="flex flex-col items-center pb-5 login-footer">
          <span>
            Already using CrewLance?{" "}
            <Link href="/login" className="text-blue-700 hover:text-blue-900 ">
              Sign in here.
            </Link>{" "}
          </span>
          <span className="text-xs text-center text-slate-500 text-black-100 sm:text-sm">
            By continuing, you agree to CrewLance's Terms of Use and confirm that you have read CrewLance's Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
