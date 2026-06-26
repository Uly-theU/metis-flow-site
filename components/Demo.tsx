export default function Demo() {
  return (
    <section id="demo" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Démo live</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Voyez le système en action
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Ce site démo est le produit réel. Remplissez le formulaire de devis — vous verrez exactement ce que reçoit l'artisan.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Mockup navigateur */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
            {/* Browser chrome */}
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-slate-400 font-mono">
                demo-climpro.vercel.app/devis
              </div>
            </div>

            {/* Site preview */}
            <div className="bg-white p-8">
              <div className="text-center mb-6">
                <div className="text-blue-600 font-bold text-xl mb-1">ClimPro Moselle</div>
                <div className="text-slate-500 text-sm">Devis gratuit en 2 minutes</div>
              </div>

              {/* Étapes */}
              <div className="flex justify-center gap-2 mb-6">
                {['Type de projet', 'Votre logement', 'Vos coordonnées'].map((s, i) => (
                  <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${i === 0 ? 'bg-white text-blue-600' : 'bg-slate-300 text-white'}`}>
                      {i + 1}
                    </span>
                    <span className="hidden sm:inline">{s}</span>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-3 max-w-lg mx-auto">
                {[
                  { icon: '❄️', label: 'Installation PAC Air/Air' },
                  { icon: '🔧', label: 'Entretien annuel' },
                  { icon: '⚡', label: 'Dépannage urgent' },
                ].map((opt, i) => (
                  <button key={i} className={`p-4 rounded-2xl border-2 text-center transition-all ${i === 0 ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                    <div className="text-2xl mb-1">{opt.icon}</div>
                    <div className="text-xs font-medium text-slate-700">{opt.label}</div>
                  </button>
                ))}
              </div>

              <div className="text-center mt-6">
                <a
                  href="https://climpro-demo.vercel.app/devis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Tester le formulaire complet →
                </a>
                <p className="text-xs text-slate-400 mt-2">Le système complet se déclenche à la soumission</p>
              </div>
            </div>
          </div>

          {/* Ce qui se passe en coulisses */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: '⚡', title: 'Scoring instantané', desc: 'Le lead est scoré 0–100 selon 5 critères. Chaud, tiède ou froid.' },
              { icon: '🗂️', title: 'Fiche Notion créée', desc: 'Toutes les données apparaissent dans le tableau de bord en temps réel.' },
              { icon: '📩', title: '2 emails envoyés', desc: "L'artisan est alerté. Le prospect reçoit une confirmation." },
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-4 text-center">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-semibold text-slate-800 text-sm mb-1">{s.title}</div>
                <div className="text-slate-500 text-xs">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
