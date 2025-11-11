import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, FileText, CalendarCheck, Scissors, Droplets, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Mándanos tus fotos",
    description: "Envía al menos 4 fotos laterales de tu cabeza y cráneo mostrando la situación que deseas corregir.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Recibe información",
    description: "Te enviaremos nuestro brochure informativo con una invitación para una consulta de diagnóstico totalmente gratuita.",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Plan personalizado",
    description: "CapilArt elaborará un plan de implante especial para ti, con el número de injertos necesarios y presupuesto detallado basado en simulación 3D con IA.",
  },
  {
    icon: Scissors,
    number: "04",
    title: "Intervención",
    description: "Una vez aceptados los términos, programamos tu día. El procedimiento se realiza con anestesia local sin necesidad de hospitalización.",
  },
  {
    icon: Droplets,
    number: "05",
    title: "Primer lavado",
    description: "A las 24 horas, nuestro equipo de enfermeras realizará el vendaje y primer lavado con precisión, dándote instrucciones detalladas para el cuidado en casa.",
  },
  {
    icon: HeartHandshake,
    number: "06",
    title: "Seguimiento continuo",
    description: "Atención postoperatoria única. Nuestros consultores expertos brindan apoyo constante para garantizar resultados duraderos y satisfactorios.",
  },
];

export default function Proceso() {
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
            Nuestro Proceso
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un cambio radical en solo 6 pasos sencillos. Te guiamos en cada etapa
            del proceso para garantizar tu comodidad y los mejores resultados.
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea conectora en desktop */}
          <div className="hidden md:block absolute left-[2.5rem] top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  {/* Número del paso */}
                  <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-accent text-accent-foreground font-bold text-2xl flex-shrink-0 relative z-10">
                    {step.number}
                  </div>

                  <Card className="flex-1 shadow-medium hover:shadow-strong transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-accent/10 p-3">
                          <step.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <div className="md:hidden text-sm font-semibold text-accent mb-1">
                            Paso {step.number}
                          </div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-base">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-muted rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-primary mb-4">
            ¿Qué buscan nuestros pacientes?
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                Resolver un problema de salud, recibir un diagnóstico y opinión profesional
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                Ser escuchados y atendidos por médicos experimentados
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                Tomar decisiones conociendo con claridad los riesgos y esperando los mejores resultados
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                Recibir lo mejor, al mejor precio
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
