"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Mental Health Predictor",
    description: "Intelligent chatbot powered by advanced language models with proper mental health prediction",
    tech: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
    image: "/ai-chat-interface.png",
    link: "https://github.com/Himanshu-joshi986/Mental_Health_Prediction",
  },
  {
    id: 2,
    title: "Credit Score Predictor",
    description: "Real-time analytics dashboard for predicting credit score based on user financial data",
    tech: ["Streamlit", "Machine Learning", "Supervised", "Unsupervised","Python"],
    image: "/analytics-dashboard.png",
    link: "https://github.com/HarshBarewar/Credit_Score_Predictor",
  },
  {
    id: 3,
    title: "Virtual Lab",
    description: "Online LEarning Platform for understanding DSA concepts",
    tech: ["HTML", "CSS", "Javascript", "React"],
    image: "/machine-learning-vision.jpg",
    link: "https://github.com/Harshvardhan011-k/Virtual-lab",
  },
  {
    id: 4,
    title: "Layered AI Chatbot",
    description: "Integrated modern NLP, Machine Learning, and Generative AI techniques with a scalable backend and a sleek Streamlit-based frontend.",
    tech: ["Next.js", "Stripe", "MongoDB", "AWS"],
    image: "/ecommerce-store.png",
    link: "https://github.com/HarshBarewar/Layered-AI-Chatbot.git",
  },
  
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 gap-1 transition-all duration-300">
                  View Project
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
