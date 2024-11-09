import React from "react";
import SearchAi from "@/components/search/SearchAi/SearchAi.tsx";

const SearchText = () => {
    return (

        <div className="flex flex-col justify-center items-center absolute m-[100px]">
            <div className="flex flex-col gap-24">
                <div className="flex flex-col justify-center items-center w-full max-w-[1000px] gap-24">
                    <h1 className="text-8xl font-['ArsenalR'] tracking-widest text-[#DABF94]">Попробуй RECIPIFY!</h1>
                    <SearchAi />
                </div>
            </div>
        </div>
    );
}

export default SearchText 
