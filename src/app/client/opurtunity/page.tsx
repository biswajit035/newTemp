"use client"
// import { Dropdown, DropdownItem } from 'flowbite-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Networkimg from '@/public/assets/network/networkimg.jpg'
import Image from 'next/image';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";


const ClientOpurtunity = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();
    const sortParams = params?.get("sort");
    const statusParams = params?.get("status");

    

    const handleSort = ({ val }: { val: string }) => {        
        router.push(`${pathname}?sort=${val}&status=${statusParams || "active"}`);
    }
    const handleStatus = ({ val }: { val: string }) => {
        router.push(`${pathname}?sort=${sortParams || "relevance"}&status=${val}`);
    }

    const status=["Active","Inactive"]
    const sort=["Relevance","Top"]

    return (
        <section className='px-5 flex flex-col gap-10'>

            {/* ---------------------------- TOP SECTION START --------------------------- */}
            <div className='flex items-center justify-between'>
                <section className='flex items-center gap-2'>

                    

                    {/* filter button */}
                    <button className="border border-gray-400 p-2 text-[12px] font-semibold text-gray-700 rounded-xl h-fit w-fit">All Filters</button>

                    {/* status button */}
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered"
                                className='w-fit'
                            >
                                Status: {` ${statusParams || "Active"}`}
                                <div className='w-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32" id="down-arrow">
                                        <path d="M16 22a2 2 0 0 1-1.41-.59l-10-10a2 2 0 0 1 2.82-2.82L16 17.17l8.59-8.58a2 2 0 0 1 2.82 2.82l-10 10A2 2 0 0 1 16 22Z"></path>
                                    </svg>
                                </div>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Dynamic Actions">
                            {
                                status.map((item,index)=>(
                                    <DropdownItem onClick={() => handleStatus({ val: `${item}` })} key={index}>{item}</DropdownItem>
                                ))
                            }
                        </DropdownMenu>
                    </Dropdown>

                    {/* sort button */}
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered"
                                className='w-fit'
                            >
                                Sort: {` ${sortParams || "relevance"}`}
                                <div className='w-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32" id="down-arrow">
                                        <path d="M16 22a2 2 0 0 1-1.41-.59l-10-10a2 2 0 0 1 2.82-2.82L16 17.17l8.59-8.58a2 2 0 0 1 2.82 2.82l-10 10A2 2 0 0 1 16 22Z"></path>
                                    </svg>
                                </div>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Dynamic Actions">
                            {
                                sort.map((item,index)=>(
                                    <DropdownItem onClick={() => handleSort({ val: `${item}` })} key={index}>{item}</DropdownItem>
                                ))
                            }
                        </DropdownMenu>
                    </Dropdown>

                </section>

                <section className='flex items-center gap-2'>
                    {/* Add FREELANCERS */}
                    <button className='btn-slate'>+ POST A JOB</button>
                </section>
            </div>
            {/* ---------------------------- TOP SECTION END --------------------------- */}

            {/* -------------------------------------------------------------------------- */
      /*                               bottom section                               */
      /* -------------------------------------------------------------------------- */}
            <section className='border rounded-xl border-gray-400 flex flex-col gap-3 items-center justify-center py-5 relative'>
                <span className='absolute -top-8 left-2 text-slate-500'>0 Jobs</span>
                <div className='relative aspect-square w-2/12'>
                    <Image src={Networkimg} alt="network icon" fill />
                </div>
                <div className='flex flex-col items-center '>
                    <h4 className='font-semibold text-lg'>Get matched with top freelancers</h4>
                    <p className='w-1/2 text-center'>Whether it&apos;s public or invite-only, posting a job is the first step to finding the right freelancer for your project</p>
                </div>
                <div className='flex flex-col gap-3 items-center'>
                    <button className='btn-blackHover px-6 py-2'>+ Post a Job</button>
                    <button className='btn-whiteHover px-6 py-2'>Discover Freelancers</button>
                </div>

            </section>

        </section>
    )
}

export default ClientOpurtunity