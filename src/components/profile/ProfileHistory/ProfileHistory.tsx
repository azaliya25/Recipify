import React from "react";

const ProfileHistory = () => {
    return (
        <div className="flex relative h-full">
            <div className="absolute hidden mobile-xs:block w-1 bg-[#3F1D11] max-h-full h-full rounded-md"></div>
            <div className="flex flex-col min-w-[300px] w-full pl-20">
                <h3 className="text-black text-[20px] font-['ArsenalB'] mt-24">История запросов</h3>
                <div className="flex flex-col p-[15px] max-h-[450px] overflow-auto scrollbar-custom">
                    <p className="flex text-black text-[15px] font-['ArsenalR']">история</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileHistory 
