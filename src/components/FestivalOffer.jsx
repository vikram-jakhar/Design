import Black_Kursi from '../assets/img/Black_kursi.webp'
import Yellow_Kursi from '../assets/img/Yellow_kursi.webp'
import Comanbtn from './ComanBtn'

const FestivalOffer = () => {
    return (
        <>
            <div className='max-w-[1341px] mx-auto px-3'>
                <div className='grid  lg:grid-cols-2 justify-center mt-10  sm:mt-12'>
                    <div className='col-span-1 px-3 mb-5'>
                        <div className=' !relative overflow-hidden'>
                            <img src={Black_Kursi} alt="Black_Kursi" />
                            <span className=' absolute top-[15%] sm:top-[23%] left-[16%]'>
                                <h3 className=' sm:text-[35px] text-[#BD7D41] font-bold font-poppins'>Upto 40% Off</h3>
                                <p className=' sm:pt-[16px] pb-2 sm:pb-[38px] text-[12px] sm:text-[18px] text-[rgba(0,0,0,0.70)] font-normal max-w-[170px] sm:max-w-[262px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Comanbtn text='ADD TO CART' padding='!p-[10px_13px]' />
                            </span>
                            <div className='flex items-center gap-1 sm:gap-[10px] absolute top-[1%] sm:top-[11%] left-[0.1%]'>
                                <span className=' w-[40px] sm:w-[95px] h-[1px] bg-[#000000] ' />
                                <h6 className=' text-[#000] font-normal font-poppins text-[14px] sm:text-xl'>Festival Offer</h6>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-1 px-3 mb-5'>
                        <div className=' relative overflow-hidden'>
                            <img src={Yellow_Kursi} alt="Yellow_Kursi" />
                            <span className=' absolute top-[15%] sm:top-[23%] left-[16%]'>
                                <h3 className=' sm:text-[35px] text-[#BD7D41] font-bold font-poppins'>Upto 40% Off</h3>
                                <p className=' sm:pt-[16px] pb-2 sm:pb-[38px] text-[12px] sm:text-[18px] text-[rgba(0,0,0,0.70)] font-normal max-w-[170px] sm:max-w-[262px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Comanbtn text='ADD TO CART' padding='!p-[10px_13px]' />
                            </span>
                            <div className='flex items-center gap-1 sm:gap-[10px] absolute top-[1%] sm:top-[11%] left-[0.1%]'>
                                <span className=' w-[50px] sm:w-[95px] h-[1px] bg-[#000000] ' />
                                <h6 className=' text-[#000] font-normal font-poppins text-[14px] sm:text-xl'>Festival Offer</h6>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default FestivalOffer