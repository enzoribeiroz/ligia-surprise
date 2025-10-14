"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

const reasons = [
  "Your smile lights up my entire world",
  "The way you laugh at my silly jokes",
  "How you always know how to make me feel better",
  "Your kindness and compassion for others",
  "The way you support my dreams",
  "How you make ordinary moments extraordinary",
  "Your beautiful mind and the conversations we share",
  "The way you look at me like I'm the only person in the room",
  "How patient and understanding you are",
  "Your strength in facing challenges",
  "The little things you do to show you care",
  "How you make me want to be a better person",
  "Your infectious enthusiasm for life",
  "The way you hold my hand",
  "How you believe in us, no matter the distance",
]

export function ReasonsWhy() {
  const [currentReason, setCurrentReason] = useState(0)

  const nextReason = () => {
    setCurrentReason((prev) => (prev + 1) % reasons.length)
  }

  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-primary">Why I Love You</h2>

        <Card className="p-12 bg-card/80 backdrop-blur min-h-[300px] flex flex-col items-center justify-center space-y-8">
          <Heart className="w-16 h-16 text-primary animate-pulse" fill="currentColor" />

          <p className="text-2xl md:text-3xl font-serif text-foreground text-balance leading-relaxed">
            {reasons[currentReason]}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Reason {currentReason + 1} of {reasons.length}
            </span>
          </div>

          <Button onClick={nextReason} size="lg" className="mt-4">
            Show Me Another Reason
          </Button>
        </Card>
      </div>
    </section>
  )
}
