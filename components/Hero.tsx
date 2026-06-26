import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="badge mb-5">
              🚀 Offre fondateur — 10 setups offerts · 0 place prise
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight text-slate-900 mb-5">
              Le site web qui{' '}
              <span className="gradient-text">transforme vos visites</span>{' '}
              en demandes de devis
            </h1>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
              Site vitrine professionnel + formulaire de devis intelligent + CRM Notion + relances automatiques.
              Chaque prospect qualifié arrive directement chez vous.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#demo" className="btn-primary">
                Voir la démo en direct →
              </a>
              <a href="#offres" className="btn-secondary">
                Découvrir les offres
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap gap-5 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="text-green-500">✓</span> Site livré en 7 jours
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-500">✓</span> Sans engagement 12 mois
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-500">✓</span> Aucune compétence technique requise
              </div>
            </div>
          </div>

          {/* Right — mockup fiche prospect */}
          <div className="relative">
            <div className="card max-w-sm mx-auto lg:ml-auto shadow-2xl">
              {/* Header carte */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Nouveau lead</div>
                <div className="badge text-xs">🔴 Score 94/100</div>
              </div>

              {/* Infos prospect */}
              <div className="mb-4">
                <div className="font-bold text-slate-900 text-lg">Jean M.</div>
                <div className="text-sm text-slate-500">Sarreguemines · Installation PAC</div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-50 rounded-xl p-3">
                  <div className="text-xs text-slate-400 mb-1">Surface</div>
                  <div className="font-semibold text-slate-800">120 m²</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <div className="text-xs text-slate-400 mb-1">Urgence</div>
                  <div className="font-semibold text-slate-800">Sous 30 jours</div>
                </div>
              </div>

              {/* Actions automatiques */}
              <div className="border-t border-slate-100 pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                  Fiche créée dans Notion
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                  Email de confirmation envoyé
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">→</span>
                  Relance J+2 programmée
                </div>
              </div>

              {/* Notification artisan */}
              <div className="mt-4 p-3 rounded-2xl text-sm" style={{background: 'linear-gradient(135deg, #EFF6FF, #F5F3FF)'}}>
                <div className="font-semibold text-blue-800 text-xs mb-1">📩 Notification artisan</div>
                <div className="text-slate-600 text-xs">Lead CHAUD reçu · Jean M. · Sarreguemines · Rappeler maintenant</div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl" style={{background: 'linear-gradient(135deg, #2563EB, #7C3AED)'}}></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-10 blur-3xl" style={{background: '#22C55E'}}></div>
          </div>

        </div>
      </div>
    </section>
  )
}
