"use client"
import React from 'react'
import SlickSlider from './SlickSlider';
import Image from 'next/image';
import splice from '@/public/assets/company/splice.png'
import Link from 'next/link';


type cardType = {
  img: string;
  title: string;
  subtitle: string;
  content: string;
}
type MoreviewCardType = {
  title: string;
  subtitle: string;
  link: string;
}
type TrustProps = {
  data: cardType[];
  toptitle: string;
  nexttitle: string;
};

const Trust = ({ data, toptitle, nexttitle }: TrustProps) => {

  return (
    <div className='max-w-screen flex h-fit min-h-screen flex-col justify-center gap-10 p-5 px-5 pb-14 pt-10 md:px-16'>

      <div className="flex flex-col gap-2 pb-14 pt-10">
        <div className="flex flex-row pb-10">
          <h1 className="font-Inter"><span className='text-3xl font-semibold lg:text-5xl'>{toptitle}</span> <span className='font-Inter text-3xl lg:text-5xl'>{nexttitle}</span></h1>
        </div>
        <div className="trust">
          <SlickSlider>
            {
              data.map((el, index) =>
                <Card key={index} img={`/assets${el.img}`} title={el.title} subtitle={el.subtitle} content={el.content} />
              )}
            <MoreviewCard title="More client reviews" subtitle="See more reviews" link="/reviews" />
          </SlickSlider>
        </div>
        
      </div>

      <div className="text-lg lg:text-xl">
        CLIENTS HIRING ON CREWLANCE
        <div className="no-scrollbar::-webkit-scrollbar no-scrollbar flex flex-row gap-5 overflow-x-scroll pt-8">
          {/* {/* <Image src={splice} alt="company" className="" height={100}  width={100} /> */}
          <Image src={splice} alt="company" className="" height={100} width={100} />
          <Image src={splice} alt="company" className="" height={100} width={100} />
          <Image src={splice} alt="company" className="" height={100} width={100} />
          <Image src={splice} alt="company" className="" height={100} width={100} />
          <Image src={splice} alt="company" className="" height={100} width={100} />
          <Image src={splice} alt="company" className="" height={100} width={100} />
          <Image src={splice} alt="company" className="" height={100} width={100} />
          <Image src={splice} alt="company" className="" height={100} width={100} />
          <Image src={splice} alt="company" className="" height={100} width={100} />

        </div>
      </div>
    </div>
  )
}

export default Trust

const Card = ({ img, content, title, subtitle }: cardType) => {
  return (
    <div className="mx-5 flex aspect-[4/3] flex-col justify-between gap-5 rounded-xl bg-white p-6 text-center text-black">
      <p className="text-left">{content}</p>
      <div className="flex gap-3">
        <div className="left my-auto aspect-square w-10">
          <Image src={img} alt="side img" className="object-fit rounded-md" height={100} width={200} />
        </div>
        <div className="flex flex-col text-left">
          <p className='font-semibold'>{title}</p>
          <p className='text-slate-700'>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const MoreviewCard = ({ title, subtitle, link }: MoreviewCardType) => {
  return (
    <div className="mx-5 flex aspect-[4/3] flex-col items-center justify-center gap-7 rounded-xl bg-white p-5 text-center text-black">
      <p className='text-2xl font-semibold'>{title}</p>
      <Link href={link} className='w-fit rounded-full bg-black px-3 py-2 text-white'>
        {subtitle}
      </Link>
    </div>
  );
};