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
    image: "/couple-holding-hands.png",
    caption: "Nosso primeiro encontro",
    message: "O dia em que tudo começou... Eu sabia que você era especial desde o primeiro momento! 💕",
  },
  {
    image: "/couple-laughing.png",
    caption: "Risadas sem fim",
    message: "Você tem o dom de fazer meus dias mais felizes só de estar presente! 😊",
  },
  {
    image: "/romantic-sunset.jpg",
    caption: "Nosso pôr do sol",
    message: "Cada momento ao seu lado é mágico, mesmo que seja só por videochamada! 🌅",
  },
  {
    image: "/couple-video-call.jpg",
    caption: "Chamadas de vídeo",
    message: "A distância não diminui o amor que sinto por você. Cada chamada é um presente! 📱💖",
  },
  {
    image: "/love-letter.png",
    caption: "Mensagens de amor",
    message: "Suas mensagens iluminam meu dia e aquecem meu coração! 💌",
  },
  {
    image: "/couple-dreaming.jpg",
    caption: "Nossos sonhos",
    message: "Mal posso esperar pelo dia em que não precisaremos mais da distância! 🌟",
  },
]

export function InteractiveGallery({ onNext }: GalleryProps) {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null)

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Nossas Memórias</h2>
          <p className="text-lg text-muted-foreground">Clique em cada foto para reviver nossos momentos especiais</p>
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

            <div className="space-y-6">
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
