"use client";

import { useEffect, useRef } from "react";

export default function ExperienceVideoSection() {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.22;
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${offset}px)`;
        textRef.current.style.opacity = `${1 - window.scrollY / 900}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 py-10">
      <div
        className="
          relative w-full 
          rounded-[30px] md:rounded-[40px] 
          overflow-hidden shadow-xl
          
          h-[55vh]      /* mobile */
          sm:h-[60vh]   /* small mobile / big phones */
          md:h-[70vh]   /* tablets */
          lg:h-[80vh]   /* laptops */
          xl:h-[90vh]   /* desktops */
          2xl:h-[95vh]  /* large displays */
        "
      >

        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60"></div>

        {/* Parallax text */}
        <div
          ref={textRef}
          className="
            absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            text-center px-4 md:px-6
            transition-all duration-300
          "
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
            Experience Finance Like Never Before
          </h2>

          <p className="text-white/80 mt-4 md:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light drop-shadow">
            A smooth, intelligent, and beautifully designed way to understand your spending.
          </p>
        </div>

      </div>
    </section>
  );
}
