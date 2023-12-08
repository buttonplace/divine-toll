import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Image
          src="/images/medbell.png"
          alt="Divine Toll Logo"
          width={128}
          height={128}
          className=" h-auto animate-bounce md:w-32 lg:w-48"
        />
        <h1 className="text-back flex items-center justify-center font-serif text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="z-10">Loading</span>{" "}
        </h1>
      </div>
    </section>
  );
};

export default Loading;
