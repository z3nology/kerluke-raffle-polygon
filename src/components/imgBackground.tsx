/* eslint-disable @next/next/no-img-element */

const ImgBackground = () => {
  return (
    <div className="w-full xl:items-center xl:flex xl:justify-center">
      <div
        className="absolute xl:w-[574px] w-[340px] h-[574px] xl:top-[565px] top-[135px] xl:left-[581px] left-[0] bg-[#FFC012]
      filter blur-[200px] rounded-full opacity-50 -z-[9999]"
      />
      <div
        className="absolute xl:w-[757px] h-[757px] w-[340px] xl:top-[724px] top-[340px] xl:left-[69px] -left-[138px] bg-[#006C87]
      filter blur-[200px] rounded-full opacity-50 -z-[9998]"
      />
      <div
        className="absolute xl:w-[758px] w-[340px] h-[758px] top-[594px] right-[100px] bg-[#8B6BF1]
      filter blur-[200px] rounded-full opacity-50 -z-[9998]"
      />
    </div>
  );
};

export default ImgBackground;
