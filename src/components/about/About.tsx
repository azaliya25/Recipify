import Image from "next/image";
import AboutText from "@/components/about/AboutText.tsx/AboutText.tsx";

export default function About() {
    return (
        <div className="flex justify-center items-center mt-[190px]">
            <div className="flex justify-center items-center top-0 text-[#F9F1E6] w-full max-h-[620px] gap-64 ">
                <Image
                    className="w-full h-full"
                    src="/grid.png"
                    alt="fon image"
                    width={1203}
                    height={1400}
                    priority
                />
                <AboutText />
            </div>
        </div>
    );
}
