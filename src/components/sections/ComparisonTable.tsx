import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    other: "Tasa de permanencia del cabello trasplantado entre el 70% y el 90%",
    capilart: "La tasa de permanencia es siempre del 99% con FUE Robotizado",
  },
  {
    other: "Se desconoce la satisfacción real",
    capilart: "Satisfacción garantizada del cliente.",
  },
  {
    other: "Se desconoce quién será el equipo que realizará la intervención",
    capilart: "Conocerás a un equipo profesional con dos décadas de experiencia.",
  },
  {
    other: "No hay garantía del médico",
    capilart: "Médicos especializados dedicados a la formación de más médicos.",
  },
  {
    other: "Existe una deficiencia en la explicación del proceso y los resultados que el paciente puede esperar.",
    capilart: "Damos información clara. Hacemos una evaluación minuciosa de las necesidades de cada paciente y ofrecemos una solución honesta, cuidando su bienestar.",
  },
  {
    other: "No se tiene una idea clara de los resultados que el paciente puede esperar",
    capilart: "Utilizamos modelos virtuales basados en inteligencia artificial, para ofrecer una imagen clara de lo que el paciente puede esperar al tener un implante.",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            ¿Por qué elegir CapilArt?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La diferencia entre una clínica estándar y la excelencia en trasplante capilar
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full bg-background rounded-lg shadow-medium overflow-hidden">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  OTRAS CLÍNICAS
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  CAPILART
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{item.other}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 bg-accent/5">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm font-medium text-foreground">{item.capilart}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
