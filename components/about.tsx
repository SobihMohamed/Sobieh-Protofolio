"use client"

import { useEffect, useRef, useState } from "react"
import { Download, MapPin, Calendar, Globe, Award, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
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
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Building scalable systems with Clean Architecture principles at the core
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main content card */}
            <div className={`lg:col-span-2 ${isVisible ? "animate-fade-in-left animate-delay-200" : "opacity-0"}`}>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Coffee className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">My Story</h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My passion lies in understanding how large-scale systems work and what makes them resilient. I don't just write code—I architect solutions. My focus is always on building systems with performance, maintainability, and scalability in mind, ensuring that every line serves a purpose.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I specialize in bridging the gap between complex business needs and technical implementation. My focus is on the core business logic, ensuring that every solution I build is not only functional but also scalable, secure, and maintainable for the long term. I believe that great software is built on solid foundations.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Currently pursuing a Bachelor's degree in Computer Science, specializing in Information Systems (3rd Year). As a proactive learner and collaborative team player, I continuously adapt to new technologies and best practices. I'm ready to bring my technical expertise, problem-solving mindset, and commitment to quality to a professional team that values engineering excellence.
                  </p>

                  <div className="pt-6">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105" asChild>
                      <a href="https://docs.google.com/document/d/1Cin6R2tcedHSJJ86_MkNjwUatQbooCKk/edit?usp=drive_link&ouid=111389047814389243812&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and info sidebar */}
            <div className={`space-y-6 ${isVisible ? "animate-fade-in-right animate-delay-400" : "opacity-0"}`}>
              {/* Quick stats */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Experience
                    </span>
                    <span className="text-foreground font-semibold">2+ Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Location
                    </span>
                    <span className="text-foreground font-semibold">Cairo, Egypt</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Languages
                    </span>
                    <span className="text-foreground font-semibold">Arabic, English</span>
                  </div>
                </div>
              </div>

              {/* Availability status */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-6">
                <div className="text-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse"></div>
                  <h4 className="font-semibold text-foreground mb-2">Available for Work</h4>
                  <p className="text-sm text-muted-foreground">Open for Full-time & Freelance</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Clients</div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
