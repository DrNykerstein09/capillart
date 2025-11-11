import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Target, Clock, TrendingUp } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import artasRobot from "@/assets/artas-robot.jpg";
import artasRobot2 from "@/assets/artas-robot-2.png";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const features = [
  {
    icon: Target,
    title: "Extracción Precisa",
    description: "Utiliza inteligencia artificial y robótica avanzada para realizar la extracción de unidades foliculares de manera precisa y eficiente, reduciendo el riesgo de daño a los folículos.",
  },
  {
    icon: Cpu,
    title: "Implantación Automatizada",
    description: "A diferencia de métodos manuales, ARTAS IX permite implantación automática, garantizando uniformidad en ángulo, profundidad y orientación para resultados más naturales.",
  },
  {
    icon: Clock,
    title: "Recuperación Reducida",
    description: "Gracias a la precisión del sistema robótico, el daño a tejidos circundantes es mínimo, permitiendo un tiempo de recuperación más corto que técnicas tradicionales.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Personalizados",
    description: "Software que analiza el cabello existente y planifica el procedimiento para resultados naturales. Proceso automatizado predecible ajustado a características individuales.",
  },
];

export default function Tecnologia() {
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
            Robot Autónomo ARTAS IX
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una de las tecnologías más avanzadas en trasplante capilar. Precisión, eficiencia
            y resultados consistentes que nos posicionan como referente en innovación.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Resultados Reales con Tecnología ARTAS IX
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <BeforeAfterSlider
              beforeImage={before1}
              afterImage={after1}
              beforeLabel="ANTES"
              afterLabel="DESPUÉS"
            />
            <BeforeAfterSlider
              beforeImage={before2}
              afterImage={after2}
              beforeLabel="ANTES"
              afterLabel="DESPUÉS"
            />
            <BeforeAfterSlider
              beforeImage={before3}
              afterImage={after3}
              beforeLabel="ANTES"
              afterLabel="DESPUÉS"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Tecnología ARTAS IX
          </h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="rounded-lg overflow-hidden shadow-strong">
                  <img
                    src={artasRobot}
                    alt="Robot ARTAS IX en acción"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-lg overflow-hidden shadow-strong">
                  <img
                    src={artasRobot2}
                    alt="Sistema robótico ARTAS IX"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-8"
          >
            <p className="text-lg text-foreground">
              CapilArt integra el sistema robótico autónomo ARTAS IX, permitiendo una
              precisión sin precedentes en cada fase del trasplante capilar. Este sistema
              combina inteligencia artificial con robótica de vanguardia para garantizar
              resultados óptimos y naturales.
            </p>
          </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Características del Sistema ARTAS IX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-medium hover:shadow-strong transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="rounded-full bg-accent/10 p-3">
                        <feature.icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-lg p-12 text-center"
        >
          <div className="text-6xl font-bold text-secondary mb-4">99%</div>
          <p className="text-xl mb-2">Tasa de Efectividad</p>
          <p className="text-primary-foreground/80">
            Hasta tres veces menos tiempo de recolección con la máxima precisión
          </p>
        </motion.div>
      </div>
    </div>
  );
}
