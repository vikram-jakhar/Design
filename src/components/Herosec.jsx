import React, { useState } from 'react'
import { Carthicon, Logo, Serchicon } from '../svgFile/svg'
import { Link, useLocation } from 'react-router-dom'
import Commonbtn from './ComanBtn';



const Herosec = () => {
    let location = useLocation();
    const [first, setfirst] = useState(false);
    function MobView(){
        setfirst(!first);
        if (first === false) {
            document.body.classList.add("max-lg:overflow-hidden");
        } else {
            document.body.classList.remove("max-lg:overflow-hidden");
        }
    }
    function closeNav() {
        setfirst(false)
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const SearchOpen = () => {
        setIsSearchOpen(!isSearchOpen);

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
                            <ul className={`${first ? "left-0" : "left-[-100%]"} mobileview duration-300 flex gap-[55px]`}>
                                <li><Link onClick={closeNav} to="/" className={`${location.pathname === "/" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} text-white text-lg font-normal font-roboto`}>HOME</Link></li>
                                <li><Link onClick={closeNav} to="/about" className={`${location.pathname === "/about" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} text-white text-lg font-normal font-roboto`}>About Us</Link></li>
                                <li><Link onClick={closeNav} to="/shop" className={`${location.pathname === "/shop" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} text-white text-lg font-normal font-roboto`}>Shop</Link></li>
                                <li><Link onClick={closeNav} to="/contact" className={`${location.pathname === "/contact" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} text-white text-lg font-normal font-roboto`}>Contact Us</Link></li>
                            </ul>
                            <div className='flex items-center gap-[16px] sm:gap-[28.29px]'>
                                <div className='flex gap-4 items-center'>
                                    <span onClick={SearchOpen}>
                                        {isSearchOpen ? (<div className=" relative cursor-pointer group mb-1 ">
                                            <span className="flex bg-white  group-hover:bg-[#BD7D41]  absolute -left-3 duration-500 top-0 rotate-45 h-[2px] w-5"></span>
                                            <span className="flex bg-white group-hover:bg-[#BD7D41] absolute -left-3 duration-500 -rotate-45 h-[2px] w-5 mb-1"></span>
                                        </div>) : (<Serchicon />)}
                                    </span>
                                    <input type='text' placeholder='  Sarch.....' className={`transition-all  ease-in duration-300 rounded max-sm:hidden ${isSearchOpen ? "w-[120px]" : "w-[0]"}`} />
                                </div>
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
                    <div className='flex justify-center items-center'>
                        <input type='text' placeholder='  Sarch.....' className={` transition-all ease-in duration-500 rounded max-sm:block sm:hidden ${isSearchOpen ? "w-[220px]" : "w-[0] "}`} />

                    </div>
                    <div className='text-center'>
                        <h1 className='text-white text-[23px] md:text-[48px] max-w-[908px] text-center m-auto font-poppins font-bold pt-5 sm:pt-[50px] md:pt-[149px] '>Awesome Design Best Furniture For Your Interior</h1>
                        <p className='text-white text-base sm:text-[20px] font-normal pt-[8px] sm:pt-[15px] pb-5 sm:pb-[51px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                        <Commonbtn text='SHOP NOW' />

                    </div>

                </div >


            </div >




        </>
    )
}

export default Herosec