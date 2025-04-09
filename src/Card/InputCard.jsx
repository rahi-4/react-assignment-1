import React from 'react'

function InputCard() {
  return (
    <div className='lg:w-[752px] md:w-[550px] w-[350px] lg:h-[366px] md:h-[266px] h-[166px] lg:gap-[25px] md:gap-[20px] gap-[15px] mx-auto'>
        <div className='lg:w-[700px] md:w-[600px] w-[400px] lg:h-[54px] md:h-[44px] h-[34px] lg:gap-3 md:gap-2 gap-1'>
            <h1 className='font-Onest lg:text-[24px] md:text-[20px] text-[18px] text-zinc-950 font-bold'>Lets give the incident a title?</h1>
            <h2 className='font-Onest lg:text-[14px] md:text-[12px] text-[10px]text-zinc-500'>Make a title that will easily identify the incidents</h2>
        </div>

        <div className='lg:w-[752px] md:w-[650px] w-[300px] lg:h-[50px] md:h-[40px] h-[30px] lg:mt-6 md:mt-5 mt-4'>
        <input type='text'  placeholder='Add title here' className='bg-zinc-200 lg:py-3 md:py-2 py-1 lg:px-[10px] md:px-[8px] px-[6px]  font-Onest text-[12px] lg:w-full md:w-full w-[320px] outline-0'/>
        </div>

        <div className='lg:w-[700px] md:w-[550px] w-[300px] lg:h-[54px] md-h-[44px] h-[34px] lg:gap-3 md:gap-2 gap-1 '>
            <h1 className='font-Onest lg:text-[24px] md:text-[20px] text-[18px] text-zinc-950 font-bold'>Describe what happened during the incident?</h1>
            <h2 className='font-Onest lg:text-[14px] md:text-[12px] text-[10px]text-zinc-500'>Share some information about the incident. The when, where, how. </h2>
        </div>

        <div className='lg:w-[752px] md:w-[650px] w-[300px] lg:h-[127px] md:h-[80px] h-[50px] mt-12'>
            <input type="text" placeholder='Text here' className='font-Onest lg:py-20 md:py-16 py-12 lg:px-[10px] md:px-[8px] px-[6px]  lg:text-[12px] md:text-[10px] text-[8px] lg:w-full md:w-full w-[320px] bg-zinc-200 lg:rounded-[6px] md:rounded-[5px] rounded-[4px] border-zinc-300 lg:text-t-left md:text-t-left text-start outline-0'/>
        </div>

    </div>
  )
}

export default InputCard