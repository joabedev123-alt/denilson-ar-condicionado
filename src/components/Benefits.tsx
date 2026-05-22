"use client"

import { motion } from "motion/react"

const benefits = [
  {
    icon: "bi-lightning-charge",
    title: "Atendimento Rapido",
    description: "Resposta em ate 24 horas. Priorizamos urgencias para que voce nao fique sem conforto.",
    color: "from-violet-600 to-violet-700",
  },
  {
    icon: "bi-patch-check",
    title: "Tecnicos Certificados",
    description: "Profissionais treinados, com anos de experiencia em todas as marcas do mercado.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: "bi-shield-check",
    title: "Garantia no Servico",
    description: "Todos os servicos com garantia de 30 dias. Qualidade que voce pode confiar.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: "bi-chat-dots",
    title: "Orcamento Gratis",
    description: "Solicite seu orcamento sem compromisso direto pelo WhatsApp. Rapido e facil.",
    color: "from-cyan-500 to-indigo-500",
  },
]

export default function Benefits() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07041A] via-[#0D0630] to-[#07041A]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">
            Por que nos escolher
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gradient-white">
            Beneficios que fazem
            <br />
            <span className="text-gradient">a diferenca</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-6 glow-border-hover cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <i className={`bi ${b.icon} text-white text-xl`} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">
                {b.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
