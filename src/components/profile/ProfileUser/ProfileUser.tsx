import React from "react";

const ProfileUser = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col ml-[150px] mt-[80px]">
                <h2 className="text-black text-[35px] font-['ArsenalB']">Личный кабинет</h2>
                <form className="flex flex-col justify-center text-[#F9F1E6] max-w-[510px] max-h-[300px] gap-[25px] h-full pt-20">
                    <input
                        type="name"
                        placeholder="NAME"
                        className="bg-inherit border-b-black border border-x-0 border-t-0 placeholder-black font-['ArsenalR'] text-black focus:border-none"
                    />
                    <input
                        type="email"
                        placeholder="EMAIL"
                        className="bg-inherit border-b-black border border-x-0 border-t-0 placeholder-black font-['ArsenalR'] text-black focus:border-none"
                    />

                    <input
                        type="submit"
                        value="сохранить"
                        className="flex justify-center bg-black border-black border rounded-[20px] max-w-[280px] mt-11 py-[5px] px-[40px] text-[#F9F1E6] text-[15px] font-['ArsenalB'] cursor-pointer hover:transition-[15s]  hover:bg-[#131313]"
                    />
                </form>
            </div>
            <div className="flex flex-col items-end h-full w-full max-w-[280px] gap-24 border-b-4 border-[#3F1D11] rounded-md border-w-[90px]">
            </div>
        </div>
    );
}

export default ProfileUser 
