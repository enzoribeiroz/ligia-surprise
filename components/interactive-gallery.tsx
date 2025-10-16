"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import Image from "next/image"

interface GalleryProps {
  onNext: () => void
}

const memories = [
  {
    image: "/gal-dia-que-voce-me-conheceu.jpeg",
    caption: "1. Chorrisos",
    message: "Eu estava falando do meu coração e da minha inspiração. Quando olhei para você, lágrimas e sorrisos (chorrisos). Te escolhi ali.",
  },
  {
    image: "/gal-primeiro-encontro.jpeg",
    caption: "2. Maldita água com gás",
    message: "Não, eu não estava nervoso. O garçom que balançou antes de trazer para gerar entretenimento.",
  },
  {
    image: "/gal-os-olhos-de-crianca.jpeg",
    caption: "3. Soninho de criança",
    message: "Podia ser, mas não é sobre o circo. O primeiro abraço que você me deu e dormiu no meu peito, a gente estava passando na frente do circo (sim, o mesmo circo do Patati e Patata na radial leste). Eu senti uma paz imensa, quando senti a confiança que você me deu naquele momento. Foi mágico.",
  },
  {
    image: "/gal-esse-semaforo.jpeg",
    caption: "4. Esquina da R. Alvaro Alvim",
    message: "Farol verde, farol vermelho, freio de mão, eu só queria que o tempo parasse naquele momento. Que sensação espetacular, não queria que aquele momento acabasse. 'Diga pra mim que é real'",
  },
  {
    image: "/gal-primeiro-eu-te-amo.jpeg",
    caption: "5. Eu falei primeiro",
    message: "Eu falei primeiro, no aeroporto. O Kzen sushi tem o poder de tirar a memória das pessoas.",
  },
  {
    image: "/gal-primeira-carta.jpeg",
    caption: "6. Ridícula",
    message: "Que ridícula. Amei. Queria ler de novo pela primeira vez. Vou me abrir... você não tem noção do quão feliz fiquei, me senti completo, feliz, amado. Eu te amo.",
  },
]

export function InteractiveGallery({ onNext }: GalleryProps) {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null)

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Sob os meus olhos</h2>
          <p className="text-lg text-muted-foreground">Momentos que eu me apaixonei mais ainda por você</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {memories.map((memory, index) => (
            <Card
              key={index}
              className="cursor-pointer overflow-hidden hover:shadow-xl transition-all hover:scale-105"
              onClick={() => setSelectedMemory(index)}
            >
              <div className="aspect-square relative">
                <Image src={memory.image || "/placeholder.svg"} alt={memory.caption} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-center font-medium">{memory.caption}</p>
              </div>
            </Card>
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

      {selectedMemory !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 animate-fade-in">
          <Card className="max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6 p-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={memories[selectedMemory].image || "/placeholder.svg"}
                  alt={memories[selectedMemory].caption}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-serif text-2xl">{memories[selectedMemory].caption}</h3>
                <p className="text-lg text-muted-foreground">{memories[selectedMemory].message}</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
