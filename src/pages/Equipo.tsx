import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import TeamMemberCard from "@/components/sections/TeamMemberCard";
import { TEAM } from "@/lib/constants";
import { Users, Award, GraduationCap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export default function Equipo() {
  const valuePropositions = [
    {
      icon: Users,
      title: "Personal Capacitado",
      description:
        "Nuestro equipo se encuentra altamente capacitado para atender a cualquier paciente con los más altos estándares de calidad y profesionalismo.",
    },
    {
      icon: Award,
      title: "Experiencia Comprobada",
      description:
        "Contamos con expertos que suman más de 20 años de trabajo continuo únicamente en procedimientos capilares y gestión médica.",
    },
    {
      icon: GraduationCap,
      title: "Formación Continua",
      description:
        "Médicos especializados dedicados a la formación de más médicos, manteniendo el más alto nivel de conocimiento y técnica en el sector.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-32 overflow-hidden">
      {/* Mesh gradient background */}
      <MeshGradient animated withGrid className="opacity-40" />

      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            type: "spring",
            damping: 25,
            stiffness: 120,
          }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight tracking-tight">
            Nuestro Equipo Directivo
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            Liderazgo experimentado con más de 50 años de experiencia combinada
            en medicina, administración y finanzas
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-full"
          />
        </motion.div>

        {/* Team Directors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-20"
        >
          {TEAM.directors.map((director, index) => (
            <TeamMemberCard
              key={director.id}
              member={director}
              index={index}
            />
          ))}
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
          >
            ¿Por qué confiar en nosotros?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {valuePropositions.map((prop, i) => (
              <GlassCard
                key={i}
                variant="medium"
                glowColor="primary"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", damping: 15, stiffness: 300 },
                }}
                className="p-8 bg-background/90 shadow-glass hover:shadow-glass-hover"
              >
                {/* Icon with glow */}
                <motion.div
                  className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-glow-sm"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                >
                  <prop.icon className="h-7 w-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
