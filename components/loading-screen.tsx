"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onLoadingComplete, 300)
          return 100
        }
        return prev + 2
      })
    }, 60) // 3 seconds total

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Simple logo text */}
        <h1 className="text-2xl font-bold text-foreground mb-8 animate-pulse">Portfolio</h1>

        {/* Simple spinning loader */}
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />

        {/* Simple progress bar */}
        <div className="w-48 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
