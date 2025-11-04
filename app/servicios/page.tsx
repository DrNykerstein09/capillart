"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Scissors,
  Bot,
  Syringe,
  Hand,
  Sparkles,
  Droplet,
  Zap,
  PenTool,
  Shield,
  Snowflake,
  ArrowRight,
  Activity,
} from "lucide-react";
const fadeUp = {
hidden: { opacity: 0, y: 20 },
show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export default function ServiciosPage() {
  const procedures = [
    {
      icon: Hand,
      title: "FUE Manual",
      description:
        "Técnica de alta precisión que hace uso de micropunches para la extracción manual de los folículos. Ideal para pacientes que buscan una técnica tradicional con control manual en cada paso del proceso.",
    },
    {
      icon: Bot,
      title: "FUE Robótica (ARTAS IX)",
      description:
        "Con el sistema robótico ARTAS IX, se mejora la precisión y velocidad del proceso, reduciendo el tiempo de procedimiento y optimizando la implantación de los folículos. Los pacientes se beneficiarán de una recuperación más rápida y resultados más predecibles.",
      featured: true,
    },
    {
      icon: Syringe,
      title: "Implantación Directa DHI (Direct Hair Implantation)",
      description:
        "Este método utiliza un instrumento de implantación especializado para colocar los folículos directamente en las zonas receptoras sin necesidad de incisiones previas. Esta técnica permite una mejor dirección y control de la implantación, lo que garantiza un aspecto natural.",
    },
    {
      icon: Scissors,
      title: "Trasplante de Cejas y Barba",
      description:
        "Además de trasplante capilar, CapilArt ofrece servicios especializados para el trasplante de cejas y barba, dirigidos a pacientes que desean mejorar su densidad facial.",
    },
  ];

  const treatments = [
    {
      icon: Sparkles,
      title: "Terapia Regenerativa con Células Madre",
      description:
        "El uso de productos derivados de células madre para estimular el crecimiento de nuevos folículos capilares y mejorar la salud general del cuero cabelludo. Esta terapia es particularmente efectiva para potenciar los resultados del trasplante y acelerar la regeneración de los tejidos.",
    },
    {
      icon: Droplet,
      title: "Factores de Crecimiento (PRP)",
      description:
        "La Plasma Rico en Plaquetas se extrae de la sangre del propio paciente y se inyecta en el cuero cabelludo para estimular el crecimiento de cabello. Este tratamiento es un complemento excelente para los trasplantes capilares, ayudando a la cicatrización y potenciando la regeneración del cabello.",
    },
    {
      icon: Activity,
      title: "Exosomas",
      description:
        "Esta terapia avanzada utiliza vesículas extracelulares para regenerar y revitalizar los folículos capilares. Los exosomas contienen proteínas, ARN, y otros factores biológicos que promueven el crecimiento celular. Es una opción regenerativa sin intervención quirúrgica, recomendada para casos de alopecia en etapas tempranas.",
    },
    {
      icon: Zap,
      title: "Terapia Láser de Baja Intensidad (LLLT)",
      description:
        "La terapia láser se utiliza para estimular el flujo sanguíneo en el cuero cabelludo y mejorar la salud de los folículos capilares. Es un tratamiento no invasivo que se puede realizar como parte del mantenimiento post-trasplante o como un tratamiento independiente para la caída temprana del cabello.",
    },
    {
      icon: PenTool,
      title: "Micropigmentación Capilar",
      description:
        "Para pacientes que no desean someterse a un trasplante completo, la micropigmentación capilar ofrece una solución cosmética que simula la apariencia de cabello denso en áreas con calvicie.",
    },
  ];

  const innovations = [
    {
      icon: Shield,
      title: "Técnica de Anestesia Scalp Block",
      description:
        "CapilArt emplea la anestesia Scalp Block, una técnica que asegura la eliminación total del dolor durante el procedimiento de trasplante capilar. Se aplica anestesia local en zonas estratégicas del cuero cabelludo, bloqueando completamente la sensibilidad de la zona donante y receptora, lo que mejora la comodidad del paciente durante el tratamiento.",
    },
    {
      icon: Snowflake,
      title: "Conservación en Frío con Soluciones Especializadas",
      description:
        "Para asegurar la viabilidad de las unidades foliculares extraídas, CapilArt utiliza soluciones de conservación en frío especializadas. Estas soluciones prolongan la vida útil de los folículos durante el proceso de extracción e implantación, mejorando las tasas de éxito del trasplante.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center py-14 md:py-20"
          >
            <h1 className="mb-5 text-white">Nuestra Oferta de Servicios</h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Soluciones integrales que combinan tecnología de vanguardia con
              atención médica personalizada.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm">
              <span className="size-2 rounded-full bg-accent" />
              Excelencia clínica · Resultados naturales · Cuidado continuo
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs defaultValue="procedimientos" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-10 gap-2 md:gap-0 mb-8 rounded-full bg-muted p-1">
              <TabsTrigger value="procedimientos" className="text-base py-3 rounded-full">
                Procedimientos de Trasplante
              </TabsTrigger>
              <TabsTrigger value="tratamientos" className="text-base py-3 rounded-full">
                Tratamientos Complementarios
              </TabsTrigger>
              <TabsTrigger value="innovaciones" className="text-base py-3 rounded-full">
                Innovaciones
              </TabsTrigger>
            </TabsList>

            {/* Procedimientos Tab */}
            <TabsContent value="procedimientos" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold mb-12">
                  Procedimientos de Trasplante Capilar
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  CapilArt se especializa en trasplantes de cabello utilizando
                  la técnica FUE (Follicular Unit Extraction). Un procedimiento
                  mínimamente invasivo que permite la extracción y posterior
                  implantación de unidades foliculares individuales, ofreciendo
                  resultados naturales y con menos cicatrices.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {procedures.map((procedure, index) => (
                  <motion.div
                    key={procedure.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      className={`h-full hover:shadow-lg transition-all duration-300 ${
                        procedure.featured
                          ? "border-2 border-secondary bg-gradient-to-br from-secondary/5 to-accent/5"
                          : ""
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex-shrink-0">
                            <div
                              className={`w-12 h-12 rounded-full ${
                                procedure.featured
                                  ? "bg-secondary"
                                  : "bg-secondary/10"
                              } flex items-center justify-center`}
                            >
                              <procedure.icon
                                className={`h-6 w-6 ${
                                  procedure.featured
                                    ? "text-white"
                                    : "text-secondary"
                                }`}
                              />
                            </div>
                          </div>
                          <CardTitle className="text-xl">
                            {procedure.title}
                          </CardTitle>
                        </div>
                        {procedure.featured && (
                          <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                            Recomendado
                          </span>
                        )}
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {procedure.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Tratamientos Tab */}
            <TabsContent value="tratamientos" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Tratamientos Complementarios
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Diseñados para mejorar los resultados del trasplante capilar,
                  acelerar la recuperación, y ofrecer opciones no quirúrgicas.
                  Estos tratamientos también se emplean para el mantenimiento
                  postoperatorio.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                              <treatment.icon className="h-6 w-6 text-accent" />
                            </div>
                          </div>
                          <CardTitle className="text-xl">
                            {treatment.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {treatment.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Innovaciones Tab */}
            <TabsContent value="innovaciones" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Innovaciones de Procedimiento
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Técnicas avanzadas que distinguen a CapilArt y garantizan la
                  mejor experiencia y resultados superiores para nuestros
                  pacientes.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {innovations.map((innovation, index) => (
                  <motion.div
                    key={innovation.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <innovation.icon className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <CardTitle className="text-xl">
                            {innovation.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {innovation.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 p-8 bg-muted rounded-2xl text-center max-w-3xl mx-auto"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Programas de Mantenimiento y Seguimiento
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  CapilArt proporciona programas postoperatorios de seguimiento
                  y mantenimiento para asegurar los mejores resultados a largo
                  plazo. Estos programas incluyen revisiones periódicas,
                  tratamientos de mantenimiento (como PRP y terapia láser), y
                  recomendaciones personalizadas para el cuidado del cuero
                  cabelludo.
                </p>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary p-4 to-secondary mt-14 text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-6 text-white">
              ¿Cuál es el Mejor Tratamiento para Ti?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Nuestro equipo de expertos te ayudará a elegir el procedimiento
              ideal según tus necesidades específicas
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl"
            >
              <Link href="/contacto">
                Agenda tu Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
