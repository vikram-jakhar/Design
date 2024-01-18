import React from 'react'
import Comanbtn from './ComanBtn'
import Sofa_1 from '../assets/img/sofa_1.webp'
import Sofa_2 from '../assets/img/sofa_2.webp'
import Sofa_3 from '../assets/img/sofa_3.webp'
import Sofa_4 from '../assets/img/sofa_4.webp'
import Sofa_5 from '../assets/img/sofa_5.webp'
import Sofa_6 from '../assets/img/sofa_6.webp'
import { Star } from '../svgFile/svg'

const crd = [
    {
        img: Sofa_1
    },
    {
        img: Sofa_2
    },
    {
        img: Sofa_3
    },
    {
        img: Sofa_4
    },
    {
        img: Sofa_5
    },
    {
        img: Sofa_6
    },
]

const Crddata = crd.map((crd) => (
    <div className=' col-span-1 px-3'>
        <div className=' bg-white duration-500 hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] px-[23px] pt-[18px] pb-[53px] mb-6 group '>
            <div className=' overflow-hidden'>
                <img className=' group-hover:scale-[1.1] duration-[400ms] w-full' src={crd.img} alt="card_img" />
            </div>
            <div className=' pt-[19px] flex items-center justify-between pb-[22px]'>
                <p className='text-black font-medium text-xl'>Single Sofa</p>
                <span className='flex gap-1'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </span>
            </div>
            <p className=' text-lg font-normal text-[#4D4D4D] pb-4'>Lorem ipsum dolor </p>
            <div className='flex items-center justify-between'>
                <p className=' text-black text-[16px] sm:text-[28.667px] font-semibold'>₹1200.00</p>
                <Comanbtn text='ADD TO CART' padding='!p-[10px_12px]' />
            </div>
        </div>
    </div>
))



const SopingStore = () => {
    return (
        <div className=' pt-[135px] overflow-hidden'>
            <div className=' max-w-[1320px] mx-auto px-3 pb-14 lg:pb-[144px]'>
                <div className='flex items-center gap-[11px] pb-[19px] '>
                    <span className=' w-[70px] sm:w-[95px] h-[1px] bg-black' />
                    <p className=' text-[#BD7D41] font-normal text-[14px] sm:text-xl'>Shopping Store</p>
                </div>
                <div className=' flex gap-[13px] items-center justify-center sm:justify-between sm:pb-[90px] '>
                    <h2 className=' text-[#243040] leading-normal text-nowrap text-[20px] sm:text-[35px] font-bold max-w-[436px]'>Our Products</h2>
                    <Comanbtn text='VIEW ALL PRODUCT' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-3'>
                    {Crddata}
                </div>
            </div>
        </div>
    )
}

export default SopingStore