"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Cpu, Target, Clock, User, Brain, Shield, Zap, Eye } from "lucide-react";
import { ARTAS_FEATURES } from "@/lib/constants";

const iconMap = {
  Cpu,
  Target,
  Clock,
  User,
};

const stats = [
  { value: "99%", label: "Efectividad", icon: Shield },
  { value: "3x", label: "Más Rápido", icon: Zap },
  { value: "24h", label: "Recuperación", icon: Clock },
  { value: "AI", label: "Inteligencia", icon: Brain },
];

export function TechnologyPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Cpu className="w-4 h-4" />
              <span className="text-sm font-semibold">Tecnología de Vanguardia</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Robot Autónomo ARTAS IX:{" "}
              <span className="text-accent">
                La revolución en trasplante capilar
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              El sistema robótico ARTAS IX utiliza inteligencia artificial y robótica 
              avanzada para realizar extracciones e implantaciones con precisión milimétrica, 
              garantizando resultados consistentes y naturales.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {ARTAS_FEATURES.slice(0, 3).map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link href="/tecnologia">
                  Conoce la tecnología
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <Card className="relative p-8 bg-gradient-to-br from-primary to-secondary overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent rounded-full blur-3xl" />
              </div>

              {/* Robot Illustration */}
              <div className="relative z-10">
                <div className="aspect-square bg-white/10 backdrop-blur rounded-2xl p-8 mb-6">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                        }}
                        transition={{ 
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="w-32 h-32 mx-auto mb-4"
                      >
                        <svg
                          viewBox="0 0 100 100"
                          className="w-full h-full"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="2"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="25"
                            fill="rgba(255,255,255,0.1)"
                          />
                          <text
                            x="50"
                            y="55"
                            textAnchor="middle"
                            className="fill-white text-lg font-bold"
                          >
                            AI
                          </text>
                        </svg>
                      </motion.div>
                      <h3 className="text-white text-xl font-bold mb-2">
                        Sistema ARTAS IX
                      </h3>
                      <p className="text-white/80 text-sm">
                        Precisión Robótica + IA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur rounded-xl p-4 text-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.3 + index * 0.1,
                          type: "spring"
                        }}
                      >
                        <Icon className="w-6 h-6 text-white/60 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/60">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-accent text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Eye className="inline w-4 h-4 mr-2" />
              Visualización 3D
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}