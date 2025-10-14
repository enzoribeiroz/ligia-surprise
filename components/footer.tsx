import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-accent/30">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          <span className="text-lg text-muted-foreground">Happy Anniversary, my love</span>
          <Heart className="w-6 h-6 text-primary" fill="currentColor" />
        </div>
        <p className="text-sm text-muted-foreground">Made with endless love • {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
