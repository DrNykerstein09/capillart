import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "subtle" | "medium" | "strong";
  glowColor?: "primary" | "secondary" | "accent" | "none";
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({
  variant = "medium",
  glowColor = "primary",
  className,
  children,
  ...props
}: GlassCardProps) {
  const variantClasses = {
    subtle: "backdrop-blur-sm bg-white/5 border-white/10",
    medium: "backdrop-blur-md bg-white/8 border-white/15",
    strong: "backdrop-blur-lg bg-white/12 border-white/20",
  };

  const glowClasses = {
    primary: "hover:shadow-glow-md hover:border-accent/30",
    secondary: "hover:shadow-glow-md hover:border-secondary/30",
    accent: "hover:shadow-glow-md hover:border-accent/40",
    none: "",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border backdrop-saturate-180 transition-all duration-500",
        variantClasses[variant],
        glowClasses[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
