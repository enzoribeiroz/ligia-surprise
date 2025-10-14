"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div
        className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-serif text-primary text-balance">Happy Anniversary</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-serif italic">To the love of my life</p>
        </div>

        <div className="flex items-center justify-center gap-4 text-lg text-muted-foreground">
          <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
          <span>Distance means so little when you mean so much</span>
          <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
        </div>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Every mile between us is a reminder of how strong our love is. This page is a celebration of us, our journey,
          and the beautiful future we're building together.
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100vh) rotate(180deg);
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-200vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  )
}
