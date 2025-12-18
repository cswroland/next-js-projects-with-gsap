"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const HeroAnimated = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "bounce",
    }).from(
      ".hero-sub",
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.5"
    );
  });

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-zinc-900 text-white">
      <h1 className="hero-title text-6xl font-bold mb-4">Hello World</h1>
      <p className="hero-sub text-xl text-zinc-400 ">
        This content appears instantly.
      </p>
    </section>
  );
};
