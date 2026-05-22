"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { WHATSAPP_URL } from "@/lib/constants"

export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80&fit=crop&auto=format"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#07041A]/94 via-[#0D0630]/90 to-[#07041A]/94" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07041A] via-violet-950/25 to-[#07041A]" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px] animate-glow-pulse" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center shadow-2xl shadow-violet-500/30 animate-glow-pulse">
              <i className="bi bi-wind text-white text-2xl" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            <span className="text-gradient-white">Pronto para ter seu</span>
            <br />
            <span className="text-gradient">ar-condicionado</span>
            <br />
            <span className="text-gradient-white">funcionando perfeitamente?</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Fale conosco agora e receba um orcamento gratuito em minutos.
            Atendimento rapido, profissional e com garantia de qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-[1.04] transition-all duration-300 cursor-pointer min-h-[52px]"
            >
              <i className="bi bi-whatsapp text-xl text-green-400" />
              Falar no WhatsApp
              <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#contato"
              className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-2xl glass border border-violet-500/25 text-violet-300 font-semibold text-base sm:text-lg hover:border-violet-400/45 hover:bg-violet-500/10 transition-all duration-300 cursor-pointer min-h-[52px]"
            >
              <i className="bi bi-clipboard-check" />
              Solicitar Orcamento
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-slate-500 text-sm">
            {[
              { icon: "bi-shield-check", text: "30 dias de garantia" },
              { icon: "bi-lightning-charge", text: "Resposta em 24h" },
              { icon: "bi-star-fill", text: "5.0 avaliacao" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-1.5">
                <i className={`bi ${item.icon} text-violet-500`} />
                {item.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
