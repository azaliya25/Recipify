import Image from "next/image";
import AvtoReg from "@/components/auth/auth";

export default function Home() {
    return (
        <div className="container">
            <main className="flex flex-col justify-center items-center">
                <Image
                    className="left-80 absolute top-0 pt-11"
                    src="/fon.png"
                    alt="fon image"
                    width={600}
                    height={557}
                    priority
                />
                <AvtoReg />
            </main>
        </div>
    );
}
