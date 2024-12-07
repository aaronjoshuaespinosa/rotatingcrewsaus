import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Rethink_Sans } from "next/font/google";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const rethink = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function Home() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={rethink.className}>
      <main className="relative h-full w-full font-semibold">
        <div className="relative bg-[url('/Hero.webp')] bg-cover bg-top">
          {/* <div className="absolute left-0 z-10 h-full w-full max-w-screen-2xl bg-gradient-to-l from-transparent to-blue-950" /> */}
          <div className="absolute top-0 z-10 h-64 w-full bg-gradient-to-t from-transparent to-white" />
          {/* NAV BAR */}
          <nav
            className={`sticky top-0 z-50 flex w-full items-center justify-between px-48 duration-300 ease-in-out ${scroll ? "bg-white py-3" : "bg-none py-6"}`}
          >
            <div className="flex items-center gap-x-2">
              <Image
                src={"/RotatingCrews Logo.png"}
                alt="logo"
                width="200"
                height="200"
                className={`aspect-square duration-300 ease-in-out ${scroll ? "h-12 w-12" : "h-14 w-14"}`}
              />
              <div>
                <p
                  className={`font-black leading-[1.75rem] duration-300 ease-in-out ${scroll ? "text-2xl" : "text-3xl"}`}
                >
                  Rotating Crew
                </p>
                <p
                  className={`font-bold leading-[1.25rem] duration-300 ease-in-out ${scroll ? "text-xl" : "text-2xl"}`}
                >
                  Aus
                </p>
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

          {/* HERO SECTION */}
          <div className="relative z-30 flex flex-col gap-y-6 px-48 py-36">
            <h1 className="max-w-2xl text-6xl font-black text-white drop-shadow-sm">
              <span className="text-primary">Innovative</span> Engineering
              Solutions for a Sustainable{" "}
              <span className="text-primary">Future</span>
            </h1>
            <p className="max-w-2xl text-white drop-shadow-md">
              Rotating Crew Aus delivers expert engineering solutions in oil and
              gas, mining, and construction with more than 16 years of
              experience. We specialize in innovative, efficient, and
              sustainable approaches across key industries.
            </p>
            <Link href="#">
              <Button>Contact us</Button>
            </Link>
          </div>
        </div>
        {/* ABOUT SECTION */}
        <div className="flex items-center gap-x-40 rounded-lg bg-white px-48 py-24">
          <div className="flex w-full flex-col gap-y-4">
            <h1 className="max-w-2xl text-6xl font-black text-primary drop-shadow-sm">
              About us
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="max-w-2xl text-blue-950 drop-shadow-md">
                Rotating Crew Aus provides exceptional engineering consulting
                services in the oil and gas, mining and construction industry
                across Australia leveraging over 16 years of mechanical
                engineering expertise and a diverse team of specialists. We
                deliver innovative, efficient and sustainable solutions across
                our core business areas of Mechanical, Electrical,
                Instrumentation and Control, Process, Corrosion and Production
                Engineering.
              </p>
              <p className="max-w-2xl text-blue-950 drop-shadow-md">
                We strive to exceed our clients’ expectations through our
                dedication to quality, safety, and integrity fostering long-term
                partnerships and contributing to the advancement of the
                engineering field. Additionally, we help our customers achieve
                energy savings by improving asset performance ensuring both
                economic and environmental benefits.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="h-[25rem] w-full overflow-hidden drop-shadow-[-8px_8px_0px_#F11622]">
              <Image
                src={"/Laser-Alignment-6.webp"}
                alt="logo"
                width="1000"
                height="1000"
                className="h-full w-full rounded-br-[3rem] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
