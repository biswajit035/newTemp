"use client"
import React from 'react'
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// pagination
type ArrowProps = CustomArrowProps & {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};


// TODO: THIS FILES HAVE A EXTERNAL CSS 
const SearchPagination = ({ width }: { width: string }) => {

    const searchSuggestion = [
        {
            title: "example 1"
        },
        {
            title: "example 12"
        },
        {
            title: "example 123"
        },
        {
            title: "example test"
        },
        {
            title: "example 1"
        },
        {
            title: "example 12"
        },
        {
            title: "example 123"
        },
        {
            title: "example test"
        },
        {
            title: "example 1"
        },
        {
            title: "example 12"
        },
        {
            title: "example 123"
        },
        {
            title: "example test"
        },
        {
            title: "example 1"
        },
        {
            title: "example 12"
        },
        {
            title: "example 123"
        },
        {
            title: "example test"
        },
    ]

    // nextArrow and prevArrow common style
    const style = "absolute  cursor-pointer bottom-[7px] "


    const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
        return (
            <div className={`right-0 ${style}`} onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
        return (
            <div className={`-left-[2px] ${style}`} onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const settings: Settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
        variableWidth: true
    };


    return (
        <div className={`search relative ${width}`}>
            <Slider {...settings}>
                {
                    searchSuggestion?.map((item, idx) => (
                        <div
                            className="min-w-fit cursor-pointer rounded-full border border-gray-400 bg-gray-100 px-2 py-1 text-sm text-slate-700 hover:bg-gray-200 lg:text-base"
                            key={idx}
                        >
                            {item.title}
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default SearchPagination