"use client"
import React, { useEffect } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiWarningCircleLight } from "react-icons/pi";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import WalletModal from '@/src/components/WalletModal';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CiCreditCard1, CiBank, CiDollar } from "react-icons/ci";
import { SlPaypal } from "react-icons/sl";

const IndependentWallet = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const params = useSearchParams();
  const paramsMethod = params?.get("method") ?? "bank";
  const router = useRouter();
  const pathname = usePathname();
  


  const methodList = [
    { title: "Bank", slug: "bank", icon: CiBank},
    { title: "Debit Card", slug: "debitcard", icon: CiCreditCard1 },
    { title: "USDC", slug: "usdc", icon: CiDollar },
    { title: "PayPal", slug: "paypal", icon: SlPaypal },
  ]

  


  return (
    <section className='flex flex-col gap-5 px-5'>
      <span className='pt-8 text-xl font-semibold'>Wallet</span>

      {/* ------------------------------- wallet box ------------------------------- */}
      <div className="flex gap-24 rounded-xl border border-gray-400 p-5">
        <div className="aspect-video w-[30%] rounded-xl bg-gray-200"></div>
        <Button onPress={onOpen} className='h-fit rounded-full bg-darkBg px-10 py-3 font-semibold text-white'>
          Add An Account
        </Button>
      </div>

      <div className="flex flex-col gap-3 rounded-xl border border-gray-400 p-5">
        <div className='flex justify-between'>
          <span className='text-xl font-semibold'>Payout Accounts</span>
          <IoIosInformationCircleOutline className="text-2xl" />
        </div>

        <div className='flex items-center gap-3 border border-dashed border-black px-2 py-1'>
          {/* left */}
          <CiCirclePlus className="text-4xl" />
          {/* right */}
          <div className='flex flex-col'>
            <span className='h-fit text-base font-semibold'>Add An Accont</span>
            <span className='h-fit text-sm'>Enable commisssio-free payments and projects</span>
          </div>
        </div>

        <div className='flex items-center gap-2 border-t border-gray-700 py-2 text-xl font-semibold'>
          <PiWarningCircleLight className="text-red-600" />
          Action Required
        </div>
        <span>Please Update Your personal information to manage your wallet.</span>
      </div>

      <WalletModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        modalTitle="Add Payout Account"
      >
        <div className='flex flex-col gap-3'>
          {
            methodList?.map((item, index) => (
              <button
                onClick={() => { router.push(`${pathname}?method=${item.slug}`) }} key={index}
                className={`flex items-center gap-2 rounded-md border ${paramsMethod == item.slug ? "border-black border-1.5" :"border-gray-400 border"} px-2 py-2`}
              >

                {<item.icon className="text-2xl"/>}
                <span className='font-medium'>{item.title}</span>
              </button>
            ))
          }
          <h6 className='text-center text-base'> Check out <span className='font-medium'>guide to setting up Payout</span></h6>
        </div>
      </WalletModal>

    </section>
  )
}

export default IndependentWallet