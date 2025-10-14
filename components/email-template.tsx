import type * as React from "react"

interface EmailTemplateProps {
  firstName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = () => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", backgroundColor: "#fef2f2" }}>
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "40px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#be123c", fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>
        💌 Uma Surpresa Especial
      </h1>
      <p style={{ color: "#374151", fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>Oi, amor!</p>
      <p style={{ color: "#374151", fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        Alguém muito especial preparou uma surpresa romântica para você. Uma página cheia de amor, memórias e carinho
        está esperando por você.
      </p>
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <a
          href={`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}`}
          style={{
            backgroundColor: "#be123c",
            color: "#ffffff",
            padding: "14px 32px",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Ver Minha Surpresa ❤️
        </a>
      </div>
      <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", marginTop: "30px", textAlign: "center" }}>
        Feito com muito amor e carinho 💕
      </p>
    </div>
  </div>
)
