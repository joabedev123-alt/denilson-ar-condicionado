"use client"

import { motion } from "motion/react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

const whatsappMsg = "Ola! Gostaria de um orcamento para instalacao de ar-condicionado."

const features = [
  { icon: "bi-tools", text: "Instalacao com suporte e cabeamento" },
  { icon: "bi-shield-check", text: "Garantia de 30 dias no servico" },
  { icon: "bi-lightning-charge", text: "Agendamento em ate 24 horas" },
  { icon: "bi-patch-check", text: "Tecnicos certificados e experientes" },
]

export default function InstallCTA() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`, "_blank")
  }

  return (
    <section className="py-10 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020C1B] via-[#071A2E] to-[#020C1B]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-blue-500/20 overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1fr_auto] gap-0">
            {/* Content */}
            <div className="p-6 sm:p-10 flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-blue-700/80 text-white text-[11px] font-extrabold px-3 py-1 rounded uppercase tracking-widest mb-4">
                  <i className="bi bi-tools text-xs" />
                  Instalacao
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gradient-white mb-3 leading-tight">
                  Instale seu{" "}
                  <span className="text-gradient">Ar&#8209;Condicionado</span>
                  <br />
                  com quem entende
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                  Realizamos a instalacao completa do seu aparelho — suporte, cabeamento e teste final inclusos. Rapido, seguro e com garantia.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <i className={`bi ${f.icon} text-blue-400 text-sm`} />
                    </div>
                    <span className="text-slate-300 text-sm">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA side */}
            <div className="bg-gradient-to-b from-blue-700/20 to-blue-900/20 border-t lg:border-t-0 lg:border-l border-blue-500/15 p-6 sm:p-10 flex flex-col items-center justify-center gap-5 text-center min-w-[230px]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center shadow-xl shadow-blue-500/30">
                <i className="bi bi-wind text-white text-2xl" />
              </div>

              <div>
                <p className="text-white font-bold text-base sm:text-lg mb-1">Orcamento Gratis</p>
                <p className="text-slate-400 text-xs sm:text-sm">Sem compromisso, resposta rapida</p>
              </div>

              <div className="relative inline-flex w-full sm:w-auto">
                <span className="absolute inset-0 rounded-xl bg-blue-500/50 animate-ping" />
                <span className="absolute inset-0 rounded-xl bg-sky-400/25 animate-ping" style={{ animationDelay: "0.4s" }} />
                <button
                  onClick={handleWhatsApp}
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer min-h-[48px] whitespace-nowrap"
                >
                  <i className="bi bi-whatsapp text-green-400" />
                  Solicitar Instalacao
                </button>
              </div>

              <p className="text-slate-600 text-xs">
                Atendimento em toda a Grande SP
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
