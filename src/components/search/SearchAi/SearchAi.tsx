import React from "react";

const SearchAi = () => {
    return (
        <form className="flex justify-center items-center font-['ArsenalR'] w-full text-[#DABF94] mt-[50px] mobile-xs:mt-[100px] mobile:mt-[150px] px-4">
            <div className="flex justify-center items-center relative w-full max-w-[1400px]">
                <input
                    type="search"
                    placeholder="введите ингредиенты"
                    className="flex items-center bg-[#DABF94]/25 backdrop-blur-3xl backdrop-opacity-10 backdrop-invert rounded-[30px] py-6 px-7 w-full sm:max-w-[700px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px] text-[15px] mobile:text-[20px] text-[#F9F1E6] font-['ArsenalR'] outline-none focus:ring-2 focus:ring-[#DABF94] placeholder-white placeholder-opacity-[60%] pr-12 sm:pr-16"
                />
                <img
                    src="/search.png"
                    alt="Поиск"
                    className="absolute right-6 sm:right-8 top-1/2 transform -translate-y-1/2 w-5 h-5 mobile:w-6 mobile:h-6"
                />
            </div>
        </form>
    );
}

export default SearchAi;
