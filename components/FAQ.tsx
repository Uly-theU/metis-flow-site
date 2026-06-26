'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Je ne suis pas du tout à l\'aise avec les outils numériques. Est-ce que ça peut quand même fonctionner pour moi ?',
    a: 'Oui. C\'est exactement pour ça que Métis Flow existe. Vous n\'avez rien à configurer, rien à maintenir. Vous recevez un email quand un prospect remplit votre formulaire. C\'est tout. Le reste est automatique.',
  },
  {
    q: 'Combien de temps pour être en ligne ?',
    a: 'Métis Site : 7 jours. Métis Flow Pro : 14 jours. On s\'occupe de tout — design, contenu, configuration n8n, Notion, tests. Vous validez, on livre.',
  },
  {
    q: 'Est-ce que je peux garder mon domaine actuel ?',
    a: 'Oui. Si vous avez déjà un domaine, on l\'utilise. Si vous n\'en avez pas, on en achète un pour vous (inclus 1 an).',
  },
  {
    q: 'Qu\'est-ce qui se passe si je veux arrêter ?',
    a: 'Après la période d\'engagement (6 mois), vous pouvez résilier avec 30 jours de préavis. Votre site et vos données Notion restent les vôtres.',
  },
  {
    q: 'C\'est quoi exactement le CRM Notion ?',
    a: 'Une base de données Notion avec toutes vos demandes de devis : nom, contact, projet, score, statut, date. Filtrable, triable, accessible sur mobile. Pas besoin d\'apprendre Notion — on configure tout.',
  },
  {
    q: 'Les relances automatiques ne vont pas paraître impersonnelles ?',
    a: 'Les emails de relance sont rédigés en votre nom, de manière professionnelle et naturelle. Vos prospects ne sauront pas que c\'est automatique.',
  },
  {
    q: 'Je peux tester avant de m\'engager ?',
    a: 'Oui. Le site démo est accessible librement — remplissez le formulaire, voyez ce que reçoit l\'artisan. C\'est le produit réel, pas une maquette.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <div className="badge mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-sm pr-4">{faq.q}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
