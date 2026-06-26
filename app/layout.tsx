import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/02-logo-icon-chouette-flow.png',
    shortcut: '/02-logo-icon-chouette-flow.png',
    apple: '/02-logo-icon-chouette-flow.png',
  },
  title: 'Métis Flow — Le site web qui travaille avec vous',
  description: 'Sites web intelligents + workflows automatisés pour installateurs de climatisation. Formulaire de devis, CRM Notion, relances automatiques. Chaque prospect qualifié arrive directement chez vous.',
  keywords: 'site web installateur climatisation, devis automatique, CRM artisan, Métis Flow',
  openGraph: {
    title: 'Métis Flow — Le site web qui travaille avec vous',
    description: 'Sites web intelligents + workflows automatisés pour installateurs de climatisation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
