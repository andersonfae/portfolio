"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function TransacationSection() {
  const experiences = [
    "Next.js & NestJS for \n High-Performance Apps",
    "Python + AWS for \n Automation & AI",
    "Bridging Web2 \n & Web3",
    "5+ Years in \n Development",
  ];

  const marqueeSegments = [
    "European Citizen",
    "Based in Ireland",
    "Open to hybrid roles across Europe & global full-remote opportunities",
  ];

  const repeatCount = 3;

  return (
    <section className="bg-neutral-900 text-white font-sans">
      <div className="border-t border-gray-600 mb-8 px-[30px] pt-[60px]" />

      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 px-[30px] pb-[60px] cursor-default">
        {experiences.map((exp) => (
          <div
            key={exp}
            className="flex flex-col items-center text-center text-[12px] font-bold gap-2"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/loro-left.svg"
                alt=""
                width={16}
                height={16}
                priority
              />
              <span className="whitespace-pre-line">{exp}</span>
              <Image
                src="/loro-right.svg"
                alt=""
                width={16}
                height={16}
                priority
              />
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src="/star.svg"
                  alt="Star"
                  width={9}
                  height={9}
                  priority
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#E9CA07] h-[50px] flex items-center overflow-hidden cursor-default">
        <Marquee speed={40} gradient={false} pauseOnHover>
          {Array.from({ length: repeatCount }).map((_, repIndex) => (
            <React.Fragment key={repIndex}>
              {marqueeSegments.map((segment, segIndex) => (
                <span
                  key={`${repIndex}-${segIndex}`}
                  className="inline-block text-[16px] font-bold text-black"
                >
                  <span>{segment}</span>

                  <span className="mx-4">✦</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
