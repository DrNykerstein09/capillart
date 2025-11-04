"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Cpu, Syringe, Scissors, Users } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "FUE Robótica",
    description: "Sistema ARTAS IX con IA para máxima precisión. 99% de efectividad garantizada.",
    highlight: true,
  },
  {
    icon: Scissors,
    title: "FUE Manual",
    description: "Técnica tradicional con control manual completo para casos específicos.",
  },
  {
    icon: Syringe,
    title: "Terapias Regenerativas",
    description: "Células madre, PRP y exosomas para potenciar resultados.",
  },
  {
    icon: Users,
    title: "Cejas y Barba",
    description: "Trasplantes especializados para densidad facial personalizada.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Servicios especializados para cada necesidad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una variedad de técnicas y tratamientos diseñados para 
            atender las necesidades específicas de cada paciente
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className={`p-6 h-full hover:shadow-xl transition-all duration-300 border-0 ${
                    service.highlight 
                      ? 'bg-gradient-to-br from-accent/10 to-secondary/10 ring-2 ring-accent/20' 
                      : 'bg-white'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-14 h-14 ${
                      service.highlight ? 'bg-accent' : 'bg-secondary'
                    } rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  {service.highlight && (
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                      RECOMENDADO
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
            asChild
          >
            <Link href="/servicios">
              Ver todos los servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}