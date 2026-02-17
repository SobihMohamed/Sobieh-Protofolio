"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <main
        className={`min-h-screen bg-background transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
