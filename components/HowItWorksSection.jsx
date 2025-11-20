"use client";

import { howItWorksData } from "@/data/landing";

export default function HowItWorksSection() {
  return (
    <section
      className="
        relative py-28 
        bg-gradient-to-b from-[#0e1b13] via-[#152517] to-[#0e1b13]
      "
    >
      {/* Soft hero glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(91,182,110,0.20),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {howItWorksData.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                  group relative
                  bg-white
                  border border-[#e3ece8]
                  rounded-3xl
                  p-10
                  shadow-[0_4px_18px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                  hover:-translate-y-1
                  transition-all duration-300
                  text-center
                "
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-[#e9f9ee] p-5 rounded-2xl shadow-sm">
                    <Icon className="h-10 w-10 text-[#5bb66e]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#152517] mb-3">
                  {step.title}
                </h3>

                <p className="text-[#316959] text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Glow */}
                <div
                  className="
                    absolute inset-0 rounded-3xl
                    bg-[#5bb66e] blur-3xl
                    opacity-0 group-hover:opacity-10
                    transition-all duration-300
                    pointer-events-none
                  "
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
