import { Card } from "@/components/ui/card"

const milestones = [
  {
    date: "First Meeting",
    title: "When Our Story Began",
    description:
      "The moment I met you, I knew my life would never be the same. Your smile lit up the room and my heart.",
  },
  {
    date: "First Date",
    title: "Our First Adventure",
    description: "Every moment with you felt like magic. Time flew by, and I never wanted it to end.",
  },
  {
    date: 'First "I Love You"',
    title: "Three Words, Eight Letters",
    description: "The day I told you I love you was the day I knew I wanted to spend forever with you.",
  },
  {
    date: "Long Distance",
    title: "Distance Made Us Stronger",
    description: "Being apart has only made me realize how much you mean to me. Every day, my love for you grows.",
  },
]

export function Timeline() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary">Our Love Story</h2>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <Card key={index} className="p-8 relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <div className="pl-6">
                <div className="text-sm text-primary font-semibold mb-2">{milestone.date}</div>
                <h3 className="text-2xl font-serif mb-3 text-foreground">{milestone.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
