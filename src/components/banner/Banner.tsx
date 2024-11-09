import BannerText from "@/components/banner/BannerText/BannerText.tsx";
import BannerFoto from "@/components/banner/BannerFoto/BannerFoto.tsx";

export default function Banner() {
  return (
    <div className="flex pl-[35px] pr-[35px] pt-[20px] ">
      <div className="flex justify-center items-center top-0 blur__banner backdrop-opacity-10 backdrop-invert bg-[#DABF94]/35 rounded-[20px] text-[#F9F1E6] w-full h-screen max-h-[620px] pl-[90px] gap-64">
        <BannerText />
        <BannerFoto />
      </div>
    </div>
  );
}
