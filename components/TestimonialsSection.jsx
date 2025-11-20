"use client"
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-[#152517] mb-24 tracking-tight">
          What People Are Saying
        </h2>

        {/* Testimonials */}
        <div className="space-y-32">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`
                flex flex-col md:flex-row items-center md:items-start 
                gap-10 md:gap-20
                ${i % 2 === 1 ? "md:flex-row-reverse" : ""}
              `}
            >

              {/* Image */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-md shadow-[#e3ece8]">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="max-w-xl text-center md:text-left">

                {/* Quote */}
                <p className="text-2xl md:text-3xl text-[#152517] font-semibold leading-snug mb-8">
                  “{t.quote}”
                </p>

                {/* Name + Role */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-[#152517] mb-1">
                    {t.name}
                  </h3>
                  <p className="text-[#5bb66e] text-sm font-medium">
                    {t.role}
                  </p>
                </div>

                {/* Green Divider */}
                <div className="mt-6 w-20 h-[3px] bg-[#5bb66e] rounded-full mx-auto md:mx-0" />

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
