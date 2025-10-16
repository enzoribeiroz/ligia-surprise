"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function ConfirmEmailPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch("/api/send-ligia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [email],
          subject: "Confirmação Misteriosa",
          firstName: email.split("@")[0],
        }),
      })

      if (!res.ok) throw new Error("Erro ao enviar o e-mail")
      setMessage("E-mail enviado. Verifique sua caixa de entrada (e o spam, por favor 🤨)...")
      setEmail("")
    } catch (err) {
      console.error(err)
      setMessage("Algo deu errado... o mistério continua. ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background glowing orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-pink-700/30 rounded-full blur-3xl"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-red-600/30 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-md bg-gray-900/70 border border-gray-700 shadow-xl backdrop-blur-md rounded-2xl p-8 z-10"
      >
        <h1 className="text-3xl font-semibold text-center text-pink-400 mb-6 tracking-wide">
          Confirme seu e-mail
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Digite seu e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-pink-600"
          />

          <Button
            type="submit"
            disabled={loading}
            className="bg-pink-700 hover:bg-pink-800 transition-colors text-white font-medium"
          >
            {loading ? "Enviando..." : "Receber o e-mail"}
          </Button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-center ${
              message.includes("enviado")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
