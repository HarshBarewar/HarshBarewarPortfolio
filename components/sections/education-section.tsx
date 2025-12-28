"use client"

import { useEffect, useRef, useState } from "react"

const education = [
  {
    date: "2023 - 2027",
    title: "Bachelor of Technology in Computer Science and Engineering( Artificial Intelligence and Machine Learning )",
    institution: "Shri Ramdeobaba College of Engineering and Management , Nagpur",
    description: "Focused on software engineering, data structures, algorithms, and artificial intelligence. Maintained excellent academic performance while participating in various technical projects and competitions.",
    subjects: ["Data Structures", "Algorithms", "Machine Learning", "Database Systems", "Software Engineering", "Computer Networks"]
  },
  {
    date: "2020 - 2022",
    title: "Higher Secondary Certificate (HSC)",
    institution: "S. S. N. High School and Junior College, Gondia",
    description: "Completed higher secondary education with focus on Science stream including Physics, Chemistry, and Mathematics.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  },
  {
    date: "2019 - 2020",
    title: "Secondary School Certificate (SSC)",
    institution: "Hyacinths' Little Flower High School, Lakhani",
    description: "Completed secondary education with strong foundation in core subjects and early exposure to computer science.",
    subjects: ["Mathematics", "Science", "English", "Social Studies"]
  }
]

export function EducationSection() {
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -left-4 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-125 transition-transform duration-300"></div>

              <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border group-hover:border-primary/50 transition-colors duration-300">
                <p className="text-sm font-semibold text-primary mb-2">{edu.date}</p>
                <h3 className="text-2xl font-bold mb-2">{edu.title}</h3>
                <p className="text-muted-foreground mb-4">{edu.institution}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((subject, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {subject}
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