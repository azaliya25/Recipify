import "@/app/globals.css";
import Image from "next/image";
import cn from  'classnames';


export default function MainAppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div id="page" className="relative">
           <Image
            className={cn(
              "absolute top-0", 
            )}
            src="/fon.png"
            alt="fon image"
            width={800}
            height={757}
            priority
          />
            {children}
        </div>
    );
}
