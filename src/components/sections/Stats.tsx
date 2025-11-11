import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "99%",
    label: "Tasa de permanencia de folículos",
  },
  {
    icon: Users,
    value: "20+",
    label: "Años de experiencia",
  },
  {
    icon: Clock,
    value: "3x",
    label: "Más rápido que métodos tradicionales",
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfacción garantizada",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-secondary/20 p-3">
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
