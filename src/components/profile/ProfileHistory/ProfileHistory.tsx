import React from "react";

const ProfileHistory = () => {
    return (
        <div className="flex">
            <div className="flex min-h-[450px] border-l-4 pl-20 border-[#3F1D11] rounded-md"></div>
            <div className="flex flex-col min-w-[300px] w-full">
                <h3 className="text-black text-[20px] font-['ArsenalB'] mt-24">История запросов</h3>
                <div className="flex flex-col p-[15px] max-h-[450px] overflow-auto scrollbar-custom">
                    <p className="flex text-black text-[15px] font-['ArsenalR']">история</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileHistory 
