"use client";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-neutral-900 text-white font-sans">
      <div
        className="
          flex flex-col-reverse items-center justify-between gap-8
          pt-[30px] px-[30px] pb-[60px]
          md:flex-row
        "
      >
        {/* Coluna Esquerda: Títulos e Texto */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-[62px] font-bold leading-none">Anderson Faé</h1>
          {/* Força a frase a permanecer na mesma linha */}
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

        {/* Coluna Direita: Imagem */}
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
