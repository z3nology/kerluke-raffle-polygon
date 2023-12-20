/* eslint-disable @next/next/no-img-element */
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SliderBanner = () => {
  return (
    <AwesomeSlider
      className="h2[400px] md:h-[400px] rounded-2xl"
      animation="cubeAnimation"
    >
      <div className="bg-transparent">
        <img
          alt=""
          src="/imgs/sliderImgs/1.jpg"
          className="object-cover w-full rounded-2xl h-[200px] md:h-[400px]"
        />
      </div>
      <div className="bg-transparent">
        <img
          alt=""
          src="/imgs/sliderImgs/2.jpg"
          className="object-cover w-full rounded-2xl h-[200px] md:h-[400px]"
        />
      </div>
      <div className="bg-transparent">
        <img
          alt=""
          src="/imgs/sliderImgs/3.jpg"
          className="object-cover w-full rounded-2xl h-[200px] md:h-[400px]"
        />
      </div>
    </AwesomeSlider>
  );
};

export default SliderBanner;
