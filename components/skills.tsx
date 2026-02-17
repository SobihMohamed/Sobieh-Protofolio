"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Shield, Palette, GitBranch, LayoutDashboard } from "lucide-react"

const skillCategories = [
  {
    title: "Backend Engineering",
    icon: <Code className="w-6 h-6" />,
    color: "from-emerald-600 to-green-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    priority: "high",
    skills: ["C#", ".NET 10 / 8", "ASP.NET Core", "Web API", "MVC", "LINQ", "SignalR", "Background Services"],
  },
  {
    title: "Architecture & Patterns",
    icon: <LayoutDashboard className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    priority: "high",
    skills: [
      "Clean Architecture",
      "Onion Architecture",
      "SOLID Principles",
      "CQRS",
      "Design Patterns",
      "Repository Pattern",
      "Dependency Injection",
      "Microservices",
    ],
  },
  {
    title: "Database & Performance",
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    priority: "normal",
    skills: [
      "SQL Server",
      "Entity Framework Core",
      "Redis (Caching)",
      "PostgreSQL",
      "Database Optimization",
      "MySQL",
      "Code/DB First",
    ],
  },
  {
    title: "Security & DevOps",
    icon: <Shield className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    priority: "normal",
    skills: [
      "Docker",
      "Git & GitHub",
      "CI/CD Basics",
      "JWT Auth",
      "OAuth2",
      "IdentityServer",
      "Role-Based Access (RBAC)",
    ],
  },
  {
    title: "Frontend Development",
    icon: <Palette className="w-6 h-6" />,
    color: "from-slate-500 to-gray-500",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-500/20",
    priority: "secondary",
    skills: ["React.js", "TypeScript", "Next.js", "Material UI", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3"],
  },
  {
    title: "Analysis & Workflow",
    icon: <GitBranch className="w-6 h-6" />,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    priority: "normal",
    skills: [
      "System Analysis",
      "UML & ERD",
      "Agile / Scrum",
      "Team Leadership",
      "Problem Solving",
      "Requirement Gathering",
      "Postman",
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical expertise spanning backend architecture, database optimization, and full-stack
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                category.priority === "high"
                  ? `${category.bgColor} border-2 ${category.borderColor} shadow-lg hover:shadow-xl`
                  : `bg-card border ${category.borderColor} hover:shadow-lg`
              } ${isVisible ? `animate-fade-in-up animate-delay-${(categoryIndex + 1) * 150}` : "opacity-0"}`}
            >
              {category.priority === "high" && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Core Strength
                  </span>
                </div>
              )}

              <div className={`bg-gradient-to-r ${category.color} rounded-xl p-4 mb-6 text-white shadow-md`}>
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-2 bg-secondary/50 hover:bg-secondary text-foreground text-sm rounded-lg border border-border/50 transition-all duration-200 hover:scale-105 ${
                      isVisible ? `animate-fade-in animate-delay-${categoryIndex * 150 + skillIndex * 50}` : "opacity-0"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground text-center">
                  {category.skills.length} skill{category.skills.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
