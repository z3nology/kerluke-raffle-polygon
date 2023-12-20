import NftCard from "../components/nftCard";

const Raffles = () => {
  const raffleDatas = [
    { imgUrl: "/imgs/testData/3.png", tokenId: 23, type: 0 },
    { imgUrl: "/imgs/testData/2.png", tokenId: 1123, type: 1 },
    { imgUrl: "/imgs/testData/1.png", tokenId: 343, type: 2 },
    { imgUrl: "/imgs/testData/4.png", tokenId: 2342, type: 3 },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10">
      <div className="grid w-full md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-[100px]">
        {raffleDatas.map((data, index) => (
          <NftCard
            key={index}
            type={data.type}
            tokenId={data.tokenId}
            imgUrl={data.imgUrl}
          />
        ))}
      </div>
      <button className="px-4 py-2 text-md font-bold text-gray-300 rounded-md bg-transparent border-[1px] border-gray-300 border-opacity-10 transition-all duration-300 hover:bg-slate-400 hover:bg-opacity-50">
        See More...
      </button>
    </div>
  );
};

export default Raffles;
