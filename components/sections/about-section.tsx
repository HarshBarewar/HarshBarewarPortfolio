"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">About Me</h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate developer and AI/ML engineer with a deep interest in creating elegant solutions to complex
            problems. My journey in tech started with a fascination for how things work, which evolved into a commitment
            to building products that matter.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With expertise in full-stack development, machine learning, and product design, I bridge the gap between
            cutting-edge technology and user-centric design. I believe the best solutions come from understanding both
            the technical and human aspects of a problem.
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-4">What I'm passionate about:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Building AI-powered applications that solve real problems
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Creating intuitive user experiences
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Mentoring and sharing knowledge with others
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
