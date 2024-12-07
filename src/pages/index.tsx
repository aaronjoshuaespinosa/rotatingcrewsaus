import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Rethink_Sans } from "next/font/google";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const rethink = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={rethink.className}>
      <main className="flex h-full w-full font-semibold">
        <nav className="sticky flex w-full items-center justify-between px-40 py-6">
          <div className="flex items-center gap-x-2">
            <Image
              src={"/RotatingCrews Logo.png"}
              alt="logo"
              width="60"
              height="60"
            ></Image>
            <div>
              <p className="text-3xl font-black leading-[1.75rem]">
                Rotating Crew
              </p>
              <p className="text-2xl font-bold leading-[1.25rem]">Aus</p>
            </div>
          </div>
          <div className="flex gap-x-10">
            {NAV_LINKS.map(({ name, link }) => (
              <Link key={link} href={link}>
                <p className="decoration-2 hover:font-bold hover:underline">
                  {name}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <Mail size={20} />
              <p>rotatingcrewaus@gmail.com</p>
            </div>
            <div className="flex items-center gap-x-2">
              <Phone size={20} />
              <p>0447 818 882</p>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}
