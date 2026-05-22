"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { WHATSAPP_URL } from "@/lib/constants"

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-4 pb-6 pt-3"
          style={{
            background: "linear-gradient(to top, rgba(7,4,26,0.98) 60%, transparent)",
          }}
        >
          <div className="flex gap-2.5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-sm shadow-xl shadow-green-500/30 cursor-pointer min-h-[52px]"
            >
              <i className="bi bi-whatsapp text-base" />
              WhatsApp
            </a>
            <a
              href="#contato"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold text-sm shadow-xl shadow-blue-500/30 cursor-pointer min-h-[52px]"
            >
              <i className="bi bi-clipboard-check text-base" />
              Orcamento
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
