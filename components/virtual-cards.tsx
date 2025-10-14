"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"

interface VirtualCardsProps {
  onNext: () => void
}

const reasons = [
  {
    title: "Seu sorriso",
    message: "Seu sorriso ilumina até os meus dias mais difíceis. É a coisa mais linda que já vi! 😊",
  },
  {
    title: "Sua voz",
    message: "Adoro ouvir sua voz, mesmo que seja só por mensagem de áudio. Ela acalma meu coração! 🎵",
  },
  {
    title: "Seu jeito de ser",
    message: "Você é única, especial e perfeita do seu jeito. Não mudaria nada em você! 💖",
  },
  {
    title: "Sua força",
    message: "Admiro sua força e determinação. Você me inspira a ser uma pessoa melhor todos os dias! 💪",
  },
  {
    title: "Seu carinho",
    message: "Mesmo à distância, sinto todo o seu carinho e amor. Você cuida de mim de um jeito único! 🤗",
  },
  {
    title: "Nosso amor",
    message: "Nosso amor supera qualquer distância. Cada dia que passa, te amo ainda mais! 💕",
  },
]

export function VirtualCards({ onNext }: VirtualCardsProps) {
  const [openCards, setOpenCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    if (openCards.includes(index)) {
      setOpenCards(openCards.filter((i) => i !== index))
    } else {
      setOpenCards([...openCards, index])
    }
  }

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Cartinhas Virtuais</h2>
          <p className="text-lg text-muted-foreground">Clique em cada envelope para descobrir por que eu te amo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="h-64" style={{ perspective: "1000px" }}>
              <div
                className={`cursor-pointer w-full h-full transition-all duration-700 relative ${
                  openCards.includes(index) ? "[transform:rotateY(180deg)]" : ""
                }`}
                onClick={() => toggleCard(index)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="p-8 h-full flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-rose-100 to-pink-100">
                    <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center">
                      <Heart className="w-10 h-10 text-white" fill="currentColor" />
                    </div>
                    <h3 className="font-serif text-2xl text-center">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">Clique para abrir</p>
                  </div>
                </Card>

                <Card className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="p-8 h-full flex flex-col items-center justify-center space-y-4 bg-white">
                    <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
                    <p className="text-center text-lg leading-relaxed">{reason.message}</p>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full"
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  )
}
