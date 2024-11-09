import React from "react";

const SearchAi = () => {
    return (
        <form className="flex justify-center items-center font-['ArsenalR'] w-full text-[#DABF94] mt-[150px]">
            <div className="flex justify-center items-center relative w-full max-w-lg">
                <input
                    type="search"
                    placeholder="введите ингредиенты"
                    className="flex justify-between items-center bg-[#DABF94]/25 backdrop-blur-3xl backdrop-opacity-10 backdrop-invert rounded-[30px] py-6 px-7  w-full min-w-[1200px] text-[20px] font-['ArsenalR'] outline-none focus:ring-2 focus:ring-[#DABF94] placeholder-white placeholder-opacity-[60%]"
                />
                <img
                    src="/search.png"
                    alt="Поиск"
                    className="absolute right-[-100%] top-1/2 transform -translate-y-1/2 w-7 h-7"
                />
            </div>
        </form>
    );
}

export default SearchAi;
