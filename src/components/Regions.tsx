"use client"

import { motion } from "motion/react"

const regions = [
  "Sao Paulo (SP)",
  "Santo Andre",
  "Sao Bernardo do Campo",
  "Sao Caetano do Sul",
  "Maua",
  "Ribeirao Pires",
  "Diadema",
  "Guarulhos",
  "Osasco",
  "Barueri",
  "Mogi das Cruzes",
  "Suzano",
]

export default function Regions() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07041A] via-[#0D0630] to-[#07041A]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">
            Area de atendimento
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gradient-white mb-3">
            Atendemos sua <span className="text-gradient">regiao</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Cobertura em toda a Grande Sao Paulo e regiao do ABC Paulista.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {regions.map((region, i) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass-card rounded-full px-5 py-2.5 border border-violet-500/15 hover:border-violet-400/35 hover:bg-violet-500/8 transition-all duration-200 cursor-default group"
            >
              <span className="flex items-center gap-2 text-slate-400 group-hover:text-violet-300 text-sm transition-colors duration-200">
                <i className="bi bi-geo-alt text-violet-500/60 group-hover:text-violet-400 text-xs transition-colors" />
                {region}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-600 text-sm mt-8"
        >
          Nao encontrou sua cidade?{" "}
          <a href="#contato" className="text-violet-400 hover:text-violet-300 transition-colors cursor-pointer underline underline-offset-2">
            Entre em contato
          </a>{" "}
          &mdash; atendemos sob consulta.
        </motion.p>
      </div>
    </section>
  )
}
