import Image from "next/image";
import React from "react";

const BannerFoto = () => {
  return (
    <div className="">
     
        <Image
          className="min-w-[500px]"
          src="/fon2.png"
          alt="fon image"
          width={600}
          height={557}
          priority
        />
    </div>
  );
}

export default BannerFoto;
