"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface WelcomeScreenProps {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [showButton, setShowButton] = useState(false)
  const fullText = "Oi, amor… Tenho uma surpresa pra você 💌"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setShowButton(true)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])

  const handleStart = () => {
    // Play soft music (you can add audio here)
    const audio = new Audio("/music/romantic-song.mp3")
    audio.play().catch(() => {
      // Handle autoplay restrictions
      console.log("[v0] Audio autoplay blocked")
    })
    onStart()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="w-6 h-6 text-rose-400 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
              fill="currentColor"
            />
          ))}
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-foreground min-h-[120px] md:min-h-[160px]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>

        {showButton && (
          <div className="animate-fade-in">
            <Button
              onClick={handleStart}
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Começar
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
