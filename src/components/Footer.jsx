import React from 'react'
import { Facebook, Instagram, Logo, Twtter } from '../svgFile/svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='bg-[#243040]'>
                <div className='max-w-[1341px] mx-auto px-3'>
                    <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-7 pt-[87px] '>
                        <div className='col-spn-1 lg:col-span-4'>
                            <div className='flex gap-[7px]'>
                                <Logo />
                                <h6 className='text-white text-[33.023px] font-bold'>FURNITURE</h6>
                            </div>
                            <p className='pt-[30.47px] pb-[23px] text-white text-[14px] font-roboto font-normal max-w-[338px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.</p>
                            <div className='flex gap-[12.49px] pb-2 '>
                                <span className=' cursor-pointer'>
                                    <Instagram />
                                </span>
                                <span className='cursor-pointer w-[22.904px] h-[22.903px] border border-solid border-white bg-transparent flex justify-center items-center rounded-[50px]'>
                                    <Twtter />
                                </span>
                                <span className=' cursor-pointer w-[22.904px] h-[22.903px] border border-solid border-white bg-transparent flex justify-center items-center rounded-[50px]'>
                                    <Facebook />
                                </span>
                            </div>

                        </div>
                        <div className='col-span-1 max-w-[130px] px-3'>
                            <h6 className='text-white text-[14px] font-roboto font-medium text-nowrap after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41] '>ABOUT STORE</h6>
                            <div className='flex flex-col'>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[19px]transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Home</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px]transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Shop</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px]transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Product</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px] text-nowraptransition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Festival Offer</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px]transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Log In</Link>
                            </div>
                        </div>
                        <div className='col-span-1 max-w-[130px] px-3'>
                            <h6 className='text-white text-[14px] font-roboto font-medium after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41] '>BRANDS</h6>
                            <div className='flex flex-col'>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[19px] transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Album</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px] transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Shop</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px] transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Product</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px] text-nowrap transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Festival Offer</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px] text-nowrap transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Log In</Link>
                            </div>
                        </div>
                        <div className='col-span-1 max-w-[130px] px-3'>
                            <h6 className='text-white text-[14px] font-roboto font-medium after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41] '>CATEGORIES</h6>
                            <div className='flex flex-col'>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[19px] transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Single</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px] text-nowrap transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Aleeper Sofas</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px] text-nowrap transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Accent Chairs</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px] text-nowrap transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Festival Offer</Link>
                                <Link className='text-white text-[14px] font-roboto font-normal pt-[13px] text-nowrap  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Log In</Link>
                            </div>
                        </div>

                    </div>


                </div>
                <div className=' border-t rounded border-[rgba(255,255,255,0.50)] mt-[81.1px] w-full'>
                    
                    <p className='text-white text-[14px] font-normal pt-[29px] pb-[27px] text-center '>@copyright2021</p>
                </div>
            </div>




        </>
    )
}

export default Footer