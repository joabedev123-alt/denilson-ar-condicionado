"use client"

import { motion } from "motion/react"
import { WHATSAPP_URL } from "@/lib/constants"

const steps = [
  {
    number: "01",
    icon: "bi-chat-text",
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp ou formulario. Descrevemos rapidamente o problema e agendamos o melhor horario para voce.",
  },
  {
    number: "02",
    icon: "bi-calendar-check",
    title: "Agendamos a Visita",
    description: "Confirmamos o horario e enviamos um tecnico especializado ate o local com total pontualidade.",
  },
  {
    number: "03",
    icon: "bi-search",
    title: "Diagnostico e Orcamento",
    description: "O tecnico avalia o equipamento, identifica o problema e apresenta um orcamento claro e sem surpresas.",
  },
  {
    number: "04",
    icon: "bi-check2-circle",
    title: "Servico Executado",
    description: "Com sua aprovacao, executamos o servico com qualidade e entregamos o equipamento funcionando perfeitamente.",
  },
  {
    number: "05",
    icon: "bi-tools",
    title: "Instalar Ar Condicionado",
    description: "Realizamos a instalacao completa do seu aparelho com suporte, cabeamento e teste final para garantir o funcionamento perfeito.",
  },
]

export default function Process() {
  return (
    <section id="processo" className="py-10 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gradient-white mb-4">
            Processo <span className="text-gradient">simples</span> e transparente
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Do contato ao servico finalizado em poucos passos. Sem burocracia, sem surpresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl glass border border-blue-500/25 flex items-center justify-center z-10 relative">
                  <i className={`bi ${step.icon} text-blue-400 text-2xl`} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">{step.number}</span>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-base text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-10 sm:mt-14"
        >
          <div className="relative inline-flex">
            <span className="absolute inset-0 rounded-xl bg-blue-500/50 animate-ping" />
            <span className="absolute inset-0 rounded-xl bg-sky-400/25 animate-ping" style={{ animationDelay: "0.4s" }} />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer min-h-[48px]"
            >
              <i className="bi bi-whatsapp" />
              Agendar agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
