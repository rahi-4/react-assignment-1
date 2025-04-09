import React from "react";

const StepBar = () => {
  return (
    <div className="px-4">
      <div className="max-w-[815px] mx-auto">
        <h1 className="text-center font-bold font-Onest text-zinc-950 text-[32px]">Lets get started</h1>
        <p className="max-w-[468px] text-zinc-500 font-Onest mx-auto text-center mt-2">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene
        </p>

        {/* Stepbar */}
        <div className="max-w-[609px] mx-auto mt-8">
          <div className="flex justify-between items-center w-full max-w-md mx-auto">
            {[0, 1, 2].map((step) => (
              <React.Fragment key={step}>
                <div className="w-4 h-4 bg-gray-300 rounded-full z-10" />
                {step < 2 && (
                  <div className="flex-1 h-0.5 mx-1 bg-gray-300" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {CardItems.map(({ img, h1, p }, i) => (
            <div
              className="w-[235px] h-[269px] rounded-[10px] border border-zinc-100 py-[25px] px-5 bg-zinc-200"
              key={i}
            >
              <img src={img} alt="" className="w-[54px] h-[54px]" />
              <div className="mt-5">
                <h1 className="font-Onest text-[20px] font-bold text-zinc-950">{h1}</h1>
                <p className="font-Onest text-zinc-500 text-[14px]">{p}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button just below cards */}
        <div className="text-center mt-10">
          <button className="py-2 px-[25px] bg-[#F26922] font-Onest text-white text-[12px] w-[139px] h-[42px] rounded-[6px]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepBar;

const CardItems = [
  {
    img: "/Frame 6.png",
    h1: "What type of incident?",
    p: "Choose the category that best describes the incident.",
  },
  {
    img: "/Frame (5).png",
    h1: "Tell us about the incident?",
    p: "Lets connect the dots and see where to start.",
  },
  {
    img: "/Frame (4).png",
    h1: "Where did the incident occur?",
    p: "Lorem ipsum dolar sit general sac mascho werho",
  },
];
