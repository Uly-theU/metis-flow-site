export default function Problem() {
  const problems = [
    {
      icon: '📵',
      title: 'Invisible sur Google',
      desc: "Vos clients cherchent 'installateur clim [ville]'. Si votre site est absent ou mal optimisé, ils appellent le concurrent d'à côté.",
    },
    {
      icon: '📋',
      title: 'Demandes non qualifiées',
      desc: 'Vous recevez des appels pour des projets trop petits, hors zone, ou sans suite. Du temps perdu à chaque fois.',
    },
    {
      icon: '🔔',
      title: 'Prospects qui disparaissent',
      desc: 'Un prospect vous contacte. Vous êtes sur un chantier. Il ne rappelle pas. Sans relance automatique, ce lead est perdu.',
    },
    {
      icon: '📊',
      title: 'Aucune visibilité sur le pipeline',
      desc: "Vous ne savez pas combien de demandes vous avez reçues ce mois, lesquelles sont chaudes, lesquelles sont en attente.",
    },
  ]

  return (
    <section className="section bg-slate-900">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 mb-4">
            Le problème
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Un artisan qui travaille bien<br />
            ne devrait pas perdre de clients en ligne
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Pourtant c'est ce qui se passe pour 70% des installateurs de climatisation en France.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-3xl p-6">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-semibold text-white mb-2 text-base">{p.title}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm">
            Résultat : 3 à 5 demandes perdues par semaine. Soit{' '}
            <span className="text-white font-semibold">6 000 à 15 000 € de CA manqué par mois.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
