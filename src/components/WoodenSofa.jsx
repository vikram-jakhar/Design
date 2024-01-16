import Big_Sofa from '../assets/img/Big_Sofa.webp'
import Commonbtn from './ComanBtn'
const WoodenSofa = () => {
    return (
        <>
            <div className='bg-[#F7F7F8] pt-[64px] relative z-[1] mb-6'>
                <div className='max-w-[1320px] container px-3 mx-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-3 ">
                        <div className='col-span-1 px-3 pt-3'>
                            <div className='flex items-center gap-[7px]'>
                                <div className="w-[95px] h-[0px] border border-[#000000]"></div>
                                <p className="text-center text-yellow-600 sm:text-xl text-lg font-normal text-nowrap font-['Poppins']">Shopping Store</p>
                            </div>
                            <p className="max-w-[436px] mb-[53px] text-slate-800 sm:text-[35px]  text-[25px] font-bold font-['Poppins'] mt-6">Wooden Sofa Starts From ₹ 1200.00</p>
                            <Commonbtn text="SHOP NOW" />
                        </div>
                        <div className=' col-span-1 md:col-span-2 px-3 mt-8 lg:mt-0'>
                            <img src={Big_Sofa} alt="Big_Sofa" className='lg:w-full max-lg:max-w-[500px] w-full relative z-[2]' />
                        </div>
                    </div>
                </div >
                <div className="min-[1440px]:w-[741px] lg:w-[600px] min-[983px]:w-[400px] sm:w-[500px] h-[270px] bg-slate-800 right-0 bottom-[-65px] absolute z-[-1]" />
            </div >
        </>
    )
}
export default WoodenSofa

