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
    sweetMessage: "Sim, fui eu! Te amo! ❤️",
  },
  // {
  //   question: "Qual é a nossa música?",
  //   options: ["Música 1", "Música 2", "Música 3"],
  //   correct: 0,
  //   sweetMessage: "Toda vez que ouço, penso em você! 🎵",
  // },
  // {
  //   question: "Onde foi nosso primeiro encontro?",
  //   options: ["Lugar 1", "Lugar 2", "Lugar 3"],
  //   correct: 0,
  //   sweetMessage: "Nunca vou esquecer esse dia! 🌟",
  // },
  {
    question: "Posso te fazer uma pergunta?",
    options: ["Sim?", "Pode?", "Quanto você gosta de mim?"],
    correct: 2,
    sweetMessage: "MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITO MUITOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
  },
]

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isWrong, setIsWrong] = useState(false)

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
      setIsWrong(false)
    } else {
      setIsWrong(true)
      setTimeout(() => setIsWrong(false), 600)
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
      <Card className={`max-w-2xl w-full p-8 md:p-12 shadow-2xl ${isWrong ? "animate-shake" : ""}`}>
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Pode?</h2>
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
                {selectedAnswer !== questions[currentQuestion].correct && (
                  <p className="text-4xl mb-2 animate-bounce">Não?</p>
                )}
                <p className="text-lg text-rose-600 font-medium">{questions[currentQuestion].sweetMessage}</p>
                {isLastQuestion && (
                  <p className="text-xl font-serif mt-4 text-foreground">Achei pouco, mô</p>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
