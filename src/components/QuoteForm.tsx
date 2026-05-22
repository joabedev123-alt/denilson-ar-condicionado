"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

const serviceOptions = [
  "Manutencao Preventiva",
  "Manutencao Corretiva",
  "Instalacao",
  "Limpeza e Higienizacao",
  "Recarga de Gas",
  "Revisao Tecnica",
  "Outro",
]

export default function QuoteForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Ola! Gostaria de solicitar um orcamento.\n\n*Nome:* ${form.name}\n*Telefone:* ${form.phone}\n*Servico:* ${form.service || "Nao informado"}\n*Mensagem:* ${form.message || "-"}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank")
  }

  const inputClass =
    "w-full bg-[#060F1E] border border-blue-500/15 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition-all duration-200"

  return (
    <section id="contato" className="py-14 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
              Orcamento gratis
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gradient-white leading-tight mb-6">
              Solicite seu
              <br />
              <span className="text-gradient">orcamento agora</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Preencha o formulario e entraremos em contato via WhatsApp em
              minutos. Orcamento rapido, transparente e sem compromisso.
            </p>

            <div className="space-y-4">
              {[
                { icon: "bi-lightning-charge", text: "Resposta em ate 24 horas" },
                { icon: "bi-shield-check", text: "Orcamento 100% gratuito" },
                { icon: "bi-whatsapp", text: "Contato direto via WhatsApp" },
                { icon: "bi-patch-check", text: "Tecnicos certificados" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <i className={`bi ${item.icon} text-blue-400 text-sm`} />
                  </div>
                  <span className="text-slate-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-4 sm:p-8 glow-border space-y-4 sm:space-y-5">
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Seu nome
                </label>
                <input
                  type="text" name="name" required value={form.name}
                  onChange={handleChange} placeholder="Joao Silva"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel" name="phone" required value={form.phone}
                  onChange={handleChange} placeholder="(11) 99999-9999"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Tipo de servico
                </label>
                <select
                  name="service" value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" className="bg-[#060F1E]">Selecione o servico</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#060F1E]">{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  rows={3} placeholder="Descreva brevemente o problema..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold text-base hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <i className="bi bi-whatsapp text-lg text-green-300" />
                Enviar via WhatsApp
                <i className="bi bi-arrow-right text-sm" />
              </button>

              <p className="text-center text-slate-600 text-xs">
                Ao enviar, voce sera redirecionado ao WhatsApp.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
