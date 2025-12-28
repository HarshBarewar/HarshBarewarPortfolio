"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    date: "September 2025 - December 2025",
    title: "Data Science and Analytics Intern",
    company: "Amdox Technologies pvt Ltd.",
    description: "Leading AI initiatives and developing machine learning solutions for enterprise clients",
    skills: ["Python", "TensorFlow", "PyTorch", "AWS"],
  },
  
   {
    date: "July 2025 - September 2025",
    title: "Zero Trust Cloud Security Virtual Internship",
    company: "All India Council for Technical Education",
    description: "Applied Zero Trust models to enhance enterprise cloud security infrastructure.",
    skills: ["Cloud Infrastructure Security", "Security Policy Design", "API Communication", "Risk Assessment"],
  },{
    date: "Janumary 2025 - March 2025",
    title: "AI-ML Virtual Internship",
    company: "All India Council for Technical Education",
    description: "Built and maintained scalable web applications using Artificial Intelligence and Machine Learning",
    skills: ["Pandas", "Numpy", "Generative-Ai", "UI/UX"],
  },
  {
    date: "October 2024 - December 2024",
    title: "Android Developer Virtual Internship",
    company: "All India Council for Technical Education",
    description: "Contributed to the development of web and mobile applications",
    skills: ["JavaScript", "React", "Firebase", "UI/UX"],
  },
]

export function ExperienceSection() {
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -left-4 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-125 transition-transform duration-300"></div>

              <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border group-hover:border-primary/50 transition-colors duration-300">
                <p className="text-sm font-semibold text-primary mb-2">{exp.date}</p>
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-muted-foreground mb-4">{exp.company}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
