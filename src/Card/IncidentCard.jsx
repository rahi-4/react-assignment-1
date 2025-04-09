import React from 'react'

function IncidentCard() {
    return (
        <div className='max-w-[753px] w-full mx-auto px-4 mb-4'>
          <h1 className='text-[24px] font-Onest font-bold mb-4'>
            Which of these best describes the incident?
          </h1>
      
          <div className="flex flex-wrap gap-[10px]">
            {smallCard.map(({ img, p }, i) => (
              <div
                key={i}
                className="w-full sm:w-[48%] md:w-[180px] min-w-[180px] h-[69px] rounded-[6px] py-[22px] px-5 bg-zinc-200 font-Onest flex items-center gap-3 hover:bg-[#F26922] transition-colors duration-200"
              >
                <img src={img} alt="" />
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default IncidentCard


const smallCard=[
    {
        img:"/img 1.png",
        p:"Avalanche"
    },
    {
        img:"/img 2.png",
        p:"Biological"
    },  {
        img:"/img 3.png",
        p:"Blizzard"
    },  {
        img:"/img 4.png",
        p:"Cold/Freezing"
    },  {
        img:"/img 5.png",
        p:"Drought"
    },  {
        img:"/img 6.png",
        p:"Earthquake"
    },  {
        img:"/img 7.png",
        p:"Flooding"
    },  {
        img:"/img 8.png",
        p:"Heat Wave"
    },  {
        img:"/img 9.png",
        p:"Hail"
    },  {
        img:"/img 10.png",
        p:"Lightning"
    },  {
        img:"/img 11.png",
        p:"Man Made"
    },  {
        img:"/img 12.png",
        p:"Mudslide"
    },  {
        img:"/img 13.png",
        p:"Severe Storm"
    },  {
        img:"/img 14.png",
        p:"Strong Wind"
    },  {
        img:"/img 15.png",
        p:"Tornado"
    },  {
        img:"/img 16.png",
        p:"Tsunami"
    },  {
        img:"/img 17.png",
        p:"Volcanic Eruption"
    },  {
        img:"/img 18.png",
        p:"Wildfire"
    },
]