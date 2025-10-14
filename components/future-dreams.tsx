import { Card } from "@/components/ui/card"
import { Home, Plane, Heart, Sparkles } from "lucide-react"

const dreams = [
  {
    icon: Home,
    title: "Living Together",
    description: "Waking up next to you every morning, building our home together",
  },
  {
    icon: Plane,
    title: "Adventures Await",
    description: "Exploring the world hand in hand, creating memories in every corner",
  },
  {
    icon: Heart,
    title: "Growing Old Together",
    description: "A lifetime of love, laughter, and endless moments by your side",
  },
  {
    icon: Sparkles,
    title: "Our Forever",
    description: "Every dream, every plan, every tomorrow—all with you",
  },
]

export function FutureDreams() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary">Our Future Together</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {dreams.map((dream, index) => {
            const Icon = dream.icon
            return (
              <Card key={index} className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-serif text-foreground">{dream.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{dream.description}</p>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 p-8 md:p-12 text-center bg-primary text-primary-foreground">
          <p className="text-2xl md:text-3xl font-serif text-balance leading-relaxed">
            "Distance is temporary, but our love is forever. I can't wait to spend the rest of my life with you."
          </p>
        </Card>
      </div>
    </section>
  )
}
