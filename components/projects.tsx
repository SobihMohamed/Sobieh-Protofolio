"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "EOS - Premium Streetwear Store",
    category: "Front-end - Freelance",
    description:
      "A live Freelance e-commerce platform built for a fashion brand, currently generating active sales. Features automated email order notifications and a premium, responsive UI designed with React and Material UI to drive business growth.",
    images: [
      "/Projects/FifthProject/image1.png",
      "/Projects/FifthProject/image2.png",
      "/Projects/FifthProject/image3.png",
      "/Projects/FifthProject/image4.png",
    ],
    technologies: ["React", "Material UI", "Freelance"],
    liveUrl: "https://eos-pants.vercel.app/",
    githubUrl: "https://github.com/SobihMohamed/EOS-Pants",
  },
  {
    title: "Makanak - Real Estate Marketplace",
    category: "Backend-Freelance",
    description:
      "A scalable peer-to-peer rental platform engineered with .NET 10 and Clean Architecture. Features a complex booking engine with conflict resolution, real-time notifications via SignalR, and secure payment processing, API Production.",
    images: [
      "/Projects/SixthProject/image1.png",
      "/Projects/SixthProject/image2.png",
      "/Projects/SixthProject/image3.png",
      "/Projects/SixthProject/image4.png",
      "/Projects/SixthProject/image5.png",
      "/Projects/SixthProject/image6.png",
    ],
    technologies: [".NET 10", "Clean Arch", "SignalR", "SQL Server"],
    liveUrl: "https://github.com/SobihMohamed/Makanak",
    githubUrl: "https://github.com/SobihMohamed/Makanak",
  },
  {
    title: "Markoot - E-Commerce Interface",
    category: "Frontend",
    description:
      "A modern, responsive ordering platform featuring dynamic data rendering, full cart & favorites management, and smooth animations. Built with React and Framer Motion for a seamless user experience across all devices.",
    images: [
      "/Projects/FirstProject/image1.png",
      "/Projects/FirstProject/image2.png",
      "/Projects/FirstProject/image3.png",
      "/Projects/FirstProject/image4.png",
    ],
    technologies: ["React", "Mantine", "Framer Motion", "Frontend"],
    liveUrl: "https://www.linkedin.com/posts/sobih-mohamed_react-ecommerce-webdevelopment-activity-7291144835711787009-24Hp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-c7Y8BrdI6dMpcGzie200pSjWB14VV3ks",
    githubUrl: "https://github.com/SobihMohamed",
  },
  {
    title: "Admin Dashboard - Management",
    category: "Frontend",
    description:
      "A comprehensive admin panel featuring secure token-based authentication, dynamic product/category management, and real-time database updates using a custom JSON architecture ensuring seamless data integrity.",
    images: [
      "/Projects/SecondProject/image1.png",
      "/Projects/SecondProject/image2.png",
      "/Projects/SecondProject/image3.png",
      "/Projects/SecondProject/image4.png",
      "/Projects/SecondProject/image5.png",
    ],
    technologies: ["React", "Formik", "Mantine", "Material UI"],
    liveUrl: "https://www.linkedin.com/posts/sobih-mohamed_react-webdevelopment-admindashboard-activity-7290725025467285505-qJ7Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-c7Y8BrdI6dMpcGzie200pSjWB14VV3ks",
    githubUrl: "https://github.com/SobihMohamed",
  },
  {
    title: "Hangman Game - React SPA",
    category: "Games",
    description:
      "A dynamic Single Page Application featuring complex game logic for word guessing and state tracking. Utilizes useContext for efficient global state management and Mantine for a responsive user interface optimized for performance.",
    images: [
      "/Projects/ThirdProject/image1.png",
      "/Projects/ThirdProject/image2.png",
      "/Projects/ThirdProject/image3.png",
      "/Projects/ThirdProject/image4.png",
      "/Projects/ThirdProject/image5.png",
    ],
    technologies: ["React", "useContext", "Mantine", "Game Logic"],
    liveUrl: "https://hang-mangame.vercel.app/",
    githubUrl: "https://www.linkedin.com/posts/sobih-mohamed_hangmangame-reactapp-problemsolving-activity-7268787489346056192-DNIO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-c7Y8BrdI6dMpcGzie200pSjWB14VV3ks",
  },
  {
    title: "X-O Game - Tic Tac Toe",
    category: "Games",
    description:
      "A dynamic Single Page Application featuring complex game logic for word guessing and state tracking. Utilizes useContext for efficient global state management and Mantine for a responsive user interface optimized for performance.",
    images: [
      "/Projects/FourthProject/image1.png",
      "/Projects/FourthProject/image2.png",
      "/Projects/FourthProject/image3.png",
    ],
    technologies: ["React", "Mantine", "useContext", "Game Logic"],
    liveUrl: "https://x-o-game-mocha.vercel.app/",
    githubUrl: "https://www.linkedin.com/posts/sobih-mohamed_webdevelopment-problemsolving-programminglogic-activity-7270209278009892864-dzE-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-c7Y8BrdI6dMpcGzie200pSjWB14VV3ks",
  }
]

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0]
  index: number
  isVisible: boolean
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const images = project.images

  useEffect(() => {
    if (images.length <= 1 || isHovered) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length, isHovered])

  return (
    <div
      className={`group bg-card border border-border rounded-2xl overflow-hidden card-hover-glow ${
        isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 200}` : "opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-video overflow-hidden relative group cursor-pointer bg-secondary/50">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img || "/placeholder.svg"}
              alt={`${project.title} - Image ${idx + 1}`}
              className={`w-full h-full object-contain absolute inset-0 transition-all duration-700 ease-in-out ${
                idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          ))}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    idx === currentImageIndex ? "w-6 bg-primary" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
              {project.category}
            </span>
          </div>
        </div>
      </a>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 transition-all duration-300 group-hover:text-primary">{project.title}</h3>

        <p className="text-muted-foreground mb-4 leading-relaxed transition-all duration-300">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              {project.category === "Games" ? "Play Live" : project.category === "Backend" ? "View Code" : "View Project"}
            </a>
          </Button>

          {project.category !== "Backend" && (
            <Button size="sm" variant="outline" className="border-border hover:bg-secondary bg-transparent transition-all duration-300 hover:scale-105" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {project.category === "Games" ? "Video" : "Code"}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const sectionRef = useRef<HTMLElement>(null)

  const currentProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

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
    <section ref={sectionRef} id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 transition-all duration-500 hover:w-32"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital
            experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${currentPage}`}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            disabled={currentPage === 0}
            className="border-border hover:bg-secondary bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  currentPage === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="border-border hover:bg-secondary bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
