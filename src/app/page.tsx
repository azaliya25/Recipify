import Image from "next/image";
import cn from "classnames";
import Banner from "@/components/banner/Banner.tsx";
import About from "@/components/about/About.tsx";
import Search from "@/components/search/Search.tsx";

export default function Home() {
  return (
    <div className="container">
      <main className="flex flex-col justify-center items-center">
        <Image
          className={cn("absolute top-0 hidden"), ("md:max-w-[700px] md:flex md:left-16"), ("lg:left-32")}
          src="/fon.png"
          alt="fon image"
          width={800}
          height={757}
          priority
        />
        <Banner />
        <About />
        <Search />
      </main>
    </div>
  );
}
