import Image from 'next/image'
import bg from '@/public/assets/pro/bg.png';
import { FaCircleCheck } from "react-icons/fa6";
const Compare = () => {
  return (

    <div>
      <div className="bg-[#45192f] py-12 relative overflow-hidden">
        <div className="text-center">
          <h1 className="lg:text-5xl text-3xl  text-white font-Inter">Compare <span className="lg:text-5xl text-3xl font-light font-Tobias">  plans & features </span></h1>
        </div>
        <div className="flex ">

          <div className="absolute left-0 z-0">
            <Image src={bg} alt='img' />
          </div>
        </div>

        <div className="flex items-center justify-center min-h-screen py-12 relative  mx-4 z-40">
          <div className="bg-white text-[#13171F] p-10 px-14 rounded-lg shadow-md font-Inter">

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] '>
              <div className="grid grid-cols-12 lg:gap-7 mb-3">
                <div className="col-span-6"></div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-2xl font-medium">Always Free</h2></div>
                    <button className="border border-black hover:bg-black hover:text-white font-semibold rounded-full mt-2 px-4 lg:py-2">Sign Up</button>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="font-medium text-center text-2xl bg-clip-text text-transparent from-[#61A6F2] via-[#8F6FDB]  to-[#F2C94C] bg-gradient-to-r ">CrewLance Pro</h2></div>
                    <button className="border bg-[#6a57e3] text-white font-bold rounded-full mt-2 px-4 py-2">Upgrade Pro</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6">
                  <h1 className="text-lg text-left  ">Commision-free payments</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#e5e7eb] bg-black rounded-full" /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"> <FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 ">
                  <h1 className="text-lg text-left ">Freelance jobs feed</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#e5e7eb] bg-black rounded-full" /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6">
                  <h1 className="text-lg text-left ">Basic portfolio, projects & services</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#e5e7eb] bg-black rounded-full" /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]"  /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left ">Tools for invoicing, Contracting & <br /> project management</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#e5e7eb] bg-black rounded-full" /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6">
                  <h1 className="text-lg text-left ">Basic analytics</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#e5e7eb] bg-black rounded-full" /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 ">
                <div className="col-span-6">
                  <h1 className="text-lg text-left ">Advanced analytics</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left ">Customizable portfolio templates</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left ">Unlimited portfolio templates</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left ">Custom portfolio logo, fonts & colors</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-[#D0D4DC] p-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left ">Custom domain support</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-rows-1 pt-4'>
              <div className="grid grid-cols-12 gap-7 mb-1 pl-4 pr-4 ">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left ">Custom Branding</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck className="text-[#6a57e3]" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )

}
export default Compare;