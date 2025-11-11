import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    category: "Procedimientos de Trasplante Capilar",
    items: [
      {
        title: "FUE Manual",
        description: "Técnica de alta precisión con micropunches para la extracción manual de folículos. Ideal para pacientes que buscan control manual en cada paso del proceso.",
      },
      {
        title: "FUE Robótica (ARTAS IX)",
        description: "Sistema robótico que mejora la precisión y velocidad del proceso, reduciendo el tiempo de procedimiento y optimizando la implantación. Recuperación más rápida y resultados predecibles.",
      },
      {
        title: "Implantación Directa DHI",
        description: "Método que utiliza un instrumento especializado para colocar los folículos directamente sin incisiones previas. Garantiza un aspecto natural con mejor dirección y control.",
      },
      {
        title: "Trasplante de Cejas y Barba",
        description: "Servicios especializados para mejorar la densidad facial, diseñados específicamente para cejas y barba con resultados naturales.",
      },
    ],
  },
  {
    category: "Tratamientos Complementarios",
    items: [
      {
        title: "Terapia con Células Madre",
        description: "Productos derivados de células madre para estimular el crecimiento de nuevos folículos y mejorar la salud del cuero cabelludo. Potencia resultados del trasplante.",
      },
      {
        title: "Factores de Crecimiento (PRP)",
        description: "Plasma Rico en Plaquetas extraído de la sangre del paciente, inyectado para estimular el crecimiento. Complemento excelente para la cicatrización y regeneración.",
      },
      {
        title: "Exosomas",
        description: "Terapia avanzada con vesículas extracelulares para regenerar folículos capilares. Opción regenerativa sin cirugía para alopecia en etapas tempranas.",
      },
      {
        title: "Terapia Láser de Baja Intensidad",
        description: "Tratamiento no invasivo para estimular flujo sanguíneo y mejorar la salud de los folículos. Ideal para mantenimiento post-trasplante.",
      },
      {
        title: "Micropigmentación Capilar",
        description: "Solución cosmética que simula la apariencia de cabello denso en áreas con calvicie, sin necesidad de trasplante completo.",
      },
    ],
  },
  {
    category: "Innovaciones de Procedimiento",
    items: [
      {
        title: "Anestesia Scalp Block",
        description: "Técnica que asegura la eliminación total del dolor durante el procedimiento. Anestesia local aplicada en zonas estratégicas para máxima comodidad.",
      },
      {
        title: "Conservación en Frío Especializada",
        description: "Soluciones que prolongan la vida útil de los folículos durante extracción e implantación, mejorando las tasas de éxito del trasplante.",
      },
    ],
  },
];

export default function Servicios() {
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
            Nuestros Servicios
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales diseñadas para atender las necesidades específicas de cada paciente,
            combinando técnicas avanzadas con tratamientos complementarios únicos.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.2 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-8">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((service, index) => (
                  <Card key={index} className="shadow-medium hover:shadow-strong transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-muted rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-primary mb-4">
            Programas de Mantenimiento y Seguimiento
          </h3>
          <p className="text-muted-foreground">
            CapilArt proporciona programas postoperatorios de seguimiento para asegurar los mejores resultados
            a largo plazo. Estos incluyen revisiones periódicas, tratamientos de mantenimiento (como PRP y
            terapia láser), y recomendaciones personalizadas para el cuidado del cuero cabelludo.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
