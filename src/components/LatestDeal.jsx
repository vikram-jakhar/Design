import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider_img1 from '../assets/img/slider_img1.webp'
import Slider_img2 from '../assets/img/slider_img2.webp'
import Slider_img3 from '../assets/img/slider_img3.webp'
import Commonbtn from "./ComanBtn";
import { Left_Arow, Right_Arow, Star } from "../svgFile/svg";

const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[70px] h-[70px] hover:brightness-200 lg:w-[99px] lg:h-[99px] rounded-full duration-500 shadow-xl flex items-center justify-center  bg-[#fff] absolute bottom-[-15%] left-[10%] sm:left-[30%]  lg:left-7  2xl:bottom-[44%] 2xl:left-[-8%]"
    >
        <Left_Arow />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[70px] h-[70px] hover:brightness-200  lg:w-[99px] lg:h-[99px] rounded-full bg-[#fff] shadow-xl flex items-center justify-center duration-500 absolute bottom-[-15%]  right-[10%] sm:right-[30%]  lg:right-6  2xl:bottom-[44%] 2xl:right-[-8%]"
    >
        <Right_Arow />
    </button>
);

const LatestDeal = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 652,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <div>
            <div className="max-w-[1320px]  px-3 mx-auto py-[50px] ">
                <div className="flex flex-col md:flex-row items-center   gap-2">
                    <span className="w-[95px] h-[1px] bg-black"></span>
                    <p className="text-xl font-ff-pop font-normal not-italic leading-normal text-[#BD7D41]">
                        Shopping Store
                    </p>
                </div>
                <p className="910:max-w-[426px]  910:text-start font-bold font-ff-pop leading-normal text-[30px] md:text-[35px] text-[#243040] not-italic md:pt-[19px] md:pb-[33px]">
                    Latest Deal{" "}
                </p>
                <Slider {...settings}>
                    <div>
                        <div className=" px-[23px] py-[18px] group  bg-[#fff] shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                            <div className=" overflow-hidden w-full">
                                <img
                                    className="w-full duration-300 group-hover:scale-110  overflow-hidden"
                                    src={Slider_img1}
                                    alt="Slider_img1"
                                />
                            </div>
                            <div className="flex justify-between pt-[19px] items-center">
                                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                    Best Guide
                                </p>
                                <div className="flex gap-[5px]">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                Lorem ipsum dolor{" "}
                            </div>
                            <div className="flex justify-between items-center md:pb-4">
                                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                    ₹1200.00{" "}
                                </p>
                                <Commonbtn text="ADD TO CART" padding='!p-[10px_13px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" px-[23px] py-[18px] group bg-[#fff] shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                            <div className=" w-full overflow-hidden">
                                <img className="w-full duration-300 group-hover:scale-110" src={Slider_img2} alt="Slider_img2" />
                            </div>
                            <div className="flex justify-between pt-[19px] items-center">
                                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                    Best Guide
                                </p>
                                <div className="flex gap-[5px]">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                Lorem ipsum dolor{" "}
                            </div>
                            <div className="flex justify-between items-center md:pb-4">
                                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                    ₹1200.00{" "}
                                </p>
                                <Commonbtn text="ADD TO CART" padding='!p-[10px_13px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" px-[23px] py-[18px] group bg-[#fff] shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                            <div className=" w-full overflow-hidden">
                                <img className="w-full duration-300 group-hover:scale-110" src={Slider_img3} alt="Slider_img3" />
                            </div>
                            <div className="flex justify-between pt-[19px] items-center">
                                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                    Best Guide
                                </p>
                                <div className="flex gap-[5px]">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                Lorem ipsum dolor{" "}
                            </div>
                            <div className="flex justify-between items-center md:pb-4">
                                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                    ₹1200.00{" "}
                                </p>
                                <Commonbtn text="ADD TO CART" padding='!p-[10px_13px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" px-[23px] py-[18px] group bg-[#fff] shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                            <div className=" w-full overflow-hidden">
                                <img className="w-full duration-300 group-hover:scale-110" src={Slider_img1} alt="Slider_img1" />
                            </div>
                            <div className="flex justify-between pt-[19px] items-center">
                                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                    Best Guide
                                </p>
                                <div className="flex gap-[5px]">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                Lorem ipsum dolor{" "}
                            </div>
                            <div className="flex justify-between items-center md:pb-4">
                                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                    ₹1200.00{" "}
                                </p>
                                <Commonbtn text="ADD TO CART" padding='!p-[10px_13px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" px-[23px] py-[18px] group  bg-[#fff] shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                            <div className=" w-full overflow-hidden">
                                <img className="w-full duration-300 group-hover:scale-110" src={Slider_img2} alt="Slider_img2" />
                            </div>
                            <div className="flex justify-between pt-[19px] items-center">
                                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                    Best Guide
                                </p>
                                <div className="flex gap-[5px]">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                Lorem ipsum dolor{" "}
                            </div>
                            <div className="flex justify-between items-center md:pb-4">
                                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                    ₹1200.00{" "}
                                </p>
                                <Commonbtn text="ADD TO CART" padding='!p-[10px_13px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" px-[23px] py-[18px] group  bg-[#fff] shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                            <div className=" w-full overflow-hidden ">
                                <img className="w-full duration-300 group-hover:scale-110" src={Slider_img3} alt="Slider_img3" />
                            </div>
                            <div className="flex justify-between pt-[19px] items-center">
                                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                    Best Guide
                                </p>
                                <div className="flex gap-[5px]">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                Lorem ipsum dolor{" "}
                            </div>
                            <div className="flex justify-between items-center md:pb-4">
                                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                    ₹1200.00{" "}
                                </p>
                                <Commonbtn text="ADD TO CART" padding='!p-[10px_13px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" px-[23px] py-[18px] group  bg-[#fff] shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                            <div className=" w-full overflow-hidden">
                                <img className="w-full duration-300 group-hover:scale-110" src={Slider_img1} alt="Slider_img1" />
                            </div>
                            <div className="flex justify-between pt-[19px] items-center">
                                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                    Best Guide
                                </p>
                                <div className="flex gap-[5px]">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                Lorem ipsum dolor{" "}
                            </div>
                            <div className="flex justify-between items-center md:pb-4">
                                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                    ₹1200.00{" "}
                                </p>
                                <Commonbtn text="ADD TO CART" padding='!p-[10px_13px]' />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default LatestDeal;