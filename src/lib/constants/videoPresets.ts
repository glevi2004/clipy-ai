import { Headphones, Eye, LucideIcon } from "lucide-react";

type VideoPreset = {
  prompt: string;
  icon: LucideIcon;
};

export const VIDEO_TYPE_PRESETS: Record<string, VideoPreset> = {
  asmr: {
    prompt:
      "Create a high-quality, visually stunning video in the style of ASMR. The video should focus on a very close-up, macro shot of the subject, highlighting textures and small details. Use shallow depth of field to keep the subject in sharp focus while the background is softly blurred. The lighting should be soft and diffused, creating a calm and intimate atmosphere. The camera should move slowly and deliberately, or remain perfectly still, to emphasize the tactile and auditory experience. The overall mood should be relaxing, gentle, and quiet, with a natural, clean aesthetic.",
    icon: Headphones,
  },
  pov: {
    prompt:
      "First-person perspective, POV, handheld camera with subtle shake, eye-level camera. The subject's hands are visible in the foreground. Cinematic, photorealistic, 4K quality, high detail, film grain.",
    icon: Eye,
  },
};
