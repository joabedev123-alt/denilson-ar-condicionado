"use client"

import Image from "next/image"
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
]

export default function Process() {
  return (
    <section id="processo" className="py-14 sm:py-24 relative overflow-hidden">
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
            Processo <span className="text-gradient">simples</span>
            <br />e transparente
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Do contato ao servico finalizado em poucos passos. Sem burocracia, sem surpresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-14 sm:mt-20 rounded-2xl overflow-hidden h-52 sm:h-72"
        >
          <Image
            src="https://images.unsplash.com/photo-1552853160-8ec65527b252?w=1600&q=80&fit=crop&auto=format"
            alt="Instalacao e manutencao de ar-condicionado em predio"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020C1B]/88 via-[#020C1B]/45 to-transparent" />
          <div className="absolute inset-0 flex items-center px-5 sm:px-14">
            <div className="max-w-sm">
              <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-2">Servico de qualidade</p>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4 leading-tight">
                Atendimento profissional <span className="text-gradient">do inicio ao fim</span>
              </h3>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <i className="bi bi-whatsapp" />
                Agendar agora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
