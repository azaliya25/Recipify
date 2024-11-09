import Image from "next/image";
import SearchText from "@/components/search/SearchText/SearchText.tsx";

export default function Search() {
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
                <SearchText />
            </div>
        </div>
    );
}
