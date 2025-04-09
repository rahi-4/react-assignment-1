import React from 'react'

function GoogleMapCard() {
  return (
    <div className='lg:w-[752px] md:w-[652px] w-[452px] lg:h-[589px] md:h-[589px] h-[289px] lg:gap-6 md:gap-5 gap-4 mx-auto'>
        <div className='lg:w-[700px] md:w-[550px] w-[400px] lg:h-[75px] md:h-[60px] h-[50px]  lg:gap-[12px] md:gap-[10px]gap-[8px]'>
        <h1 className='font-Onest lg:text-[24px] md:text-[20px] text-[18px] text-zinc-950 font-bold'>Wheres the incident?</h1>
        <h2 className='lg:max-w-[518px] md:max-w-[418px] max-w-[318px]  font-Onest lg:text-[14px] md:text-[12px] text-[10px] text-zinc-500'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</h2>
        </div>
        <div className='lg:w-[752px] md:w-[652px] w-[252px] lg:h-[490px] md:h-[390px] h-[290px]  lg:rounded-[10px] md:rounded-[8px] rounded-[6px]  lg:mt-4 md:mt-3 mt-2'>
        <img src="/map.png" alt="" />

        </div>
    </div>
  )
}

export default GoogleMapCard