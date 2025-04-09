import React from 'react';
import LocationNav from '../Card/LocationNav';

const Locations = () => {
  const card = [
    { img: '/r.png', alt: 'Location 1' },
    { img: '/g.png', alt: 'Location 1' },
    { img: '/r.png', alt: 'Location 1' },
    { img: '/r.png', alt: 'Location 1' }
  ];

  return (
  <div>
    <LocationNav/>
      <div className="w-full p-4 md:p-8 flex flex-col md:flex-row gap-10">

<div className="flex-1 space-y-6">

  <div className="space-y-4 font-Onest">
    <div className="flex items-start gap-3">
      <img src="/Group 1171276286 (1).png" alt="Location icon" className="w-5 h-5 mt-1" />
      <div>
        <p className="text-sm text-gray-500">Location</p>
        <h1 className="text-lg md:text-xl font-bold font-Onest text-zinc-950">
          Tulare County, Los Angeles, CA 23415
        </h1>
      </div>
    </div>

    <div className="flex items-start gap-3 font-Onest">
      <img src="/Group 1171276286.png" alt="Cost icon" className="w-5 h-5 mt-1" />
      <div>
        <p className="text-sm text-gray-500">Approx. Cost:</p>
        <h1 className="text-lg font-bold font-Onest md:text-xl text-zinc-900">
          $60,607,456.00
        </h1>
      </div>
    </div>
  </div>

  {/* Description */}
  <div className="font-Onest">
    <h2 className="text-base font-bold text-zinc-950 mb-2">Description</h2>
    <p className="text-sm text-zinc-500 leading-relaxed max-w-[677px]">
      Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho
    </p>
  </div>

  {/* Locations Grid */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-base font-semibold text-zinc-800">Locations</h2>
      <a href="#" className="text-sm text-blue-500 hover:underline">See all</a>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {card.map(({ img, alt }, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden border border-gray-200 shadow-sm font-Onest"
        >
          <img src={img} alt={alt} className="w-full h-[160px] object-cover" />
          <div className="p-3 space-y-1">
            <h3 className="text-sm font-semibold text-zinc-900">Whitechapel Rd.</h3>
            <p className="text-xs text-gray-500">Tulare County, Los Angeles, CA 23415</p>
            <p className="text-sm font-semibold text-zinc-800">$1,456,654.00</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Activities Section */}
  <div className="mt-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-base font-semibold text-zinc-800">Activities</h2>
      <a href="#" className="text-sm text-blue-500 ">See all</a>
    </div>
    <div className="space-y-3">
      {[1, 2].map((_, index) => (
        <div key={index} className="flex font-Onest items-start gap-3 p-3 rounded-xl bg-gray-100">
          <img src="/sm.png" alt="Activity" className="w-16 h-16 object-cover rounded-md" />
          <div>
            <h3 className="text-sm font-bold text-zinc-900">Activity name</h3>
            <p className="text-xs text-gray-500">Location name • 16.1212, -122.1424</p>
            <p className="text-sm font-semibold text-zinc-900">$1,456,654.00</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Documents Section */}
  <div className="mt-8 borderp-2 rounded-md">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-sm font-semibold text-zinc-800">Documents</h2>
      <a href="#" className="text-sm text-blue-500 hover:underline">See all</a>
    </div>
    <div className="space-y-3">
      {[1, 2].map((_, index) => (
        <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-gray-100">
          <img src="/sm.png" alt="Document" className="w-16 font-Onest h-16 object-cover rounded-md" />
          <div>
            <h3 className="text-sm font-bold font-Onest text-zinc-900">Document name</h3>
            <p className="text-xs font-Onest text-gray-500">Location name • 16.1212, -122.1424</p>
            <p className="text-sm font-semibold text-zinc-900 font-Onest">$1,456,654.00</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Right Section - Map */}
<div className="w-full md:w-[400px] font-Onest">
  <h2 className="text-base font-semibold text-zinc-800 mb-3">Incident Map</h2>
  <img
    src="/Frame 1321315990.png"
    alt="Map"
    className="w-full h-[400px] rounded-xl object-cover border border-gray-300"
  />
  <div className="text-xs text-gray-500 mt-2">
    Start: 19.1232, -118.223 &nbsp; End: 19.3245, -119.2323
  </div>
</div>
</div>
  </div>
  );
};

export default Locations;
