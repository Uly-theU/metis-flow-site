export default function CTA() {
  return (
    <section id="contact" className="section">
      <div className="container max-w-3xl">
        <div className="rounded-3xl p-10 text-center text-white" style={{background: 'linear-gradient(135deg, #1e3a5f 0%, #2d1b5e 100%)'}}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-5">
            🎁 Offre fondateur — 0/10 places prises
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Prêt à ne plus perdre<br />de prospects en ligne ?
          </h2>

          <p className="text-blue-200 max-w-lg mx-auto mb-8">
            Réservez votre place pour l'offre fondateur — setup offert pour les 10 premiers.
            Ou demandez une démo personnalisée pour voir Métis Flow Pro en action.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <a href="mailto:contact@metis-flow.fr?subject=Réservation offre fondateur" className="btn-primary">
              Réserver ma place (setup offert) →
            </a>
            <a href="mailto:contact@metis-flow.fr?subject=Demande démo Métis Flow Pro" className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] font-semibold text-white text-sm bg-white/20 hover:bg-white/30 transition-all">
              Demander une démo
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <span>✓ Réponse sous 24h</span>
            <span>✓ Sans engagement immédiat</span>
            <span>✓ Démo gratuite</span>
          </div>
        </div>
      </div>
    </section>
  )
}
