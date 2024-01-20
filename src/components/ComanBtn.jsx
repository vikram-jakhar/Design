import React from 'react'

const Commonbtn = (props) => {
  return (
    <div>
<button onClick={props.fun} className= {` ${props.padding}  isolation-auto z-10   before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-0  before:bg-[#243040] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
 relative text-nowrap   font-poppins text-[12px] sm:text-[20px] text-[#FFF] font-semibold p-[10px_13px] sm:p-[19px_48px] shadow-[inset_18rem_0_00#BD7D41]`}>
{props.text}
</button>


    </div>
  )
}

export default Commonbtn