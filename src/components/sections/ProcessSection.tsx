"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Camera, 
  FileText, 
  ClipboardCheck, 
  Calendar, 
  Activity, 
  Heart 
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap = {
  Camera,
  FileText,
  ClipboardCheck,
  Calendar,
  Activity,
  Heart,
};

export function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Un cambio radical en solo 6 pasos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro proceso está diseñado para ser simple, transparente y 
            completamente personalizado a tus necesidades
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-secondary to-primary rounded-full" />

            {/* Steps */}
            <div className="space-y-8 lg:space-y-12">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className={`lg:flex items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Content Card */}
                      <div className={`lg:w-5/12 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-white to-muted/20">
                            <div className={`flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-primary mb-2">
                                  Paso {step.number}: {step.title}
                                </h3>
                                <p className="text-muted-foreground">
                                  {step.description}
                                </p>
                              </div>
                              <div className="lg:hidden flex-shrink-0">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                  <Icon className="w-6 h-6 text-accent" />
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      </div>

                      {/* Center Circle - Desktop */}
                      <div className="hidden lg:flex lg:w-2/12 justify-center">
                        <motion.div
                          className="relative z-10"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.1 + 0.2,
                            type: "spring",
                            stiffness: 200 
                          }}
                        >
                          <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-accent">
                            <Icon className="w-10 h-10 text-accent" />
                          </div>
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                            <span className="text-4xl font-bold text-accent/20">
                              {step.number}
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Spacer */}
                      <div className="hidden lg:block lg:w-5/12" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            ¿Listo para comenzar tu transformación?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Inicia tu Proceso Hoy
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}