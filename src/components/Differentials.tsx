"use client"

import Image from "next/image"
import { motion } from "motion/react"

const differentials = [
  { icon: "bi-lightning-charge", title: "Atendimento Rapido", description: "Sua solicitacao atendida em ate 24 horas." },
  { icon: "bi-patch-check", title: "Tecnicos Especializados", description: "Certificados e treinados nas principais marcas." },
  { icon: "bi-shield-check", title: "Garantia no Servico", description: "30 dias de garantia em todos os servicos." },
  { icon: "bi-tag", title: "Orcamento Sem Compromisso", description: "Avaliacao e orcamento 100% gratuitos." },
  { icon: "bi-whatsapp", title: "Atendimento via WhatsApp", description: "Suporte direto pelo app que voce ja usa." },
  { icon: "bi-gear", title: "Equipamentos Profissionais", description: "Ferramentas certificadas e materiais de qualidade." },
  { icon: "bi-headset", title: "Suporte Eficiente", description: "Acompanhamento do servico do inicio ao fim." },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-14 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020C1B] to-[#071A2E]" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
              Nossos diferenciais
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gradient-white leading-tight mb-6">
              Por que somos a
              <br />
              <span className="text-gradient">melhor escolha</span>
              <br />
              da regiao
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Combinamos tecnologia, expertise e comprometimento para entregar
              uma experiencia premium no cuidado do seu ar-condicionado.
              Cada detalhe importa &mdash; da primeira ligacao ao servico finalizado.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              <i className="bi bi-clipboard-check" />
              Solicitar orcamento gratis
            </a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="relative mt-8 rounded-2xl overflow-hidden h-52"
            >
              <Image
                src="https://images.unsplash.com/photo-1596495717678-69df9f89c2a3?w=800&q=80&fit=crop&auto=format"
                alt="Tecnico especializado em ar-condicionado"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B]/85 via-[#020C1B]/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="glass rounded-xl px-4 py-2.5 inline-flex items-center gap-2 border border-blue-500/25">
                  <i className="bi bi-patch-check-fill text-blue-400 text-sm" />
                  <span className="text-white text-xs font-medium">Tecnicos certificados e treinados</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group glass-card rounded-2xl p-4 glow-border-hover cursor-default flex gap-3 items-start hover:bg-blue-500/5 transition-colors duration-300 ${
                  i === differentials.length - 1 && differentials.length % 2 !== 0
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl glass border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-400/40 group-hover:bg-blue-500/10 transition-all duration-300">
                  <i className={`bi ${d.icon} text-blue-400 text-base`} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-white mb-0.5">
                    {d.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
