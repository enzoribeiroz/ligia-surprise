"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { Quiz } from "@/components/quiz"
import { InteractiveGallery } from "@/components/interactive-gallery"
import { VirtualCards } from "@/components/virtual-cards"
import { StarryMode } from "@/components/starry-mode"
import { FinalSurprise } from "@/components/final-surprise"

export default function AnniversaryPage() {
  const [currentSection, setCurrentSection] = useState<"welcome" | "quiz" | "gallery" | "cards" | "starry" | "final">(
    "welcome",
  )

  return (
    <main className="min-h-screen bg-background">
      {currentSection === "welcome" && <WelcomeScreen onStart={() => setCurrentSection("quiz")} />}
      {currentSection === "quiz" && <Quiz onComplete={() => setCurrentSection("gallery")} />}
      {currentSection === "gallery" && <InteractiveGallery onNext={() => setCurrentSection("cards")} />}
      {currentSection === "cards" && <VirtualCards onNext={() => setCurrentSection("starry")} />}
      {currentSection === "starry" && <StarryMode onNext={() => setCurrentSection("final")} />}
      {currentSection === "final" && <FinalSurprise />}
    </main>
  )
}
