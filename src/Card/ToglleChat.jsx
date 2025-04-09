import { useState } from "react";

export default function ChatToggle() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative h-[300px]">
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        <img src="/chatting.png" alt="Chat Icon"/>
      </button>

      {isChatOpen && (
        <div className='absolute top-0 right-0 lg:w-[331px] md:w-[250px] w-[200px] lg:h-[475px] md:h-[350px] h-[250px] rounded-[6px] md:rounded-[10px] lg:rounded-[12px] bg-sky-100 ml-5 shadow-lg z-50'>

          {/* Close Button */}
          <button
            onClick={() => setIsChatOpen(false)}
            className="absolute top-2 right-2 text-zinc-600 text-xl font-bold"
          >
            &times;
          </button>

          <h1 className='bg-[#F26922] text-white font-Onest text-[10px] md:text-[14px] lg:text-[18px] py-2 md:py-4 lg:py-6 px-2 md:px-3 lg:px-4 rounded-tl-[8px] md:rounded-tl-[10px] lg:rounded-tl-[12px] rounded-tr-[8px] md:rounded-tr-[10px] lg:rounded-tr-[12px]'>
            Chat with Cypher
          </h1>

          <div className='mx-auto w-full h-[200px] md:h-[250px] lg:h-[370px] px-2'>
            <div className="flex flex-col gap-3 mt-2 font-Onest">
              <p className='bg-zinc-700 text-white text-[8px] md:text-[10px] lg:text-[12px] py-[8px] md:py-[12px] lg:py-[15px] px-[8px] md:px-[11px] lg:px-[13px] rounded-[5px] w-3/4 self-end'>
                Lorem ipsum dolar sit general sac mascho werho
              </p>
              <p className='border border-zinc-300 text-zinc-500 text-[8px] md:text-[10px] lg:text-[12px] py-[8px] px-[8px] rounded-[5px] w-3/4'>
                Lorem ipsum dolar sit general sac mascho werho
              </p>
              <p className='border border-zinc-300 text-zinc-500 text-[8px] md:text-[10px] lg:text-[12px] py-[8px] px-[8px] rounded-[5px] w-3/4'>
                Lorem ipsum dolar sit general sac mascho werho
              </p>
              <p className='bg-zinc-700 text-white text-[8px] md:text-[10px] lg:text-[12px] py-[8px] px-[8px] rounded-[5px] w-3/4 self-end'>
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>

            <input
              type="text"
              placeholder='Enter your question...'
              className='w-full border border-gray-300 rounded-[6px] font-Onest text-[12px] py-2 px-2 mt-3'
            />

            <div className='flex justify-between items-center mt-2'>
              <div className='flex gap-2'>
                <img src="/camera.png" alt="" />
                <img src="/Frame (1).png" alt="" />
                <img src="/Frame (2).png" alt="" />
              </div>

              <button className='bg-[#F26922] text-white font-Onest text-sm rounded-full px-4 py-1'>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
