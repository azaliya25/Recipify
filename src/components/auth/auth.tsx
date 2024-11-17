"use client";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(false); 

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="relative flex justify-center h-screen mt-20 ml-[25%]">
            <div
                onClick={toggleForm}
                className="flex justify-between items-center gap-6 max-h-[50px] w-full min-w-[155px] bg-black border-black border rounded-[20px] py-[8px] px-[15px] text-[#F9F1E6] text-[12px] font-['ArsenalB'] cursor-pointer z-50 mt-[15px] mr-[-80px]"
            >
                {isLogin ? (
                    <>
                        <span className="flex">регистрация</span>
                        <div className="flex w-[30px]">
                            <Image src="/arrows.png" alt="arrow icon" width={30} height={30} priority />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex w-[30px]">
                            <Image src="/arrowl.png" alt="arrow icon" width={30} height={30} priority />
                        </div>
                        <span className="flex">вход</span>
                    </>
                )}
            </div>


            <form
                className={`flex flex-col h-screen blur__banner backdrop-opacity-10 backdrop-invert bg-[#DABF94]/60 rounded-[20px] text-[#F9F1E6] min-w-[480px] max-h-[550px] px-[50px] pt-8 pb-14 gap-64 transition-transform duration-500 ${isLogin ? "-translate-x-[480px]" : ""
                    }`}
            >
                <div className="flex flex-col items-end w-full h-full">
                    <div className={`flex ${isLogin ? "justify-start" : "justify-end"} w-full`}>
                        <Link href="../">
                            <Image src="/home_icons.png" alt="home icon" width={23} height={22} priority />
                        </Link>
                    </div>


                    <div className="flex flex-col w-full mt-[40px] mb-[40px]">
                        <h2 className="text-black text-[35px] font-['ArsenalB']">{isLogin ? "ВХОД" : "РЕГИСТРАЦИЯ"}</h2>
                        <p className="text-black text-[12px] font-['ArsenalR']">
                            {isLogin
                                ? "Мы рады, что Вы возвращаетесь вновь!"
                                : "Зарегистрируйтесь в нашей системе для доступа к\nпоиску рецептов!"}
                        </p>
                    </div>

                    <div className="flex flex-col justify-start w-full gap-[25px]">
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="NAME"
                                className="bg-inherit border-b-black border border-x-0 border-t-0 placeholder-black font-['ArsenalR'] text-black focus:outline-none"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="EMAIL"
                            className="bg-inherit border-b-black border border-x-0 border-t-0 placeholder-black font-['ArsenalR'] text-black focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="PASSWORD"
                            className="bg-inherit border-b-black border border-x-0 border-t-0 placeholder-black font-['ArsenalR'] text-black focus:outline-none"
                        />

                        {!isLogin && (
                            <input
                                type="password"
                                placeholder="CONFIRM PASSWORD"
                                className="bg-inherit border-b-black border border-x-0 border-t-0 placeholder-black font-['ArsenalR'] text-black focus:outline-none"
                            />
                        )}
                    </div>

                    {!isLogin && (
                        <div className="flex items-center text-center gap-[5px] w-full mt-[40px] mb-[40px]">
                            <input type="checkbox" className="bg-inherit border-b-black border" />
                            <a href="" className="text-black text-[12px] font-['ArsenalB'] underline">
                                политика конфиденциальности
                            </a>
                        </div>
                    )}
                    {/* Privacy Policy and Submit Button */}
                    {isLogin && (
                        <div className="flex items-center justify-end w-full mt-[40px] mb-[40px]">
                            <a href="#" className="text-black text-[12px] font-['ArsenalB'] underline">
                                забыли пароль?
                            </a>
                        </div>
                    )}


                    <div className="flex justify-center items-end w-full h-full">
                        <input
                            type="submit"
                            value={isLogin ? "ВОЙТИ" : "ЗАРЕГЕСТРИРОВАТЬСЯ"}
                            className="flex justify-end items-end bg-black border-black border rounded-[20px] py-[8px] px-[45px] min-w-[272px] text-[#F9F1E6] text-[18px] font-['ArsenalB'] cursor-pointer hover:transition-[15s] hover:bg-[#131313]"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
