"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const faqs = [
  {
    question: "Voces fazem manutencao preventiva?",
    answer: "Sim! A manutencao preventiva e um dos nossos servicos principais. Realizamos limpeza completa dos filtros, serpentinas e bandeja, verificacao de componentes eletricos, nivel de gas refrigerante e calibracao geral. Recomendamos a cada 6 meses.",
  },
  {
    question: "Trabalham com instalacao de ar-condicionado?",
    answer: "Sim, fazemos instalacao completa de aparelhos split, janela e cassete de todas as marcas. O servico inclui a passagem de tubulacao, interligacao eletrica e configuracao do equipamento para o melhor desempenho.",
  },
  {
    question: "Atendem empresas e comercio?",
    answer: "Com certeza! Temos planos de manutencao sob medida para escritorios, clinicas, restaurantes, lojas e demais estabelecimentos comerciais. Oferecemos contratos mensais, trimestrais ou semestrais com precos especiais.",
  },
  {
    question: "Quanto custa a limpeza do ar-condicionado?",
    answer: "O valor varia conforme o tipo e capacidade do equipamento (BTUs), quantidade de unidades e o estado de conservacao. Entre em contato para receber um orcamento personalizado e gratuito, sem compromisso.",
  },
  {
    question: "Voces fazem orcamento rapidamente?",
    answer: "Sim! Basta nos chamar no WhatsApp com uma foto ou descricao do problema. Em minutos analisamos e retornamos com uma estimativa. Para orcamentos presenciais, agendamos visita tecnica gratuita.",
  },
  {
    question: "Qual e a garantia dos servicos?",
    answer: "Todos os nossos servicos tem garantia de 30 dias. Se o problema retornar no periodo, voltamos sem custo adicional para verificar e solucionar. Sua satisfacao e nossa prioridade.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Duvidas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gradient-white mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-slate-400 text-base">
            Tire suas duvidas. Nao encontrou o que precisa?{" "}
            <a href="#contato" className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors underline underline-offset-2">
              Fale conosco
            </a>.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "glow-border" : "glow-border-hover"}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
                  aria-expanded={open === i}
                >
                  <span className={`font-heading font-semibold text-base transition-colors duration-200 ${open === i ? "text-blue-300" : "text-white group-hover:text-blue-200"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "border-blue-400/40 bg-blue-500/10 rotate-180" : "border-blue-500/20 group-hover:border-blue-400/30"}`}>
                    <i className="bi bi-chevron-down text-blue-400 text-sm" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 border-t border-blue-500/10">
                        <p className="text-slate-400 text-sm leading-relaxed pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
