import React from "react";

interface FilterBarProps {
  stakeState: boolean;
  clearAll: () => void;
  selectAll: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({}) => {
  return (
    <div className="w-full mt-[100px]">
      <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
        <div className="w-full md:w-auto">
          <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
            <button className="lg:px-4 px-2 text-[15px] md:text-[12px] lg:text-[15px] py-2 text-md font-bold text-gray-300 rounded-md bg-transparent border-[1px] border-gray-300 border-opacity-10 transition-all duration-300 hover:bg-slate-400 hover:bg-opacity-50">
              Feature Raffles
            </button>
            <button className="lg:px-4 px-2 text-[15px] md:text-[12px] lg:text-[15px] py-2 text-md font-bold text-gray-300 rounded-md bg-transparent border-[1px] border-gray-300 border-opacity-10 transition-all duration-300 hover:bg-slate-400 hover:bg-opacity-50">
              Ending Soon
            </button>
            <button className="lg:px-4 px-2 text-[15px] md:text-[12px] lg:text-[15px] py-2 text-md font-bold text-gray-300 rounded-md bg-transparent border-[1px] border-gray-300 border-opacity-10 transition-all duration-300 hover:bg-slate-400 hover:bg-opacity-50">
              Free Entries
            </button>
            <button className="lg:px-4 px-2 text-[15px] md:text-[12px] lg:text-[15px] py-2 text-md font-bold text-gray-300 rounded-md bg-transparent border-[1px] border-gray-300 border-opacity-10 transition-all duration-300 hover:bg-slate-400 hover:bg-opacity-50">
              All Raffles
            </button>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="flex w-full gap-5">
            {" "}
            <div
              className="text-md font-bold text-gray-300 rounded-md bg-transparent border-[1px] border-gray-300 border-opacity-10 transition-all duration-300
              items-center justify-center flex
          "
            >
              <input
                className="bg-transparent outline-none active:border-white selection:border-white text-[15px] md:text-[12px] lg:text-[15px] px-2"
                placeholder="Search Raffle..."
              />
            </div>
            <button className="lg:px-4 px-2 w-full text-[15px] md:text-[12px] lg:text-[15px] py-2 text-md font-bold text-gray-300 rounded-md bg-transparent border-[1px] border-gray-300 border-opacity-10 transition-all duration-300 hover:bg-slate-400 hover:bg-opacity-50">
              Sort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
