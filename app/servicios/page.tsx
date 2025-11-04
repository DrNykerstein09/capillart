"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Clock,
  Shield,
  Award,
  Scissors,
  Bot,
  Syringe,
  Hand,
  Droplet,
  Zap,
  PenTool,
  Activity,
  Snowflake,
  Star,
  TrendingUp,
  Users,
  Brain
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Mapeo de iconos mejorado
const iconMap = {
  "fue-manual": Hand,
  "fue-robotica": Bot,
  "dhi": Syringe,
  "cejas-barba": Scissors,
  "celulas-madre": Sparkles,
  "prp": Droplet,
  "exosomas": Activity,
  "laser": Zap,
  "micropigmentacion": PenTool,
};

// Innovaciones adicionales
const innovations = [
  {
    icon: Shield,
    title: "Técnica de Anestesia Scalp Block",
    description: "Eliminación total del dolor durante el procedimiento con anestesia estratégica en zonas específicas del cuero cabelludo.",
  },
  {
    icon: Snowflake,
    title: "Conservación en Frío Especializada",
    description: "Soluciones de conservación que prolongan la vida útil de los folículos, mejorando las tasas de éxito del trasplante.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Premium */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Excelencia Médica Certificada</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Servicios de{" "}
              <span className="relative">
                Trasplante Capilar
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-white rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Soluciones integrales que combinan tecnología de vanguardia con atención médica 
              personalizada para garantizar resultados naturales y permanentes
            </p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-sm text-white/80">Efectividad</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold text-white">4+</div>
                <div className="text-sm text-white/80">Técnicas</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-white/80">Terapias</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section Mejorado */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="trasplantes" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 mb-12 bg-muted p-1.5 rounded-2xl">
              <TabsTrigger 
                value="trasplantes" 
                className="data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-4 px-6 transition-all"
              >
                <Bot className="w-4 h-4 mr-2" />
                Procedimientos de Trasplante
              </TabsTrigger>
              <TabsTrigger 
                value="complementarios"
                className="data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-4 px-6 transition-all"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Tratamientos Complementarios
              </TabsTrigger>
              <TabsTrigger 
                value="innovaciones"
                className="data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-4 px-6 transition-all"
              >
                <Brain className="w-4 h-4 mr-2" />
                Innovaciones
              </TabsTrigger>
            </TabsList>

            {/* Tab de Trasplantes */}
            <TabsContent value="trasplantes" className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Procedimientos de Trasplante Capilar
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Técnica FUE (Follicular Unit Extraction) con variantes especializadas para cada necesidad
                </p>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {SERVICES.trasplantes.items.map((service) => {
                  const Icon = iconMap[service.id as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className={`h-full relative overflow-hidden ${
                        service.highlight 
                          ? 'border-2 border-accent shadow-2xl' 
                          : 'hover:shadow-xl'
                      } transition-all duration-300`}>
                        {service.highlight && (
                          <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 rounded-bl-xl">
                            <span className="text-xs font-bold flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              RECOMENDADO
                            </span>
                          </div>
                        )}
                        
                        <CardHeader className="pb-4">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                                service.highlight 
                                  ? 'bg-accent text-white' 
                                  : 'bg-secondary/10 text-secondary'
                              }`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-7 h-7" />
                            </motion.div>
                            <div className="flex-1">
                              <CardTitle className="text-2xl mb-2">
                                {service.title}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {service.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          <div className="space-y-3 mb-6">
                            {service.features.map((feature, idx) => (
                              <motion.div 
                                key={idx} 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                          
                          <Button
                            className={`w-full ${
                              service.highlight 
                                ? 'bg-accent hover:bg-accent/90' 
                                : 'bg-primary hover:bg-primary/90'
                            } text-white font-semibold shadow-lg hover:shadow-xl transition-all`}
                            asChild
                          >
                            <Link href="/contacto">
                              Solicitar Información
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </TabsContent>

            {/* Tab de Tratamientos Complementarios */}
            <TabsContent value="complementarios" className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Tratamientos Complementarios
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Potencia los resultados con terapias avanzadas de regeneración y mantenimiento
                </p>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {SERVICES.complementarios.items.map((treatment) => {
                  const Icon = iconMap[treatment.id as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={treatment.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                              <CardTitle className="text-lg mb-2">
                                {treatment.title}
                              </CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm leading-relaxed">
                            {treatment.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Programa de Mantenimiento */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 p-8 bg-gradient-to-br from-muted to-secondary/5 rounded-3xl max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Programa de Seguimiento Post-Operatorio
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Acompañamiento continuo con revisiones periódicas, tratamientos de mantenimiento 
                    y recomendaciones personalizadas para garantizar resultados duraderos.
                  </p>
                  <Button variant="outline" className="border-2 border-secondary hover:bg-secondary hover:text-white">
                    Conocer más
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            {/* Tab de Innovaciones */}
            <TabsContent value="innovaciones" className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Innovaciones de Procedimiento
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Técnicas exclusivas que garantizan la mejor experiencia y resultados superiores
                </p>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {innovations.map((innovation, index) => (
                  <motion.div
                    key={innovation.title}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <innovation.icon className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">
                              {innovation.title}
                            </CardTitle>
                          </div>
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
              </motion.div>

              {/* Tecnología destacada */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 relative"
              >
                <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-primary to-secondary">
                  <div className="p-8 text-center text-white">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">
                      Resultados Comprobados
                    </h3>
                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-6">
                      <div>
                        <div className="text-4xl font-bold">99%</div>
                        <div className="text-white/80">Efectividad</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold">3x</div>
                        <div className="text-white/80">Más Rápido</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold">20+</div>
                        <div className="text-white/80">Años Experiencia</div>
                      </div>
                    </div>
                    <p className="text-white/90 max-w-xl mx-auto">
                      La combinación perfecta de experiencia médica y tecnología de vanguardia 
                      para garantizar los mejores resultados en cada procedimiento.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Garantías Section */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring" }}
            >
              <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">99% Efectividad</h3>
              <p className="text-muted-foreground text-sm">
                Tasa de supervivencia folicular garantizada
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring" }}
            >
              <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Recuperación Rápida</h3>
              <p className="text-muted-foreground text-sm">
                Mínimo tiempo de inactividad
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring" }}
            >
              <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Garantía Total</h3>
              <p className="text-muted-foreground text-sm">
                Satisfacción garantizada o devolución
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ¿Cuál es el mejor tratamiento para ti?
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Nuestro equipo de expertos te ayudará a elegir el procedimiento 
              ideal según tus necesidades específicas
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
                asChild
              >
                <Link href="/contacto">
                  Agenda tu Consulta Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}