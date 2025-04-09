import React from 'react'

function NavNextItem() {
  return (
    <div className="bg-zinc-200 py-4 px-2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-[1269px] mx-auto gap-4 mt-4">
        
        <h5 className="text-zinc-500 font-Onest text-sm md:text-base">
          Welcome back <br className='block md:hidden' />
          <span className="text-zinc-950 font-Onest font-bold text-[20px] md:text-[26px]">
            Dashboard
          </span>
        </h5>

        <div className="space-y-2 md:space-y-0 md:space-x-[14px] font-Onest flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
          
          <button className="w-full md:w-[190px] flex items-center justify-center bg-zinc-50 rounded border border-[#E4E4E7] text-[#71717A] py-3 px-[10px] text-sm">
            <img src="/Frame.png" alt="Search" className="mr-2" />
            Search incident
          </button>

          <button className="w-full md:w-auto py-3 px-[10px] bg-zinc-50 text-[#71717A] rounded text-sm text-center">
            Sort By: Date modified
          </button>

          <button className="w-full md:w-auto px-[25px] py-2 bg-[#F26922] text-white rounded text-sm text-center">
            Cypher AI
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavNextItem;
