"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { WHATSAPP_URL } from "@/lib/constants"

const navLinks = [
  { label: "Servicos", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-3 left-3 right-3 z-50 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-xl shadow-black/40" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300">
              <i className="bi bi-wind text-white text-base" />
            </div>
            <span className="font-heading font-bold text-lg leading-none">
              <span className="text-white">Denilson</span>
              <span className="text-gradient"> Ar</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium cursor-pointer relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="bi bi-whatsapp text-base text-green-300" />
            WhatsApp
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors cursor-pointer p-2 -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Menu"
          >
            <i className={`bi text-2xl ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-3 right-3 z-40 glass rounded-2xl p-5 md:hidden shadow-2xl shadow-black/50"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold cursor-pointer"
              >
                <i className="bi bi-whatsapp text-green-300" />
                Falar no WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
