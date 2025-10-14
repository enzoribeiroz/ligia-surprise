"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Calendar, Heart, MapPin } from "lucide-react"

export function DistanceCounter() {
  // Update this date to your actual anniversary date
  const anniversaryDate = new Date("2024-01-01") // Change this to your relationship start date
  const [stats, setStats] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = now.getTime() - anniversaryDate.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

      setStats({ days, hours, minutes })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-primary">Our Journey Together</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 text-center space-y-4 bg-card/80 backdrop-blur">
            <Calendar className="w-12 h-12 mx-auto text-primary" />
            <div>
              <div className="text-5xl font-bold text-primary">{stats.days}</div>
              <div className="text-muted-foreground mt-2">Days Together</div>
            </div>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card/80 backdrop-blur">
            <Heart className="w-12 h-12 mx-auto text-primary animate-pulse" fill="currentColor" />
            <div>
              <div className="text-5xl font-bold text-primary">∞</div>
              <div className="text-muted-foreground mt-2">Reasons I Love You</div>
            </div>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card/80 backdrop-blur">
            <MapPin className="w-12 h-12 mx-auto text-primary" />
            <div>
              <div className="text-5xl font-bold text-primary">0</div>
              <div className="text-muted-foreground mt-2">Miles in My Heart</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
