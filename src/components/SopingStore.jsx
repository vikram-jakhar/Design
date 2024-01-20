import React, { useEffect, useState } from "react";
import Sofa_1 from "../assets/img/sofa_1.webp";
import Sofa_2 from "../assets/img/sofa_2.webp";
import Sofa_3 from "../assets/img/sofa_3.webp";
import Sofa_4 from "../assets/img/sofa_4.webp";
import Sofa_5 from "../assets/img/sofa_5.webp";
import Sofa_6 from "../assets/img/sofa_6.webp";
import { Star } from "../svgFile/svg";
import Commonbtn from "./ComanBtn";

const mycardinfo = [

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
const SopingStore = () => {
    const [sidebar, setSidebar] = useState(false);
    const [cart, setCart] = useState([])
    function addcart(mycard) {
        setSidebar(true);
        setCart([...cart, mycard])
    }
    function close() {
        setSidebar(false);

    }
    function removecart(index) {
        const leftcart = [...cart];
        leftcart.splice(index, 1);
        setCart(leftcart);

        if (leftcart.length === 0) {
            setSidebar(false);
        }
    }
    const sideCard = cart.map((mycard, index) => (
        <div key={index} className='!p-[10px_10px_10px_10px] md:!p-[18px_23px_18px_23px] lg:!p-[18px_10px_18px_10px] min-[1200px]:!p-[18px_23px_18px_23px]  duration-300 cursor-pointer hover:shadow-[6px_13px_38px_0px] hover:shadow-[#0000001f] mx-auto bg-[#FFF] mt-3' data-aos='zoom-in'>
            <img src={mycard.img} alt="img" />
            <div className=' flex items-center justify-between mt-[19px]'>
                <p className=' font-medium font-poppins text-[20px] text-[#000]'>Single Sofa</p>
                <div className=' flex items-center gap-[3px]'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
            </div>
            <p className=' text-[#000000b3] text-[18px] font-normal font-poppins leading-[normal] mt-[16px]'>Lorem ipsum dolor </p>
            <div className=' flex items-center justify-between pt-[16px]'>
                <p className=' font-poppins text-[23.667px] md:text-[28.667px] font-semibold text-[#000]'>₹ 1200.00</p>
                <Commonbtn fun={() => removecart(index)} padding=' !text-[12px] !p-[10px_10px] md:!p-[10px_12px] !font-medium hover:!shadow-[inset_.5rem_0_0_0]' text='REMOVE TO CART' />

            </div>
        </div>
    ))
    const mycard = mycardinfo.map((mycard, index) => (
        <div key={index} className=' w-full sm576:w-1/2 lg:w-1/3 px-3 pt-[10px] sm:pt-[42px]'>
            <div className='p-[18px_10px_40px_10px] md:p-[18px_23px_53px_23px] lg:p-[18px_10px_53px_10px] min-[1200px]:p-[18px_23px_53px_23px] max-w-[422px] max-h-[483px] w-full h-full duration-300 cursor-pointer hover:shadow-[6px_13px_38px_0px] hover:shadow-[#0000001f] mx-auto lg:mx-0' data-aos='zoom-in'>
                <img src={mycard.img} alt="" />
                <div className=' flex items-center justify-between mt-[19px]'>
                    <p className=' font-medium font-poppins text-[20px] text-[#000]'>Single Sofa</p>
                    <div className=' flex items-center gap-[3px]'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />

                    </div>
                </div>
                <p className=' text-[#000000b3] text-[18px] font-normal font-poppins leading-[normal] mt-[16px]'>Lorem ipsum dolor </p>
                <div className=' flex items-center justify-between pt-[16px]'>
                    <p className=' font-poppins text-[23.667px] md:text-[28.667px] font-semibold text-[#000]'>₹ 1200.00</p>
                    <Commonbtn fun={() => addcart(mycard)} padding=' !text-[14px] !p-[10px_10px] md:!p-[10px_12px] !font-medium hover:!shadow-[inset_.5rem_0_0_0]' text='ADD TO CART' />
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <div className={`${sidebar ? "left-0" : "left-[-100%]"} overflow-y-scroll bg-[linear-gradient(270deg,#8c939b_0%,#243040_100%)] min-[1200px]:w-[27%] lg992:w-[35%] sm450px:w-[65%] w-[80%]  sm576:w-[50%] px-3 duration-500 ease-in-out h-full fixed top-0 pt-[40px] z-30`}>
                <div onClick={close} className="z-20 relative cursor-pointer group ">
                    <span className="flex bg-white  group-hover:bg-[#BD7D41]  absolute -right-0 duration-500 top-[-12px] rotate-45 h-[2px] w-6"></span>
                    <span className="flex bg-white group-hover:bg-[#BD7D41] absolute -right-0 duration-500 -rotate-45 h-[2px] w-6 top-[-12px]"></span>
                </div>
                {sideCard}
            </div>
            <div className=' max-w-[1341px] mx-auto px-3 pt-[60px] sm576:pt-[80px] md:pt-[100px] lg992:pt-[135px] pb-[60px] sm:pb-[80px] md:pb-[110px] lg:pb-[169px] overflow-hidden'>
                <div className=' flex items-center xs450px:flex-row  flex-col gap-[2px]  xs450px:gap-[11px]' data-aos='zoom-in'>
                    <hr className=' max-w-[95px] w-full h-[1px] bg-[#000000] border-t-[unset]' />
                    <p className=' font-poppins text-[20px] font-normal text-[#BD7D41] leading-[normal]'>Shopping&nbsp;Store</p>
                </div>
                <div className=' flex justify-between sm576:flex-row  flex-col items-center w-full mt-[11px]'>
                    <p className=' font-poppins text-[32px] xs450px:text-[35px] text-[#243040] font-bold max-w-[436px] leading-[normal]' data-aos='zoom-in'>Our Products</p>
                    <Commonbtn text='VIEW ALL PRODUCT' data-aos='zoom-in' /></div>
                <div className="flex flex-wrap flex-row -mx-3 md:pt-[48px]">
                    {mycard}
                </div>

            </div>
        </>
    )
}

export default SopingStore