"use client";
import React from "react";
import { Code } from "phosphor-react";

export function TechnicalExpertiseSection() {
  // Categorias e sub-itens de tecnologia
  const categories = [
    {
      title: "Full-Stack Development",
      items: [
        "JavaScript (ES6)",
        "Python",
        "Node.js",
        "React",
        "Next.js",
        "Angular",
        "NestJS",
      ],
    },
    {
      title: "Blockchain & Web3",
      items: ["Solidity", "Hardhat", "NFT development", "Tokenization"],
    },
    {
      title: "Back-end & Cloud",
      items: [
        "Java (SpringBoot)",
        "PostgreSQL",
        "AWS (Lambda, CloudWatch,S3)",
        "MongoDB",
        "Docker",
        "Python (FastAPI)",
        "Python (Flask)",
        "Python (Django)",
        "Sql Alchemy",
      ],
    },
    {
      title: "Front-end & UI/UX",
      items: ["Tailwind CSS", "Sass", "Bootstrap", "Figma"],
    },
    {
      title: "Automation & Performance",
      items: ["TDD", "Git & GitHub", "CI/CD", "AWS Devops"],
    },
  ];

  return (
    <section
      id="technical-expertise"
      className="bg-neutral-900 text-white font-sans px-[30px] py-[60px]"
    >
      <div className="flex">
        {/* Navbar lateral importada */}

        {/* Conteúdo principal da seção */}
        <div className="flex-1">
          {/* Título com ícone */}
          <div className="flex items-center gap-2 mb-8">
            <Code size={16} color="#E9CA07" weight="duotone" />
            <h2 className="text-base font-bold text-[#E9CA07]">
              Technical Expertise
            </h2>
          </div>

          {/* Lista de categorias */}
          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category.title} className="border-b border-white pb-4">
                <div className="flex items-start gap-[75px]">
                  {/* Frame fixo para o título */}
                  <div className="w-[277px]">
                    <h3 className="text-white text-xl font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  {/* Stacks (chips) */}
                  <div className="flex flex-wrap gap-2 text-xs text-gray-300 max-w-[400px]">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="
              bg-neutral-800
              px-4 py-2
              rounded-[100px]
            "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
