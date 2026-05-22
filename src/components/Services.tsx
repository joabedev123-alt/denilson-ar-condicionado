"use client"

import Image from "next/image"
import { motion } from "motion/react"

const services = [
  {
    icon: "bi-tools",
    title: "Manutencao Preventiva",
    description: "Revisao completa para prevenir falhas, aumentar a vida util e manter a eficiencia do equipamento.",
  },
  {
    icon: "bi-wrench-adjustable",
    title: "Manutencao Corretiva",
    description: "Diagnostico preciso e reparo rapido de falhas, vazamentos, ruidos e problemas de resfriamento.",
  },
  {
    icon: "bi-cpu",
    title: "Instalacao",
    description: "Instalacao profissional de ar-condicionado split, janela e cassete com perfeito funcionamento.",
  },
  {
    icon: "bi-droplet",
    title: "Limpeza e Higienizacao",
    description: "Higienizacao profunda removendo fungos, bacterias e alergenos. Ar limpo e saudavel.",
  },
  {
    icon: "bi-thermometer",
    title: "Recarga de Gas",
    description: "Recarga de gas refrigerante com materiais certificados, garantindo maxima performance.",
  },
  {
    icon: "bi-clipboard-check",
    title: "Revisao Tecnica",
    description: "Avaliacao completa do sistema para identificar desgastes e otimizar o desempenho.",
  },
  {
    icon: "bi-house",
    title: "Atendimento Residencial",
    description: "Servico especializado para residencias, apartamentos e condominios com agendamento flexivel.",
  },
  {
    icon: "bi-building",
    title: "Atendimento Comercial",
    description: "Contratos de manutencao para empresas, escritorios, clinicas e estabelecimentos comerciais.",
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-14 sm:py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fit=crop&auto=format"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#07041A]/95 via-[#0D0630]/92 to-[#07041A]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07041A] via-violet-950/30 to-[#07041A]" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">
            O que fazemos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gradient-white mb-4">
            Servicos <span className="text-gradient">completos</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Do simples ao complexo, temos solucao para todo tipo de necessidade com o seu ar-condicionado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group glass-card rounded-2xl p-5 glow-border-hover cursor-default flex flex-col gap-4 hover:bg-violet-500/5 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl glass border border-violet-500/20 flex items-center justify-center group-hover:border-violet-400/40 group-hover:bg-violet-500/10 transition-all duration-300">
                <i className={`bi ${service.icon} text-violet-400 text-xl group-hover:text-violet-300 transition-colors duration-300`} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base text-white mb-1.5 group-hover:text-violet-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href="#contato"
                  className="text-violet-400 text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer"
                >
                  Solicitar
                  <i className="bi bi-arrow-right text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
