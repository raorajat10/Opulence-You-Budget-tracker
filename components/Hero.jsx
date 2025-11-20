"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      className="
        relative overflow-hidden
        w-full
        bg-[#0c1512]
        pt-28 pb-36
        text-white
      "
    >
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1512] via-[#0f2a1f] to-[#0a1914] opacity-90"></div>

      {/* GREEN SPOTLIGHT BEHIND CARD */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px]
        bg-[#5bb66e]/20 blur-[140px] rounded-full">
      </div>

      {/* FLOATING CARD IMAGE */}
      <Image
        src="/cardshe.png"
        width={620}
        height={380}
        alt="Card"
        priority
        className="
          absolute left-1/2 top-10 
          -translate-x-1/2
          rotate-[-12deg]
          opacity-95
          drop-shadow-[0_25px_80px_rgba(5,255,150,0.35)]
          animate-floating
          pointer-events-none select-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 mt-60">
       <h1 className="text-4xl md:text-6xl lg:text-[75px] font-extrabold leading-tight">
  Smarter Expense Tracking <br />
  <span className="text-[#5bb66e]">For Everyday Life</span>
</h1>

<p className="text-[#b6b9b1] mt-6 text-lg md:text-xl max-w-2xl mx-auto">
  Automatically track your spending, create budgets, analyze patterns,
  and stay in control of your financial habits with ease.
</p>


        {/* BUTTONS */}
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/dashboard">
            <Button className="px-8 bg-white text-black font-semibold hover:bg-[#5bb66e] hover:text-white transition">
              Let’s Get Started
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button
              variant="outline"
              className="px-8 border border-white text-white hover:bg-white hover:text-black transition"
            >
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
