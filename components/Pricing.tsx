export default function Pricing() {
  return (
    <section id="offres" className="section" style={{background: '#F8FAFC'}}>
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Offres</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple. Transparent. <span className="gradient-text">Sans surprise.</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Deux offres selon votre situation. L'une pour démarrer, l'autre pour accélérer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Offre fondateur */}
          <div className="card border-2 border-green-200 relative">
            <div className="absolute -top-3 left-6">
              <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                🎁 Offre fondateur
              </span>
            </div>
            <div className="pt-4">
              <div className="text-sm font-semibold text-slate-500 mb-1">Métis Site</div>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-slate-900">0 €</span>
                <span className="text-slate-500 text-sm mb-1.5">setup</span>
              </div>
              <div className="text-sm text-slate-500 mb-1">
                puis <span className="font-semibold text-slate-700">49 € HT/mois</span>
              </div>
              <div className="text-xs text-slate-400 mb-5">Engagement 6 mois · 10 places seulement</div>

              <div className="space-y-2.5 mb-6">
                {[
                  'Site vitrine professionnel',
                  'SEO local optimisé',
                  'Formulaire de contact',
                  'Pages services + zones',
                  'Hébergement Vercel inclus',
                  'Domaine 1 an inclus',
                  'Maintenance automatisée',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-green-500 text-base">✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-secondary w-full justify-center">
                Réserver ma place →
              </a>
              <p className="text-center text-xs text-slate-400 mt-3">Plus que 10 places disponibles</p>
            </div>
          </div>

          {/* Flow Pro */}
          <div className="card border-0 relative lg:scale-105 shadow-2xl" style={{background: 'linear-gradient(135deg, #1e3a5f 0%, #2d1b5e 100%)'}}>
            <div className="absolute -top-3 left-6">
              <span className="px-3 py-1 text-white text-xs font-bold rounded-full" style={{background: 'linear-gradient(135deg, #2563EB, #7C3AED)'}}>
                ⭐ Recommandé
              </span>
            </div>
            <div className="pt-4">
              <div className="text-sm font-semibold text-blue-300 mb-1">Métis Flow Pro</div>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">1 990 €</span>
                <span className="text-blue-300 text-sm mb-1.5">HT setup</span>
              </div>
              <div className="text-sm text-blue-200 mb-1">
                puis <span className="font-semibold text-white">199 € HT/mois</span>
              </div>
              <div className="text-xs text-blue-300 mb-5">Engagement 6 mois</div>

              <div className="space-y-2.5 mb-6">
                {[
                  'Tout Métis Site',
                  'Formulaire de devis intelligent',
                  'Scoring leads automatique',
                  'CRM Notion complet',
                  'Notifications artisan',
                  'Relances automatiques J+2/J+5',
                  'Rapport mensuel automatisé',
                  'SEO local avancé (3 villes)',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="text-blue-300 text-base">✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <a href="#demo" className="btn-primary w-full justify-center">
                Voir la démo →
              </a>

              <div className="mt-4 p-3 rounded-2xl bg-white/10 text-center">
                <p className="text-xs text-blue-200">
                  🔄 Upgrade depuis Métis Site :{' '}
                  <span className="text-white font-semibold">990 € HT</span> (-50%)
                </p>
              </div>
            </div>
          </div>

          {/* Growth */}
          <div className="card">
            <div className="pt-2">
              <div className="text-sm font-semibold text-slate-500 mb-1">Métis Growth</div>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-slate-900">Sur devis</span>
              </div>
              <div className="text-sm text-slate-500 mb-1">
                à partir de <span className="font-semibold text-slate-700">750 € HT/mois</span>
              </div>
              <div className="text-xs text-slate-400 mb-5">Pour les entreprises en phase d'accélération</div>

              <div className="space-y-2.5 mb-6">
                {[
                  'Tout Métis Flow Pro',
                  'SEO local avancé + contenus',
                  'Articles de blog mensuels',
                  'Automatisation avis clients',
                  'Reporting commercial avancé',
                  'Campagnes saisonnières',
                  'Accompagnement trimestriel',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-blue-500 text-base">✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-secondary w-full justify-center">
                Nous contacter →
              </a>
            </div>
          </div>

        </div>

        {/* ROI */}
        <div className="mt-12 max-w-2xl mx-auto text-center p-6 rounded-3xl bg-white border border-slate-200">
          <div className="text-sm font-semibold text-slate-500 mb-2">ROI estimé — Métis Flow Pro</div>
          <div className="text-2xl font-bold text-slate-900 mb-2">
            1 chantier supplémentaire = setup remboursé
          </div>
          <p className="text-slate-500 text-sm">
            Un chantier de climatisation = 1 500 à 3 000 € HT.
            3 à 5 leads qualifiés par mois, c'est le comportement normal du système.
          </p>
        </div>
      </div>
    </section>
  )
}
