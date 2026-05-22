"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

const plans = [
  {
    id: "01",
    name: "Simples",
    price: "150",
    description: "Ideal para conservacao preventiva do equipamento",
    accentColor: "#22C55E",
    accentText: "text-green-400",
    accentBorder: "border-green-500/25",
    accentHoverBorder: "hover:border-green-400/50",
    accentBg: "bg-green-500/10",
    accentGlow: "hover:shadow-green-500/20",
    btnGrad: "from-green-500 to-green-600",
    btnGlow: "hover:shadow-green-500/40",
    badgeBg: "bg-green-500/10 border-green-500/25 text-green-300",
    icon: "bi-tools",
    badge: "Mais acessivel",
    services: [
      "Limpeza basica dos filtros",
      "Higienizacao superficial",
      "Testes de funcionamento",
      "Revisao de temperatura",
    ],
    cta: "Agendar manutencao simples",
    message: "Ola! Gostaria de agendar uma manutencao simples no meu ar-condicionado.",
  },
  {
    id: "02",
    name: "Completa",
    price: "250",
    description: "A escolha certa para maxima eficiencia e vida util",
    accentColor: "#F97316",
    accentText: "text-orange-400",
    accentBorder: "border-orange-500/35",
    accentHoverBorder: "hover:border-orange-400/60",
    accentBg: "bg-orange-500/10",
    accentGlow: "shadow-orange-500/20 hover:shadow-orange-500/35",
    btnGrad: "from-orange-500 to-orange-600",
    btnGlow: "hover:shadow-orange-500/50",
    badgeBg: "bg-orange-500/15 border-orange-500/30 text-orange-300",
    icon: "bi-wrench-adjustable",
    badge: "Mais popular",
    featured: true,
    services: [
      "Higienizacao profunda",
      "Limpeza da evaporadora",
      "Revisao tecnica completa",
      "Limpeza da condensadora",
      "Verificacao de gas refrigerante",
    ],
    cta: "Solicitar manutencao completa",
    message: "Ola! Quero solicitar uma manutencao completa para meu ar-condicionado.",
  },
  {
    id: "03",
    name: "Premium",
    price: "400",
    description: "Experiencia completa com garantia estendida de 60 dias",
    accentColor: "#EF4444",
    accentText: "text-red-400",
    accentBorder: "border-red-500/25",
    accentHoverBorder: "hover:border-red-400/50",
    accentBg: "bg-red-500/10",
    accentGlow: "hover:shadow-red-500/20",
    btnGrad: "from-red-500 to-red-600",
    btnGlow: "hover:shadow-red-500/40",
    badgeBg: "bg-red-500/10 border-red-500/25 text-red-300",
    icon: "bi-gem",
    badge: "Mais completo",
    services: [
      "Desmontagem completa",
      "Lavagem tecnica total",
      "Higienizacao avancada",
      "Revisao total do equipamento",
      "Recarga de gas refrigerante",
      "Garantia estendida 60 dias",
    ],
    cta: "Agendar manutencao premium",
    message: "Ola! Tenho interesse na manutencao premium completa do meu ar-condicionado.",
  },
] as const

type Plan = (typeof plans)[number]

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(plan.message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank")
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative glass-card rounded-2xl overflow-hidden border ${plan.accentBorder} ${plan.accentHoverBorder} transition-all duration-300 shadow-lg ${plan.accentGlow} ${"featured" in plan && plan.featured ? "lg:scale-[1.04] lg:-translate-y-1.5" : ""} cursor-default flex flex-col`}
    >
      {/* Top accent line */}
      <div
        className="h-[2px] w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, transparent, ${plan.accentColor}CC, transparent)` }}
      />

      {/* Large background number */}
      <div
        className="absolute -top-2 -right-1 font-heading font-black select-none pointer-events-none leading-none"
        style={{ fontSize: "100px", color: plan.accentColor, opacity: 0.04 }}
      >
        {plan.id}
      </div>

      {/* Inner glow spot */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] pointer-events-none"
        style={{ background: `${plan.accentColor}15` }}
      />

      <div className="p-4 sm:p-5 relative z-10 flex flex-col flex-1">
        {/* Badge */}
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold mb-3 ${plan.badgeBg}`}>
          <i className={`bi bi-lightning-charge ${plan.accentText} text-[10px]`} />
          {plan.badge}
        </div>

        {/* Icon + Name */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className={`w-9 h-9 rounded-xl glass border ${plan.accentBorder} flex items-center justify-center flex-shrink-0`}>
            <i className={`bi ${plan.icon} ${plan.accentText} text-base`} />
          </div>
          <div>
            <p className="text-slate-500 text-[9px] font-medium uppercase tracking-widest leading-none mb-0.5">Manutencao</p>
            <h3 className="font-heading font-bold text-lg text-white leading-tight">{plan.name}</h3>
          </div>
        </div>

        <p className="text-slate-500 text-xs leading-relaxed mb-3">{plan.description}</p>

        {/* Price */}
        <div className="mb-3">
          <div className="flex items-baseline gap-1">
            <span className="text-slate-400 text-sm font-medium leading-none">R$</span>
            <span className={`font-heading font-black leading-none ${plan.accentText}`} style={{ fontSize: "42px", lineHeight: 1 }}>
              {plan.price}
            </span>
          </div>
          <p className="text-slate-600 text-[11px] mt-1">por aparelho / por sessao</p>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-3"
          style={{ background: `linear-gradient(90deg, transparent, ${plan.accentColor}40, transparent)` }}
        />

        {/* Services — flex-1 pushes CTA to bottom */}
        <ul className="space-y-2 mb-4 flex-1">
          {plan.services.map((service) => (
            <li key={service} className="flex items-start gap-2">
              <i className={`bi bi-check-circle-fill ${plan.accentText} text-xs mt-0.5 flex-shrink-0`} />
              <span className="text-slate-300 text-xs leading-snug">{service}</span>
            </li>
          ))}
        </ul>

        {/* CTA — always at the bottom */}
        <button
          onClick={handleWhatsApp}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${plan.btnGrad} text-white font-semibold text-xs hover:shadow-lg ${plan.btnGlow} hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer min-h-[44px]`}
        >
          <i className="bi bi-whatsapp text-sm" />
          {plan.cta}
        </button>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="servicos" className="py-10 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020C1B] via-[#071A2E]/60 to-[#020C1B]" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-green-500/4 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/6 w-[400px] h-[400px] rounded-full bg-red-500/4 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 w-[600px] h-[300px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7 sm:mb-10"
        >
          <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-2">
            Planos e precos
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gradient-white mb-2">
            Escolha o plano <span className="text-gradient">ideal</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Transparencia total. Sem surpresas. Preco justo com garantia em todos os servicos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-600 text-xs mt-8"
        >
          Precos por aparelho split. Para mais de 2 aparelhos, solicite desconto especial via{" "}
          <a href="#contato" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer underline underline-offset-2">
            formulario
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
