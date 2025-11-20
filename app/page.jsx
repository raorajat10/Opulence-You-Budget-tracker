import ExperienceVideoSection from "@/components/ExperienceVideoSection";
import HeroSection from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReportSection from "@/components/ReportSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, statsData } from "@/data/landing";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f0f4f3]">

      <HeroSection />

      {/* Stats Section */}
     <section className="py-20 bg-white">
  <div className="mx-auto container px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
      {statsData.map((stats, index) => (
        <div
          key={index}
          className="
            group
            bg-white
            border border-[#e3ece8]
            rounded-3xl
            p-6
            text-center
            shadow-[0_4px_18px_rgba(0,0,0,0.04)]
            transition-all duration-300
            hover:shadow-[0_8px_26px_rgba(0,0,0,0.08)]
            hover:-translate-y-1
          "
        >
          {/* Big green number */}
          <div className="text-4xl md:text-5xl font-extrabold text-[#5bb66e] mb-1">
            {stats.value}
          </div>

          {/* Label */}
          <div className="text-[#316959] text-sm md:text-base font-medium tracking-wide">
            {stats.label}
          </div>

          {/* Subtle green glow on hover */}
          <div
            className="
              absolute inset-0 rounded-3xl pointer-events-none
              opacity-0 group-hover:opacity-10
              transition duration-300
              bg-[#5bb66e]
              blur-3xl
            "
          ></div>
        </div>
      ))}
    </div>
  </div>
</section>

<ExperienceVideoSection/>

     {/* Features */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">

    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-[#152517] tracking-tight">
  Everything you need to take control of your finances.
</h1>


    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {featuresData.map((feature, index) => (
        <Card
          key={index}
          className="
            relative p-7 rounded-3xl
            bg-white
            border border-[#e3ece8]
            shadow-[0_4px_18px_rgba(0,0,0,0.04)]
            transition-all duration-300
            hover:shadow-[0_8px_26px_rgba(0,0,0,0.08)]
            hover:-translate-y-1
          "
        >
          <CardContent className="space-y-4 pt-2">

            {/* Icon */}
            <div className="text-[#5bb66e] text-4xl">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-2xl text-[#152517]">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-[#316959] leading-relaxed">
              {feature.description}
            </p>

          </CardContent>

          {/* green soft glow on hover */}
          <div className="
            absolute inset-0 rounded-3xl
            bg-[#5bb66e] blur-3xl opacity-0
            pointer-events-none
            transition duration-300
            hover:opacity-10
          " />
        </Card>
      ))}

    </div>
  </div>
</section>

{/*how it works*/}
<HowItWorksSection />

{/* testinomials */}
<TestimonialsSection/>

<section className="pb-20 flex justify-center px-4 bg-white">
  <div
    className="
      w-full max-w-5xl 
      bg-[#152517] 
      rounded-[40px] 
      text-center 
      py-20 px-6 
      shadow-xl 
      relative
      overflow-hidden
    "
  >
    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#5bb66e]/20 to-transparent blur-3xl"></div>

    <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight relative z-10">
      Ready to Get Started?
    </h2>

    <p className="text-white/70 mt-6 text-lg md:text-xl max-w-2xl mx-auto relative z-10">
      Join thousands using Opulence to track spending, build habits, and take control of their finances.
    </p>

<Link href='/dashboard'>
<Button
      className="
        relative z-10 mt-10 
        bg-[#5bb66e] text-white 
        px-10 py-4 
        rounded-full 
        text-lg font-semibold 
        hover:bg-[#0d5c42] 
        transition-all 
        shadow-lg shadow-[#5bb66e]/30
      "
    >
      Start A Free Trail
    </Button>
</Link>
    
  </div>
</section>


    </div>
  );
}
