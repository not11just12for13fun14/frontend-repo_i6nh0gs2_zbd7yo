import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RegisterModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For demo only: normally we'd call backend here
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />

          {/* Glass morphic card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-2xl border border-white/40 bg-white/20 p-6 backdrop-blur-2xl shadow-2xl"
          >
            {/* Frosted internal shine */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-white/40 opacity-60" />

            {/* Decorative liquid highlight */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-400/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-purple-500/30 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/30 px-3 py-1 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-slate-700">Inscription sécurisée</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Créer votre compte
              </h3>
              <p className="mt-1 text-sm text-slate-700">
                Rejoignez l'expérience bancaire moderne en quelques secondes.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/50 bg-white/60 px-4 py-2.5 text-slate-900 placeholder-slate-500 outline-none backdrop-blur-md focus:ring-2 focus:ring-blue-500/30"
                    placeholder="Ex: Alex Martin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/50 bg-white/60 px-4 py-2.5 text-slate-900 placeholder-slate-500 outline-none backdrop-blur-md focus:ring-2 focus:ring-blue-500/30"
                    placeholder="vous@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/50 bg-white/60 px-4 py-2.5 text-slate-900 placeholder-slate-500 outline-none backdrop-blur-md focus:ring-2 focus:ring-blue-500/30"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full rounded-xl bg-slate-900 py-3 text-white font-semibold shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 blur transition-opacity group-hover:opacity-30" />
                  <span className="relative z-10">S'enregistrer</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full text-slate-700 hover:text-slate-900 text-sm mt-1"
                >
                  Annuler
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
