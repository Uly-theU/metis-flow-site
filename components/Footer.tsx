export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl flex items-center justify-center text-white text-xs font-bold" style={{background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)'}}>
            M
          </div>
          <span className="font-bold text-slate-800">Métis Flow</span>
        </div>

        <div className="text-xs text-slate-400 text-center">
          © 2026 Métis Flow · Sites web intelligents pour artisans locaux
        </div>

        <div className="flex gap-5 text-xs text-slate-400">
          <a href="#" className="hover:text-slate-600">Mentions légales</a>
          <a href="#" className="hover:text-slate-600">Politique de confidentialité</a>
          <a href="mailto:contact@metis-flow.fr" className="hover:text-slate-600">Contact</a>
        </div>
      </div>
    </footer>
  )
}
