import React from 'react';

function ProgresBar({ onNext,finished }) {
  return (
    <div className='bg-zinc-200'>
      <div className='w-full max-w-[1254px] flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-6 py-4 gap-4 mx-auto'>

        {/* Left Section */}
        <div className='flex items-start md:items-center gap-3.5 w-full md:w-auto'>
          <button className='w-8 h-8 flex-shrink-0 flex items-center justify-center'>
            <img src="/croos.png" alt="Close" />
          </button>
          <div>
            <h4 className='text-zinc-500 font-Onest text-[12px]'>Home - Incidents - New Incident</h4>
            <h1 className='text-[20px] md:text-[26px] font-Onest text-gray-950 font-bold'>New Incident</h1>
          </div>
        </div>

        {/* Progress Bar */}
        <div className='w-full md:flex-grow h-2 bg-gray-100 rounded-full overflow-hidden'>
          <div className='bg-[#F26922] h-full w-[30%]' />
        </div>

        {/* Buttons */}
        <div className='flex gap-3.5 w-full md:w-auto justify-end'>
          <button className='px-4 md:px-6 py-2 bg-white border border-zinc-300 rounded-[6px] text-[12px] font-Onest w-full md:w-auto'>
            Back
          </button>
            <button
        className={`px-6 py-2 rounded bg-[#F26922] text-white font-Onest`}
        onClick={onNext}
      >
        {finished ? "Finished" : "Next Step"}
      </button>
        </div>
      </div>
    </div>
  );
}

export default ProgresBar;
