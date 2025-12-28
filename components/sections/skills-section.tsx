"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "CSS3", "Bootstrap"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "FastAPI", "Django", "REST APIs"]
  },
  {
    title: "AI/ML & Data Science",
    skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "OpenCV"]
  },
  {
    title: "Cloud & DevOps",
    skills: [ "Docker", "Kubernetes",  "Git", "Linux"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL",  "DynamoDB"]
  }
]

export function SkillsSection() {
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Skills</h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I have developed expertise across a wide range of technologies and tools throughout my journey as a developer and AI/ML engineer. 
            My skill set spans from frontend and backend development to machine learning and cloud technologies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm constantly learning and adapting to new technologies, believing that staying current with industry trends 
            is essential for building innovative and efficient solutions.
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-4">Technical Expertise:</h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-lg font-medium text-primary">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}