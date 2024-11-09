import Image from "next/image";
import Profile from "@/components/profile/Profile.tsx";

export default function Home() {
  return (
    <div className="container">
      <main className="flex flex-col justify-center items-center">
        <Image
          className="left-32 absolute top-0"
          src="/fon.png"
          alt="fon image"
          width={800}
          height={757}
          priority
        />
        <Profile />
      </main>
    </div>
  );
}
