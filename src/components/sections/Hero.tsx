"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const benefits = [
  "99% de efectividad garantizada",
  "Robot ARTAS IX última generación",
  "Diagnóstico con IA gratuito",
  "Equipo con 20+ años de experiencia",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-muted via-white to-secondary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div {...fadeInUp}>
            {/* LOGO */}
            <div className="w-full flex justify-center lg:justify-start mb-6">
              <Image
                src="/CapilArt_Logo_ svg.svg" // coloca tu SVG en public/logo.svg
                alt="CapilArt México"
                width={240}
                height={140}
                priority // mejora LCP
                className="h-20 w-auto"
              />
            </div>

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Tecnología Robótica de Última Generación
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              CapilArt México con el{" "}
              <span className="text-accent relative">
                trasplante capilar
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>{" "}
              más avanzado de México
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En CapilArt combinamos la precisión del sistema robótico ARTAS iX
              con la experiencia de nuestros especialistas para lograr injertos
              capilares exactos, rápidos y mínimamente invasivos. Nuestro
              enfoque une innovación médica y atención personalizada,
              garantizando resultados naturales y un proceso seguro en cada
              etapa.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  asChild
                >
                  <Link href="/contacto">
                    Solicita tu Diagnóstico Gratuito
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  asChild
                >
                  <Link href="/proceso">Conoce el Proceso</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-muted to-secondary/10 rounded-xl flex items-center justify-center">
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                <Image
                  src="/robot.png"
                  alt="Robot ARTAS iX"
                  fill
                  className="rounded-xl object-scale-down"
                  priority
                />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              IA Integrada
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
