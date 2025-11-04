"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { COMPARISON_DATA } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export function ComparisonTable() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Por qué elegir CapilArt?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compara nuestra propuesta con otras clínicas y descubre por qué somos 
            la mejor opción para tu trasplante capilar
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden shadow-2xl border-0">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-primary to-secondary text-white">
              <div className="p-6 text-center md:text-left border-b md:border-b-0 md:border-r border-white/20">
                <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                  <X className="w-6 h-6 text-red-300" />
                  Otras Clínicas
                </h3>
              </div>
              <div className="p-6 text-center md:text-left">
                <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                  <Check className="w-6 h-6 text-green-300" />
                  CapilArt
                </h3>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-muted">
              {COMPARISON_DATA.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 hover:bg-muted/30 transition-colors"
                >
                  {/* Other Clinics */}
                  <div className="p-6 flex items-start gap-3 border-b md:border-b-0 md:border-r border-muted">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.other}
                    </p>
                  </div>

                  {/* CapilArt */}
                  <div className="p-6 flex items-start gap-3 bg-accent/5">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium text-sm leading-relaxed">
                      {item.capilart}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-accent to-secondary p-6 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <p className="text-2xl font-bold mb-2">
                  La diferencia está en los resultados
                </p>
                <p className="text-white/90">
                  Tecnología de vanguardia + Experiencia comprobada = Éxito garantizado
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}