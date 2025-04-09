import { useState } from "react";
import CardDesign from "./CardDesign";
import GetStarted from "../Button.jsx/GetStarted";
import IncidentCard from "../Card/IncidentCard";
import ProgresBar from "./ProgresBar";
import InputCard from "../Card/InputCard";
import GoogleMafCard from '../Card/GoogleMapCard'

function Incidents() {
  const [showStepBar, setShowStepBar] = useState(false);
  const [showIncidentCard, setShowIncidentCard] = useState(false);
  const [showInputCard, setShowInputCard] = useState(false);
  const [showGoogleMapCard, setShowGoogleMapCard] = useState(false);

  return (
    <div>
      {/* Header Hide When IncidentCard is Showing */}
      {!showIncidentCard && (
        <div className="bg-zinc-200 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-[1269px] mx-auto mt-12 px-4 gap-4">
            <h5 className="text-zinc-500 font-Onest text-sm lg:text-base">
              Home - Incidents
              <span className="block lg:inline text-zinc-950 font-bold text-[22px] lg:text-[26px] mt-1 lg:mt-0">
                Incidents
              </span>
            </h5>
            <div className="space-y-3 lg:space-y-0 lg:space-x-[14px] font-Onest flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto">
              <button className="w-full lg:w-[190px] py-3 px-[10px] cursor-pointer flex items-center justify-center bg-zinc-50 rounded border border-[#E4E4E7] text-[#71717A]">
                <img src="/Frame.png" alt="" className="mr-2" />
                Search incident
              </button>
              <button className="w-full lg:w-auto py-3 px-[10px] bg-zinc-50 text-center text-[#71717A] rounded cursor-pointer">
                Sort By: Date modified
              </button>
              <button
                className="w-full lg:w-auto px-[25px] py-2 bg-[#F26922] text-center text-zinc-50 rounded cursor-pointer"
                onClick={() => {
                  setShowStepBar(true);
                  setShowIncidentCard(false);
                }}
              >
                + New Incident
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step Bar Section */}
      {showStepBar && !showIncidentCard ? (
        <div className="px-4">
          <div className="max-w-[815px] mx-auto">
            <h1 className="text-center font-bold font-Onest text-zinc-950 text-[32px]">
              Let's get started
            </h1>
            <p className="max-w-[468px] text-zinc-500 font-Onest mx-auto text-center mt-2">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-16">
              {CardItems.map(({ img, h1, p, id }) => (
                <div
                  key={id}
                  className="w-[235px] h-[269px] rounded-[10px] border border-zinc-100 py-[25px] px-5 bg-zinc-200"
                >
                  <img src={img} alt="" className="w-[54px] h-[54px]" />
                  <div className="mt-5">
                    <h1 className="font-Onest text-[20px] font-bold text-zinc-950">{h1}</h1>
                    <p className="font-Onest text-zinc-500 text-[14px]">{p}</p>
                  </div>
                </div>
              ))}
            </div>
            <GetStarted
              onClick={() => {
                setShowIncidentCard(true);
                setShowStepBar(false);
              }}
            />
          </div>
        </div>
      ) : showIncidentCard ? (
        <>
          <ProgresBar
            onNext={() => {
              if (showGoogleMapCard) return; 

              if (!showInputCard) {
                setShowInputCard(true);
              } else if (!showGoogleMapCard) {
                setShowInputCard(false);
                setShowGoogleMapCard(true);
              }
            }}
            finished={showGoogleMapCard}
          />

          {!showInputCard && !showGoogleMapCard && <IncidentCard />}
          {showInputCard && <InputCard />}
          {showGoogleMapCard && <GoogleMafCard />}
        </>
      ) : (
        <CardDesign />
      )}
    </div>
  );
}

export default Incidents;

const CardItems = [
  {
    id: 1,
    img: "/Frame 6.png",
    h1: "What type of incident?",
    p: "Choose the category that best describes the incident.",
  },
  {
    id: 2,
    img: "/Frame (5).png",
    h1: "Tell us about the incident?",
    p: "Lets connect the dots and see where to start.",
  },
  {
    id: 3,
    img: "/Frame (4).png",
    h1: "Where did the incident occur?",
    p: "Lorem ipsum dolar sit general sac mascho werho",
  },
];
