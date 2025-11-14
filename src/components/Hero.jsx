import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onOpenRegister }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-cyan-500/10" />

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-4 py-2 backdrop-blur-md shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-slate-700">Nouveau • Expérience bancaire moderne</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Fintech minimaliste, design 3D verre liquide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-4 md:mt-6 text-lg md:text-xl text-slate-700 max-w-2xl"
          >
            Un univers fluide et premium pour vos paiements et cartes digitales. Simple, rapide et sécurisé — pensé pour le web moderne.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={onOpenRegister}
              className="group relative inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:shadow-slate-900/20"
            >
              <span className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 blur transition-opacity group-hover:opacity-30" />
              <span className="relative z-10 font-semibold">Créer un compte</span>
            </button>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white/60 text-slate-800 backdrop-blur-md border border-white/50 hover:bg-white/70 transition">
              Découvrir
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
