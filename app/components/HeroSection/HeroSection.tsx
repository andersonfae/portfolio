"use client";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-neutral-900 text-white font-sans">
      {/*
        BLOCO MOBILE
        - Exibido apenas em telas menores que “md”
      */}
      <div className="md:hidden px-[30px] pt-[30px] pb-[60px]">
        {/* Nome em 37px (linha 1) */}
        <h1 className="text-[37px] font-bold leading-none">Anderson Faé,</h1>
        {/* Full-Stack Developer em 37px, opacidade (linha 2) */}
        <h2 className="text-[37px] font-bold leading-none text-white/60">
          Full-Stack Developer
        </h2>

        {/* Espaçamento de 30px */}
        <div className="h-[30px]" />

        {/* Imagem (184x245), alinhada à esquerda */}
        <div>
          <Image
            src="/anderson-img.png"
            alt="Foto de Anderson Faé"
            width={184}
            height={245}
            className="object-cover"
            priority
          />
        </div>

        {/* Espaçamento de 30px */}
        <div className="h-[30px]" />

        {/* Texto (14px) */}
        <p className="text-[14px] text-gray-300 leading-relaxed">
          Hello! I&apos;m Anderson Faé, a Full-Stack Developer with a passion
          for blockchain, Web3, and high-performance applications. With a{" "}
          <span className="text-white">
            strong foundation in JavaScript, Python, and cloud-based
            architectures
          </span>
          , I specialize in building scalable, secure, and user-friendly
          platforms.
        </p>
      </div>

      {/*
        BLOCO DESKTOP
        - Exibido apenas em telas md ou maiores
        - Mantém o layout original (62px, etc.)
      */}
      <div
        className="
          hidden md:flex
          flex-col-reverse md:flex-row
          items-center justify-between gap-8
          pt-[30px] px-[30px] pb-[60px]
        "
      >
        {/* Coluna Esquerda (texto) - Layout original */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-[62px] font-bold leading-none">Anderson Faé,</h1>
          <h2 className="text-[62px] font-bold leading-none text-[#FFFFFF99] whitespace-nowrap">
            Full-Stack Developer
          </h2>

          <p className="mt-[240px] text-base leading-relaxed text-gray-300 text-balance">
            Hello! I&apos;m Anderson Faé, a Full-Stack Developer with a passion
            for blockchain, Web3, and high-performance applications. With a{" "}
            <span className="text-white">
              strong foundation in JavaScript, Python, and cloud-based
              architectures
            </span>
            , I specialize in building scalable, secure, and user-friendly
            platforms.
          </p>
        </div>

        {/* Coluna Direita (imagem) */}
        <div className="flex-1 flex justify-end">
          <Image
            src="/anderson-img.png"
            alt="Foto de Anderson Faé"
            width={400}
            height={400}
            className="h-auto max-w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
