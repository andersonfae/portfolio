"use client";
import React from "react";
import { Globe } from "phosphor-react";

export function ExperienceSection() {
  const experiences = [
    {
      logo: "/tardis.png",
      role: "Full-Stack Developer",
      company: "Tardis Tecnologia",
      dateRange: "Dec 2024 - Present · 4 mos",
      responsibilities: [
        {
          normal: "Leading and managing a development team while building a ",
          highlight:
            "crypto-based casino platform with cryptocurrency payments.",
        },
        {
          normal: "Additionally, developing the entire ",
          highlight:
            "internal system and user management platform for the largest technology event in Latin America.",
        },
        {
          normal: "Working with ",
          highlight:
            "Angular, Tailwind CSS, Java (Spring Boot), and PostgreSQL",
          normal2: " to deliver scalable and high-performance solutions.",
        },
      ],
    },
    {
      logo: "/freela.png",
      role: "Full Stack Developer Freelancer",
      company: "Freelance",
      dateRange: "Dec 2019 - Present · 5 yrs 4 mos",
      responsibilities: [
        {
          normal: "Developed a ",
          highlight:
            "NFT Music Marketplace with Royalty Payments and NFT Creation/Deployment.",
        },
        {
          normal: "Created a ",
          highlight: "Drop Shipping Management Platform for Sales & Delivery.",
        },
        {
          normal: "Built a ",
          highlight: "Single Page for Game Metrics Analysis AI",
          normal2: ", using Synchronized Charts with Videos.",
        },
      ],
    },
    {
      logo: "/lxp.png",
      role: "Frontend Developer",
      company: "LXP EAD",
      dateRange: "Sep 2024 - Dec 2024 · 4 mos",
      responsibilities: [
        {
          normal: "Frontend development for a ",
          highlight: "SaaS platform",
          normal2:
            ", following Figma designs and implementing the UI with Hooks, Context API, and backend integration.",
        },
        {
          normal: "Used ",
          highlight: "Next.js, Tailwind CSS, and Bootstrap",
          normal2: " to create responsive layouts.",
        },
      ],
    },
    {
      logo: "/declare.png",
      role: "Full Stack Developer",
      company: "Declare Cripto",
      dateRange: "Jan 2024 - Sep 2024 · 9 mos",
      responsibilities: [
        {
          normal: "Developed an ",
          highlight: "automation system using Python",
          normal2: ", working on both frontend and backend.",
        },
        {
          normal: "Monitored logs in ",
          highlight: "AWS CloudWatch",
          normal2:
            " and implemented automated processes with AWS Lambda and Crons.",
        },
      ],
    },
    {
      logo: "/jotaja.png",
      role: "Full Stack Developer",
      company: "Jotaja Pedidos",
      dateRange: "Dec 2022 - Jun 2023 · 7 mos",
      responsibilities: [
        {
          normal: "Worked across multiple technologies, including ",
          highlight:
            "C, Angular, Next.js, NestJS, React, Tailwind CSS, and AWS",
          normal2: ".",
        },
        {
          normal: "Focused on ",
          highlight: "system integrations and feature optimization",
          normal2: ".",
        },
      ],
    },
    {
      logo: "/7consulting.png",
      role: "Full Stack Developer",
      company: "7Consulting",
      dateRange: "Dec 2022 - Feb 2023 · 3 mos",
      responsibilities: [
        {
          normal: "Developed an ",
          highlight: "e-commerce platform for an online school",
          normal2: " selling courses and study packages.",
        },
        {
          normal: "Implemented ",
          highlight: "payment systems",
          normal2:
            " and worked with Prisma, NestJS, Next.js, and Tailwind CSS.",
        },
      ],
    },
    {
      logo: "/gbx.png",
      role: "Blockchain & Web3 Developer",
      company: "GBX Brasil",
      dateRange: "Sep 2020 - Nov 2022 · 2 yrs 3 mos",
      responsibilities: [
        {
          normal: "Developed ",
          highlight: "Web3 solutions",
          normal2: ", including tokenizing commodities such as soy and coffee.",
        },
        {
          normal: "Worked as a full-stack developer with ",
          highlight: "Solidity, Next.js, and PostgreSQL",
          normal2: ", implementing and testing smart contracts.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="bg-neutral-900 text-white px-[15px]">
      {/* Título com ícone */}
      <div className="flex items-center gap-2 mb-[30px]">
        <Globe size={16} color="#E9CA07" weight="duotone" />
        <h2 className="text-base font-bold text-[#E9CA07]">Experience</h2>
      </div>

      {/* Lista de experiências */}
      <div>
        {experiences.map((exp, index) => (
          <div
            key={`${exp.role}-${index}`}
            className="
              border-b border-white
              last:border-none
              pb-[15px] mb-[15px]
              last:mb-0
            "
          >
            <div
              className="
                grid grid-cols-1
                md:grid-cols-4
                gap-[60px]
                items-start
              "
            >
              {/* Coluna 1: Logo */}
              <div className="w-[200px] h-[27px] flex items-center">
                <img
                  src={exp.logo}
                  alt={exp.company || exp.role}
                  className="h-full object-contain object-left"
                />
              </div>

              {/* Coluna 2: Função + Empresa */}
              <div>
                <h3 className="text-[20px] font-semibold mb-1">{exp.role}</h3>
                <p className="text-[14px] text-gray-300">{exp.company}</p>
              </div>

              {/* Coluna 3: Responsabilidades em bullet points */}
              <div>
                <ul className="list-disc ml-5 space-y-2 text-[14px]">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>
                      <span className="text-gray-300">{item.normal}</span>
                      <span className="text-white">{item.highlight}</span>
                      {item.normal2 && (
                        <span className="text-gray-300">{item.normal2}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna 4: Data (quando entrou), alinhado à direita */}
              <div className="text-right text-[10px] text-gray-400">
                {exp.dateRange}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
