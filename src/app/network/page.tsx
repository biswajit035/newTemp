"use client"
// import { Dropdown, DropdownItem } from 'flowbite-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Networkimg from '@/public/assets/network/networkimg.jpg'
import Image from 'next/image';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const Network = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const sortParams = params?.get("sort");

  const handleSort = ({ val }: { val: string }) => {
    router.push(`${pathname}?sort=${val}`);
  }

  return (
    <section className='px-5 flex flex-col gap-10'>

      {/* ---------------------------- TOP SECTION START --------------------------- */}
      <div className='flex items-center justify-between'>
        <section className='flex items-center gap-2'>

          {/* search bar */}
          <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required />
            </div>
          </form>

          {/* filter button */}
          <button className="border border-gray-400 p-2 text-[12px] font-semibold text-gray-700 rounded-xl h-fit w-fit">All Filters</button>

          {/* sort button */}
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className='w-fit'
              >
                Sort: {` ${sortParams || "newest"}`}
                <div className='w-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32" id="down-arrow">
                    <path d="M16 22a2 2 0 0 1-1.41-.59l-10-10a2 2 0 0 1 2.82-2.82L16 17.17l8.59-8.58a2 2 0 0 1 2.82 2.82l-10 10A2 2 0 0 1 16 22Z"></path>
                    </svg> 
                </div>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions">
              <DropdownItem onClick={() => handleSort({ val: 'newest' })} key="new">Newest</DropdownItem>
              <DropdownItem onClick={() => handleSort({ val: 'oldest' })} key="copy">Oldest</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
        </section>

        <section className='flex items-center gap-2'>
          {/* Add FREELANCERS */}
          <button className='btn-slate'>+ ADD FREELANCERS</button>


          {/* menu button */}
          <Dropdown>
            <DropdownTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots cursor-pointer" viewBox="0 0 16 16"> <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="black"></path> </svg>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem >Jobs 1</DropdownItem>
              <DropdownItem >Jobs 2</DropdownItem>
              <DropdownItem >Jobs 3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </section>
      </div>
      {/* ---------------------------- TOP SECTION END --------------------------- */}

      {/* -------------------------------------------------------------------------- */
      /*                               bottom section                               */
      /* -------------------------------------------------------------------------- */}
      <section className='border rounded-xl border-gray-400 flex flex-col gap-3 items-center justify-center py-5 relative'>
        <span className='absolute -top-8 left-2 text-slate-500'>0 freelancers</span>
        <div className='relative aspect-square w-2/12'>
          <Image src={Networkimg} alt="network icon" fill />
        </div>
        <div className='flex flex-col items-center '>
          <h4 className='font-semibold text-lg'>Ready to build your network?</h4>
          <p className='w-1/2 text-center'>Invite freelancers you&apos;ve previously worked with to collaborate on crewlance or discover new freelancers</p>
        </div>
        <div className='flex flex-col gap-3 items-center'>
          <button className='btn-blackHover px-6 py-2'>+ Add Freelancers</button>
          <button className='btn-whiteHover px-6 py-2'>Discover Freelsncers</button>
        </div>

      </section>
    </section>
  )
}

export default Network