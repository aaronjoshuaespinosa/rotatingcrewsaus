import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="relative flex flex-col items-center justify-center bg-white px-4 py-6 text-center md:justify-between md:px-10 lg:flex-row lg:gap-x-10 lg:px-24 xl:gap-x-40 xl:px-48">
        <p>Copyright © 2024 Rotating Crews Aus, All rights reserved. </p>
        {/*<p>
          Developed & Designed by{" "}
          <Link
            href="https://ajespinosa.com/"
            target="_blank"
            className="underline"
          >
            AJ Espinosa
          </Link>
        </p>*/}
      </div>
    </footer>
  );
}
