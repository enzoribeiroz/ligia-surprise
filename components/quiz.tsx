"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import confetti from "canvas-confetti"

interface QuizProps {
  onComplete: () => void
}

const questions = [
  {
    question: "Quem disse 'eu te amo' primeiro?",
    options: ["Eu", "Você", "Foi ao mesmo tempo"],
    correct: 0, // Ajuste conforme sua realidade
    sweetMessage: "E foi o momento mais especial da minha vida! 💕",
  },
  {
    question: "Qual é a nossa música?",
    options: ["Música 1", "Música 2", "Música 3"],
    correct: 0,
    sweetMessage: "Toda vez que ouço, penso em você! 🎵",
  },
  {
    question: "Onde foi nosso primeiro encontro?",
    options: ["Lugar 1", "Lugar 2", "Lugar 3"],
    correct: 0,
    sweetMessage: "Nunca vou esquecer esse dia! 🌟",
  },
  {
    question: "Qual é o meu apelido carinhoso favorito pra você?",
    options: ["Amor", "Meu bem", "Princesa"],
    correct: 0,
    sweetMessage: "Você é tudo isso e muito mais! 👑",
  },
]

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === questions[currentQuestion].correct

    if (isCorrect) {
      setScore(score + 1)
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
      })
    }

    setShowMessage(true)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setShowMessage(false)
        setSelectedAnswer(null)
      } else {
        setTimeout(onComplete, 1500)
      }
    }, 2000)
  }

  const isLastQuestion = currentQuestion === questions.length - 1

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-2xl">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">O quanto você me conhece?</h2>
            <p className="text-muted-foreground">
              Pergunta {currentQuestion + 1} de {questions.length}
            </p>
          </div>

          <div className="space-y-6 mt-8">
            <h3 className="text-xl md:text-2xl text-center font-medium">{questions[currentQuestion].question}</h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showMessage}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className="w-full py-6 text-lg hover:bg-rose-100 transition-all"
                >
                  {option}
                </Button>
              ))}
            </div>

            {showMessage && (
              <div className="text-center animate-fade-in">
                <p className="text-lg text-rose-600 font-medium">{questions[currentQuestion].sweetMessage}</p>
                {isLastQuestion && (
                  <p className="text-xl font-serif mt-4 text-foreground">Você me conhece tanto quanto eu te amo! 💖</p>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
