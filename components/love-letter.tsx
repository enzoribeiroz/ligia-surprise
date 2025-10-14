import { Card } from "@/components/ui/card"

export function LoveLetter() {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">A Letter to You</h2>

            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p className="text-pretty">My dearest love,</p>

              <p className="text-pretty">
                Every day without you feels incomplete, yet every moment we share—whether through a screen or in
                person—fills my heart with joy. The distance between us is just a number, but the love I have for you is
                immeasurable.
              </p>

              <p className="text-pretty">
                You are my first thought in the morning and my last thought at night. You inspire me to be better, to
                dream bigger, and to love deeper. Thank you for being patient, understanding, and for choosing to love
                me every single day.
              </p>

              <p className="text-pretty">
                This anniversary is a celebration of us—of our strength, our commitment, and our unwavering belief that
                what we have is worth every mile, every wait, and every sacrifice.
              </p>

              <p className="text-pretty">
                I can't wait for the day when distance is no longer part of our story, but until then, know that you are
                always in my heart.
              </p>

              <p className="text-pretty font-serif text-primary text-xl mt-8">
                Forever yours,
                <br />
                [Your Name]
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
