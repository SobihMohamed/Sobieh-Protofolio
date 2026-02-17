"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className={`space-y-4 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Hi, I'm <span className="text-gradient">Sobieh.</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">.NET Developer | Backend Specialist</h2>
            </div>

            <p
              className={`text-lg text-muted-foreground leading-relaxed max-w-lg ${
                isVisible ? "animate-fade-in-left animate-delay-200" : "opacity-0"
              }`}
            >
              I turn complex ideas into real, working software. With a strong foundation in .NET Backend and React Frontend, I help businesses build modern and reliable web solutions. Whether you need a complex API or a full platform, I focus on delivering quality, speed, and a great user experience.
            </p>

            <div
              className={`flex flex-wrap gap-4 ${isVisible ? "animate-fade-in-left animate-delay-400" : "opacity-0"}`}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary bg-transparent transition-all duration-300 hover:scale-105" asChild>
                <a href="https://docs.google.com/document/d/1Cin6R2tcedHSJJ86_MkNjwUatQbooCKk/edit?usp=drive_link&ouid=111389047814389243812&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className={`flex gap-6 ${isVisible ? "animate-fade-in-left animate-delay-600" : "opacity-0"}`}>
              <a
                href="https://github.com/SobihMohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sobih-mohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div
            className={`flex justify-center lg:justify-end ${
              isVisible ? "animate-fade-in-scale animate-delay-400" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-secondary border border-border image-container">
                <img src="/MyImage/its me .png" alt="Sobieh Mohamed" className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
