"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Music, Sparkles } from "lucide-react"
import confetti from "canvas-confetti"

export function FinalSurprise() {
  const [revealed, setRevealed] = useState(false)

  const handleReveal = () => {
    setRevealed(true)

    const duration = 5000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0080", "#ff6b9d", "#ffc0cb", "#ff1493"],
        shapes: ["circle", "square"],
        scalar: 1.2,
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff0080", "#ff6b9d", "#ffc0cb", "#ff1493"],
        shapes: ["circle", "square"],
        scalar: 1.2,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 360,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#ff0080", "#ff6b9d", "#ffc0cb"],
        shapes: ["circle"],
        scalar: 1.5,
      })
    }, 500)
  }

  const playOurSong = () => {
    const audio = new Audio("/music/our-song.mp3")
    audio.play().catch(() => {
      console.log("[v0] Audio playback blocked")
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-300 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
        {!revealed ? (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-center gap-4">
              <Sparkles className="w-12 h-12 text-rose-400 animate-pulse" />
              <div className="w-40 h-40 bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 animate-ping opacity-75"></div>
                <Heart className="w-20 h-20 text-white relative z-10" fill="currentColor" />
              </div>
              <Sparkles className="w-12 h-12 text-rose-400 animate-pulse" />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-6xl text-foreground animate-bounce">
                te amo, amor
              </h2>
              <p className="text-xl text-muted-foreground">Meu coração tem algumas palavrinhas para você</p>
            </div>

            <Button
              onClick={handleReveal}
              size="lg"
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white px-16 py-10 text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 animate-pulse"
            >
              <Heart className="w-6 h-6 mr-3" fill="currentColor" />
              Abrir meu coração
              <Heart className="w-6 h-6 ml-3" fill="currentColor" />
            </Button>
          </div>
        ) : (
          <div className="space-y-10 animate-fade-in">
            <div className="flex justify-center gap-2 flex-wrap">
              {[...Array(9)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-10 h-10 text-rose-500 animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  fill="currentColor"
                />
              ))}
            </div>

            <div className="space-y-6">
              {/* <h2 className="font-serif text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 animate-pulse">
                Feliz Aniversário!
              </h2> */}
              <h3 className="font-serif text-4xl md:text-5xl text-foreground">Sobre amar você</h3>
            </div>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl space-y-6">
                <p className="text-black">
                  1 mês, 720 horas, 43.200 minutos, 2.592.000 segundos e que seja eterno
                </p>

                <div className="flex items-center justify-center gap-4 py-4">
                  {/* <Heart className="w-8 h-8 text-rose-500" fill="currentColor" /> */}
                  <Heart className="w-12 h-12 text-rose-500" fill="currentColor" />
                  {/* <Heart className="w-8 h-8 text-rose-500" fill="currentColor" /> */}
                </div>

                <p className="text-black text-justify font-bold">
                  Lígia,
                </p>

                <p className="text-muted-foreground text-justify">
                  Você é incrível na ideia, na fala, no jeito, no sorriso, no olhar, na risada, na voz, no abraço. Você faz meus dias mais leves, mais alegres, mais coloridos. Você é a razão do meu sorriso bobo, do meu coração acelerado, da minha felicidade completa.
                </p>

                <p className="text-muted-foreground text-justify">
                  Eu tento, mas é difícil mostrar pelos meus olhos, pelas minhas palavras, o quanto eu te admiro, te cuido, te zelo e te amo. Eu quero te fazer feliz, te ver sorrir, te ver brilhar. Quero ser seu porto seguro, seu melhor amigo, seu amor eterno. Pode?
                </p>

                <p className="text-muted-foreground text-justify">
                  Nós 
                </p>

                {/* <p className="text-2xl font-serif text-foreground bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                  Cada momento ao seu lado (mesmo que virtual) é um presente precioso. Você é meu maior presente! 🎁
                </p> */}

                <div className="pt-6 border-t-2 border-rose-200">
                  <p className="text-4xl font-serif text-rose-700 animate-pulse">
                    Te amo, meu amor.
                  </p>
                  <p className="text-3xl mt-4">💗</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* <Button
                onClick={playOurSong}
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-8 text-xl rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Music className="w-6 h-6 mr-3" />
                Tocar nossa música
                <Music className="w-6 h-6 ml-3" />
              </Button> */}

              <div className="space-y-2">
                <p className="text-2xl font-serif text-foreground">Com todo meu amor,</p>
                <p className="text-xl text-muted-foreground">Sempre seu, para sempre ❤️</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
