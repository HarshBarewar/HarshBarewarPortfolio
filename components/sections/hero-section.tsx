"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollY = window.scrollY
      containerRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <div ref={containerRef} className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Avatar */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
              <Image
                src="/in.png"
                alt="Profile"
                width={190}
                height={200}
                className="w-full h-full rounded-full object-cover border-2 border-primary/50"
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 text-pretty">Harsh Barewar</h1>
          <p className="text-xl sm:text-2xl text-primary font-semibold mb-6">AI / ML Engineer & Full Stack Developer</p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Crafting intelligent solutions and beautiful interfaces. Passionate about building products that make a
            difference.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap" style={{ animationDelay: "0.2s" }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
