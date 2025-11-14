import { useState } from 'react'
import Hero from './components/Hero'
import RegisterModal from './components/RegisterModal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-slate-900" />
            <span className="font-semibold text-slate-900">ecair — moderne</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#features" className="hover:text-slate-900">Fonctionnalités</a>
            <a href="#pricing" className="hover:text-slate-900">Tarifs</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setOpen(true)} className="rounded-xl bg-slate-900 text-white px-4 py-2 font-medium">
              S'enregistrer
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero onOpenRegister={() => setOpen(true)} />

        {/* Feature section placeholder */}
        <section id="features" className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Pensé pour la finance moderne</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">Gestion des cartes, paiements en temps réel et sécurité de niveau bancaire, dans une interface claire et élégante.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Cartes 3D", "Paiements instantanés", "Sécurité avancée"].map((title, i) => (
                <div key={i} className="rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur-xl shadow-sm">
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">Interface fluide, micro-interactions et performances de haut niveau.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section id="pricing" className="relative py-20 bg-gradient-to-b from-white to-slate-100">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Des offres simples</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">Commencez gratuitement, passez à Pro quand vous en avez besoin.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Gratuit', price: '0€', features: ['Cartes virtuelles', 'App mobile'] },
                { name: 'Pro', price: '9€', features: ['Cartes métal', 'Support prioritaire'] },
                { name: 'Enterprise', price: 'Contact', features: ['Contrats sur-mesure', 'SLA dédié'] },
              ].map((p, i) => (
                <div key={i} className="rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur-xl shadow-sm">
                  <div className="text-sm text-slate-600">{p.name}</div>
                  <div className="mt-1 text-3xl font-bold text-slate-900">{p.price}</div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {p.features.map((f, j) => (
                      <li key={j}>• {f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default App
