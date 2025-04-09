import React from 'react'

function CardDesign() {
  return (
    <div className='lg:w-[1300px] md:w-[1000px] w-full mx-auto lg:mt-16 md:mt-12 mt-6 flex flex-wrap font-Onest'>
    {CardItem.map(({src, alt, img, text, h1, des, h2}, i) => (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3" key={i}>
        <div className="max-w-full rounded-xl flex flex-col bg-white shadow-md">
          <div className="relative">
            <img
              className="w-full h-48 object-cover rounded-t-xl"
              src={src}
              alt={alt}
            />
            <div className="absolute top-2 right-2 bg-white text-xs text-gray-700 px-2 py-1 rounded-full flex items-center shadow">
              <span className="mr-1 text-black">{img}</span> /{text}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-sm text-zinc-900">{h1}</h3>
            <p className="text-xs text-zinc-500">{des}</p>
            <p className="text-lg font-semibold text-zinc-900 mt-2">{h2}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  )
}

const CardItem=[
    {
        src:"/Rectangle 42010.png",
        alt:"Loading Failed",
        img:"🌨️",
        text:"Blizzard",
        h1:"Whitechapel Rd.",
        des:"Tulare County,  Los Angles, CA 23415",
        h2:"$1,456,654.00"
    },
    {
        src:"/Rectangle 42010 (1).png",
        alt:"Loading Failed",
        img:"🌨️",
        text:"Blizzard",
        h1:"Whitechapel Rd.",
        des:"Tulare County,  Los Angles, CA 23415",
        h2:"$1,456,654.00"
    },   {
        src:"/Rectangle 42010 (2).png",
        alt:"Loading Failed",
        img:"🌨️",
        text:"Blizzard",
        h1:"Tulare County",
        des:"Tulare County,  Los Angles, CA 23415",
        h2:"$1,456,654.00"
    },   {
        src:"/Rectangle 42010 (3).png",
        alt:"Loading Failed",
        img:"🌨️",
        text:"Blizzard",
        h1:"Tulare County",
        des:"Tulare County,  Los Angles, CA 23415",
        h2:"$1,456,654.00"
    },   {
        src:"/Group 1171276280.png",
        alt:"Loading Failed",
        img:"🌨️",
        text:"Blizzard",
        h1:"Tulare County",
        des:"Tulare County,  Los Angles, CA 23415",
        h2:"$1,456,654.00"
    },   {
        src:"/Group 1171276280 (1).png",
        alt:"Loading Failed",
        img:"🌨️",
        text:"Blizzard",
        h1:"Tulare County",
        des:"Tulare County,  Los Angles, CA 23415",
        h2:"$1,456,654.00"
    },
]

export default CardDesign