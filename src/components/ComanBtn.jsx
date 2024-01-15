import React from 'react'

const Commonbtn = (props) => {
  return (
    <div>
<button className= {` ${props.padding} relative transition button1 group  hover:scale-[1.1] duration-500 ease-in-out hover:brightness-110 active:brightness-90 font-poppins text-[12px] sm:text-[20px] text-[#FFF] font-semibold p-[10px_13px] sm:p-[19px_48px] shadow-[inset_18rem_0_00#BD7D41]`}>
<span className='group-hover:brightness-110 duration-500 text-nowrap'> {props.text}</span>
<svg className=' absolute fill-[#BD7D41] top-[-5%] left-[-5%] w-[110%] h-[110%] z-[-1] duration-500 ' viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path className=' duration-500 ease-in-out transition' d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>


</button>


    </div>
  )
}

export default Commonbtn