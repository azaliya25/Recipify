import React from "react";

const BannerText = () => {
  return (
    <div className="flex mt-48">
      <div className="flex flex-col ">
      </div>
      <div className="flex flex-col justify-end gap-24">
        <div className="max-h-80 border-l-4 pl-8 border-[#3F1D11] rounded-md">
          <h1 className="text-8xl font-['ArsenalR'] tracking-widest text-[#F9F1E6] pt-12">RECIPIFY</h1>
          <p className="text-3xl font-['ArsenalB'] text-[#F9F1E6]">ГОТОВИТЬ ЛЕГКО</p>
          <p className="flex flex-nowrap text-[15px] font-['ArsenalR'] text-[#F9F1E6] pb-24 pt-24">готовьте вместе с нашим удобным сервисом!</p>
        </div>
        <div className="flex flex-col max-w-[280px] gap-24 border-b-4 pt-10 border-[#3F1D11] rounded-md border-w-[90px]">
        </div>
      </div>
    </div>
  );
}

export default BannerText 
