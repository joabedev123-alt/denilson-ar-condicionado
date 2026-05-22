"use client"

import Image from "next/image"
import { motion, type Variants } from "motion/react"
import { WHATSAPP_URL } from "@/lib/constants"

const stats = [
  { value: "500+", label: "Clientes atendidos" },
  { value: "10+", label: "Anos de experiencia" },
  { value: "100%", label: "Satisfacao garantida" },
  { value: "24h", label: "Tempo de resposta" },
]

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 4.3) % 100}%`,
  size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
  duration: 10 + (i % 8) * 1.5,
  delay: (i % 10) * 0.8,
  color: i % 3 === 0 ? "#A78BFA" : i % 3 === 1 ? "#22D3EE" : "#818CF8",
  opacity: 0.4 + (i % 4) * 0.15,
}))

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07041A]">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop&auto=format"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Cinematic dark overlay — gradient tinted violet */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07041A]/92 via-[#0D0630]/85 to-[#07041A]/92" />
        {/* Extra violet tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07041A] via-violet-950/20 to-transparent" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial neon glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-violet-700/10 blur-[130px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] rounded-full bg-indigo-600/8 blur-[80px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-particle"
            style={{
              left: p.left,
              bottom: "-4px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              boxShadow: `0 0 6px ${p.color}`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/25 text-violet-300 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-glow-pulse" />
              Tecnicos especializados disponiveis
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-gradient-white">Seu Ar-Condicionado</span>
              <br />
              <span className="text-gradient">Funcionando</span>
              <br />
              <span className="text-gradient-white">Como Novo.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Manutencao, limpeza e instalacao profissional com atendimento rapido
              e garantia de qualidade. Seu conforto e nossa prioridade.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contato"
                className="group flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold text-base hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <i className="bi bi-clipboard-check text-lg" />
                Solicitar Orcamento
                <i className="bi bi-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl glass border border-violet-500/25 text-violet-200 font-semibold text-base hover:border-violet-400/45 hover:bg-violet-500/10 transition-all duration-300 cursor-pointer"
              >
                <i className="bi bi-whatsapp text-lg text-green-400" />
                Falar no WhatsApp
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl font-heading font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — AC visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Outer glow rings */}
            <div className="absolute w-96 h-96 rounded-full border border-violet-500/15 animate-spin-slow" />
            <div className="absolute w-80 h-80 rounded-full border border-cyan-500/10" style={{ animation: "spin-slow 14s linear infinite reverse" }} />
            <div className="absolute w-64 h-64 rounded-full bg-violet-700/8 blur-[40px] animate-glow-pulse" />

            {/* AC unit card */}
            <div className="relative w-80 animate-float">
              <div className="glass rounded-3xl p-6 glow-border shadow-2xl shadow-violet-500/15">
                {/* Unit header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-violet-400 font-medium uppercase tracking-widest animate-neon">
                    Ar Condicionado
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-glow-pulse" />
                </div>

                {/* Display panel */}
                <div className="bg-[#0A0525] rounded-2xl p-5 mb-4 border border-violet-500/15 text-center">
                  <div className="text-5xl font-heading font-bold text-gradient mb-1">22&deg;C</div>
                  <div className="text-slate-500 text-xs">Temperatura configurada</div>
                  <div className="flex justify-center gap-1 mt-3">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full"
                        style={{
                          height: `${8 + Math.abs(Math.sin(i * 0.9)) * 12}px`,
                          background: `linear-gradient(to top, #7C3AED, #22D3EE)`,
                          opacity: 0.7,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: "bi-wind", label: "Ventilacao" },
                    { icon: "bi-snow", label: "Resfriamento" },
                    { icon: "bi-thermometer-sun", label: "Aquecimento" },
                  ].map((ctrl) => (
                    <div
                      key={ctrl.label}
                      className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-violet-500/8 border border-violet-500/15 hover:bg-violet-500/15 transition-colors cursor-pointer"
                    >
                      <i className={`bi ${ctrl.icon} text-violet-400 text-lg`} />
                      <span className="text-[10px] text-slate-500">{ctrl.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-14 top-8 glass rounded-2xl px-3 py-2 flex items-center gap-2 border border-green-500/20"
              >
                <i className="bi bi-shield-check text-green-400 text-base" />
                <span className="text-xs text-slate-300 whitespace-nowrap">Garantia incluida</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -right-12 bottom-16 glass rounded-2xl px-3 py-2 flex items-center gap-2 border border-violet-500/25"
              >
                <i className="bi bi-lightning-charge text-violet-400 text-base" />
                <span className="text-xs text-slate-300 whitespace-nowrap">Resposta rapida</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-3 py-2 flex items-center gap-2 border border-cyan-500/20"
              >
                <i className="bi bi-star-fill text-yellow-400 text-xs" />
                <span className="text-xs text-slate-300 whitespace-nowrap">5.0 avaliacao</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07041A] to-transparent" />
    </section>
  )
}
