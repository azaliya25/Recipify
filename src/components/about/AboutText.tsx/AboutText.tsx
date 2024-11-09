import React from "react";

const AboutText = () => {
    return (
        <div className="flex flex-col justify-center items-center absolute m-[100px]">
            <div className="flex flex-col gap-24">
                <div className="flex flex-col justify-center items-center w-full max-w-[1000px] gap-24">
                    <h1 className="text-8xl font-['ArsenalB'] tracking-widest text-[#DABF94]">Добро пожаловать!</h1>
                    <p className="flex text-3xl font-['ArsenalB'] w-full max-h-96 text-[#DABF94] text-justify leading-[40px] border-l-4 pl-32 pr-32 border-[#DABF94] rounded-md ">«Recipify» — это интуитивно понятное и удобное веб-приложение, которое помогает Вам находить вкусные и полезные рецепты на основе ингредиентов, которые у Вас уже есть. С помощью технологии искусственного интеллекта приложение анализирует введённые пользователем продукты и предлагает разнообразные варианты блюд, учитывая Ваши предпочтения и ограничения.</p>
                </div>
                <div className="flex flex-col max-w-[300px] gap-24 border-b-4 pt-10 border-[#DABF94] rounded-md border-w-[100px]">
                </div>
            </div>
        </div>
    );
}

export default AboutText 
