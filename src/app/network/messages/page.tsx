"use client"
import Image from "next/image";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Networkimg from '@/public/assets/network/networkimg.jpg'
import { useRouter,usePathname, useSearchParams } from "next/navigation";


const Messages = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const jobsParams = params?.get("jobs");

  const handleJobs = ({ val }: { val: string }) => {
    router.push(`${pathname}?jobs=${val}`);
  }

  
  return (
    <section className="flex min-h-screen">
      {/* ---------------------------------- LEFT ---------------------------------- */}
      <div className="w-1/2 border-r-1 border-gray-400 border-t-1">

        {/* ----------------------------------- TOP ---------------------------------- */}
        <div className="top flex flex-col gap-2 border-b-1 border-gray-400 px-6 py-4">
          <div className="flex justify-between">
            <span>Messages</span>
            <Dropdown>
              <DropdownTrigger>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots cursor-pointer" viewBox="0 0 16 16"> <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="black"></path> </svg>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem >options 1</DropdownItem>
                <DropdownItem >options 2</DropdownItem>
                <DropdownItem >options 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
          </div>

          {/* search bar */}
          <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required />
            </div>
          </form>

          {/* jobs button */}
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="w-fit"
              >
                {`Jobs:  ${jobsParams || "jobs 1"}`}  
                <div className='w-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32" id="down-arrow">
                    <path d="M16 22a2 2 0 0 1-1.41-.59l-10-10a2 2 0 0 1 2.82-2.82L16 17.17l8.59-8.58a2 2 0 0 1 2.82 2.82l-10 10A2 2 0 0 1 16 22Z"></path>
                  </svg>
                </div>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem onClick={() => handleJobs({ val: 'jobs1' })}>Jobs 1</DropdownItem>
              <DropdownItem onClick={() => handleJobs({ val: 'jobs2' })}>Jobs 2</DropdownItem>
              <DropdownItem onClick={() => handleJobs({ val: 'jobs3' })}>Jobs 3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>


      </div>

      {/* ---------------------------------- RIGHT --------------------------------- */}
      <div className="right w-1/2 border-t-1 border-gray-400">
        <div className="content flex flex-col items-center justify-center h-full w-full gap-3">
          <div className='relative aspect-square w-6/12'>
            <Image src={Networkimg} alt="network icon" fill />
          </div>
          <span className="font-semibold">No messages</span>
          <span>All conversation will appear here</span>
          <button className='btn-slate'>+ START PROJECT</button>
        </div>
      </div>
    </section>
  )
}

export default Messages