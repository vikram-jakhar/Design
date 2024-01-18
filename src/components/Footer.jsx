import React from 'react'
import { Facebook, Instagram, Logo, Twtter } from '../svgFile/svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='bg-[#243040]'>
                <div className='max-w-[1341px] mx-auto px-3'>
                    <div className='grid gap-10 sm:gap-16 grid-cols-2 lg:grid-cols-7 pt-[87px] px-3'>
                        <div className='col-span-2 md:col-span-1 lg:col-span-4 px-3'>
                            <div className='flex items-center gap-[7px]'>
                                <Logo />
                                <h6 className='text-white text-[12px] sm:text-[33.023px] font-bold'>FURNITURE</h6>
                            </div>
                            <p className='sm:pt-[30.47px] pb-3 sm:pb-[23px] text-white text-[14px] font-roboto font-normal max-w-[338px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.</p>
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
                            <ul className='flex flex-col'>
                                <li className='text-white text-[14px] mt-0 sm:mt-5 lg:mt-0 font-roboto font-medium text-nowrap after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41] '>ABOUT STORE</li>
                                <li className=' pt-[19px]'><Link className='text-white text-[14px] font-roboto font-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Home</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Shop</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Product</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Festival Offer</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Log In</Link></li>
                            </ul>
                        </div>
                        <div className='col-span-1 max-w-[130px] px-3'>
                            <ul className='flex flex-col'>
                                <li className='text-white text-[14px] font-roboto font-medium text-nowrap after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41] '>BRANDS</li>
                                <li className='pt-[19px]'><Link className='text-white text-[14px] font-roboto font-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Album</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Shop</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Product</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Festival Offer</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Log In</Link></li>
                            </ul>
                        </div>
                        <div className='col-span-1 max-w-[130px] px-3'>
                            <ul className='flex flex-col'>
                                <li className='text-white text-[14px] font-roboto font-medium text-nowrap after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41] '>CATEGORIES</li>
                                <li className='pt-[19px]'><Link className='text-white text-[14px] font-roboto font-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41]'>Single</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41] text-nowrap'>Aleeper Sofas</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41] text-nowrap'>Accent Chairs</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41] text-nowrap'>Festival Offer</Link></li>
                                <li className='pt-2'><Link className='text-white text-[14px] font-roboto font-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[2px] after:rounded-full after:bg-[#BD7D41] text-nowrap'>Log In</Link></li>
                            </ul>
                        </div>

                    </div>


                </div>
                <div className=' border-t rounded border-[rgba(255,255,255,0.50)] mt-9 sm:mt-[81.1px] w-full'>

                    <p className='text-white text-[14px] font-normal pt-3 sm:pt-[29px] pb-3 sm:pb-[27px] text-center '>@copyright2021</p>
                </div>
            </div>
        </>
    )
}

export default Footer