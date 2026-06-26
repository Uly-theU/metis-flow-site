export default function Trust() {
  return (
    <section className="section" style={{background: '#F8FAFC'}}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/05-illustration-rgpd-securite.png"
              alt="Sécurité et conformité RGPD"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>
          <div>
            <div className="badge mb-5">Sécurité & conformité</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Conçu pour collecter les demandes<br />
              <span className="gradient-text">de devis proprement</span>
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Les données de vos prospects sont hébergées dans votre propre espace Notion.
              Vous en êtes le seul propriétaire. Aucune revente, aucun partage tiers.
            </p>
            <div className="space-y-4">
              {[
                { icon: '🔒', title: 'Données dans votre Notion', desc: 'Votre CRM vous appartient. Accessible uniquement par vous.' },
                { icon: '📋', title: 'Consentement RGPD intégré', desc: 'Checkbox obligatoire dans le formulaire. Trace conservée.' },
                { icon: '🇫🇷', title: 'Hébergement européen', desc: 'Vercel EU + Notion EU. Vos données restent en Europe.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 bg-white border border-slate-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm mb-0.5">{item.title}</div>
                    <div className="text-slate-500 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Illustration flux */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <div className="badge mb-3">Intégrations</div>
            <h3 className="text-xl font-bold text-slate-900">Un hub central qui connecte tous vos outils</h3>
          </div>
          <img
            src="/06-flux-automatisation-workflows.png"
            alt="Flux d'automatisation Métis Flow"
            className="w-full max-w-3xl mx-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}
