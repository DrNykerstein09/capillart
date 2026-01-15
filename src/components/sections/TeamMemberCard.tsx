import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Briefcase, Award, ChevronDown } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string | null;
  shortBio: string;
  fullBio: string;
  credentials: string[];
  experience: string;
  specialty: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

// Enhanced initials placeholder component
function InitialsPlaceholder({ name }: { name: string }) {
  const getInitials = (fullName: string) => {
    const names = fullName.split(" ");
    return names.length >= 2
      ? `${names[0][0]}${names[1][0]}`
      : fullName.substring(0, 2).toUpperCase();
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-accent via-secondary to-primary relative overflow-hidden">
      {/* Animated mesh pattern */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-mesh-shift" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10" />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-32 h-32 bg-white/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.3, 0.7, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Initials */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.span
          className="text-7xl font-bold text-white/90 tracking-tight"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 200,
          }}
        >
          {getInitials(name)}
        </motion.span>
      </div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  const handleMobileToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Desktop: Flip Card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 120,
          delay: index * 0.15,
        }}
        className="hidden lg:block perspective-1000"
      >
        <motion.div
          className="relative h-[520px] cursor-pointer group"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 90, damping: 20 }}
          onClick={handleFlip}
          onKeyDown={handleKeyPress}
          tabIndex={0}
          role="button"
          aria-label={`Ver detalles de ${member.name}`}
          whileHover={{ y: -8 }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 backface-hidden overflow-hidden rounded-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Gradient border wrapper */}
            <div className="p-[1px] h-full rounded-2xl bg-gradient-to-br from-accent/30 via-secondary/50 to-accent/30 bg-gradient group-hover:animate-gradient-rotate">
              <GlassCard
                variant="medium"
                glowColor="primary"
                className="h-full overflow-hidden bg-background/95 shadow-glass group-hover:shadow-glass-hover"
              >
                {/* Image section */}
                <div className="relative h-72 overflow-hidden">
                  {member.image ? (
                    <>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ objectPosition: "center center" }}
                        loading="lazy"
                      />
                      {/* Subtle gradient overlay only at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
                    </>
                  ) : (
                    <InitialsPlaceholder name={member.name} />
                  )}
                </div>

                {/* Content section */}
                <div className="p-8 space-y-5">
                  <motion.h3
                    className="text-3xl font-semibold text-primary tracking-tight"
                    whileHover={{
                      backgroundImage:
                        "linear-gradient(135deg, hsl(215, 59%, 19%), hsl(213, 91%, 37%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {member.name}
                  </motion.h3>

                  <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                    <Badge
                      variant="secondary"
                      className="uppercase text-xs tracking-wider font-medium px-3 py-1 shadow-glow-sm"
                    >
                      {member.role}
                    </Badge>
                  </motion.div>

                  <p className="text-muted-foreground leading-relaxed">
                    {member.shortBio}
                  </p>

                  <Separator className="opacity-50" />

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-medium text-foreground">
                      {member.experience} de experiencia
                    </span>
                  </div>

                  <motion.p
                    className="text-sm text-center text-accent font-medium pt-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Click para ver más detalles →
                  </motion.p>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 backface-hidden overflow-hidden rounded-2xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="p-[1px] h-full rounded-2xl bg-gradient-to-br from-accent/40 via-secondary/60 to-accent/40 bg-gradient">
              <GlassCard
                variant="strong"
                glowColor="accent"
                className="h-full overflow-y-auto bg-background/95 shadow-glass-hover"
              >
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="text-center pb-4 border-b border-white/10">
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="secondary">{member.role}</Badge>
                  </div>

                  {/* Sections with animated icons */}
                  <div className="space-y-6">
                    {/* About section */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        >
                          <Award className="h-5 w-5 text-accent" />
                        </motion.div>
                        <h4 className="font-semibold text-lg text-primary">Sobre</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-13">
                        {member.fullBio}
                      </p>
                    </div>

                    {/* Credentials with stagger animation */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        >
                          <GraduationCap className="h-5 w-5 text-accent" />
                        </motion.div>
                        <h4 className="font-semibold text-lg text-primary">
                          Credenciales
                        </h4>
                      </div>
                      <ul className="space-y-3 pl-13">
                        {member.credentials.map((cred, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm text-muted-foreground flex items-start gap-3"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-accent to-secondary mt-2 flex-shrink-0" />
                            <span>{cred}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Specialty */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        >
                          <Briefcase className="h-5 w-5 text-accent" />
                        </motion.div>
                        <h4 className="font-semibold text-lg text-primary">
                          Especialidad
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-13">
                        {member.specialty}
                      </p>
                    </div>
                  </div>

                  <motion.p
                    className="text-sm text-center text-accent font-medium pt-4 border-t border-white/10"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ← Click para volver
                  </motion.p>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile: Expandable Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: index * 0.15,
        }}
        className="lg:hidden"
      >
        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-accent/30 via-secondary/50 to-accent/30">
          <GlassCard
            variant="medium"
            glowColor="primary"
            className="overflow-hidden bg-background/95 shadow-glass"
          >
            <div
              onClick={handleMobileToggle}
              className="cursor-pointer"
              role="button"
              aria-expanded={isExpanded}
              aria-label={`Ver detalles de ${member.name}`}
              tabIndex={0}
            >
              <div className="relative h-56 overflow-hidden">
                {member.image ? (
                  <>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center center" }}
                      loading="lazy"
                    />
                    {/* Subtle gradient overlay only at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/80 to-transparent" />
                  </>
                ) : (
                  <InitialsPlaceholder name={member.name} />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.shortBio}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring", damping: 15 }}
                    className="ml-4 p-2 rounded-lg bg-gradient-to-br from-accent/10 to-secondary/10"
                  >
                    <ChevronDown className="h-5 w-5 text-accent" />
                  </motion.div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-0 space-y-4 border-t border-white/10">
                    <div className="space-y-3 pt-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                            <Award className="h-4 w-4 text-accent" />
                          </div>
                          <h4 className="font-semibold text-primary text-sm">
                            Sobre
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {member.fullBio}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                            <GraduationCap className="h-4 w-4 text-accent" />
                          </div>
                          <h4 className="font-semibold text-primary text-sm">
                            Credenciales
                          </h4>
                        </div>
                        <ul className="space-y-1.5">
                          {member.credentials.map((credential, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br from-accent to-secondary mt-1.5 flex-shrink-0" />
                              <span>{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                            <Briefcase className="h-4 w-4 text-accent" />
                          </div>
                          <h4 className="font-semibold text-primary text-sm">
                            Especialidad
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {member.specialty}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                          <Briefcase className="h-4 w-4 text-accent" />
                        </div>
                        <span className="font-medium">
                          {member.experience} de experiencia
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </motion.div>
    </>
  );
}
