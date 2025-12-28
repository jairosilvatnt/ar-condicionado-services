import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl">
                C
              </div>
              <span className="text-2xl font-bold text-white">Climatech</span>
            </div>
            <p className="text-gray-400 mb-4">
              Especialistas em climatização residencial e comercial. Garantindo
              conforto e ar puro para você.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="font-bold text-sm">Wa</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/servico/instalacao"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instalação
                </Link>
              </li>
              <li>
                <Link
                  to="/servico/manutencao-corretiva"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Manutenção Corretiva
                </Link>
              </li>
              <li>
                <Link
                  to="/servico/manutencao-preventiva"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Manutenção Preventiva / PMOC
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400">contato@climatech.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Climatech Ar-Condicionado. Todos os direitos
            reservados.
          </p>
          <p className="text-gray-600 text-sm">
            Built by{' '}
            <span className="font-semibold text-gray-500">Assistant Team</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
