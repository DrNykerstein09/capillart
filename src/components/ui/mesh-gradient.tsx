import { cn } from "@/lib/utils";

interface MeshGradientProps {
  animated?: boolean;
  withGrid?: boolean;
  className?: string;
}

export function MeshGradient({
  animated = true,
  withGrid = false,
  className,
}: MeshGradientProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10",
        animated && "animate-mesh-shift",
        className
      )}
      style={{
        backgroundImage: withGrid
          ? "radial-gradient(at 0% 0%, hsl(213 91% 37% / 0.15) 0px, transparent 50%), radial-gradient(at 50% 0%, hsl(200 51% 48% / 0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, hsl(213 91% 47% / 0.1) 0px, transparent 50%), radial-gradient(at 50% 100%, hsl(215 59% 19% / 0.08) 0px, transparent 50%), linear-gradient(hsl(214 24% 90% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(214 24% 90% / 0.1) 1px, transparent 1px)"
          : "radial-gradient(at 0% 0%, hsl(213 91% 37% / 0.15) 0px, transparent 50%), radial-gradient(at 50% 0%, hsl(200 51% 48% / 0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, hsl(213 91% 47% / 0.1) 0px, transparent 50%), radial-gradient(at 50% 100%, hsl(215 59% 19% / 0.08) 0px, transparent 50%)",
        backgroundSize: withGrid ? "auto, auto, auto, auto, 32px 32px, 32px 32px" : "auto",
      }}
      aria-hidden="true"
    />
  );
}
