"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

interface StarryModeProps {
  onNext: () => void
}

export function StarryMode({ onNext }: StarryModeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = []

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.02,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.opacity += star.speed
        if (star.opacity > 1 || star.opacity < 0) {
          star.speed = -star.speed
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a1e]">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-white">
        <div className="max-w-2xl text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl animate-fade-in">Olhe pro céu agora</h2>

          <p className="text-xl md:text-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Vê essa estrela? ⭐
          </p>

          <p className="text-2xl md:text-3xl font-serif animate-fade-in" style={{ animationDelay: "1s" }}>
            É o meu amor brilhando pra você.
          </p>

          <p className="text-lg md:text-xl text-gray-300 animate-fade-in" style={{ animationDelay: "1.5s" }}>
            Não importa a distância entre nós, estamos sempre sob o mesmo céu, conectados pelo amor que compartilhamos.
            💫
          </p>

          <div className="animate-fade-in" style={{ animationDelay: "2s" }}>
            <Button
              onClick={onNext}
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
