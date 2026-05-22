import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Denilson Ar Condicionado | Manutenção, Instalação e Limpeza",
  description:
    "Manutenção preventiva, instalação e limpeza profissional de ar-condicionado. Atendimento rápido, técnicos especializados e garantia de qualidade. Solicite orçamento!",
  keywords: [
    "ar condicionado",
    "manutenção ar condicionado",
    "instalação ar condicionado",
    "limpeza ar condicionado",
    "recarga de gás",
    "higienização ar condicionado",
  ],
  openGraph: {
    title: "Denilson Ar Condicionado | Serviço Premium",
    description:
      "Seu ar-condicionado funcionando como novo. Manutenção profissional com garantia de qualidade.",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050C18] text-[#EFF6FF] overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
