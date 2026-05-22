"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { WHATSAPP_URL } from "@/lib/constants"

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-2xl px-4 py-2.5 border border-green-500/20 shadow-xl shadow-black/30 whitespace-nowrap"
              >
                <p className="text-white text-sm font-medium">Fale conosco</p>
                <p className="text-slate-400 text-xs">Resposta em minutos!</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            className="relative w-14 h-14 rounded-2xl bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="Falar no WhatsApp"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-2xl bg-green-500 animate-ping opacity-20" />
            <i className="bi bi-whatsapp text-white text-2xl relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

