import React from 'react'

function GetStarted({ onClick }) {
  return (
    <div className="text-center mt-10">
      <button
        onClick={onClick}
        className="cursor-pointer py-2 px-[25px] bg-[#F26922] font-Onest text-white text-[12px] w-[139px] h-[42px] rounded-[6px]"
      >
        Get started
      </button>
    </div>
  )
}

export default GetStarted
