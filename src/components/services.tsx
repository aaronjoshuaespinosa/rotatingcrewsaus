import { SERVICES } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <>
      <div className="flex w-full flex-col gap-y-4">
        {SERVICES.map(({ image, side, title, contents }) => (
          <div
            key={title}
            className={`flex gap-x-8 rounded-md bg-gray-200 p-4 md:p-8 ${side == "left" ? "flex-row" : "flex-row-reverse"}`}
          >
            <div
              className={`hidden h-96 w-full overflow-hidden bg-blue-950 lg:block ${side == "left" ? "rounded-br-[3rem]" : "rounded-bl-[3rem]"}`}
            >
              <Image
                src={image}
                alt={title}
                height="1000"
                width="1000"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex w-full flex-col gap-y-4">
              <h1 className="text-3xl font-black text-blue-950 md:text-4xl">
                {title}
              </h1>
              <div className="block h-80 w-full overflow-hidden rounded-br-[3rem] bg-blue-950 md:h-72 lg:hidden lg:h-64">
                <Image
                  src={image}
                  alt={title}
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <ul className="list-outside list-disc p-4">
                {contents.map((content, i) => (
                  <li key={i}>{content}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
