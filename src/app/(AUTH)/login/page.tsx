import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/assets/logo.png";
import google from "../../../../public/assets/google.png";
import im1 from "../../../../public/assets/im1.png";


const Login = () => {
  return (
    <div className="login flex min-h-screen flex-col items-center justify-between pt-14 font-Inter">
      <div className="bg-white rounded-2xl shadow-xl w-auto pl-4 pr-4 pb-5">
        <div className=" container text-black p-5">
          <div className="flex items-center justify-between w-full h-20 ">
            {/* logo */}
            <div className="logo">
              <Image src={Logo} alt="logo" className="w-auto h-full" />
            </div>
            {/* cross button */}
            <div className="text-center">
              <Link href="/"> X </Link>
            </div>
          </div>
        </div>
        {/* Center Content start */}
        <div className=" container p-5">
          <div className="flex flex-row flex-wrap px-3 content-center">
            {/* left content */}
            <div className="my-auto p-5">
              <h3 className="text-3xl font-semibold mb-3 text-black px-2">
                Welcome back to CrewLance !
              </h3>
              {/* Input area  */}
              <form className="px-2 py-3 ">
                {/* input fields */}
                <div className="mb-4 relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="relative h-10 w-full border px-3 rounded border-gray-300 text-gray-500 focus:outline-none placeholder-transparent peer "
                    required
                    placeholder="Email Address"
                  />

                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-2 mx-3 text-gray-400 text-sm transition-all peer-holder-shown:text-base peer-placeholder-shown:text-gray-400  
        peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-gray-500 peer-valid:-top-2  peer-valid:text-gray-400 peer-valid:text-xs bg-white"
                  >
                    Email Address
                  </label>
                </div>
                {/* Buttons */}
                <button
                  type="submit"
                  className="bg-gray-300 text-gray-500 px-4 py-2 rounded-full w-full hover:bg-gray-400 hover:text-gray-600 hover:font-bold"
                >
                  Login
                </button>

                <div className="py-3 text-center">
                  <h5 className="text-gray-300">OR</h5>
                </div>
                {/* google button */}
                <button
                  type="submit"
                  className="bg-white border text-black px-4 py-2 rounded-full w-full hover:border-gray-600"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={google}
                      alt="Google Logo"
                      className="w-6 h-6 mr-2"
                    />
                    Login with Google
                  </div>
                </button>
              </form>
            </div>
            {/* right content */}
            <div className="text-black flex-1 flex justify-center items-center lg:px-10 sm:px-5 mx-auto">
              <div className="hidden sm:block md:block ">
                <Image src={im1} alt="side img" className="w-96 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="container flex flex-row flex-wrap items-center justify-center p-5 login-footer lg:pt-9">
          <span className="text-slate-600 p-5">
            New to Crewlance? Join our commission-free platform{" "}
          </span>
          <Link
            href="/signup"
            className=" text-black px-4 py-2 rounded-full border hover:border-gray-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
