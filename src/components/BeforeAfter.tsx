"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "motion/react"

const beforeStats = [
  { icon: "bi-exclamation-triangle-fill", label: "Eficiencia", value: "42%", sub: "comprometida" },
  { icon: "bi-slash-circle-fill", label: "Fluxo de ar", value: "Baixo", sub: "filtros bloqueados" },
  { icon: "bi-bug-fill", label: "Bacterias", value: "Alto", sub: "risco a saude" },
]

const afterStats = [
  { icon: "bi-lightning-charge-fill", label: "Eficiencia", value: "98%", sub: "restaurada" },
  { icon: "bi-wind", label: "Fluxo de ar", value: "Maximo", sub: "circulacao livre" },
  { icon: "bi-shield-fill-check", label: "Higiene", value: "100%", sub: "ar purificado" },
]

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(Math.max(pct, 4), 96))
  }, [])

  const onMouseDown = () => { isDragging.current = true }
  const onMouseUp = () => { isDragging.current = false }
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updatePos(e.clientX) }
  const onTouchMove = (e: React.TouchEvent) => { updatePos(e.touches[0].clientX) }

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020C1B] to-[#071A2E]" />
      <div className="absolute inset-0 bg-grid opacity-25" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Resultado garantido
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gradient-white mb-4">
            Antes e <span className="text-gradient">Depois</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Arraste para ver a transformacao real. Da sujeira total ao brilho e eficiencia maxima.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Slider container */}
          <div
            ref={containerRef}
            className="relative rounded-3xl overflow-hidden cursor-ew-resize select-none glow-border shadow-2xl shadow-black/50"
            style={{ aspectRatio: "16/8" }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchStart={() => { isDragging.current = true }}
            onTouchEnd={() => { isDragging.current = false }}
            onTouchMove={onTouchMove}
          >
            {/* ── AFTER (clean) — full background ── */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#040D18] via-[#061220] to-[#020A14]">
              {/* Cyan ambient glow */}
              <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-cyan-500/12 blur-[60px]" />
              <div className="absolute bottom-0 left-1/3 w-64 h-32 rounded-full bg-blue-500/8 blur-[50px]" />

              {/* AC unit — clean */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 sm:w-80">
                  {/* Unit body */}
                  <div className="relative rounded-2xl overflow-hidden border border-cyan-500/25 shadow-2xl shadow-cyan-500/10"
                    style={{ background: "linear-gradient(135deg, rgba(10,20,40,0.95), rgba(5,15,30,0.98))" }}>
                    {/* Top status bar */}
                    <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b border-cyan-500/15">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-glow-pulse" />
                        <span className="text-cyan-300 text-[10px] font-medium uppercase tracking-widest">Sistema limpo</span>
                      </div>
                      <span className="text-cyan-400 text-[10px] font-bold">22°C</span>
                    </div>
                    {/* Vents — clean */}
                    <div className="px-4 py-3 space-y-1.5">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-2 rounded-full"
                          style={{ background: `linear-gradient(90deg, rgba(6,182,212,0.3) ${i * 15}%, rgba(6,182,212,0.15), transparent)` }} />
                      ))}
                    </div>
                    {/* Air flow indicator */}
                    <div className="px-4 pb-3 flex items-center gap-2">
                      <i className="bi bi-wind text-cyan-400 text-sm" />
                      <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
                          style={{ width: "92%", boxShadow: "0 0 8px rgba(6,182,212,0.6)" }} />
                      </div>
                      <span className="text-cyan-300 text-[10px] font-bold">92%</span>
                    </div>
                  </div>

                  {/* Floating check badge */}
                  <div className="absolute -top-3 -right-3 glass rounded-xl px-2.5 py-1.5 border border-cyan-500/30 flex items-center gap-1.5">
                    <i className="bi bi-check-circle-fill text-cyan-400 text-xs" />
                    <span className="text-cyan-300 text-[10px] font-semibold">Higienizado</span>
                  </div>
                </div>
              </div>

              {/* After label */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 glass rounded-xl px-3 py-1.5 border border-cyan-500/30 flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-cyan-400 text-xs" />
                <span className="text-cyan-200 text-xs font-bold tracking-wide">DEPOIS</span>
              </div>
            </div>

            {/* ── BEFORE (dirty) — clipped ── */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#1A0A00] via-[#120700] to-[#0D0400]"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              {/* Warm dirty ambient */}
              <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-orange-900/20 blur-[60px]" />

              {/* Dust particles */}
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-amber-700/40"
                  style={{
                    width: `${2 + (i % 3)}px`,
                    height: `${2 + (i % 3)}px`,
                    left: `${(i * 17.3) % 95}%`,
                    top: `${(i * 13.7) % 90}%`,
                    opacity: 0.3 + (i % 5) * 0.1,
                  }}
                />
              ))}

              {/* AC unit — dirty */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 sm:w-80">
                  <div className="relative rounded-2xl overflow-hidden border border-orange-900/40"
                    style={{ background: "linear-gradient(135deg, rgba(30,15,5,0.96), rgba(20,10,3,0.98))" }}>
                    {/* Top status bar */}
                    <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b border-orange-900/25">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-glow-pulse" />
                        <span className="text-orange-400/80 text-[10px] font-medium uppercase tracking-widest">Atencao necessaria</span>
                      </div>
                      <i className="bi bi-exclamation-triangle text-orange-500 text-xs" />
                    </div>
                    {/* Vents — dirty */}
                    <div className="px-4 py-3 space-y-1.5">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-2 rounded-full relative overflow-hidden"
                          style={{ background: "rgba(60,30,5,0.6)" }}>
                          <div className="absolute inset-0" style={{
                            background: `repeating-linear-gradient(90deg, rgba(100,50,10,0.4) 0px, rgba(60,30,5,0.2) ${4 + i * 3}px, rgba(80,40,8,0.3) ${8 + i * 2}px)`,
                          }} />
                        </div>
                      ))}
                    </div>
                    {/* Air flow indicator */}
                    <div className="px-4 pb-3 flex items-center gap-2">
                      <i className="bi bi-slash-circle text-orange-500 text-sm" />
                      <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-orange-700 to-orange-500"
                          style={{ width: "28%" }} />
                      </div>
                      <span className="text-orange-400 text-[10px] font-bold">28%</span>
                    </div>
                  </div>

                  {/* Warning badge */}
                  <div className="absolute -top-3 -right-3 rounded-xl px-2.5 py-1.5 border border-orange-500/30 flex items-center gap-1.5"
                    style={{ background: "rgba(120,50,10,0.5)", backdropFilter: "blur(12px)" }}>
                    <i className="bi bi-exclamation-triangle-fill text-orange-400 text-xs" />
                    <span className="text-orange-300 text-[10px] font-semibold">Sujo</span>
                  </div>
                </div>
              </div>

              {/* Before label */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 rounded-xl px-3 py-1.5 border border-orange-500/30 flex items-center gap-2"
                style={{ background: "rgba(120,50,10,0.45)", backdropFilter: "blur(12px)" }}>
                <i className="bi bi-exclamation-circle-fill text-orange-400 text-xs" />
                <span className="text-orange-200 text-xs font-bold tracking-wide">ANTES</span>
              </div>
            </div>

            {/* ── Divider handle ── */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute inset-0 w-0.5 bg-white/70 left-1/2 -translate-x-1/2" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-2xl shadow-black/60 flex items-center justify-center gap-0.5">
                <i className="bi bi-chevron-left text-slate-700 text-xs" />
                <i className="bi bi-chevron-right text-slate-700 text-xs" />
              </div>
            </div>

            {/* Drag hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 glass rounded-full px-3 py-1 text-[10px] text-slate-400 border border-white/10 pointer-events-none">
              Arraste para comparar
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Before stats */}
            <div className="glass-card rounded-2xl p-4 border border-orange-500/15">
              <p className="text-orange-400 text-[10px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <i className="bi bi-exclamation-triangle-fill text-xs" />
                Antes da manutencao
              </p>
              <div className="space-y-2">
                {beforeStats.map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs flex items-center gap-1.5">
                      <i className={`bi ${s.icon} text-orange-500/60 text-xs`} />
                      {s.label}
                    </span>
                    <div className="text-right">
                      <span className="text-orange-400 text-xs font-bold">{s.value}</span>
                      <span className="text-slate-600 text-[10px] ml-1">{s.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After stats */}
            <div className="glass-card rounded-2xl p-4 border border-cyan-500/15">
              <p className="text-cyan-400 text-[10px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <i className="bi bi-check-circle-fill text-xs" />
                Apos a manutencao
              </p>
              <div className="space-y-2">
                {afterStats.map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs flex items-center gap-1.5">
                      <i className={`bi ${s.icon} text-cyan-500/60 text-xs`} />
                      {s.label}
                    </span>
                    <div className="text-right">
                      <span className="text-cyan-400 text-xs font-bold">{s.value}</span>
                      <span className="text-slate-600 text-[10px] ml-1">{s.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
