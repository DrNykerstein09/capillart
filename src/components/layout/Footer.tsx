import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Capil<span className="text-secondary">Art</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Clínica especializada en trasplante capilar con tecnología robótica avanzada.
              Resultados naturales y permanentes respaldados por más de 20 años de experiencia.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/tecnologia" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Tecnología
                </Link>
              </li>
              <li>
                <Link to="/equipo" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} CapilArt. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
