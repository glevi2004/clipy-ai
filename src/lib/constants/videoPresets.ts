import { Headphones, Eye, LucideIcon } from "lucide-react";

type VideoPreset = {
  prompt: string;
  icon: LucideIcon;
};

export const VIDEO_TYPE_PRESETS: Record<string, VideoPreset> = {
  asmr: {
    prompt:
      "ASMR style video with soft, calming auditory textures, gentle ambience, minimal camera motion, macro close-ups when relevant, soothing color tones, high fidelity sound focus.",
    icon: Headphones,
  },
  pov: {
    prompt:
      "First-person perspective, POV, handheld camera with subtle shake, eye-level camera. The subject's hands are visible in the foreground. Cinematic, photorealistic, 4K quality, high detail, film grain.",
    icon: Eye,
  },
};
