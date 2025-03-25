"use client";
import React from "react";
import { HandsClapping } from "phosphor-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Lucas Góes",
      role: "Senior Software Engineer",
      company: "Jotajá",
      image: "/lucas.jpeg",
      testimonial: `"I had the pleasure of working with Anderson on several projects, and I can say that he is an extremely dedicated developer. His code is always well-organized, clear, and efficient, demonstrating his commitment to quality. Additionally, he is constantly seeking to learn and improve his skills, which makes him a standout professional. Without a doubt, a valuable talent for any team!"`,
    },
    {
      name: "Rafaela Vianna",
      role: "Project Owner",
      company: "Tardis Tecnologia",
      image: "/rafa.jpeg",
      testimonial: `"Anderson is an exceptional professional whose dedication was key to our most important project. He demonstrated full-stack mastery—especially in front-end—ensuring solutions were functional, efficient, and intuitive. His clear grasp of requirements helped him consistently meet deadlines with high-quality deliverables. Anderson's proactivity and excellent collaboration make him indispensable. I wholeheartedly recommend him, confident his competence will greatly benefit any project."`,
    },
    // {
    //   name: "Amanda Carneiro",
    //   role: "Co-Founder & CEO",
    //   company: "GBX",
    //   image: "/amanda.png",
    //   testimonial: `"Cosme is a Full Stack professional. He fills a gap that is highly desired in many teams, he is an awesome UX designer, who can provide solutions to interface complex problems."`,
    // },
  ];

  return (
    <section id="testimonials" className="bg-neutral-900 text-white px-[15px]">
      {/* Título com ícone */}
      <div className="flex items-center gap-2 mb-8">
        <HandsClapping size={16} color="#E9CA07" weight="duotone" />
        <h2 className="text-base font-bold text-[#E9CA07]">Testimonials</h2>
      </div>

      {/* Lista de testimonials */}
      <div>
        {testimonials.map((test, index) => (
          <div
            key={index}
            className="
              border-b border-white
              last:border-none
              pb-4 mb-4
            "
          >
            {/* Contêiner externo: bloco (imagem+nome) e texto, com 60px entre eles */}
            <div className="flex flex-col md:flex-row items-start gap-[30px]">
              {/* Foto (64x64) */}
              <div className="w-[64px] h-[64px] flex-shrink-0">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-full h-full object-cover rounded grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Nome/Cargo */}
              <div className="flex flex-col flex-shrink-0">
                {/* Nome em 20px */}
                <p className="text-[20px] font-semibold">{test.name}</p>
                {/* Cargo/Empresa em 14px, 50% de opacidade */}
                <p className="text-[14px]">
                  <span className="text-white">{test.role}</span>
                  <span className="text-white/50"> — {test.company}</span>
                </p>
              </div>

              {/* Texto do testimonial (14px) */}
              <div className="flex-1 min-w-0 text-[14px] text-white">
                {test.testimonial}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
