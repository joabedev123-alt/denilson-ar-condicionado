"use client"

import { useState } from "react"
import { motion } from "motion/react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Proprietario Residencial",
    initials: "CM",
    text: "O tecnico foi extremamente profissional e pontual. Fez a limpeza completa do meu ar e agora funciona como novo. Recomendo muito!",
    rating: 5,
    color: "from-blue-600 to-sky-400",
  },
  {
    name: "Ana Paula Silva",
    role: "Gerente Comercial",
    initials: "AP",
    text: "Chamei para manutencao preventiva dos ares do escritorio. Servico de alto nivel, rapido e com preco justo. Agora temos contrato mensal!",
    rating: 5,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Roberto Ferreira",
    role: "Dono de Clinica",
    initials: "RF",
    text: "Melhor empresa de ar-condicionado que ja contratei. Detectaram um problema que outros tecnicos nao viram. Otimo atendimento pelo WhatsApp.",
    rating: 5,
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "Fernanda Costa",
    role: "Moradora Apartamento",
    initials: "FC",
    text: "Meu ar estava com cheiro ruim e fazendo barulho. Em um dia eles limparam, recarregaram o gas e resolveram tudo. Nota 10!",
    rating: 5,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Lucas Oliveira",
    role: "Empresario",
    initials: "LO",
    text: "Atendimento impecavel e preco honesto. Fizeram a instalacao de 4 splits no meu escritorio em um dia. Equipe super competente!",
    rating: 5,
    color: "from-blue-400 to-cyan-500",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const visible = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ]

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071A2E] to-[#020C1B]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gradient-white mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Mais de 500 clientes satisfeitos. A reputacao que construimos fala por nos.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {visible.map((t, i) => (
            <motion.div
              key={`${t.name}-${current}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`glass-card rounded-2xl p-6 glow-border-hover ${
                i === 1 ? "md:scale-[1.03] glow-border" : ""
              } ${i !== 0 ? "hidden md:block" : ""}`}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <i key={si} className="bi bi-star-fill text-yellow-400 text-sm" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl glass border border-blue-500/20 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-200 cursor-pointer"
            aria-label="Anterior"
          >
            <i className="bi bi-chevron-left text-base" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "w-6 h-2 bg-blue-400" : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-xl glass border border-blue-500/20 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-200 cursor-pointer"
            aria-label="Proximo"
          >
            <i className="bi bi-chevron-right text-base" />
          </button>
        </div>
      </div>
    </section>
  )
}
