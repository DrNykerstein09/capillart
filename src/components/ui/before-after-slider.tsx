import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "ANTES",
  afterLabel = "DESPUÉS",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState([50]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-strong">
      <div className="relative aspect-square w-full">
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt={afterLabel}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Foreground with clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 w-1 bg-background"
          style={{ left: `${sliderPosition[0]}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background rounded-full shadow-strong flex items-center justify-center border-4 border-accent">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-accent"></div>
              <div className="w-0.5 h-4 bg-accent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 max-w-md">
        <Slider
          value={sliderPosition}
          onValueChange={setSliderPosition}
          max={100}
          step={1}
          className="cursor-ew-resize"
        />
      </div>
    </div>
  );
}
