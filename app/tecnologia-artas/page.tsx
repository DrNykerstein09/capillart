"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Target, 
  Timer, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Microscope
} from "lucide-react";

export default function TecnologiaARTASPage() {
  const features = [
    {
      icon: Target,
      title: "Extracción precisa",
      description: "El sistema ARTAS IX utiliza inteligencia artificial y robótica avanzada para realizar la extracción de unidades foliculares de manera precisa y eficiente, reduciendo el riesgo de daño a los folículos capilares.",
    },
    {
      icon: Brain,
      title: "Implantación automatizada",
      description: "A diferencia de otros métodos que requieren implantación manual, ARTAS IX permite una implantación automática, garantizando uniformidad en el ángulo, la profundidad y la orientación de los injertos capilares, lo que se traduce en resultados más naturales.",
    },
    {
      icon: Timer,
      title: "Tiempo de recuperación reducido",
      description: "Gracias a la precisión del sistema robótico, el daño a los tejidos circundantes es mínimo, lo que permite que los pacientes tengan un tiempo de recuperación más corto en comparación con técnicas manuales.",
    },
    {
      icon: Sparkles,
      title: "Resultados personalizados",
      description: "La tecnología del ARTAS IX incluye un software que analiza el cabello existente del paciente y planifica el procedimiento para que los resultados sean lo más naturales posibles. Este proceso automatizado permite que los trasplantes sean más predecibles y se ajusten a las características individuales del paciente.",
    },
  ];

  const processSteps = [
    {
      title: "Preparación del área donante y receptora",
      description: "Análisis detallado y preparación de las zonas con tecnología de mapeo 3D",
    },
    {
      title: "Recolección Autónoma de Folículos",
      description: "El robot ARTAS identifica y extrae los mejores folículos con precisión milimétrica",
    },
    {
      title: "Implantación Autónoma de Folículos",
      description: "Distribución óptima y natural según el diseño personalizado para cada paciente",
    },
    {
      title: "Resultado de Implantación",
      description: "Resultados naturales con tasa de supervivencia del 99%",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center px-4 py-2 bg-accent/20 rounded-full mb-6"
            >
              <Microscope className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Tecnología de Vanguardia</span>
            </motion.div>

            <h1 className="mb-6 text-white">
              Sistema Robótico ARTAS IX
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              La tecnología más avanzada en trasplante capilar. Precisión robótica, 
              resultados naturales y 99% de efectividad garantizada.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl"
            >
              <Link href="/contacto">
                Agenda tu Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Descripción del Sistema */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-6">El Robot Autónomo Más Avanzado</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CapilArt integra el sistema robótico autónomo ARTAS IX, una de las tecnologías más avanzadas 
                en el campo del trasplante capilar. Este sistema robótico ofrece precisión, eficiencia y 
                resultados consistentes, posicionando a la clínica como un referente en innovación dentro 
                del mercado capilar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-muted p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hasta 3 veces menos tiempo de recolección</h3>
                  <p className="text-muted-foreground">
                    Los folículos son extraídos utilizando la tecnología más avanzada para el reconocimiento 
                    y selección de folículos, permitiendo obtener una cosecha en menor tiempo y hacerlo de 
                    forma autónoma con una tasa de efectividad del 99%, reduciendo con ello la molestia al paciente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implantación autónoma optimizada</h3>
                  <p className="text-muted-foreground">
                    Una vez realizada la cosecha, el Robot ARTAS es capaz de hacer la implantación también 
                    de forma autónoma y distribuir el sembrado de forma óptima, de acuerdo con las necesidades 
                    específicas de cada paciente, lo que permite obtener resultados más naturales.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Características del Sistema */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Características del Sistema ARTAS IX</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cuatro pilares tecnológicos que garantizan resultados excepcionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-secondary" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Visual */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">El Proceso ARTAS IX</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De la preparación al resultado final: un proceso tecnológico diseñado para la excelencia
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-6 text-white">
              Experimenta la Tecnología del Futuro
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Descubre cómo el sistema ARTAS IX puede transformar tu vida con resultados naturales 
              y una experiencia única
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl"
              >
                <Link href="/contacto">
                  Solicita tu Diagnóstico Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 border-2 border-white font-semibold text-lg px-8 py-6"
              >
                <Link href="/servicios">
                  Conoce Nuestros Servicios
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
