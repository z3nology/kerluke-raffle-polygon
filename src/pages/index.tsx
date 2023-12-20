import type { NextPage } from "next";
import SliderBanner from "../components/sliderBanner";
import FilterBar from "../components/filterBar";
import Raffles from "../modules/raffles";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center transition-all duration-300">
      <div className="w-full max-w-[1400px] flex md:mt-[72px] mt-[49px] items-center justify-center p-3 relative flex-col animate__animated animate__fadeIn">
        <SliderBanner />
        <FilterBar
          stakeState={false}
          clearAll={function (): void {
            throw new Error("Function not implemented.");
          }}
          selectAll={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Raffles />
      </div>
    </div>
  );
};

export default Home;
