"use client"

import { useEffect, useRef, useState } from "react"

const certifications = [
  {
    id: 1,
    title: "Introduction to Jira",
    issuer: "Simple Learn",
    date: "Aug 2025",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure Certified AI Foundations",
    issuer: "Oracle",
    date: "Aug 2025",
    icon: "☁️",
  },
  {
    id: 3,
    title: "Build your own Static Website",
    issuer: "NxtWave",
    date: "Dec 2025",
    icon: "⚛️",
  },
  {
    id: 4,
    title: "Build your own Responsive Website",
    issuer: "NxtWave",
    date: "Dec 2025",
    icon: "🚀",
  },
  {
    id: 5,
    title: "Introduction to Databases",
    issuer: "NxtWave",
    date: "Dec 2025",
    icon: "🚀",
  },
  {
    id: 6,
    title: "Networking Basics",
    issuer: "Cisco",
    date: "Dec 2025",
    icon: "🚀",
  },
    {
    id: 7,
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco",
    date: "Dec 2025",
    icon: "⚛️",
  },
  {
    id: 8,
    title: "Industrial Cybersecurity Essentials",
    issuer: "Cisco",
    date: "Dec 2025",
    icon: "☁️",
  },
   {
    id: 9,
    title: "Network Support and Security",
    issuer: "Cisco",
    date: "Dec 2025",
    icon: "☁️",
  },
  {
    id: 10,
    title: "Agile Project Management",
    issuer: "Coursera",
    date: "Oct 2025",
    icon: "⚛️",
  },
  {
    id: 11,
    title: "Capstone: Applying Project Management in the Real World",
    issuer: "Google - Coursera",
    date: "Oct 2025",
    icon: "☁️",
  },{
    id: 12,
    title: "Data Collection and Processing with Python",
    issuer: "University of Michigan - Coursera",
    date: "Nov 2024",
    icon: "🤖",
  },{
    id: 13,
    title: "Data Analysis with R Programming",
    issuer: "Google - Coursera",
    date: "Apr 2025",
    icon: "🚀",
  },
  {
    id: 14,
    title: "The Power of Statistics",
    issuer: "Google - Coursera",
    date: "Oct 2025",
    icon: "🤖",
  },
  {
    id: 15,
    title: "Mobile Development and JavaScript",
    issuer: "Meta - Coursera",
    date: "Oct 2025",
    icon: "🤖",
  },
]

export function CertificationsSection() {
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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-card/50 backdrop-blur border border-border hover:border-primary/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-sm text-primary font-semibold">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
