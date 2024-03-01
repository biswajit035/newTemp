"use client"
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";
import WalletModal from '@/src/components/WalletModal';
import { CiCreditCard1, CiBank, CiDollar } from "react-icons/ci";
import { SlPaypal } from "react-icons/sl";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const PaymentSetting = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const params = useSearchParams();
  const paramsMethod = params?.get("method") ?? "bank";
  const router = useRouter();
  const pathname = usePathname();

  const methodList = [
    { title: "Credit/Debit Cards", slug: "card", icon: CiCreditCard1 },
    { title: "Bank Account", slug: "bank", icon: CiBank },
  ]

  return (
    <section className='px-5 py-3'>
      {/* top */}
      <div className='flex justify-around'>
        <button>Account</button>
        <button>Email Preferences</button>
        <button>Help</button>
        <Button onPress={onOpen} className='w-fit border-none bg-white'>Payments methods</Button>
        <button>Log Out</button>
      </div>
      <div>
        <span className='flex items-center gap-5'>
          <span className='font-medium'>Payment methods</span>
          <CiCirclePlus />
        </span>
      </div>
      <WalletModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        modalTitle="Add Payment Method"
      >
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            {
              methodList?.map((item, index) => (
                <button
                  onClick={() => { router.push(`${pathname}?method=${item.slug}`) }} key={index}
                  className={`flex-col py-8 w-1/2 flex items-center gap-2 rounded-md border ${paramsMethod == item.slug ? "border-black border-1.5" : "border-gray-400 border"} px-2 py-2`}
                >

                  {<item.icon className="text-2xl" />}
                  <span className='font-medium'>{item.title}</span>
                </button>
              ))
            }
          </div>
            <h6 className='text-center text-base'> Check out <span className='font-medium'>guide to setting up Payout</span></h6>
        </div>
      </WalletModal>
    </section>
  )
}

export default PaymentSetting