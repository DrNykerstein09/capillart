"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Tecnología", href: "/tecnologia" },
  { name: "Proceso", href: "/proceso" },
  { name: "Equipo", href: "/equipo" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <span className="text-2xl font-bold text-primary">CapilArt</span>
              <span className="text-xs text-secondary">Trasplante Capilar</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/contacto">
                <Phone className="w-4 h-4 mr-2" />
                Diagnóstico Gratuito
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t">
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-full"
                  asChild
                >
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Diagnóstico Gratuito
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}