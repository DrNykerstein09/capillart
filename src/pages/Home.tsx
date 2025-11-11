import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";
import Stats from "@/components/sections/Stats";
import ComparisonTable from "@/components/sections/ComparisonTable";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroClinic}
            alt="Clínica CapilArt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-secondary" />
                <span className="text-secondary font-medium">Tecnología Robótica Avanzada</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl mb-6">
                Recupera tu cabello de forma{" "}
                <span className="text-secondary">natural y permanente</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Trasplante capilar FUE con Robot ARTAS IX. 99% de tasa de permanencia,
                resultados predecibles y recuperación rápida respaldados por más de 20 años de experiencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
                  <Link to="/contacto">
                    Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-lg">
                  <Link to="/tecnologia">Ver Tecnología</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Unique Value Proposition */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Lo que nos hace diferentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovación, experiencia y compromiso con resultados excepcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tecnología Avanzada",
                description: "Robot ARTAS IX con inteligencia artificial para extracción e implantación precisa. Micropunches de alta precisión y simulación capilar 3D.",
              },
              {
                title: "Profesionalismo",
                description: "Equipo médico con más de 20 años de experiencia exclusiva en procedimientos capilares. Médicos certificados y en formación continua.",
              },
              {
                title: "Enfoque Holístico",
                description: "Atención personalizada con tratamientos complementarios únicos: células madre, PRP, exosomas y formulaciones exclusivas.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card rounded-lg p-8 shadow-medium hover:shadow-strong transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              ¿Listo para recuperar tu cabello?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Obtén un diagnóstico gratuito y descubre cómo podemos ayudarte a lograr los resultados que deseas.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
              <Link to="/contacto">
                Solicitar Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
