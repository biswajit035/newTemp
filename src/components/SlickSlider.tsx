"use client"
import Slider, { Settings, CustomArrowProps } from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import  { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

type NextArrowProps = CustomArrowProps & {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const NextArrow: React.FC<NextArrowProps> = ({ onClick }) => {
    return (
        <div className="absolute -top-[45px] right-0" onClick={onClick}>
            <div className="flex h-[50px] w-[60px] cursor-pointer flex-row place-items-center">
                <FaArrowRight />
            </div>
        </div>
    );
};

type PrevArrowProps = CustomArrowProps & {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const PrevArrow: React.FC<PrevArrowProps> = ({ onClick }) => {
    return (
        <div className="absolute -top-[45px] right-[80px]" onClick={onClick}>
            <div className="flex h-[50px] w-[50px] cursor-pointer flex-row place-items-center">
                <FaArrowLeft />
            </div>
        </div>
    );
};

const SlickSlider = ({ children}: Props) => {

    const settings: Settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],


    };

    return (
        <div className="relative pt-5">
            <Slider {...settings}>
                {children}
            </Slider>
            

        </div>
    );
}

export default SlickSlider