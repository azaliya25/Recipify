import Image from "next/image";
import Profile from "@/components/profile/Profile.tsx";

export default function Home() {
  return (
    <div className="container">
      <main className="flex flex-col justify-center items-center">
        <Profile />
      </main>
    </div>
  );
}
