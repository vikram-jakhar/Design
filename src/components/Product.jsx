import React, { useState } from 'react'
import Export_img from '../assets/img/explore_img.webp'
import Commonbtn from './ComanBtn'
import { Play } from '../svgFile/svg'
import video from '../assets/img/video.mp4'

const Product = () => {
    const [modl, setmodl] = useState(false);
    const open = () => {
        setmodl(true);
    };
    const close = () => {
        setmodl(false);
    };
    if (modl === true) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
    
    return (
        <>
            <div>
                <div className='max-w-[1341px] mx-auto px-3'>
                    <div className='  grid grid-cols-1 lg:grid-cols-2 mt-[128px]'>
                        <div className='span-cols-2 w-full px-3 flex justify-center'>
                            <div className='relative'>
                                <img className='w-full relative ' src={Export_img} alt="Export_img" />
                                <span className='w-[280px] h-[200px] sm:w-[416px] sm:h-[336px] left-[-2%] top-[-8%] sm:left-[-7%] sm:top-[-7%] absolute z-[-1] bg-[linear-gradient(270deg,#8C939B_0%,_#243040_100%)]' />
                                <div className='w-[254px] h-[78px] bg-white flex justify-center gap-3 items-center absolute bottom-0 right-0'>
                                    <p className='text-[14px] text-[#243040] font-poppins font-normal'>Explore Video</p>
                                    <span className='w-[66px] h-[1px] bg-[#243040]'></span>
                                    <span onClick={open} className='w-[45px] h-[45px] bg-[#BD7D41] rounded-[50px] flex justify-center items-center cursor-pointer'>
                                        <Play />
                                    </span>
                                </div>
                                {modl && (
                                    <div
                                        onClick={close}
                                        className="backdrop-blur-md flex justify-center items-center h-screen top-[0] w-screen fixed left-0 z-20 "
                                    >
                                        <div className="md:max-w-[360px] ">
                                            <div className={`${modl ? "" : ""} `}>
                                                <div className="relative flex justify-center">

                                                    <video
                                                        className=" max-w-[400px] max-h-[400px] w-full h-full"
                                                        autoPlay
                                                        controls
                                                    >
                                                        <source src={video} type="video/mp4" />
                                                    </video>

                                                    <div onClick={close} className="z-20 relative cursor-pointer group ">
                                                        <span className="flex bg-white  group-hover:bg-[#BD7D41]  absolute -right-0 duration-500 top-[-12px] rotate-45 h-[2px] w-6"></span>
                                                        <span className="flex bg-white group-hover:bg-[#BD7D41] absolute -right-0 duration-500 -rotate-45 h-[2px] w-6 top-[-12px]"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='span-cols-2 w-full mt-2  px-3 mb-6 lg:mb-0 '>
                            <div className='flex items-center gap-3'>
                                <span className='w-[95px] h-[1px] bg-[#000]' />
                                <h6 className=' text-[14px] md:text-[20px] font-normal font-poppins text-[#BD7D41]'>Welcome Our Story</h6>
                            </div>

                            <h2 className=' text-[25px] md:text-[35px] font-poppins font-bold text-[#243040] max-w-[436px] pt-[10px] md:pt-[19px]'>We create the product you tell us you wish existed. </h2>
                            <p className='text-[15px] md:text-[18px] font-normal font-poppins text-[rgba(0,0,0,0.70)] max-w-[596px] pt-[10px] pb-[15px] md:pt-[19px] md:pb-[34px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                            <Commonbtn text='READ MORE' />

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Product