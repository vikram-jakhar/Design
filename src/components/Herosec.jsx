import React, { useState } from 'react'
import { Carthicon, Logo, Serchicon } from '../svgFile/svg'
import { Link } from 'react-router-dom'
import Commonbtn from './ComanBtn';

const Herosec = () => {
    const [first, setfirst] = useState(false);
    function MobView() {
        setfirst(!first);
        if (first === false) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }
    return (
        <>
            <div className=' bg-[url(../src/assets/img/hero-bg.webp)] min-h-[80vh] sm:min-h-[70vh] md:min-h-screen bg-no-repeat bg-cover bg-center '>
                <div className='max-w-[1341px] mx-auto px-3 relative '>
                    <nav className='flex items-center justify-between'>
                        <div className='flex items-center gap-[7px] pt-2'>
                            <Logo />
                            <h2 className='text-[18px] sm:text-[33.023px] text-white font-roboto font-bold'>FURNITURE</h2>
                        </div>
                        <div className={` flex gap-[17px] sm:gap-[40px] items-center `}>
                            <div className={`${first ? "left-0" : "left-[-100%]"} mobileview duration-300 flex gap-[55px]`}>
                                <Link className='text-white font-roboto transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]  text-[18px] font-normal'>HOME</Link>
                                <Link className='text-white font-roboto transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]  text-[18px] font-normal'>ABOUT US</Link>
                                <Link className='text-white font-roboto  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41] text-[18px] font-normal'>SHOP</Link>
                                <Link className='text-white font-roboto transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]  text-[18px] font-normal'>CONTACT US</Link>
                            </div>
                            <div className='flex items-center gap-[16px] sm:gap-[28.29px]'>
                                <Serchicon />
                                <Carthicon />
                            </div>
                            <label className=" lg:hidden" onClick={MobView}>
                                {first ? (
                                    <div className="z-20 relative cursor-pointer group ">
                                        <span className="flex bg-white  group-hover:bg-[#BD7D41]  absolute -left-7 duration-500 top-1 rotate-45 h-[2px] w-6"></span>
                                        <span className="flex bg-white group-hover:bg-[#BD7D41] absolute -left-7 duration-500 -rotate-45 h-[2px] w-6 mt-1"></span>
                                    </div>
                                ) : (
                                    <div className="z-20 relative cursor-pointer group">
                                        <span className="flex bg-white group-hover:bg-[#BD7D41]  h-[2px] duration-500 w-6"></span>
                                        <span className="flex bg-white group-hover:bg-[#BD7D41]  h-[2px] duration-500 w-6 mt-1"></span>
                                        <span className="flex bg-white group-hover:bg-[#BD7D41] h-[2px] duration-500 w-6 mt-1"></span>
                                    </div>
                                )}
                            </label>
                        </div>


                    </nav>
                    <div className='text-center'>
                        <h1 className='text-white text-[23px] md:text-[48px] max-w-[908px] text-center m-auto font-poppins font-bold pt-5 sm:pt-[50px] md:pt-[149px] '>Awesome Design Best Furniture For Your Interior</h1>
                        <p className='text-white text-base sm:text-[20px] font-normal pt-[8px] sm:pt-[15px] pb-5 sm:pb-[51px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                        <Commonbtn text='SHOP NOW' />

                    </div>

                </div>


            </div>




        </>
    )
}

export default Herosec