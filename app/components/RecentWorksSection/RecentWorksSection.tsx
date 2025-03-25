"use client";
import { SketchLogo } from "phosphor-react";
import React from "react";

export function RecentWorksSection() {
  const recentWorks = [
    {
      title: "Rio Innovation Week",
      description: "Latin America's largest technology event.",
      image: "/riw.png",
      technologies: ["Angular", "Jira", "AWS"],
      details: [
        "Developed and led the implementation of the curation and institutional system for Rio Innovation Week, the largest tech event in Latin America.",
        "Managed a team of 10 developers and designers, ensuring on-time delivery and smooth operations.",
        "Integrated various APIs and AWS services to handle large-scale traffic efficiently.",
        "Optimized the codebase for performance, achieving a 30% reduction in response times.",
      ],
    },
    {
      title: "MrCash",
      description: "A crypto-based casino project.",
      image: "/casino.png",
      technologies: ["Angular", "Solidity", "Crypto Payment Gateway"],
      details: [
        "Developed a crypto-based casino platform using Angular for the front-end.",
        "Implemented smart contracts in Solidity for secure gaming logic and transactions.",
        "Integrated a cryptocurrency payment gateway for seamless deposits and withdrawals.",
      ],
    },
    {
      title: "SoundBlox",
      description:
        "A music NFT company enabling artists to tokenize their tracks and receive royalty payments for every sale.",
      image: "/soundblox.png",
      technologies: ["NFT", "Music Royalties", "Blockchain Payment"],
      details: [
        "Developed a platform for minting and trading music NFTs, allowing artists to monetize their work.",
        "Integrated a royalty payment system that distributes revenue each time an NFT is resold.",
        "Ensured secure and transparent transactions using smart contracts on a blockchain network.",
      ],
    },
    {
      title: "Nissin",
      description:
        "Nissin's e-learning platform aimed at internal content management and improving employees' performance.",
      image: "/nissin.png",
      technologies: ["EAD", "Learning Management System", "React", "Node.js"],
      details: [
        "Built an internal e-learning platform to enhance training and employee performance.",
        "Implemented content management features to simplify course creation and organization.",
        "Integrated analytics to monitor progress and measure training effectiveness in real time.",
        "Developed dashboards to track engagement, results, and provide actionable insights for improvement.",
      ],
    },
  ];

  return (
    <section
      id="recent-works"
      className="bg-neutral-900 text-white px-[15px] md:px-[30px]"
    >
      {/* Título geral */}
      <div className="flex items-center gap-2 mb-8">
        <SketchLogo size={16} color="#E9CA07" weight="duotone" />
        <h2 className="text-xl font-bold">Recent Works</h2>
      </div>

      {/* Espaçamento de 15px entre cada trabalho */}
      <div className="space-y-[15px]">
        {recentWorks.map((work, index) => (
          <div
            key={work.title}
            className={`
              flex flex-col lg:flex-row gap-8
              items-start
              border-b border-white pb-4
              ${index === recentWorks.length - 1 ? "border-none" : ""}
            `}
          >
            {/* Coluna Esquerda: imagem + texto */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Imagem à esquerda */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="
                    w-full
                    max-w-[295px]
                    h-[180px]
                    lg:w-[249px]
                    lg:h-[186px]
                    object-cover
                    flex-none
                  "
                />

                {/* Texto ao lado da imagem */}
                <div className="flex flex-col justify-start">
                  {/* Título (20px) */}
                  <h3 className="text-[20px] font-semibold mb-1">
                    {work.title}
                  </h3>

                  {/* Descrição (14px) */}
                  <p className="text-[14px] text-gray-300 mb-4">
                    {work.description}
                  </p>

                  {/* Tecnologias (chips) */}
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          bg-neutral-800
                          text-xs text-gray-300
                          px-4 py-2
                          rounded-[100px]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Carrossel de cards */}
            {/* <div className="lg:hidden w-full overflow-x-auto">
              <div
                className="
                  flex
                  gap-4
                  px-[15px]
                  pb-4
                  w-max
                  max-w-full
                  overflow-x-scroll
                  scrollbar-hide
                "
              >
                {work.details.map((detail, i) => (
                  <div
                    key={i}
                    className="
                      flex-shrink-0
                      bg-[#FFFFFF1A]
                      p-[15px]
                      rounded
                      text-[14px]
                      text-gray-200
                      leading-normal
                      w-[212px]
                      min-h-[162px]
                      max-h-[162px]
                      overflow-auto
                    "
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div> */}

            {/* Desktop: Grid de cards em 2 colunas */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {work.details.map((detail, i) => (
                <div
                  key={i}
                  className="
                    bg-[#FFFFFF1A]
                    p-[15px]
                    rounded
                    text-[14px]
                    text-gray-200
                    leading-normal
                    max-w-[212px]
                    max-h-[162px]
                    overflow-auto
                  "
                >
                  {detail}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
