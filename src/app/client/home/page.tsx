"use client"
import React, { useEffect, useState } from 'react'
import { UiProviders } from '@/src/app/UiProvider';

import { Accordion, AccordionItem } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";

interface AccountStatus {
  onboarding: boolean;
  payments: boolean;
  firstProject: boolean;
}

const ClientHome = () => {

  

  const [accountStatus, setAccountStatus] = useState<AccountStatus>({
    onboarding: false,
    payments: false,
    firstProject: false,
  });

  const [falseCount, setFalseCount] = useState<number>(0);

  const handleCheckboxChange = (step: keyof AccountStatus) => {
    setAccountStatus((prevStatus) => ({
      ...prevStatus,
      [step]: !prevStatus[step],
    }));
  };

  useEffect(() => {
    const count = Object.values(accountStatus).filter((value) => !value).length;
    setFalseCount(count);
  }, [accountStatus]);



  return (
    <UiProviders>
      <section className='flex flex-col gap-5 border-t border-gray-500 px-5'>

        <span className='text-xl font-semibold pt-5'>Welcome, Gravity</span>

        {/* action items */}
        <div className='border border-gray-400 rounded-xl py-5'>
          <div className='border-b border-gray-400 font-semibold text-lg px-5 py-2 flex gap-5'>
            Your action items
            <div className='bg-blue-600 text-white w-fit flex items-center justify-center rounded-full h-8 aspect-square'>{falseCount}</div>
          </div>
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1"
              title={
                <div className='font-semibold flex gap-5 '>
                  Finishing Setting Up your account
                  <div className='bg-gray-400 text-black w-fit flex items-center justify-center rounded-full h-8 aspect-square'>{falseCount}</div>
                </div>
              }
              className='mx-3'>
              <div className='flex flex-col text-xl gap-5'>
                <Checkbox
                  isSelected={accountStatus.onboarding}
                  onValueChange={() => handleCheckboxChange('onboarding')}
                  radius="full"
                  className='text-xl'
                  size="lg"
                  // contentEditable={false}
                >
                  Complete Onboarding
                </Checkbox>

                <Checkbox
                  isSelected={accountStatus.payments}
                  onValueChange={() => handleCheckboxChange('payments')}
                  radius="full"
                  size="lg"
                  isReadOnly={true}
                >
                  Set up payments
                </Checkbox>

                <Checkbox
                  isSelected={accountStatus.firstProject}
                  onValueChange={() => handleCheckboxChange('firstProject')}
                  radius="full"
                  size="lg"
                  isReadOnly={true}
                >
                  Hire For your First Project
                </Checkbox>
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        <div className='flex flex-col gap-3 border border-gray-400 rounded-xl py-5 px-8'>
          <span className='font-semibold text-lg'>Hire for your first project</span>
          <p className='font-semibold text-gray-400'>Start a project with a freelancer you know, or post a job and get matched with top freelancers</p>
          <button className='font-semibold text-xl border border-gray-400 px-6 py-2 rounded-2xl text-gray-500 hover:bg-slate-700 hover:text-white w-fit h-fit'>Hire</button>
        </div>

        <div className='flex flex-col items-center gap-3 border border-gray-400 rounded-xl py-5 px-24 '>
          <span className='font-semibold text-lg'>Bring your team</span>
          <p className='font-semibold text-gray-400'>Invite your teammates and current freelancers</p>
          <button className='font-semibold text-xl border border-gray-400 px-6 py-2 rounded-2xl text-gray-500 hover:bg-slate-700 hover:text-white h-fit w-full'>Invite Teammates</button>
          <button className='font-semibold text-xl border border-gray-400 px-6 py-2 rounded-2xl  bg-slate-300 hover:bg-slate-400 text-gray-600 h-fit w-full'>Invite Freelancers</button>
        </div>

        <div className='flex flex-col gap-3 border border-gray-400 rounded-xl py-5 px-24 bg-gray-300'>
          <span className='font-semibold text-lg'>Need help?</span>
          <p className='font-semibold text-gray-500'>Schedule a call and we&apos;ll help you find your next hire</p>
          <button className='font-semibold text-xl border border-gray-800 px-6 py-2 bg-white rounded-2xl text-gray-500 hover:bg-slate-700 hover:text-white h-fit w-full'>Schedule a call</button>
        </div>

      </section>
    </UiProviders>
  )
}

export default ClientHome