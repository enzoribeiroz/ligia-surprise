import { Card } from "@/components/ui/card"

const memories = [
  {
    title: "Our First Photo Together",
    description: "The beginning of countless memories",
    image: "/couple-taking-first-photo-together-romantic.jpg",
  },
  {
    title: "That Perfect Sunset",
    description: "When the world felt like it was just us",
    image: "/romantic-sunset-silhouette.png",
  },
  {
    title: "Laughing Together",
    description: "You make every moment brighter",
    image: "/happy-couple-laughing.png",
  },
  {
    title: "Video Call Moments",
    description: "Distance can't dim our connection",
    image: "/couple-video-call-long-distance-love.jpg",
  },
]

export function MemoryGallery() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary">Our Favorite Moments</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={memory.image || "/placeholder.svg"}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2 text-foreground">{memory.title}</h3>
                <p className="text-muted-foreground">{memory.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 italic">
          Replace these placeholder images with your actual photos together!
        </p>
      </div>
    </section>
  )
}
