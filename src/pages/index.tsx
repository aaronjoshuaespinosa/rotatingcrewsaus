"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS, TESTIMONIALS } from "@/constants";
import Link from "next/link";
import { Rethink_Sans } from "next/font/google";
import Image from "next/image";
import { Mail, Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import Services from "@/components/services";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const rethink = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={rethink.className}>
      <main className="relative h-full w-full font-semibold">
        <div className="relative">
          <Image
            src={"/Hero.webp"}
            alt="hero image"
            width="1000"
            height="1000"
            className="absolute top-0 h-full w-full object-cover object-top brightness-50 filter md:brightness-75 lg:brightness-90"
          />
          <div className="absolute top-0 z-10 h-64 w-full bg-gradient-to-t from-transparent to-white" />

          {/* NAV BAR */}
          <nav
            className={`fixed top-0 z-50 flex w-full items-center justify-between px-3 duration-300 ease-in-out md:px-10 lg:px-24 xl:px-48 ${scroll ? "bg-white py-3" : "bg-none py-6"}`}
          >
            <Link href="#" className="flex items-center gap-x-2">
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
            </Link>
            <div className="hidden gap-x-4 lg:flex xl:gap-x-10">
              {NAV_LINKS.map(({ name, link }) => (
                <Link key={link} href={link}>
                  <p className="decoration-2 hover:font-bold hover:underline">
                    {name}
                  </p>
                </Link>
              ))}
            </div>
            <div className="hidden flex-col lg:flex">
              <div className="flex items-center gap-x-2">
                <Mail size={20} />
                <p>rotatingcrewaus@gmail.com</p>
              </div>
              <div className="flex items-center gap-x-2">
                <Phone size={20} />
                <p>0447 818 882</p>
              </div>
            </div>

            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger
                className={`${rethink.className} block lg:hidden`}
                asChild
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="flex items-center justify-center"
                >
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={`${rethink.className} `}>
                <DropdownMenuGroup className="flex w-full flex-col items-center gap-y-2">
                  {NAV_LINKS.map(({ name, link }, i) => (
                    <DropdownMenuItem className="w-full text-center" key={i}>
                      <Link
                        href={link}
                        className="w-full"
                        onClick={() => setOpen(false)}
                      >
                        <p className="w-full text-center text-base font-bold">
                          {name}
                        </p>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="flex flex-col items-center p-2">
                  <div className="flex items-center gap-x-2">
                    <Mail size={20} />
                    <p>rotatingcrewaus@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Phone size={20} />
                    <p>0478 368 128</p>
                  </div>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* HERO SECTION */}
          <div className="relative z-30 flex min-h-screen flex-col justify-center gap-y-6 px-4 pb-36 pt-48 md:min-h-fit md:px-10 lg:px-24 xl:px-48">
            <h1 className="max-w-2xl text-5xl font-black text-white drop-shadow-sm lg:text-6xl">
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
        <div
          id="about"
          className="flex items-center rounded-lg bg-white px-4 py-24 md:px-10 lg:gap-x-10 lg:px-24 xl:gap-x-40 xl:px-48"
        >
          <div className="flex w-full flex-col gap-y-4">
            <h1 className="max-w-2xl text-5xl font-black text-primary drop-shadow-sm lg:text-6xl">
              About us
            </h1>
            <div className="h-60 w-full overflow-hidden drop-shadow-[-8px_8px_0px_#F11622] sm:h-96 lg:hidden">
              <Image
                src={"/Laser-Alignment-6.webp"}
                alt="about-image"
                width="1000"
                height="1000"
                className="h-full w-full rounded-br-[3rem] object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-y-4 py-4 text-justify lg:py-0">
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
          <div className="hidden w-full lg:block">
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

        {/* STATS SECTION */}
        <div className="flex h-full w-full flex-col items-center gap-y-4 bg-blue-950 px-4 py-12 text-center text-white md:px-10 lg:gap-x-10 lg:px-24 xl:gap-x-40 xl:px-48">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-black">
              Lorem ipsum dolor argo set anum des
            </h1>
            <p>Lorem ipsum dolor set anum cristi ver sa lofta.</p>
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-x-8 gap-y-8 md:flex-row">
            <div className="flex flex-col items-center">
              <p className="text-6xl font-black">70+</p>
              <p>Lorem ipsum</p>
            </div>
            <div className="hidden h-24 w-[1px] border bg-white md:block" />
            <div className="flex flex-col items-center">
              <p className="text-6xl font-black">36%</p>
              <p>Lorem ipsum</p>
            </div>
            <div className="hidden h-24 w-[1px] border bg-white md:block" />
            <div className="flex flex-col items-center">
              <p className="text-6xl font-black">5k+</p>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div
          id="services"
          className="flex flex-col items-center rounded-lg bg-white px-4 pb-12 pt-12 md:px-10 lg:gap-x-10 lg:px-24 lg:pt-24 xl:gap-x-40 xl:px-48"
        >
          <div className="flex w-full flex-col items-center justify-between gap-x-4 gap-y-1 pb-4 lg:flex-row">
            <h1 className="max-w-2xl text-4xl font-black text-primary drop-shadow-sm lg:text-6xl">
              Our Services
            </h1>
            <p className="text-center md:max-w-lg lg:text-right xl:max-w-2xl">
              We provide expert personnel for oil, gas, and mining, ensuring
              efficient project support through our pipeline and process
              expertise.
            </p>
          </div>
          <Services />
        </div>

        {/* WHY US SECTION */}
        <div
          id="why-us"
          className="flex flex-col items-center rounded-lg bg-gray-200 px-4 py-12 md:px-10 lg:gap-x-10 lg:px-24 xl:gap-x-40 xl:px-48"
        >
          <p className="text-center text-xl font-bold text-gray-600">
            And now, for the BIG question
          </p>
          <h1 className="max-w-2xl text-5xl font-black text-primary drop-shadow-sm lg:text-6xl">
            Why us?
          </h1>
          <div className="flex flex-col-reverse gap-x-8 gap-y-6 py-8 lg:flex-row">
            <div className="flex w-full flex-col gap-y-4 text-justify">
              <p>
                Our clients are the driving force behind our dedication to
                providing engineering, commissioning, sustainability, and
                equipment planning solutions to improve integrity and
                performance. We leverage on our 16yrs of collective and diverse
                experience, technical expertise, and industry knowledge of
                rotating equipment and machinery.
              </p>
              <p>
                We are committed to delivering holistic advice for our clients’
                most complex challenges according to the codes and standards and
                work with them to meet their design and construction needs
                within budget and desired timeline.
              </p>
              <p>
                At RCA, we are committed to providing the best results for our
                clients driven by our commitment to our core values of
                Excellence, Trust, Relationships, Stability, and Passion.
              </p>
            </div>
            <div className="h-96 w-full overflow-hidden rounded-br-[3rem] drop-shadow-[-8px_8px_0px_#F11622]">
              <Image
                src="/Gas plant 1.webp"
                alt="why-us-image"
                height="1000"
                width="1000"
                className="h-full w-full object-cover object-center md:object-bottom lg:object-center"
              />
            </div>
          </div>
        </div>

        {/* TESTIMONIALS SECTION */}
        <div className="flex flex-col items-center bg-blue-950 px-4 pb-12 pt-12 md:px-10 lg:gap-x-10 lg:px-24 lg:pt-24 xl:gap-x-40 xl:px-48">
          <div className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-1 pb-4 text-white">
            <h1 className="max-w-2xl text-4xl font-black drop-shadow-sm lg:text-6xl">
              Testimonials
            </h1>
            <p className="text-center md:max-w-lg lg:text-right xl:max-w-2xl">
              Our happy clients say...
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            {TESTIMONIALS.map(({ name, role, image, message }) => (
              <div
                className="flex h-96 w-full flex-col justify-between rounded-br-[3rem] bg-white p-4"
                key={name}
              >
                <p className="italic">{message}</p>
                <div className="flex items-center gap-x-2">
                  <div className="h-10 w-10 rounded-full bg-blue-950" />
                  <div className="">
                    <p className="text-xl font-black text-primary">{name}</p>
                    <p>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div
          id="contact"
          className="relative flex flex-col items-center overflow-hidden px-4 pb-12 pt-12 md:px-10 lg:gap-x-10 lg:px-24 lg:pt-24 xl:gap-x-40 xl:px-48"
        >
          <Image
            src={"/gas plant 2.webp"}
            alt="hero image"
            width="1500"
            height="1500"
            className="absolute top-0 z-0 h-full w-full object-cover object-center brightness-50 filter md:brightness-75 lg:brightness-90"
          />
          <div className="absolute top-0 z-10 h-72 w-full bg-gradient-to-t from-transparent to-blue-950" />
          <div className="relative z-10 flex w-full flex-col items-center py-8">
            <h1 className="max-w-2xl text-4xl font-black text-white drop-shadow-sm lg:text-6xl">
              Contact us
            </h1>
            <p className="text-center text-white md:max-w-lg xl:max-w-xl">
              Get in touch with us today to discuss how we can support your
              project needs with expert engineering solutions. We're here to
              help!
            </p>
          </div>
          <ContactForm />
        </div>

        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  );
}
