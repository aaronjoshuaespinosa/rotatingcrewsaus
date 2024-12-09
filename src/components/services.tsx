import { SERVICES } from "@/constants";
import React from "react";

export default function Services() {
  return (
    <>
      <div className="flex w-full flex-col gap-y-4">
        {SERVICES.map(({ image, side, title, contents }) => (
          <div
            key={title}
            className={`flex gap-x-8 rounded-md bg-gray-200 p-8 ${side == "left" ? "flex-row" : "flex-row-reverse"}`}
          >
            <div
              className={`hidden h-64 w-full bg-blue-950 lg:block ${side == "left" ? "rounded-br-[3rem]" : "rounded-bl-[3rem]"}`}
            ></div>
            <div className="flex w-full flex-col gap-y-4">
              <h1 className="text-4xl font-black text-blue-950">{title}</h1>
              <div className="block h-80 w-full rounded-br-[3rem] bg-blue-950 md:h-72 lg:hidden lg:h-64"></div>
              <ul className="list-inside list-disc">
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
