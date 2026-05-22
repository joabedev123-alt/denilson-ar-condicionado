"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

const services = [
  {
    id: "01",
    badge: "MANUTENCAO SIMPLES",
    title: "LIMPEZA DA\nCARENAGEM",
    subtitle: "TURBINA E SERPENTINA",
    features: [
      {
        icon: "bi-tablet-landscape",
        title: "LIMPEZA DA CARENAGEM",
        desc: "Remocao de poeira e sujeiras da parte externa e interna.",
      },
      {
        icon: "bi-fan",
        title: "LIMPEZA DA TURBINA",
        desc: "Eliminacao de impurezas que causam odores e reduzem a eficiencia.",
      },
      {
        icon: "bi-water",
        title: "LIMPEZA DA SERPENTINA",
        desc: "Melhora a troca de calor e o desempenho do seu ar-condicionado.",
      },
    ],
    price: "150,00",
    priceLabel: null,
    photo: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=85&fit=crop&auto=format",
    photoAlt: "Tecnico realizando limpeza do ar-condicionado",
    bottomItems: [
      { icon: "bi-heart-pulse", title: "MAIS SAUDE", desc: "Ar mais limpo e ambientes saudaveis." },
      { icon: "bi-lightning-charge", title: "MAIS ECONOMIA", desc: "Equipamento eficiente e menor consumo de energia." },
      { icon: "bi-clock-history", title: "MAIS DURABILIDADE", desc: "Aumenta a vida util do seu aparelho." },
    ],
    ctaDesc: "Manutencao rapida, pratica e com preco justo.",
    message: "Ola! Gostaria de agendar a Manutencao Simples - Limpeza da Carenagem, Turbina e Serpentina por apenas R$150.",
  },
  {
    id: "02",
    badge: "LIMPEZA COMPLETA",
    title: "LIMPEZA\nCOMPLETA",
    subtitle: "CUIDADO TOTAL PARA O SEU AR-CONDICIONADO",
    features: [
      {
        icon: "bi-speedometer2",
        title: "MAIS EFICIENCIA",
        desc: "Melhora o desempenho e reduz o consumo de energia.",
      },
      {
        icon: "bi-wind",
        title: "AR MAIS SAUDAVEL",
        desc: "Remove poeira, fungos e bacterias, proporcionando um ambiente mais seguro.",
      },
      {
        icon: "bi-shield-check",
        title: "MAIS DURABILIDADE",
        desc: "Limpeza completa que preserva as pecas e aumenta a vida util do aparelho.",
      },
    ],
    midBadge: {
      icon: "bi-tablet-landscape",
      title: "LIMPEZA PROFUNDA E SEGURA",
      desc: "Mais eficiencia e qualidade em cada detalhe.",
    },
    price: "250,00",
    priceLabel: "LIMPEZA COMPLETA",
    photo: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=900&q=85&fit=crop&auto=format",
    photoAlt: "Tecnico realizando limpeza profunda com equipamento especializado",
    bottomItems: [
      { icon: "bi-stars", title: "LIMPEZA PROFUNDA", desc: "Remove sujeiras e impurezas de todas as partes internas." },
      { icon: "bi-volume-mute", title: "MENOS RUIDO", desc: "Sistema mais limpo, funcionando mais silencioso." },
      { icon: "bi-wind", title: "AR MAIS PURO", desc: "Elimina agentes que causam odores e alergias." },
    ],
    ctaDesc: "Mais saude, conforto e economia para voce e sua familia.",
    message: "Ola! Gostaria de agendar a Limpeza Completa do ar-condicionado por apenas R$250.",
  },
  {
    id: "03",
    badge: "LIMPEZA TOTAL",
    title: "LIMPEZA\nTOTAL",
    subtitle: "DESMONTAMOS, LAVAMOS E DEIXAMOS COMO NOVO!",
    features: [
      {
        icon: "bi-stars",
        title: "LIMPEZA COMPLETA",
        desc: "Desmontamos o aparelho por completo e lavamos cada peca individualmente.",
      },
      {
        icon: "bi-droplet",
        title: "MAXIMA EFICIENCIA",
        desc: "Remove sujeiras, fungos e bacterias, melhora o desempenho e a qualidade do ar.",
      },
      {
        icon: "bi-shield-check",
        title: "MAIS DURABILIDADE",
        desc: "Cuida de cada detalhe e aumenta a vida util do seu ar-condicionado.",
      },
    ],
    price: "400,00",
    priceLabel: "LIMPEZA TOTAL",
    photo: "https://images.unsplash.com/photo-1552853160-8ec65527b252?w=900&q=85&fit=crop&auto=format",
    photoAlt: "Pecas de ar-condicionado desmontadas para limpeza total",
    bottomItems: [
      { icon: "bi-stars", title: "AR MAIS LIMPO", desc: "Ambiente mais saudavel para voce e sua familia." },
      { icon: "bi-piggy-bank", title: "MAIS ECONOMIA", desc: "Aparelho mais eficiente e menor consumo de energia." },
      { icon: "bi-volume-mute", title: "MENOS RUIDO", desc: "Funcionamento mais silencioso e agradavel." },
    ],
    ctaDesc: "Atendimento rapido, seguro e com preco justo.",
    message: "Ola! Gostaria de agendar a Limpeza Total do ar-condicionado por apenas R$400.",
  },
] as const

type Service = (typeof services)[number]

function ServiceBanner({ service, index }: { service: Service; index: number }) {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.message)}`, "_blank")
  }

  const hasMidBadge = "midBadge" in service && service.midBadge

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="rounded-2xl overflow-hidden border border-blue-800/25 shadow-2xl shadow-black/40"
      style={{ background: "linear-gradient(135deg, #0B1E3D 0%, #0F2548 60%, #0B1E3D 100%)" }}
    >
      {/* ── Main body ── */}
      <div className="grid md:grid-cols-[58%_42%]">

        {/* Left — text */}
        <div className="p-5 sm:p-8 flex flex-col gap-5">
          {/* Badge */}
          <span className="inline-flex items-center self-start bg-blue-700 text-white text-[11px] font-extrabold px-3 py-1 rounded uppercase tracking-widest">
            {service.badge}
          </span>

          {/* Title */}
          <div>
            <h2 className="font-heading font-black text-white leading-[1.0] mb-2"
              style={{ fontSize: "clamp(28px, 5vw, 44px)", whiteSpace: "pre-line" }}>
              {service.title}
            </h2>
            <p className="text-blue-200 font-bold text-xs sm:text-sm uppercase tracking-wide leading-snug">
              {service.subtitle}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3.5 flex-1">
            {service.features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full border-2 border-blue-400/40 bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <i className={`bi ${f.icon} text-blue-300 text-sm`} />
                </div>
                <div>
                  <p className="text-white font-extrabold text-[11px] uppercase tracking-wide leading-tight">
                    {f.title}
                  </p>
                  <p className="text-blue-200/65 text-[11px] leading-relaxed mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mid badge (only image 02) */}
          {hasMidBadge && (
            <div className="flex items-center gap-3 bg-blue-800/40 border border-blue-500/25 rounded-xl px-4 py-3">
              <div className="w-9 h-9 rounded-full border-2 border-blue-400/40 bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <i className={`bi ${service.midBadge.icon} text-blue-300 text-sm`} />
              </div>
              <div>
                <p className="text-white font-extrabold text-[11px] uppercase tracking-wide">
                  {service.midBadge.title}
                </p>
                <p className="text-blue-200/65 text-[11px] leading-tight mt-0.5">
                  {service.midBadge.desc}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right — photo + price */}
        <div className="relative min-h-[220px] md:min-h-0">
          <Image
            src={service.photo}
            alt={service.photoAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          {/* Gradient overlay from left */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #0B1E3D 0%, rgba(11,30,61,0.25) 35%, transparent 60%)" }}
          />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-24"
            style={{ background: "linear-gradient(to top, #0B1E3D 0%, transparent 100%)" }}
          />

          {/* Price box */}
          <div className="absolute bottom-4 right-4 bg-white rounded-xl px-5 py-3.5 shadow-2xl text-center min-w-[110px]">
            <p className="text-[#0B1E3D] text-[10px] font-extrabold uppercase tracking-widest mb-0.5">
              APENAS
            </p>
            <div className="flex items-baseline justify-center gap-0.5">
              <span className="text-[#0B1E3D] font-bold text-sm leading-none">R$</span>
              <span className="text-[#0B1E3D] font-black leading-none" style={{ fontSize: "34px" }}>
                {service.price}
              </span>
            </div>
            {service.priceLabel && (
              <div className="mt-2 bg-yellow-400 rounded-md px-2 py-0.5">
                <span className="text-[#0B1E3D] text-[9px] font-extrabold uppercase tracking-wide">
                  {service.priceLabel}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="border-t border-blue-900/40 px-5 sm:px-8 py-4"
        style={{ background: "rgba(6, 14, 32, 0.80)" }}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {service.bottomItems.map((item) => (
            <div key={item.title} className="flex items-start gap-2">
              <i className={`bi ${item.icon} text-blue-400 text-[15px] flex-shrink-0 mt-0.5`} />
              <div>
                <p className="text-white text-[10px] font-extrabold uppercase leading-tight">
                  {item.title}
                </p>
                <p className="text-blue-300/55 text-[10px] leading-snug mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* CTA column */}
          <button
            onClick={handleWhatsApp}
            className="flex items-start gap-2 cursor-pointer hover:opacity-80 active:opacity-60 transition-opacity text-left"
            aria-label="Agendar servico via WhatsApp"
          >
            <i className="bi bi-calendar-check text-blue-400 text-[15px] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-[10px] font-extrabold uppercase leading-tight">
                AGENDE JA A SUA!
              </p>
              <p className="text-blue-300/55 text-[10px] leading-snug mt-0.5">
                {service.ctaDesc}
              </p>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServiceBanners() {
  return (
    <section id="servicos-detalhes" className="py-10 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020C1B] via-[#071A2E]/50 to-[#020C1B]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-2">
            O que incluimos
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gradient-white mb-2">
            Detalhes de cada <span className="text-gradient">servico</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Transparencia total em cada plano. Veja exatamente o que voce recebe.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 sm:gap-6">
          {services.map((service, i) => (
            <ServiceBanner key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
