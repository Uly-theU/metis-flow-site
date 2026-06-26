export default function Workflow() {
  const steps = [
    {
      num: '01',
      icon: '🔍',
      title: 'Recherche Google',
      desc: 'Votre client cherche un installateur clim dans sa ville.',
    },
    {
      num: '02',
      icon: '🌐',
      title: 'Votre site',
      desc: 'Il tombe sur votre site optimisé SEO local. Clair, mobile, professionnel.',
    },
    {
      num: '03',
      icon: '📝',
      title: 'Formulaire devis',
      desc: 'Il remplit le formulaire intelligent en 2 minutes. Surface, type, urgence.',
    },
    {
      num: '04',
      icon: '⚡',
      title: 'Scoring automatique',
      desc: 'Le lead est scoré 0–100. Chaud, tiède ou froid. Classé instantanément.',
    },
    {
      num: '05',
      icon: '🗂️',
      title: 'CRM Notion',
      desc: 'Une fiche est créée dans votre tableau de bord. Tout est tracé.',
    },
    {
      num: '06',
      icon: '📩',
      title: 'Notification + relances',
      desc: 'Vous êtes alerté. Le prospect reçoit une confirmation. Les relances sont programmées.',
    },
  ]

  return (
    <section id="solution" className="section bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <div className="badge mb-4">Comment ça fonctionne</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            De la recherche Google<br />
            <span className="gradient-text">au lead qualifié dans votre CRM</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Métis Flow automatise tout le parcours. Vous recevez uniquement des prospects prêts à être rappelés.
          </p>
        </div>

        {/* Desktop : horizontal */}
        <div className="hidden lg:flex items-start gap-0 relative">
          {/* Ligne pointillée */}
          <div className="absolute top-8 left-[8%] right-[8%] h-px border-t-2 border-dashed border-blue-200 z-0"></div>

          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center px-2 relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-sm" style={{background: 'linear-gradient(135deg, #EFF6FF, #F5F3FF)'}}>
                {s.icon}
              </div>
              <div className="text-xs font-bold text-blue-500 mb-1">{s.num}</div>
              <div className="font-semibold text-slate-900 text-sm mb-1">{s.title}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Mobile : vertical */}
        <div className="lg:hidden space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{background: 'linear-gradient(135deg, #EFF6FF, #F5F3FF)'}}>
                {s.icon}
              </div>
              <div>
                <div className="text-xs font-bold text-blue-500 mb-0.5">{s.num}</div>
                <div className="font-semibold text-slate-900 text-sm mb-0.5">{s.title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: '< 2 min', label: 'pour remplir le formulaire' },
            { val: '0 sec', label: 'pour scorer et notifier' },
            { val: '100%', label: 'des leads tracés dans Notion' },
            { val: '24h/24', label: 'le système travaille pour vous' },
          ].map((s, i) => (
            <div key={i} className="text-center p-5 bg-slate-50 rounded-2xl">
              <div className="text-2xl font-bold gradient-text mb-1">{s.val}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
