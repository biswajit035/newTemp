"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scroll1 from '@/public/assets/Scroll2image.png'
import scroll2 from '@/public/assets/Scroll2image.png'
import scroll3 from '@/public/assets/Scroll3image.png'

const ScrollMotion: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

    const CreateOpacityAnimation = (start: string, mid: string, end: string) => {
        return useTransform(scrollYProgress, [0, 0.28, 0.8, 1], ["block", start, mid, end]);
    }

    const opacity1Animation = CreateOpacityAnimation("block", "none", "none");
    const opacity2Animation = CreateOpacityAnimation("none", "block", "none");
    const opacity3Animation = CreateOpacityAnimation("none", "none", "block");
    const bgcolorAnimation = useTransform(scrollYProgress, [0, 0.28, 0.4, 1], ["#6A57E3", "#6A57E3", "#C3F2EF", "#FFFFFF"]);

    return (
        <motion.div className="relative flex h-[300vh] w-full px-5 text-xl md:px-16" ref={ref} style={{ backgroundColor: bgcolorAnimation, transitionDuration: "1s" }}>
            <motion.div className="left relative w-full md:w-1/2">
                <motion.div className="sticky top-0 flex h-screen w-full items-center">
                    <motion.span className="flex w-full flex-col text-white" style={{ display: opacity1Animation }}>
                        <p className="font-Tobias text-3xl lg:text-5xl"> <span className="font-Inter font-bold"> Discover </span>  top</p>
                        <p className="mb-5 text-3xl lg:text-5xl">freelancers</p>

                        <p className="mb-10 font-Inter text-base lg:text-xl">Find the perfect fit for your next big project, and hire for free.</p>

                        <Link href="#" className="lightButton border-white">Discover Independents</Link>
                    </motion.span>
                    
                    <motion.span className="flex w-full flex-col font-Inter text-black" style={{ display: opacity2Animation }}>
                        <p className="font-Inter text-3xl font-bold lg:text-5xl"> Hire and Pay</p>
                        <p className="mb-5 font-Tobias text-3xl lg:text-5xl">all in one place</p>

                        <p className="mb-10 max-w-[400px] font-Inter text-base lg:text-xl">Create contracts and manage pauments to anyone in the world -all for free</p>

                        <Link href="#" className="darkButton">Hire on Crewlance</Link>
                    </motion.span>

                    <motion.span className="flex flex-col font-Inter text-black" style={{ display: opacity3Animation }}>
                        <p className="font-Inter text-3xl font-bold lg:text-5xl"> Manage your <span className="font-Tobias font-medium">projects </span></p>
                        <p className="mb-5 font-Tobias text-3xl lg:text-5xl">& payroll</p>

                        <p className="mb-10 max-w-[400px] font-Inter text-base lg:text-xl">Invite current freelancers, and hire for new projects. Manage projects & payments for a global workforce.</p>

                        <Link href="#" className="darkButton">Get Started</Link>
                    </motion.span>
                </motion.div>
            </motion.div>
            <motion.div className="right hidden w-1/2 md:block">
                <motion.div className="flex h-screen items-center text-white">
                    <Image src={scroll1} alt="slider"/>
                </motion.div>
                <motion.div className="flex h-screen items-center text-white">
                    <Image src={scroll2} alt="slider" />

                </motion.div>
                <motion.div className="flex h-screen items-center">
                    <Image src={scroll3} alt="slider" />

                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ScrollMotion;
