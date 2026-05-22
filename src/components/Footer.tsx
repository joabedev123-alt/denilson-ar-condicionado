import { WHATSAPP_URL, PHONE, EMAIL } from "@/lib/constants"

const links = [
  { label: "Servicos", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

const services = [
  "Manutencao Preventiva",
  "Manutencao Corretiva",
  "Instalacao",
  "Limpeza e Higienizacao",
  "Recarga de Gas",
  "Atendimento Comercial",
]

export default function Footer() {
  return (
    <footer className="relative border-t border-violet-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07041A] to-[#030610]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center">
                <i className="bi bi-wind text-white text-base" />
              </div>
              <span className="font-heading font-bold text-lg">
                <span className="text-white">Denilson</span>
                <span className="text-gradient"> Ar</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Manutencao, instalacao e limpeza profissional de ar-condicionado
              com qualidade premium e garantia em todos os servicos.
            </p>
            <div className="flex gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-violet-500/20 flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400/30 transition-all duration-200 cursor-pointer"
                aria-label="WhatsApp">
                <i className="bi bi-whatsapp text-base" />
              </a>
              <a href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="w-9 h-9 rounded-xl glass border border-violet-500/20 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-400/30 transition-all duration-200 cursor-pointer"
                aria-label="Telefone">
                <i className="bi bi-telephone text-base" />
              </a>
              <a href={`mailto:${EMAIL}`}
                className="w-9 h-9 rounded-xl glass border border-violet-500/20 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-400/30 transition-all duration-200 cursor-pointer"
                aria-label="E-mail">
                <i className="bi bi-envelope text-base" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navegacao
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-200 cursor-pointer flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2 h-px bg-violet-400 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Servicos
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicos"
                    className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-200 cursor-pointer flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2 h-px bg-violet-400 transition-all duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-500 hover:text-green-400 text-sm transition-colors duration-200 cursor-pointer">
                <i className="bi bi-whatsapp text-green-500 text-base" />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-slate-500 hover:text-violet-400 text-sm transition-colors duration-200 cursor-pointer">
                <i className="bi bi-envelope text-violet-500 text-base" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2.5 text-slate-500 text-sm">
                <i className="bi bi-geo-alt text-violet-500 text-base mt-0.5" />
                <span>Grande Sao Paulo e ABC Paulista</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-500 text-sm">
                <i className="bi bi-clock text-violet-500 text-base" />
                <span>Seg&ndash;Sab: 8h as 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-violet-500/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Denilson Ar Condicionado. Todos os direitos reservados.
          </p>
          <p className="text-slate-700 text-xs">
            Desenvolvido com{" "}
            <span className="text-violet-600">Next.js</span> &amp;{" "}
            <span className="text-violet-600">TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
