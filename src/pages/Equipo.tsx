import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import drOmarImage from "@/assets/dr-omar.jpg";

export default function Equipo() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">
            Nuestro Equipo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesionales altamente capacitados con más de 20 años de experiencia
            exclusiva en procedimientos capilares
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="shadow-strong overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Imagen del Doctor */}
              <div className="lg:col-span-2 relative h-full min-h-[400px] lg:min-h-[500px] bg-muted">
                <img 
                  src={drOmarImage} 
                  alt="Dr. Omar Carreón Terrones con el Robot ARTAS"
                  className="absolute inset-0 w-full h-full object-cover object-center lg:object-contain lg:object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/90" />
              </div>

              {/* Información del Doctor */}
              <div className="lg:col-span-3">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="text-3xl">Dr. Omar Carreón Terrones</CardTitle>
                  <p className="text-primary-foreground/90 text-lg">Director Médico</p>
                </CardHeader>
                <CardContent className="pt-8 pb-8">
                  <div className="space-y-6">
                    <p className="text-lg text-foreground leading-relaxed">
                      Médico experimentado con más de 15 años en el sector salud, especializado en
                      ultrasonido, medicina estética y gestión institucional. Responsable de la gestión
                      médica, supervisión de procedimientos y garantía de calidad de los servicios médicos.
                    </p>

                    <div className="grid grid-cols-1 gap-6 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-accent/10 p-3 flex-shrink-0">
                          <GraduationCap className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg mb-2">Formación</h3>
                          <p className="text-muted-foreground">
                            Egresado de la Universidad Justo Sierra. Diplomados en ultrasonido y
                            medicina estética. Maestría en gestión de instituciones de salud.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-accent/10 p-3 flex-shrink-0">
                          <Briefcase className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg mb-2">Experiencia</h3>
                          <p className="text-muted-foreground">
                            Ha desempeñado roles clave como coordinador médico en varias clínicas,
                            liderando equipos y realizando servicios de alta calidad en medicina
                            estética y trasplante capilar FUE.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-accent/10 p-3 flex-shrink-0">
                          <Award className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg mb-2">Reconocimientos</h3>
                          <p className="text-muted-foreground">
                            Miembro de diversas asociaciones médicas nacionales e internacionales,
                            destacando su compromiso con la mejora continua e innovación en salud
                            y estética.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-lg">Personal Capacitado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nuestro equipo se encuentra altamente capacitado para atender a cualquier
                paciente con los más altos estándares de calidad y profesionalismo.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-lg">Experiencia Comprobada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Contamos con expertos que suman más de 20 años de trabajo continuo
                únicamente en procedimientos capilares.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-lg">Formación Continua</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Médicos especializados dedicados a la formación de más médicos, manteniendo
                el más alto nivel de conocimiento y técnica.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
