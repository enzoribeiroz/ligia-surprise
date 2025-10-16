"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Calendar, Clock, Download, Sparkles } from "lucide-react"

export default function ConvitePage() {
  const [accepted, setAccepted] = useState(false)

  const eventDetails = {
    title: "Encontro Especial com Você",
    description: "Um momento inesquecível juntos. Vista algo bonito e prepare-se para uma noite mágica!",
    location: "Nosso lugar favorito",
    startDate: "2025-03-15T19:00:00",
    endDate: "2025-03-15T23:00:00",
  }

  const addToGoogleCalendar = () => {
    const startDate = new Date(eventDetails.startDate).toISOString().replace(/-|:|\.\d\d\d/g, "")
    const endDate = new Date(eventDetails.endDate).toISOString().replace(/-|:|\.\d\d\d/g, "")

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.title,
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(
      eventDetails.location,
    )}`

    window.open(googleCalendarUrl, "_blank")
  }

  const addToAppleCalendar = () => {
    const startDate = new Date(eventDetails.startDate).toISOString().replace(/-|:|\.\d\d\d/g, "")
    const endDate = new Date(eventDetails.endDate).toISOString().replace(/-|:|\.\d\d\d/g, "")

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Convite Especial//PT
BEGIN:VEVENT
UID:${Date.now()}@convite-especial.com
DTSTAMP:${startDate}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
    const link = document.createElement("a")
    link.href = window.URL.createObjectURL(blob)
    link.download = "encontro-especial.ics"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-black to-purple-950/30" />

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          />
        ))}
      </div>

      <div className="absolute top-20 left-20 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="w-full max-w-3xl relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-rose-500/20 rounded-2xl blur-xl animate-pulse" />

          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-rose-400/50 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-400/50 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-purple-400/50 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-rose-400/50 rounded-br-2xl" />

          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-rose-400 animate-pulse absolute -top-2 -right-2" />
              <Sparkles
                className="w-4 h-4 text-purple-400 animate-pulse absolute -bottom-1 -left-1"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg shadow-rose-500/20">
              <Heart className="w-10 h-10 text-rose-400 fill-rose-400 animate-pulse" />
            </div>
          </div>

          {/* Main invitation text */}
          <div className="text-center space-y-6 relative z-10">
            <h1 className="font-serif text-5xl md:text-6xl bg-gradient-to-r from-rose-200 via-white to-purple-200 bg-clip-text text-transparent mb-4 leading-tight">
              Você está convidada
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              Para um encontro especial comigo. Quero passar um momento inesquecível ao seu lado.
            </p>

            <div className="flex items-center justify-center gap-4 py-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />
              <Heart className="w-5 h-5 text-rose-400 fill-rose-400 animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
            </div>

            <div className="space-y-6 py-8">
              <div className="flex items-center justify-center gap-4 text-white group hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Calendar className="w-6 h-6 text-rose-300" />
                </div>
                <span className="text-xl font-medium">Sexta, 17 de Outubro de 2025</span>
              </div>

              <div className="flex items-center justify-center gap-4 text-white group hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Clock className="w-6 h-6 text-purple-300" />
                </div>
                <span className="text-xl font-medium">17h 🇺🇸 | 21h 🇧🇷</span>
              </div>

              <div className="flex items-center justify-center gap-4 text-white group hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <MapPin className="w-6 h-6 text-rose-300" />
                </div>
                <span className="text-xl font-medium">Haste St 2077 🇺🇸 | Rua Eneias Bastos e Souza, 140 🇧🇷</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />
              <Heart className="w-5 h-5 text-rose-400 fill-rose-400 animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 my-8 shadow-lg">
              <p className="text-white/90 italic leading-relaxed text-lg">
                "Cada momento ao seu lado é especial, mas quero tornar este ainda mais memorável. Vista algo bonito e
                prepare-se para uma noite mágica. Mal posso esperar para ver você."
              </p>
            </div>

            {/* RSVP Button */}
            {!accepted ? (
              <Button
                size="lg"
                onClick={() => setAccepted(true)}
                className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white font-medium px-16 py-7 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-rose-500/30 border border-white/10"
              >
                Aceitar o convite
              </Button>
            ) : (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-sm border border-rose-400/30 rounded-xl p-8 shadow-lg">
                  <p className="text-rose-200 font-medium text-xl mb-6">
                    Que felicidade! Estou ansioso para nosso encontro!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={addToGoogleCalendar}
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Google Calendar
                    </Button>

                    <Button
                      onClick={addToAppleCalendar}
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Apple Calendar
                    </Button>
                  </div>
                </div>
                <p className="text-white/70 text-base">Te amo muito e mal posso esperar para estar com você</p>
              </div>
            )}
          </div>

          <div className="text-center mt-16 relative z-10">
            <p className="text-white/60 text-sm">Com todo meu amor,</p>
            <p className="text-2xl font-serif bg-gradient-to-r from-rose-200 to-purple-200 bg-clip-text text-transparent mt-2">
              Seu namorado
            </p>
          </div>
        </div>

        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-400/20 fill-rose-400/20 animate-float"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
