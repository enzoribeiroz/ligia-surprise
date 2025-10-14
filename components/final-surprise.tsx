"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import confetti from "canvas-confetti"

export function FinalSurprise() {
  const [revealed, setRevealed] = useState(false)

  const handleReveal = () => {
    setRevealed(true)

    // Confetti explosion
    const duration = 3000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0080", "#ff6b9d", "#ffc0cb"],
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff0080", "#ff6b9d", "#ffc0cb"],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }

  const playOurSong = () => {
    // Play your special song
    const audio = new Audio("/music/our-song.mp3")
    audio.play().catch(() => {
      console.log("[v0] Audio playback blocked")
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100">
      <div className="max-w-3xl w-full text-center space-y-8">
        {!revealed ? (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                <Heart className="w-16 h-16 text-white" fill="currentColor" />
              </div>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Pronta para a surpresa final?</h2>

            <Button
              onClick={handleReveal}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              Clique para abrir meu coração 💖
            </Button>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-center gap-3">
              {[...Array(7)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-8 h-8 text-rose-500 animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  fill="currentColor"
                />
              ))}
            </div>

            <h2 className="font-serif text-5xl md:text-6xl text-foreground">Feliz Aniversário, Meu Amor! 💕</h2>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              <p>
                Hoje celebramos mais um ano juntos, e mesmo com a distância entre nós, meu amor por você só cresce a
                cada dia.
              </p>

              <p>
                Você é a pessoa mais especial da minha vida, e não existe distância capaz de diminuir o que sinto por
                você.
              </p>

              <p className="text-2xl font-serif text-foreground">
                Cada momento ao seu lado (mesmo que virtual) é um presente. Você é meu presente! 🎁
              </p>

              <p>
                Mal posso esperar pelo dia em que não precisaremos mais de telas para estarmos juntos. Até lá, saiba que
                você está sempre no meu coração.
              </p>

              <p className="text-3xl font-serif text-rose-600">Eu te amo mais do que as palavras podem expressar! ❤️</p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={playOurSong}
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                🎵 Tocar nossa música
              </Button>

              <p className="text-sm text-muted-foreground">Com todo meu amor, sempre seu ❤️</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
