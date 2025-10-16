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
    message: "dia 22/01/2025 foi a primeira coisa que eu vi em você, o sorriso mais lindo da Terra!",
  },
  {
    title: "Sua voz",
    message: "'mô', 'amor', 'gatinho' ou 'posso te fazer uma pergunta?' com voz de quiança é muito gostoso de escutar",
  },
  {
    title: "Suas ideias",
    message: "nova, criativa e cheia de vida. Amo como você vê o mundo!",
  },
  {
    title: "Sua elegância",
    message: "'pessoal, vocês estão numa simulação da ONU', firme, imponente, elegante em apenas 1.56m sapato 35 - que mulher.",
  },
  {
    title: "Seu carinho",
    message: "carinho na nuca, pratinho de comida, beijinho, abraço, cafuné, cafuné, cafuné...",
  },
  {
    title: "Nosso amor",
    message: "intenso, verdadeiro, puro, leve, divertido, apaixonante. Te amo!",
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
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Razões</h2>
          <p className="text-lg text-muted-foreground">Pelas quais eu escolhi você. Top 10 coisas que eu já te falei milhares de vezes e nunca canso de repetir.</p>
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
