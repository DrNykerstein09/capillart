"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/constants";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Clock,
  Shield,
  Award
} from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "FUE Manual", href: "/servicios#fue-manual" },
    { name: "FUE Robótica", href: "/servicios#fue-robotica" },
    { name: "Implantación DHI", href: "/servicios#dhi" },
    { name: "Células Madre", href: "/servicios#celulas-madre" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "/equipo" },
    { name: "Tecnología ARTAS", href: "/tecnologia" },
    { name: "Proceso", href: "/proceso" },
    { name: "Testimonios", href: "/testimonios" },
  ],
  legal: [
    { name: "Aviso de Privacidad", href: "/privacidad" },
    { name: "Términos y Condiciones", href: "/terminos" },
    { name: "Políticas", href: "/politicas" },
  ],
};

const badges = [
  { icon: Shield, text: "99% Efectividad" },
  { icon: Award, text: "20+ Años Experiencia" },
  { icon: Clock, text: "Atención 24/7" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Trust Badges */}
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <badge.icon className="w-6 h-6" />
                <span className="font-semibold">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-white">CapilArt</h3>
              <p className="text-primary-foreground/80 text-sm">
                Clínica de Trasplante Capilar
              </p>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Especialistas en trasplante capilar con tecnología robótica ARTAS IX. 
              Resultados naturales y permanentes con la máxima precisión.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70">
                  {CONTACT_INFO.phone}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70">
                  {CONTACT_INFO.email}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70">
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 CapilArt. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}